import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/dashboard";
import type { Administrator, Appointment, Customer, Doctor } from "~/data/static-data";
import { redirect } from "react-router";
import Wrapper from "~/components/custom-components/Wrapper";
import { IoCalendarOutline } from "react-icons/io5";
import { FaUserDoctor, FaUserInjured } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { AccordionAppointmentsForDoctorsAndAdmins } from "~/components/custom-components/AccordionAppointmentsForDoctorsAndAdmins";
import { TabularAppointmentsForDoctorsAndAdmins } from "~/components/custom-components/TabularAppointmentsForDoctorsAndAdmins";
import { useState } from "react";
import TabularUsersForAdmins from "~/components/custom-components/TabularUsersForAdmins";
import AccordionUsersForAdmins from "~/components/custom-components/AccordionUsersForAdmins";

export function meta({ location }: Route.MetaArgs) {
  return [
    {
      title: `Rabbit Foot | ${tabLabel({ data: { ...location, type: "location" } })}`,
    },
    {
      name: "description",
      content: "A dental services company totally committed for your kids!",
    },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => {
  const userDataStringified = sessionStorage.getItem("userData"); // get user data stored in sessionStorage (if exists)

  const userData: Doctor | Administrator =
    userDataStringified && JSON.parse(userDataStringified); // parse user data back into an object (if it exists)

  if (!userData) return redirect("/login"); // Redirect to login if no user data is found

  if (userData.type !== "doctor" && userData.type !== "administrator")
    return redirect("./profile"); // Redirect to profile if user is neither doctor nor administrator

  const appointmentsDataStringified =
    sessionStorage.getItem("appointmentsData"); // get appointments data stored in sessionStorage (if exists)
  const appointmentsData: Appointment[] =
    appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse appointments data back into appointmentsData array (if it exists)

  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorData: Doctor[] =
    doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  const customerDataStringified = sessionStorage.getItem("customerData"); // get customer data stored in sessionStorage (if exists)
  const customerData: Customer[] =
    customerDataStringified && JSON.parse(customerDataStringified); // parse customer data back into customerData array (if it exists)

  return { appointmentsData, userData, doctorData, customerData }; // Return user, appointments, doctor & customer data to be used in the component
};

export const clientAction = async ({ request }: Route.ClientActionArgs) => {
  const formData = await request.formData(); // Extract form data from the request
  const action = formData.get("action")?.toString(); // get the action field from the formData (differentiator field)
  const appointmentId = formData.get("appointment-id"); // get the appointmentId from the formData
  const doctorId = formData.get("doctorId")?.toString(); // get the doctorId field from the formData
  const customerId = formData.get("customerId")?.toString(); // get the customerId field from the formData

  const appointmentsDataStringified =
    sessionStorage.getItem("appointmentsData"); // get appointments data stored in sessionStorage (if exists)
  const appointmentsDataParsed: Appointment[] =
    appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse appointments data back into appointmentsData array (if it exists)

  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorData: Doctor[] =
    doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  const customerDataStringified = sessionStorage.getItem("customerData"); // get customer data stored in sessionStorage (if exists)
  const customerData: Customer[] =
    customerDataStringified && JSON.parse(customerDataStringified); // parse customer data back into customerData array (if it exists)

  // Separate selected and unselected appointments
  const unselectedAppointments = (appointmentsDataParsed || []).filter(
    (item) => item["appointment-id"] !== appointmentId?.toString(),
  );
  const selectedAppointment = (appointmentsDataParsed || []).filter(
    (item) => item["appointment-id"] === appointmentId?.toString(),
  );

  // Handle DELETE request and remove selected appointment
  if (request.method === "DELETE") {
    sessionStorage.setItem(
      "appointmentsData",
      JSON.stringify(unselectedAppointments),
    ); // update the appointmentsData with remaining unselected appointments
  }

  // Handle PUT request
  if (request.method === "PUT") {
    switch (action) { // update different forms on the same route depending on the action input field

      // mark appointment as paid and complete (as a doctor OR as an admin)
      case "update-appointment":

        const updatedAppointment = selectedAppointment.map(
          (item) =>
            ({
              ...item,
              "payment-mode": "cash",
              "payment-status": "paid",
              "appointment-status": "complete",
            }) as Appointment,
        );

        sessionStorage.setItem(
          "appointmentsData",
          JSON.stringify([...unselectedAppointments, ...updatedAppointment]),
        ); // Save updated appointments back to sessionStorage along with remaining appointments
        
        break;

      // toggle doctor's verification status (as an admin)
      case "update-verification-status":

        const updatedDoctors = doctorData.map(
          (item) =>
            ({
              ...item,
              isVerified: item.id === doctorId ? !item.isVerified : item.isVerified
            }),
        ); // Update the selected doctor's verification status while leaving all other doctor records unchanged.

        sessionStorage.setItem(
          "doctorData",
          JSON.stringify(updatedDoctors),
        ); // Save updated doctors back to sessionStorage
      
        break;

      // toggle doctor's availability (as an admin)
      case "update-availability":

        const updatedDoctorsAvailability = doctorData.map(
          (item) =>
            ({
              ...item,
              availability: item.id === doctorId ? !item.availability : item.availability
            }),
        ); // Update the selected doctor's availability while leaving all other doctor records unchanged.

        sessionStorage.setItem(
          "doctorData",
          JSON.stringify(updatedDoctorsAvailability),
        ); // Save updated doctors back to sessionStorage
      
        break;

      // toggle customer's subscription status (as an admin)
      case "update-subscription-status": 

        const updatedCustomers = customerData.map(
          (item) =>
            ({
              ...item,
              subscriber: item.id === customerId ? !item.subscriber : item.subscriber
            }),
        ); // Update the selected customer's subscription status while leaving all other customer records unchanged.

        sessionStorage.setItem(
          "customerData",
          JSON.stringify(updatedCustomers),
        ); // Save updated customers back to sessionStorage
      
        break;

    }
  }
};

// Dashboard component to display doctor/administrator overview
export default function Dashboard({ loaderData }: Route.ComponentProps) {
  const { appointmentsData, userData, doctorData, customerData } = loaderData;
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const userDoctorData = userData.type === "doctor" ? userData : null; // Ensure this userData is only passed if the user is a doctor
  const userAdminData = userData.type === "administrator" ? userData : null; // Ensure this userData is only passed if the user is a admin

  const [selectedTab, setSelectedTab] = useState<"doctors" | "appointments" | "patients">("doctors");

  // Show all upcoming appointments
  const totalUpcomingAppointments = (appointmentsData || []).filter(
    (item) => item["appointment-status"] === "pending",
  );

  // Filter upcoming appointments for the logged-in doctor
  const upcomingAppointments = totalUpcomingAppointments.filter(
    (item) => item["doctor-id"] === userData.id,
  );

  // Calculate total earnings for the logged-in doctor (sum of fees from only paid appointments)
  const totalEarnings = (appointmentsData || [])
    .filter((item) => item["doctor-id"] === userData.id)
    .reduce((accumulator, currentValue) => {
      if (currentValue["payment-status"] === "paid") {
        accumulator = accumulator + Number(currentValue["doctor-fee"]);
      }
      return accumulator;
    }, 0);

  // Collect unique customer IDs from upcoming appointments into an array object to show the total patient count depending upon the user data
  const customerIdArr = (
    userDoctorData ? upcomingAppointments : totalUpcomingAppointments
  ).reduce<string[]>((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue["customer-id"])) {
      accumulator.push(currentValue["customer-id"]);
    }
    return accumulator;
  }, []);

  const doctorCount = doctorData && doctorData.length; // total doctor count

  // Render the below accordion view based on the selected tab (for administrator's only):
  // - Doctors tab should show doctor accordion list (first item)
  // - Appointments tab should show appointments accordion list (second item)
  // - Patients tab should show customer accordion list (third item)
  const accordionAdminOverview =
    selectedTab === "doctors" ? (
      <AccordionUsersForAdmins userData={doctorData} selectedTab={selectedTab} />
    ) : selectedTab === "appointments" ? (
      <AccordionAppointmentsForDoctorsAndAdmins
        appointments={totalUpcomingAppointments}
      />
    ) : ( // for patients
      <AccordionUsersForAdmins userData={customerData} selectedTab={selectedTab} />
    );


  // Render the below table view based on the selected tab (for administrator's only):
  // - Doctors tab should show doctor table (first item)
  // - Appointments tab should show appointments table (second item)
  // - Patients tab should show customer table (third item)
  const tabularAdminOverview =
    selectedTab === "doctors" ? (
      <TabularUsersForAdmins userData={doctorData} selectedTab={selectedTab} />
    ) : selectedTab === "appointments" ? (
      <TabularAppointmentsForDoctorsAndAdmins
      appointments={totalUpcomingAppointments}
      />
    ) : ( // for patients
      <TabularUsersForAdmins userData={customerData} selectedTab={selectedTab} />
    );

  return (
    // Wrapper for Overview section
    <Wrapper
      className="overflow-hidden pb-20 [&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:gap-x-4 md:[&>div]:gap-y-4 xl:pb-30 3xl:pb-40"
      as={"aside"}
    >
      {/* Overview section with earnings, appointments, and patients */}
      <section className="grid grid-cols-1 gap-4 place-items-center xs:grid-cols-2 min-[600px]:grid-cols-3! 2xmd:w-190 2xmd:justify-self-center">
        <h1 className="w-full text-center xs:col-span-2 min-[600px]:col-span-3!">
          Overview
        </h1>

        {/* Total earnings card (only for doctor's) */}
        {userData.type === "doctor" && (
          <div
            tabIndex={0}
            className="flex justify-center gap-2 bg-rf-primary-200/80 rounded-sm p-2 w-full text-rf-white-100 border-2 border-rf-primary 2xs:w-4xs xs:w-full xs:h-16 xs:col-span-2 min-[600px]:col-auto!"
          >
            <div className="flex items-center">
              <GiTakeMyMoney className="size-12 drop-shadow-sm drop-shadow-black/30" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl leading-6 flex items-center">
                <span className="text-2xl">$</span>
                {totalEarnings}
              </span>
              <span className="text-sm text-rf-primary text-center">
                Earnings
              </span>
            </div>
          </div>
        )}

        {/* Total doctors card  (only for administrator's) */}
        {userData.type === "administrator" && (
          <div
            tabIndex={0}
            onClick={() => setSelectedTab("doctors")}
            className={`flex justify-center gap-2 bg-rf-primary-200/80 rounded-sm p-2 w-full text-rf-white-100 border-2 border-rf-primary ${userAdminData && selectedTab === "doctors" && "bg-rf-primary! [&>div>span]:text-rf-white-100 shadow-rf-direct-100"} ${userAdminData && "hover:cursor-pointer hover:bg-rf-primary hover:[&>div>span]:text-rf-white-100 hover:shadow-rf-direct-100 focus:bg-rf-primary focus:[&>div>span]:text-rf-white-100 focus:shadow-rf-direct-100"} 2xs:w-4xs xs:w-full xs:h-16 xs:col-span-2 min-[600px]:col-auto!`}
          >
            <div className="flex items-center">
              <FaUserDoctor className="size-10 drop-shadow-sm drop-shadow-black/30" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl leading-6 flex items-center">
                {doctorCount ? doctorCount : "0"}
              </span>
              <span className="text-sm text-rf-primary text-center">
                Doctor{doctorCount > 0 && "s"}
              </span>
            </div>
          </div>
        )}

        {/* Total appointments card (for doctor's & administrator's both) */}
        <div
          tabIndex={0}
          onClick={() => setSelectedTab("appointments")}
          className={`flex justify-center gap-2 bg-rf-primary-200/80 rounded-sm p-2 w-full text-rf-white-100 border-2 border-rf-primary ${userAdminData && selectedTab === "appointments" && "bg-rf-primary! [&>div>span]:text-rf-white-100 shadow-rf-direct-100"} ${userAdminData && "hover:cursor-pointer hover:bg-rf-primary hover:[&>div>span]:text-rf-white-100 hover:[&>div>svg]:fill-rf-white-100 hover:shadow-rf-direct-100 focus:bg-rf-primary focus:[&>div>span]:text-rf-white-100 focus:[&>div>svg]:fill-rf-white-100 focus:shadow-rf-direct-100"} 2xs:w-4xs xs:w-full xs:h-16`}
        >
          <div className="flex items-center">
            <IoCalendarOutline className="size-12 drop-shadow-sm drop-shadow-black/30 fill-rf-primary" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl leading-6">
              {/* For doctors, show the count of their upcoming appointments and for administrators, show the total upcoming appointments */}
              {userDoctorData
                ? upcomingAppointments.length
                : totalUpcomingAppointments.length}
            </span>
            <span className="text-sm text-rf-primary text-center">
              {/* adding 's' at the end of the appointments depending on the count of the appointments */}
              {(userDoctorData
                ? upcomingAppointments
                : totalUpcomingAppointments
              ).length > 0
                ? "Appointments"
                : "Appointment"}
            </span>
          </div>
        </div>

        {/* Total patients card (for doctor's & administrator's both) */}
        <div
          tabIndex={0}
          onClick={() => setSelectedTab("patients")}
          className={`flex justify-center gap-2 bg-rf-primary-200/80 rounded-sm p-2 w-full text-rf-white-100 border-2 border-rf-primary ${userAdminData && selectedTab === "patients" && "bg-rf-primary! [&>div>span]:text-rf-white-100 shadow-rf-direct-100"} ${userAdminData && "hover:cursor-pointer hover:bg-rf-primary hover:[&>div>span]:text-rf-white-100 hover:shadow-rf-direct-100 focus:bg-rf-primary focus:[&>div>span]:text-rf-white-100 focus:shadow-rf-direct-100"} 2xs:w-4xs xs:w-full xs:h-16`}
        >
          <div className="flex items-center">
            <FaUserInjured className="size-10 drop-shadow-sm drop-shadow-black/30" />
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* For doctor's, show the count of their appointed patients and for administrator's, show the total count of patients registered in the system */}
            <span className="text-3xl leading-6">{(userDoctorData ? customerIdArr : customerData).length}</span>
            <span className="text-sm text-rf-primary text-center">
              {/* adding 's' at the end of the patients depending on the count of the patients OR customer data */}
              {(userDoctorData ? customerIdArr : customerData).length > 0 ? "Patients" : "Patient"}
            </span>
          </div>
        </div>
      </section>

      {/* Upcoming appointments section (only for doctors) */}
      {userDoctorData && (
        <section className="grid grid-cols-1 gap-y-3 place-items-center">
          <h2 className="w-full text-center xs:col-span-2 min-[600px]:col-span-3!">
            Pending Appointments
          </h2>

          {/* Show appointments UI for doctors in an accordion view on small screens */}
          {!isLargeScreen && (
            <AccordionAppointmentsForDoctorsAndAdmins
              appointments={upcomingAppointments}
              userData={userDoctorData}
            />
          )}

          {/* Show appointments UI for doctors in a tabular view on large screens */}
          {isLargeScreen && (
            <TabularAppointmentsForDoctorsAndAdmins
              appointments={upcomingAppointments}
              userData={userDoctorData}
            />
          )}
        </section>
      )}

      {/* Upcoming appointments section (only for administrators) */}
      {userAdminData && (
        <section className="grid grid-cols-1 gap-y-3 place-items-center">

          {/* Show appointments UI for administrators in an accordion view on small screens */}
          {!isLargeScreen && accordionAdminOverview}

          {/* Show appointments UI for administrators in a tabular view on large screens */}
          {isLargeScreen && tabularAdminOverview}
          
        </section>
      )}

    </Wrapper>
  );
}
