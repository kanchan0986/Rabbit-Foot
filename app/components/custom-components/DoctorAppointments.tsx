import type { Appointment, Doctor } from "~/data/static-data";
import { useState } from "react";
import Wrapper from "./Wrapper";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { AccordionAppointmentsForDoctorsAndAdmins } from "./AccordionAppointmentsForDoctorsAndAdmins";
import { TabularAppointmentsForDoctorsAndAdmins } from "./TabularAppointmentsForDoctorsAndAdmins";

type DoctorAppointmentsProps = {
    userDoctorData: Doctor | null;
    appointmentsData: Appointment[];
}

export default function DoctorAppointments({userDoctorData, appointmentsData}: DoctorAppointmentsProps) {
    
    // Filter all appointments belonging to the logged-in doctor
    const userAllAppointmentsData = (appointmentsData || []).filter(item => item["doctor-id"] === userDoctorData?.id);

    // Separate appointments by status
    const userPendingAppointmentsData = userAllAppointmentsData.filter(item => item["appointment-status"] === "pending");
    const userCompletedAppointmentsData = userAllAppointmentsData.filter(item => item["appointment-status"] === "complete");

    const [activeLink, setActiveLink] = useState<"all" | "pending" | "complete">("all") // state to track which tab (all, pending, complete) is active

    const isLargeScreen = useMediaQuery("(min-width: 1024px)"); // Check if screen size is large (for responsive layout)

    // Choose appointments to display based on active tab
    const appointments = activeLink === "pending"
      ? userPendingAppointmentsData // show pending appointments
      : activeLink === "complete"
      ? userCompletedAppointmentsData // show completed appointments
      : userAllAppointmentsData; // show all appointments

  return (
    <Wrapper
      as={"section"}
      className="w-full [&>div]:w-full [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-y-4"
    >
      {/* Tab buttons for switching between All, Pending, and Completed */}
      <div className="w-full flex flex-col items-center justify-center gap-2 2xs:w-4xs xs:w-full xs:flex-row 2xmd:w-2xl">

        {/* All Appointments tab */}
        <div
          className={`border border-rf-primary-100 rounded-md w-full text-center content-center text-rf-primary-100 hover:text-rf-white-100 hover:bg-rf-primary-100 hover:cursor-pointer 2xs:h-8 xs:h-16 2xmd:h-8 ${activeLink === "all" && "text-rf-white-100 bg-rf-primary-100"}`}
          onClick={() => setActiveLink("all")}
        >
          All Appointments
        </div>

        {/* Pending Appointments tab */}
        <div
          className={`border border-rf-primary-100 rounded-md w-full text-center content-center text-rf-primary-100 hover:text-rf-white-100 hover:bg-rf-primary-100 hover:cursor-pointer 2xs:h-8 xs:h-16 2xmd:h-8 ${activeLink === "pending" && "text-rf-white-100 bg-rf-primary-100"}`}
          onClick={() => setActiveLink("pending")}
        >
          Pending Appointments
        </div>

        {/* Completed Appointments tab */}
        <div
          className={`border border-rf-primary-100 rounded-md w-full text-center content-center text-rf-primary-100 hover:text-rf-white-100 hover:bg-rf-primary-100 hover:cursor-pointer 2xs:h-8 xs:h-16 2xmd:h-8 ${activeLink === "complete" && "text-rf-white-100 bg-rf-primary-100"}`}
          onClick={() => setActiveLink("complete")}
        >
          Completed Appointments
        </div>
      </div>

      {/* Show appointments UI for doctors & administrators in an accordion view on small screens */}
      {!isLargeScreen && appointments && (
        <AccordionAppointmentsForDoctorsAndAdmins
          appointments={appointments}
          userData={userDoctorData}
          activeLink={activeLink}
        />
      )}

      {/* Show appointments UI for doctors & administrators in a tabular view on large screens */}
      {isLargeScreen && appointments && (
        <TabularAppointmentsForDoctorsAndAdmins
          appointments={appointments}
          userData={userDoctorData}
          activeLink={activeLink}
        />
      )}
    </Wrapper>
  )
}