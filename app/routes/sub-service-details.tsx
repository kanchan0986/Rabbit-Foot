import type { Route } from './+types/sub-service-details';
import { tabLabel } from '~/helper/tabLabel';
import { servicesArray, type Doctor } from '~/data/static-data';
import ServiceDetailsAndSubDetails from '~/components/custom-components/ServiceDetailsAndSubDetails';

export function meta({loaderData, location}: Route.MetaArgs) {
    const { subServicesData } = loaderData ?? {}
  return [
    { title: `Rabbit Foot | ${subServicesData ? tabLabel({ data: subServicesData }) : tabLabel({data: {...location, type: 'location'}})}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({ params }: Route.ClientLoaderArgs) => {
  const subServiceId = params['sub-service-id'];
  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorDataParsed: Doctor[] = doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  const verifiedDoctors = (doctorDataParsed || []).filter(doctor => doctor.isVerified); // list of verified doctors

  // Find the sub-service details that match the current sub-service ID
  const subServicesData = servicesArray.flatMap(services => services.serviceNiche).find(subService => subService?.id === subServiceId)

  // Filter doctors whose specialties match at least one specialty required by the selected sub-service
  const relatedDoctorsData = verifiedDoctors.filter(doctor => doctor.speciality?.some(speciality => subServicesData?.speciality.includes(speciality) ))
  return { subServicesData, relatedDoctorsData };
};


export default function SubServiceDetails({loaderData}: Route.ComponentProps) {
  const { subServicesData, relatedDoctorsData } = loaderData
  return <ServiceDetailsAndSubDetails servicesData={subServicesData} relatedDoctorsData={relatedDoctorsData} />
}