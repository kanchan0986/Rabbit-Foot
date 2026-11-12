import { Link, useMatch } from "react-router";
import { SwitchVerificationStatus } from "./SwitchVerificationStatus";
import type { Doctor } from "~/data/static-data";
import { FaUserDoctor } from "react-icons/fa6";
import { useState } from "react";
import { SwitchAvailability } from "./SwitchAvailability";
import { TooltipSides } from "./TooltipSides";
import { useMediaQuery } from "~/hooks/useMediaQuery";

type Props = {
  doctor: Doctor;
};

// Row format to be used for Doctor's when exploring as an administrator
export default function DoctorRow({ doctor }: Props) {
  const [verificationStatus, setVerificationStatus] = useState<boolean>(doctor.isVerified ? true : false); // Doctor verification status
  const [availability, setAvailability] = useState<boolean>(Boolean(doctor.availability)); // Doctor availability state

  const specialities = doctor.speciality;
  const degrees = doctor.degree;


  // Check current route to adjust links accordingly
  const isDashboard = useMatch("/dashboard");
  const isDoctors = useMatch("/dashboard/doctors");

  // Detect if screen size is large (≥1024px) to adjust switch size
  const islargeScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="grid grid-cols-[11fr_0.5fr] items-baseline text-sm text-center not-last:border-b border-rf-primary">
      {/* Doctor details row */}
      <div className="w-full grid grid-cols-[2.7fr_2.8fr_1.4fr_3fr_1.3fr_2.5fr_1fr_0.8fr_1.2fr_1.2fr] items-baseline h-full">
        <div className="w-full grid grid-cols-[0.7fr_2fr] items-baseline h-full capitalize">
          {/* Doctor image or fallback icon */}
          <Link to={isDashboard ? `doctors/${doctor.id}` : isDoctors ? `./${doctor.id}` : ''} className="py-2 w-full h-full peer">
            {doctor.imageUrl ? (
              <div
                style={{ backgroundImage: `url(${doctor.imageUrl})` }}
                className="bg-cover bg-center bg-no-repeat size-6 rounded-full border border-rf-primary shadow-rf-direct-300 mx-auto"
              />
            ) : (
              <FaUserDoctor className="bg-rf-white-100 size-6 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary mx-auto" />
            )}
          </Link>
          {/* Doctor name */}
          <Link
            to={isDashboard ? `doctors/${doctor.id}` : isDoctors ? `./${doctor.id}` : ''}
            className="py-2 border-r border-rf-primary w-full h-full text-start underline-offset-2 hover:underline decoration-[1.5px] peer-hover:underline"
          >
            <span>{doctor.name}</span>
          </Link>
        </div>

        {/* Doctor email */}
        <span className="py-2 border-r border-rf-primary w-full h-full wrap-anywhere">
          {doctor.email ?? "N/A"}
        </span>

        {/* Doctor phone */}
        <span className="py-2 border-r wrap-anywhere border-rf-primary w-full h-full">
          {doctor.phone ?? "N/A"}
        </span>

        {/* Doctor address */}
        <span className="py-2 border-r border-rf-primary w-full h-full wrap-anywhere">
          {doctor.address ?? "N/A"}
        </span>

        {/* Doctor experience */}
        <span className="py-2 border-r border-rf-primary w-full h-full">
          {doctor.experience ? `${doctor.experience} Yrs` : "N/A"}
        </span>

        {/* Doctor speciality */}
        <span className="py-2 border-r border-rf-primary w-full h-full wrap-anywhere flex flex-col gap-y-1 capitalize">
          {/* Render the list of specialties separated by commas, or display "N/A" when no specialties exist. */}
          {specialities
            ? specialities.map((speciality, idx) => (
                <span key={idx}>
                  {speciality}
                  {specialities.length - 1 > idx && ","}
                </span>
              ))
            : "N/A"}
        </span>

        {/* Doctor degree */}
        <span className="py-2 border-r border-rf-primary w-full h-full wrap-anywhere flex flex-col gap-y-1">
          {/* Render the list of degrees separated by commas, or display "N/A" when no degrees exist. */}
          {degrees
            ? degrees.map((degree, idx) => (
                <span key={idx}>
                  {degree}
                  {degrees.length - 1 > idx && ","}
                </span>
              ))
            : "N/A"}
        </span>

        {/* Doctor fee */}
        <span className="py-2 border-r border-rf-primary w-full h-full">
          {doctor.fee ? `$${doctor.fee}` : "N/A"}
        </span>

        {/* Doctor availability */}
        <span className="py-2 border-r border-rf-primary w-full h-full">
          {availability ? "Available" : "N/A"}
        </span>

        {/* Doctor verification status */}
        <span className="py-2 border-r border-rf-primary w-full h-full">
          {verificationStatus ? "Yes" : "No"}
        </span>
      </div>

      <div className="flex flex-col items-center gap-y-3">
      {/* Action Form to toggle verification status */}
        <SwitchVerificationStatus
          name="isVerified"
          doctorId={doctor.id}
          verificationStatus={verificationStatus}
          setVerificationStatus={setVerificationStatus}
        />
        
        {/* Action Form to toggle Availability status */}
      <TooltipSides 
        side={isDoctors ? "right" : (!islargeScreen ? "right" : "left")} // Adjust tooltip position based on page type and screen size for better visibility.
        content="Switch Availability"
        >
          <div>
            <SwitchAvailability
              name='availability'
              doctorId={doctor.id}
              availability={availability}
              setAvailability={setAvailability}
              label={false}
            />
          </div>
      </TooltipSides>
      </div>
    </div>
  );
}
