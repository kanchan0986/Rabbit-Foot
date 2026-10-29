import { FaUserInjured } from "react-icons/fa6"
import { PiSealCheckFill } from "react-icons/pi"
import { Form, Link } from "react-router"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import type { Appointment, Doctor } from "~/data/static-data"
import { calculateAge } from "~/helper/calculateAge"

type AccordionAppointmentsForDoctorsAndAdminsProps = {
    appointments: Appointment[];
    userData?: Doctor | null;
    activeLink?: "all" | "pending" | "complete";
}

// AccordionAppointmentsForDoctorsAndAdmins component to display upcoming appointments in an accordion view
export function AccordionAppointmentsForDoctorsAndAdmins({appointments, userData, activeLink}: AccordionAppointmentsForDoctorsAndAdminsProps) {

    // if no upcoming appointments, show fallback message depending upon the active link
    if(!appointments || appointments.length === 0) {
        if(activeLink === 'complete'){
            return <div className="text-center">Sorry! You do not have any completed appointments yet.</div>
        }else if(activeLink === 'all'){
            return <div className="text-center">Sorry! You do not have any appointments yet.</div>
        }else{
            if(userData?.type === "doctor")  return (<div className="text-center">Sorry! You do not have any pending appointments yet.</div>)
            return (<div className="text-center">Sorry! There is no pending appointments yet.</div>)
        }
    }

  return (
    // Accordion wrapper for upcoming appointments
    <Accordion
      className="w-full rounded-lg border border-rf-primary overflow-hidden 2xmd:w-10/12 lg:h-9/12 xl:w-8/12 bg-white"
      defaultValue={appointments[0]["appointment-id"]}
      type="single"
    >
      {appointments.map((item) => {

        // Extract first name and age of the customer
        const firstName = item["customer-name"].split(" ")[0] // extract the first name
        const customerAge = item["customer-dob"] && calculateAge(item["customer-dob"]) // calculate age
        const isLoggedInDoctorsId = item["doctor-id"] === userData?.id // Check if logged-in doctor id matches appointment's doctor id

        return (
        <AccordionItem
          key={item["appointment-id"]}
          value={item["appointment-id"]}
          className="border-b last:border-b-0 border-rf-primary"
        >
          {/* Accordion header showing customer image or fallback icon along with first name */}
          <AccordionTrigger className={`px-4 ${item["appointment-status"] === 'complete' ? 'bg-gray-400/70! [&>svg]:stroke-black!' : 'bg-rf-primary/50!'} flex items-center gap-2 bg-rf-primary/50 rounded-none [&[data-state=closed]>svg]:stroke-black [&[data-state=open]>svg]:stroke-rf-primary text-md lg:text-lg lg:[&>svg]:size-5! hover:cursor-pointer hover:data-[state=open]:cursor-auto`}>
          {item["customer-imageUrl"] ? 
            <div style={{backgroundImage: `url(${item["customer-imageUrl"]})`}} className="bg-cover bg-center bg-no-repeat size-6 rounded-full border border-rf-primary shadow-rf-direct-300" />
            : 
            <FaUserInjured className="bg-rf-white-100 size-6 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary"/>
          }
          <span>{firstName}</span>
          </AccordionTrigger>

          {/* Accordion content with detailed appointment info */}
          <AccordionContent className={`${item["appointment-status"] === 'complete' ? 'bg-gray-400/30!' : 'bg-rf-primary-300!'} bg-rf-primary-300 h-fit`}>

            <div className="px-4 pt-2 text-md flex flex-col items-center justify-center gap-2 2xs:flex-row flex-wrap lg:text-lg">

                {/* Customer image or fallback icon */}
                <Link to={`./appointments/${item["appointment-id"]}`} className="peer">
                    {item["customer-imageUrl"] ?
                        <div style={{backgroundImage: `url(${item["customer-imageUrl"]})`}} className="bg-cover bg-center bg-no-repeat size-15 rounded-full border border-rf-primary shadow-rf-direct-300 2xs:mx-auto" />
                        :
                        <FaUserInjured className="bg-rf-white-100 size-15 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary 2xs:mx-auto"/>
                    }
                </Link>

                {/* Customer Name */}
                <Link to={`./appointments/${item["appointment-id"]}`} className="2xs:w-full 2xs:text-center no-underline! hover:underline! peer-hover:underline!">
                    <h2>{item["customer-name"]}</h2>
                </Link>

                {/* Customer Gender */}
                {item["customer-gender"] &&
                    <div className="justify-self-start flex gap-x-2 text-sm ">
                        <span className="font-medium text-rf-primary">Gender: </span>
                        <span className="capitalize">{item["customer-gender"]}</span>
                    </div>
                }

                {/* Customer Age */}
                {customerAge &&
                    <div className="justify-self-start flex gap-x-2 text-sm ">
                        <span className="font-medium text-rf-primary">Age: </span>
                        <span>{customerAge}</span>
                    </div>
                }

                {/* Customer Phone */}
                {item["customer-phone"] &&
                    <div className="justify-self-start flex gap-x-2 text-sm ">
                        <span className="font-medium text-rf-primary">Phone: </span>
                        <span>{item["customer-phone"]}</span>
                    </div>
                }

                {/* Appointment date */}
                <div className="justify-self-start flex gap-x-2 text-sm ">
                    <span className="font-medium text-rf-primary">Date: </span>
                    <span>{item["appointment-date"]}</span>
                </div>

                {/* Appointment slot */}
                {item["appointment-slot"] &&
                    <div className="justify-self-start flex gap-x-2 text-sm ">
                        <span className="font-medium text-rf-primary">Slot: </span>
                        <span>{item["appointment-slot"]}</span>
                    </div>
                }

                {/* Doctor Name (shows 'myself' if logged-in doctor matches) */}
                {item["appointment-slot"] &&
                    <div className="justify-self-start flex gap-x-2 text-sm capitalize">
                        <span className="font-medium text-rf-primary">Doctor Name: </span>
                        <span>{isLoggedInDoctorsId ? 'myself' : `${item["doctor-name"]}`}</span>
                    </div>
                }

                {/* Doctor speciality */}
                <div className="justify-self-start flex gap-x-2 text-sm ">
                    <span className="font-medium text-rf-primary">Speciality: </span>
                    <span className="capitalize">{item["doctor-speciality"]}</span>
                </div>

                {/* Doctor fee */}
                <div className="justify-self-start flex gap-x-2 text-sm ">
                    <span className="font-medium text-rf-primary">Fee: </span>
                    <span className="capitalize">${item["doctor-fee"]}</span>
                </div>

                {/* Appointment status */}
                <div className="justify-self-start flex gap-x-2 text-sm ">
                    <span className="font-medium text-rf-primary">Appointment Status: </span>
                    <span className="capitalize">{item["appointment-status"]}</span>
                </div>

                {/* Payment status */}
                <div className="justify-self-start flex gap-x-2 text-sm ">
                    <span className="font-medium text-rf-primary">Payment Status: </span>
                    <span className="capitalize flex items-center gap-x-1">{item["payment-status"]} {item["payment-status"] === "paid" && <PiSealCheckFill className="fill-green-600" />}</span>
                </div>

                {/* Payment mode */}
                {item["payment-status"] === "paid" && 
                    <div className="justify-self-start flex gap-x-2 text-sm ">
                        <span className="font-medium text-rf-primary">Payment Mode: </span>
                        <span className="capitalize flex items-center gap-x-1">{item["payment-mode"]}</span>
                    </div>
                }

                {/* Action buttons (Complete / Cancel / Delete) */}
                <div className=" flex flex-col items-center justify-center gap-2 mt-2 2xs:w-full xs:flex-row">

                    {/* Mark appointment as completed (only if pending) */}
                    {item["appointment-status"] === "pending" &&
                        <Form method="PUT" className="flex gap-x-2">
                            <input type="hidden" name="action" defaultValue="update-appointment" /> {/* Hidden form differentiator field for common method */}
                            <input type="hidden" name="appointment-id" defaultValue={item["appointment-id"]} />
                            <button className="bg-rf-primary/80 w-40 text-sm hover:bg-rf-primary hover:cursor-pointer rounded-full px-4 py-1 font-medium text-rf-white-100">Mark Completed</button>
                        </Form>
                    }

                    {/* Cancel appointment (only if unpaid) */}
                    {item["payment-status"] !== "paid" &&
                        <Form method="DELETE" className="flex gap-x-2">
                            <input type="hidden" name="appointment-id" defaultValue={item["appointment-id"]} />
                            <button className="bg-rf-primary/80 w-30 text-sm hover:bg-rf-primary hover:cursor-pointer rounded-full px-4 py-1 font-medium text-rf-white-100">Cancel</button>
                        </Form>
                    }

                    {/* Delete appointment (only if paid and completed) */}
                    {(item["payment-status"] === "paid" && item["appointment-status"] === "complete") &&
                        <Form method="DELETE" className="flex gap-x-2">
                            <input type="hidden" name="appointment-id" defaultValue={item["appointment-id"]} />
                            <button className="bg-rf-primary/80 w-30 text-sm hover:bg-rf-primary hover:cursor-pointer rounded-full px-4 py-1 font-medium text-rf-white-100">Remove</button>
                        </Form>
                    }
                </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      )})}
    </Accordion>
  )
}