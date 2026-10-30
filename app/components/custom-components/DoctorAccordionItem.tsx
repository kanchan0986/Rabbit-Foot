import { FaUserDoctor } from "react-icons/fa6";
import { Link, useMatch } from "react-router";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import type { Doctor } from "~/data/static-data";
import { SwitchVerificationStatus } from "./SwitchVerificationStatus";
import { useState } from "react";

type DoctorAccordionItemProps = {
  doctor: Doctor;
};

// AccordionItem to be used for Doctor's when exploring as an administrator
export default function DoctorAccordionItem({doctor}: DoctorAccordionItemProps) {

  const [verificationStatus, setVerificationStatus] = useState<boolean>(doctor.isVerified ? true : false); // Doctor verification status

  const firstName = doctor.name.split(" ")[0]; // extract the first name
  const specialities = doctor.speciality;
  const degrees = doctor.degree;

  // Check current route to adjust links accordingly
  const isDashboard = useMatch("/dashboard");
  const isDoctors = useMatch("/dashboard/doctors");


  return (
    <AccordionItem
      key={doctor.id}
      value={doctor.id}
      className="border-b last:border-b-0 border-rf-primary"
    >
      {/* Accordion header showing customer image or fallback icon along with first name */}
      <AccordionTrigger className="px-4 flex items-center gap-2 bg-rf-primary/50 rounded-none [&[data-state=closed]>svg]:stroke-black [&[data-state=open]>svg]:stroke-rf-primary text-md lg:text-lg lg:[&>svg]:size-5! hover:cursor-pointer hover:data-[state=open]:cursor-auto">
        {doctor.imageUrl ? (
          <div
            style={{ backgroundImage: `url(${doctor.imageUrl})` }}
            className="bg-cover bg-center bg-no-repeat size-6 rounded-full border border-rf-primary shadow-rf-direct-300"
          />
        ) : (
          <FaUserDoctor className="bg-rf-white-100 size-6 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary" />
        )}
        <span className="capitalize">{firstName}</span>
      </AccordionTrigger>

      {/* Accordion content with detailed doctor info */}
      <AccordionContent className="bg-rf-primary-300 h-fit">
        <div className="px-4 pt-2 text-md flex flex-col items-center justify-center gap-2 2xs:flex-row flex-wrap lg:text-lg">
          {/* Doctor image or fallback icon */}
          <Link to={isDashboard ? `doctors/${doctor.id}` : isDoctors ? `./${doctor.id}` : ''} className="peer">
            {doctor.imageUrl ? (
              <div
                style={{ backgroundImage: `url(${doctor.imageUrl})` }}
                className="bg-cover bg-center bg-no-repeat size-15 rounded-full border border-rf-primary shadow-rf-direct-300 2xs:mx-auto"
              />
            ) : (
              <FaUserDoctor className="bg-rf-white-100 size-15 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary 2xs:mx-auto" />
            )}
          </Link>

          {/* Doctor Name */}
          <Link
            to={isDashboard ? `doctors/${doctor.id}` : isDoctors ? `./${doctor.id}` : ''}
            className="2xs:w-full 2xs:text-center capitalize no-underline! hover:underline! peer-hover:underline!"
          >
            <h2>{doctor.name}</h2>
          </Link>

          {/* Doctor Email */}
          {doctor.email &&
              <div className="justify-self-start flex gap-x-2 text-sm ">
                  <span className="font-medium text-rf-primary">Email: </span>
                  <span className="wrap-anywhere">{doctor.email}</span>
              </div>
          }

          {/* Doctor Phone */}
          {doctor.phone &&
              <div className="justify-self-start flex gap-x-2 text-sm ">
                  <span className="font-medium text-rf-primary">Phone: </span>
                  <span>{doctor.phone}</span>
              </div>
          }

          {/* Doctor Address */}
          {doctor.address &&
              <div className="justify-self-start flex gap-x-2 text-sm ">
                  <span className="font-medium text-rf-primary">Address: </span>
                  <span className="wrap-anywhere">{doctor.address}</span>
              </div>
          }

          {/* Doctor Experience */}
            <div className="justify-self-start flex gap-x-2 text-sm ">
                <span className="font-medium text-rf-primary">Experience: </span>
                <span>{doctor.experience ? `${doctor.experience} Yrs` : "N/A"}</span>
            </div>

          {/* Doctor Speciality */}
            <div className="justify-self-start flex gap-x-2 text-sm ">
                <span className="font-medium text-rf-primary">Speciality: </span>
                <span className="capitalize wrap-anywhere">
                  {/* Render the list of specialties separated by commas, or display "N/A" when no specialties exist. */}
                  {specialities
                    ? specialities.map((speciality, idx) => (
                        <span key={idx}>
                          {speciality}
                          {specialities.length - 1 > idx && ", "}
                        </span>
                      ))
                    : "N/A"}
                </span>
            </div>

          {/* Doctor Degree */}
            <div className="justify-self-start flex gap-x-2 text-sm ">
                <span className="font-medium text-rf-primary">Degree: </span>
                <span className="capitalize wrap-anywhere">
                  {/* Render the list of degrees separated by commas, or display "N/A" when no degrees exist. */}
                  {degrees
                    ? degrees.map((degree, idx) => (
                        <span key={idx}>
                          {degree}
                          {degrees.length - 1 > idx && ", "}
                        </span>
                      ))
                    : "N/A"}
                </span>
            </div>

          {/* Doctor Fee */}
            <div className="justify-self-start flex gap-x-2 text-sm ">
                <span className="font-medium text-rf-primary">Fee: </span>
                <span>{doctor.fee ? `$${doctor.fee}` : "N/A"}</span>
            </div>

          {/* Doctor Availability */}
            <div className="justify-self-start flex gap-x-2 text-sm ">
                <span className="font-medium text-rf-primary">Availability: </span>
                <span>{doctor.availability ? "Available" : "N/A"}</span>
            </div>

          {/* Action button wrapper */}
          <div className=" flex items-center justify-center gap-2 mt-2 2xs:w-full">
            <span className="font-medium text-sm text-rf-primary">{verificationStatus ? "Verified" : "Unverified"}: </span>
            {/* Form to toggle verification status */}
            <SwitchVerificationStatus
              name="isVerified"
              doctorId={doctor.id}
              verificationStatus={verificationStatus}
              setVerificationStatus={setVerificationStatus}
            />
          </div>

        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
