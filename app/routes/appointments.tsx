import { tabLabel } from '~/helper/tabLabel';
import type { Route } from './+types/appointments'
import type { Administrator, Appointment, Customer, Doctor } from '~/data/static-data';
import Wrapper from '~/components/custom-components/Wrapper';
import { redirect, useNavigation } from 'react-router';
import Loader from '~/components/custom-components/Loader';
import DoctorAppointments from '~/components/custom-components/DoctorAppointments';
import AccordionAppointmentsForCustomers from '~/components/custom-components/AccordionAppointmentsForCustomers';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (if exists)

  const userData : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an Customer object (if it exists)
  
  if(!userData) return redirect('/login'); // if user is not logged in, redirect to login page

  const appointmentsDataStringified = sessionStorage.getItem("appointmentsData");  // get appointments data stored in sessionStorage (if exists)
  const appointmentsData : Appointment[] = appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse appointments data back into appointmentsData array (if it exists)

  return { userData, appointmentsData }

 }

export const clientAction = async ({request} : Route.ClientActionArgs) => { 
  const formData = await request.formData();
  const appointmentId = formData.get("appointment-id");
  
  const userDataStringified = sessionStorage.getItem("userData"); // get user data stored in sessionStorage (if exists)
  const userDataParsed : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified); // parse user data back into an object (if it exists)

  const appointmentsDataStringified = sessionStorage.getItem("appointmentsData");  // get appointments data stored in sessionStorage (if exists)
  const appointmentsDataParsed : Appointment[] = appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse appointments data back into appointmentsData array (if it exists)

  // if the user is a customer
  if (userDataParsed.type === 'customer') {
      const userDataAfterDeletion = {
        ...userDataParsed,
        appointments: userDataParsed.appointments?.filter(appointment => appointment['appointment-id'] !== appointmentId)
      } as Customer; // store the un-deleted appointments of the existing user to a constant
      sessionStorage.setItem("userData", JSON.stringify(userDataAfterDeletion)); // update the userData in sessionStorage
    
      // remove the selected appointment from the appointmentsData and show the remaining appointments
      const appointmentsDataAfterDeletion : Appointment[] = appointmentsDataParsed.filter(item => item['appointment-id'] !== appointmentId)
    
      sessionStorage.setItem("appointmentsData", JSON.stringify(appointmentsDataAfterDeletion)); // store the remaining appointmets back to the session storage
  }

  // if the user is a doctor or an administrator
  if (userDataParsed.type === 'doctor' || userDataParsed.type === 'administrator') {
      // Separate selected and unselected appointments
      const unselectedAppointments = appointmentsDataParsed.filter(item => item["appointment-id"] !== appointmentId?.toString());
      const selectedAppointment = appointmentsDataParsed.filter(item => item["appointment-id"] === appointmentId?.toString());
    
      // Handle DELETE request and remove selected appointment
      if(request.method === "DELETE"){
        sessionStorage.setItem("appointmentsData", JSON.stringify(unselectedAppointments)); // update the appointmentsData with remaining unselected appointments
      }
    
      // Handle PUT request and mark appointment as paid and complete
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

 }

export default function Appointments({loaderData}: Route.ComponentProps) {
  const { userData, appointmentsData } = loaderData

  // for the loading state, return a Loader
  const navigation = useNavigation();
  if(navigation.state === "loading") return <Loader/>

  const userDoctorData = userData.type === "doctor" ? userData : null; // Ensure this userData is only passed if the user is a doctor

  return (      
      // Wrapper for profile Information sections
      <Wrapper className="overflow-hidden pb-20 [&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:gap-x-4 md:[&>div]:gap-y-4 xl:pb-30 3xl:pb-40" as={"aside"}>

        {/* appointments UI for customers / patients */}
        {userData.type === "customer" && <AccordionAppointmentsForCustomers userData={userData} appointmentsData={appointmentsData}/>}

        {/* appointments UI for doctors */}
        {userData.type === "doctor" && <DoctorAppointments userDoctorData={userDoctorData} appointmentsData={appointmentsData} />}


        {/* appointments UI for administrators */}
        {userData.type === "administrator" && <div>Appointments related to Administrators</div>}

      </Wrapper>
  )
}