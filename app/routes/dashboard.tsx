import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/dashboard";
import type { Administrator, Appointment, Doctor } from "~/data/static-data";
import { redirect } from "react-router";
import Wrapper from "~/components/custom-components/Wrapper";
import { IoCalendarOutline } from "react-icons/io5";
import { FaUserInjured } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { AccordionUpcomingAppointments } from "~/components/custom-components/AccordionUpcomingAppointments";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { TabularUpcomingAppointments } from "~/components/custom-components/TabularUpcomingAppointments";

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (if exists)

  const userData : Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an object (if it exists)

  if(!userData) return redirect('/login'); // Redirect to login if no user data is found

  if(userData.type !== "doctor" && userData.type !== "administrator") return redirect('./profile'); // Redirect to profile if user is neither doctor nor administrator

  const appointmentsDataStringified = sessionStorage.getItem("appointmentsData");  // get appointments data stored in sessionStorage (if exists)
  const appointmentsData : Appointment[] = appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse appointments data back into appointmentsData array (if it exists)

  return { appointmentsData, userData } // Return both user and appointments data to be used in the component

 }

export const clientAction = async ({request} : Route.ClientActionArgs) => { 

  const formData = await request.formData(); // Extract form data from the request
  const appointmentId = formData.get("appointment-id"); // get the appointmentId from the formData

  const appointmentsDataStringified = sessionStorage.getItem("appointmentsData");  // get appointments data stored in sessionStorage (if exists)
  const appointmentsDataParsed : Appointment[] = appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse appointments data back into appointmentsData array (if it exists)

  // Filter out the selected appointment and keep unselected ones
  const unselectedAppointments = appointmentsDataParsed.filter(item => item["appointment-id"] !== appointmentId?.toString());
  const selectedAppointment = appointmentsDataParsed.filter(item => item["appointment-id"] === appointmentId?.toString());

  // Handle DELETE request and remove selected appointment
  if(request.method === "DELETE"){
    sessionStorage.setItem("appointmentsData", JSON.stringify(unselectedAppointments)); // update the appointmentsData with remaining unselected appointments
  }

  // Handle PUT request and update selected appointment with the payment details
  if(request.method === "PUT"){
    const updatedAppointment = selectedAppointment.map(item => ({
      ...item,
      "payment-mode": "cash",
      "payment-status": "paid",
      "appointment-status": "complete"
    }) as Appointment)

    sessionStorage.setItem("appointmentsData", JSON.stringify([...unselectedAppointments, ...updatedAppointment])); // Save updated appointments back to sessionStorage along with remaining appointments
  }

 }


// Dashboard component to display doctor/administrator overview
export default function Dashboard({ loaderData }: Route.ComponentProps) {
  const { appointmentsData, userData } = loaderData;
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  // Filter upcoming appointments for the logged-in doctor
  const upcomingAppointments = (appointmentsData || []).filter(item => (item["appointment-status"] === 'pending') 
  && (item["doctor-id"] === userData.id)
  );

  // Calculate total earnings for the logged-in doctor (only paid appointments)
  const totalEarnings = (appointmentsData || []).filter(item => item["doctor-id"] === userData.id).reduce((accumulator, currentValue) => {
    if(currentValue["payment-status"] === "paid"){
      accumulator = accumulator + Number(currentValue["doctor-fee"]);
    }
    return accumulator;
  }, 0)

  // Collect unique customer IDs from upcoming appointments into an array object to show the total patient count
  const customerIdArr = upcomingAppointments.reduce<string[]>((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue["customer-id"])){
      accumulator.push(currentValue["customer-id"]);
    }
    return accumulator;
  }, [])

  const userDoctorData = userData.type === "doctor" ? userData : null; // Ensure this userData is only passed if the user is a doctor

  return (
      // Wrapper for Overview section
      <Wrapper className="overflow-hidden pb-20 [&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:gap-x-4 md:[&>div]:gap-y-4 xl:pb-30 3xl:pb-40" as={"aside"}>

        {/* Overview section with earnings, appointments, and patients */}
        <section className="grid grid-cols-1 gap-4 place-items-center xs:grid-cols-2 min-[600px]:grid-cols-3! 2xmd:w-190 2xmd:justify-self-center">
          <h1 className="w-full text-center xs:col-span-2 min-[600px]:col-span-3!">Overview</h1>

          {/* Total earnings cards */}
          <div className="flex justify-center gap-2 bg-rf-primary-200/80 rounded-sm p-2 w-full text-rf-white-100 border-2 border-rf-primary 2xs:w-4xs xs:w-full xs:h-16 xs:col-span-2 min-[600px]:col-auto!">
            <div className="flex items-center"><GiTakeMyMoney className="size-12 drop-shadow-sm drop-shadow-black/30"/></div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl leading-6 flex items-center"><span className="text-2xl">$</span>{totalEarnings}</span>
              <span className="text-sm text-rf-primary text-center">Earnings</span>
            </div>
          </div>

          {/* Total appointments cards */}
          <div className="flex justify-center gap-2 bg-rf-primary-200/80 rounded-sm p-2 w-full text-rf-white-100 border-2 border-rf-primary 2xs:w-4xs xs:w-full xs:h-16">
            <div className="flex items-center"><IoCalendarOutline className="size-12 drop-shadow-sm drop-shadow-black/30 fill-rf-primary"/></div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl leading-6">{upcomingAppointments.length}</span>
              <span className="text-sm text-rf-primary text-center">{upcomingAppointments.length > 0 ? 'Appointments' : 'Appointment'}</span>
            </div>
          </div>

          {/* Total patients cards */}
          <div className="flex justify-center gap-2 bg-rf-primary-200/80 rounded-sm p-2 w-full text-rf-white-100 border-2 border-rf-primary 2xs:w-4xs xs:w-full xs:h-16">
            <div className="flex items-center"><FaUserInjured className="size-10 drop-shadow-sm drop-shadow-black/30"/></div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl leading-6">{customerIdArr.length}</span>
              <span className="text-sm text-rf-primary text-center">{customerIdArr.length > 0 ? 'Patients' : 'Patient'}</span>
            </div>
          </div>          
        </section>

        {/* Upcoming appointments section */}
        <section className="grid grid-cols-1 gap-y-8 place-items-center">
          <h2 className="w-full text-center xs:col-span-2 min-[600px]:col-span-3!">Upcoming Appointments</h2>
          
          {/* Show accordion view for small screens */}
          {!isLargeScreen && <AccordionUpcomingAppointments appointments={upcomingAppointments} />}

          {/* Show tabular view for large screens */}
          {isLargeScreen && <TabularUpcomingAppointments appointments={upcomingAppointments} userData={userDoctorData} />}
        </section>

      </Wrapper>
  )
}