import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/payments";
import { Form, Link, redirect } from "react-router";
import type { Administrator, Appointment, Customer, Doctor } from "~/data/static-data";
import Wrapper from "~/components/custom-components/Wrapper";
import { FaUserDoctor } from "react-icons/fa6";

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({params}: Route.ClientLoaderArgs) => { 

  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (if exists)

  const userData : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an object (if it exists)

  if(!userData) return redirect('/login'); // If no user data found, redirect to login page

  const appointmentsDataStringified = sessionStorage.getItem("appointmentsData"); // get appointments data stored in sessionStorage (if exists)
  const appointmentsData : Appointment[] = appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse appointments data back into appointmentData array (if it exists)

  const { "appointment-id": appointmentId } = params; // fetch the appointmentId from the params

  const appointment = appointmentsData.find(item => item["appointment-id"] === appointmentId) // Find the customer's appointment from the appointmentsData, that matches the appointment ID

  if(!appointment) return redirect('../appointments') // if there is no appointment, redirect to appointments tab on the dashboard

  return { appointment } // Return appointment for use in the component

 }

export const clientAction = ({params}: Route.ClientActionArgs) => { 

  const { "appointment-id": appointmentId } = params; // fetch the appointmentId from the params
  const appointmentsDataStringified = sessionStorage.getItem("appointmentsData"); // get appointments data stored in sessionStorage (if exists)
  const appointmentsDataParsed : Appointment[] = appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse appointments data back into appointmentData array (if it exists)

  const appointmentsDataUpdated = appointmentsDataParsed.map(appointment => {
    if(appointment["appointment-id"] === appointmentId){
        // if the appointment matches to the appointmentId coming from params, update the appointment's payment details
        return ({
            ...appointment,
            "payment-mode": 'online',
            "payment-status": 'paid'
        })
    }
    return appointment; // else return the same appointment
  })

  // store the updated appointment to the session storage
  sessionStorage.setItem("appointmentsData", JSON.stringify(appointmentsDataUpdated));

  // on success redirect to the appointments page
  return redirect("../appointments")

 }

export default function Payments({loaderData}: Route.ComponentProps) {
    const { appointment } = loaderData;
  return (
        // Wrapper for payment Information sections
        <Wrapper className="overflow-hidden pb-20 [&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-4 md:[&>div]:gap-x-4 md:[&>div]:gap-y-4 xl:pb-30 3xl:pb-40" as={"aside"}>
            <div className="bg-rf-primary-300 px-4 py-4 h-fit text-md lg:text-lg flex flex-col items-center gap-2 sm:flex-row sm:gap-4">

                {/* Doctor's profile image or fallback icon */}
                {appointment["doctor-imageUrl"] ?
                    <img src={appointment["doctor-imageUrl"]} alt={appointment["doctor-name"]} className="object-cover object-center rounded-md sm:max-h-70 min-[920px]:max-h-100" />
                :
                    <div className="flex items-center justify-center w-full sm:w-[38%] md:w-[30%] xmd:w-[20%]">
                        <div className="flex items-center justify-center size-20 [&>svg]:size-10 [&>svg]:fill-rf-primary border-4 border-rf-primary rounded-full sm:size-30 sm:[&>svg]:size-15 sm:border-5 min-[920px]:size-40 min-[920px]:[&>svg]:size-20 min-[920px]:border-6">
                            {/* Doctor icon */}
                            <FaUserDoctor/>
                        </div>
                    </div>
                }

                <Form method="PUT" className="w-full pr-6 flex flex-col items-center gap-2 sm:self-start sm:w-[62%] md:w-2/3 xmd:w-[80%]">

                    {/* Doctor details */}
                    <section className="w-full flex flex-col items-center gap-2 sm:items-start">
                        {/* Doctor name */}
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Doctor Name: </span>
                            <span className="capitalize">{appointment["doctor-name"]}</span>
                        </h2>
                        {/* Doctor Fee */}
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Doctor Fee: </span>
                            <span className="capitalize">${appointment["doctor-fee"]}</span>
                        </h2>
                    </section>

                    {/* Action buttons */}
                    <section className="w-full flex flex-col items-center gap-2 mt-6 min-[500px]:flex-row min-[500px]:justify-center min-[920px]:justify-start">

                        {/* Update link */}
                        <Link to=".." relative="path" className="no-underline! w-40 text-xbase min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 hover:text-rf-white-100! active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg min-[500px]:w-30"
                        >
                            Update
                        </Link>

                        {/* pay button */}
                        <button className="text-xbase w-40 min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg min-[500px]:w-30"
                        >
                            Pay
                        </button>

                        {/* back link */}
                        <Link to="../appointments" className="text-xbase w-40 min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg min-[500px]:w-30"
                        >
                            Back
                        </Link>
                        
                    </section>
                </Form>

            </div>

        </Wrapper>
  )
}