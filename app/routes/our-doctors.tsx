import Wrapper from '~/components/custom-components/Wrapper';
import type { Route } from './+types/our-doctors';
import { doctorArray, specialityArray, type Speciality } from '~/data/static-data';
import { SpecialityDropdownMenuRadioGroup } from '~/components/custom-components/SpecialityDropdownMenuRadioGroup';
import { useEffect, useState } from 'react';
import DoctorCard from '~/components/custom-components/cards/DoctorCard';
import { Link, useSearchParams } from 'react-router';
import SpecialityButtonGroup from '~/components/custom-components/SpecialityButtonGroup';
import SlideInLeft from '~/components/custom-components/animations/SlideInLeft';
import SlideInUp from '~/components/custom-components/animations/SlideInUp';
import Sky from '~/components/custom-components/vectors/Sky';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | Our Doctors" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = async ({}: Route.ClientLoaderArgs) => {
  // fetch data from api
  const doctorData = doctorArray;
  const specialityData = specialityArray
  return { doctorData, specialityData }
 }

// renders "our-doctors" page and keep the url in sync with the "selectedSpeciality" state to avoid issues like "refresh failure" and "loss of history stack"
export default function OurDoctors({ loaderData }: Route.ComponentProps) {
  const { doctorData, specialityData } = loaderData;
  const [searchParams, setSearchParams] = useSearchParams(); // for current URL query parameter "speciality"

  // searches for "speciality" params. if found use the value assigned to it. Otherwise, set to "all"
  const initialSpeciality = (searchParams.get("speciality") as Speciality) || "all";

  // tracks selectedSpeciality state updates to tell which speciality is currently selected.
  // Start it off with whatever we got from the URL (or "all" if nothing was there).
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality>(initialSpeciality);

  // keeps the "selectedSpeciality" state in sync with the current URL whenever the "URL query" updates or defaults to "all"
  useEffect(() => {
    setSelectedSpeciality(initialSpeciality);
  }, [initialSpeciality]);

  const handleSpecialityChange = (newSpeciality: Speciality) => {

    // Updates the selected speciality state with chosen speciality from "SpecialityDropdownMenuRadioGroup" & "SpecialityButtonGroup" components
    setSelectedSpeciality(newSpeciality);

    if (newSpeciality === "all") {
      // if chosen speciality is "all", remove the speciality query parameter from the URL
      searchParams.delete("speciality");
      // set query parameter to it's default without replacing the history
      setSearchParams(searchParams, { replace: false });
    } else {
      // otherwise update the URL with the chosen speciality and donot replace the history
      setSearchParams({ speciality: newSpeciality }, { replace: false });
    }

  };

  // if there is not doctor data or speciality data return null
  if (!doctorData || !specialityData) return null;

  const filteredDoctorData = doctorData.filter(
    // If "all" is selected, return every doctor. Otherwise, only include doctors whose speciality array contains the selected speciality.
    doctor => selectedSpeciality === "all" || doctor.speciality.includes(selectedSpeciality)
  );

  return (
    <main>
      <Wrapper
        as={"section"}
        className="py-0 pb-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 md:[&>div]:flex-row md:py-16 md:[&>div]:gap-x-4 xl:py-20 xl:[&>div]:gap-y-20 relative"
      >
        <Sky className="fill-rf-primary-200/20" />
        <div className="absolute inset-0 md:hidden">
           {/* dropdown menu on mobile at the top */}
          <SpecialityDropdownMenuRadioGroup
            initialSpeciality={initialSpeciality}
            specialityChangeHandler={handleSpecialityChange}
            data={specialityData}
            className='shadow-rf-direct-100'
            reference='speciality-menu'
          />
        </div>
        <div className="relative flex w-full">
          {/* button group visible on tablet and large screens at the left */}
          <SlideInLeft className="hidden md:flex flex-col w-75" customScreenSize="(min-width: 768px)">
            <SpecialityButtonGroup
              data={specialityData}
              initialSpeciality={initialSpeciality}
              specialityChangeHandler={handleSpecialityChange}
            />
          </SlideInLeft>
          {filteredDoctorData.length === 0 ? (
            // fallback for no related data from the query
            <div className="flex items-start justify-center w-full h-screen">
              <span className="capitalize mt-20 xs:mt-5">Sorry! No records found.</span>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-4 mt-17 xs:grid-cols-2 xs:mt-0 xs:py-4 md:mt-0 md:py-0 md:w-full md:h-fit md:ms-auto 2xmd:grid-cols-3 min-[1200px]:grid-cols-4! 3xl:grid-cols-5!">
              {filteredDoctorData.map(doctor => (
                // render the list of filtered doctors at the bottom on mobile and right on large screens
                <SlideInUp key={doctor.id} inView={false}>
                  <Link to={`./${doctor.id}`}>
                    <DoctorCard doctorData={doctor} />
                  </Link>
                </SlideInUp>
              ))}
            </ul>
          )}
        </div>
      </Wrapper>
    </main>
  );
}