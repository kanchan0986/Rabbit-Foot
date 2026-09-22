import { tabLabel } from '~/helper/tabLabel';
import type { Route } from './+types/appointments'
import type { Administrator, Customer, Doctor } from '~/data/static-data';
import AccordionAppointments from '~/components/custom-components/AccordionAppointments';
import Wrapper from '~/components/custom-components/Wrapper';
import { redirect, useNavigation } from 'react-router';
import Loader from '~/components/custom-components/Loader';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (if exists)

  const userData : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an Customer object (if it exists)

  if(!userData) return redirect('/login');

  return { userData }

 }

export const clientAction = async ({request} : Route.ClientActionArgs) => { 
  const formData = await request.formData();
  const appointmentId = formData.get("appointment-id");
  
  const userDataStringified = sessionStorage.getItem("userData"); // get user data stored in sessionStorage (if exists)
  const userDataParsed : Customer = userDataStringified && JSON.parse(userDataStringified); // parse user data back into an Customer object (if it exists)
  const userDataAfterDeletion = {
    ...userDataParsed,
    appointments: userDataParsed.appointments?.filter(appointment => appointment['appointment-id'] !== appointmentId)
  } as Customer; // store the un-deleted appointments of the existing user to a constant
  sessionStorage.setItem("userData", JSON.stringify(userDataAfterDeletion)); // update the userData in sessionStorage

 }

export default function Appointments({loaderData}: Route.ComponentProps) {
  const { userData } = loaderData

  // for the loading state, return a Loader
  const navigation = useNavigation();
  if(navigation.state === "loading") return <Loader/>

  return (      
      // Wrapper for profile Information sections
      <Wrapper className="overflow-hidden pb-20 [&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:gap-x-4 md:[&>div]:gap-y-4 xl:pb-30 3xl:pb-40" as={"aside"}>

        {/* appointments UI for customers */}
        {userData.type === "customer" && <AccordionAppointments userData={userData}/>}

        {/* appointments UI for doctors */}
        {userData.type === "doctor" && <div>Appointments related to Doctors</div>}


        {/* appointments UI for administrators */}
        {userData.type === "administrator" && <div>Appointments related to Administrators</div>}

      </Wrapper>
  )
}