import { BsCalendar2CheckFill } from "react-icons/bs"
import { FaUserDoctor } from "react-icons/fa6"
import { PiSealCheckFill } from "react-icons/pi"
import { Form, Link } from "react-router"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import type { Appointment, Customer } from "~/data/static-data"

type AccordionAppointmentsProps = {
    userData: Customer;
    appointmentsData: Appointment[];
}

export default function AccordionAppointments({userData, appointmentsData}: AccordionAppointmentsProps) {

    // Filter appointments belonging to the logged-in customer
    const appointments = (appointmentsData || []).filter(item => item["customer-id"] === userData.id)

    // case to handle if there is no appointments at all, show message and booking link
    if(!appointments || appointments.length <= 0) return (
        <section className="flex flex-col items-center justify-center gap-y-4 h-[50vh]">
            <h1 className="text-center text-xbase lg:text-xl">You do not have any Appointments yet.</h1>
            <Link to="/#book-appointment"
                className="xs:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer sm:py-1.5 2xmd:py-2"
            >Please book one</Link>
        </section>
    )

    // sorted appointments as per the slot or date (whichever is the latest)
    const sortedAppointments = appointments.sort((a, b) => {

      const slotA = a["appointment-slot"] && `${a["appointment-date"]} ${a["appointment-slot"]}`;
      const slotB = b["appointment-slot"] && `${b["appointment-date"]} ${b["appointment-slot"]}`;

      const dateA = new Date(slotA || a["appointment-date"]).getTime()
      const dateB = new Date(slotB || b["appointment-date"]).getTime()
      return dateB - dateA // latest first
    })

    return (
        <Accordion
        className="w-full rounded-lg border border-rf-primary overflow-hidden bg-white"
        defaultValue={sortedAppointments[0]["appointment-id"]}
        type="single"
        defaultChecked
        >
        {sortedAppointments.map((appointment) => (
            <AccordionItem
            key={appointment["appointment-id"]}
            value={appointment["appointment-id"]}
            className="border-b last:border-b-0 border-rf-primary"
            >

            {/* Accordion header showing appointment date */}
            <AccordionTrigger className={`px-4 ${appointment["appointment-status"] === 'complete' ? 'bg-gray-400/70 [&>svg]:stroke-black!' : 'bg-rf-primary/50'} rounded-none [&[data-state=closed]>svg]:stroke-black [&[data-state=open]>svg]:stroke-rf-primary text-md lg:text-lg lg:[&>svg]:size-5! hover:cursor-pointer hover:data-[state=open]:cursor-auto`}
            >
                {appointment["appointment-date"]}
            </AccordionTrigger>

            {/* Accordion content with appointment details */}
            <AccordionContent className={`${appointment["appointment-status"] === 'complete' ? 'bg-gray-400/30' : 'bg-rf-primary-300'} px-4 py-4 h-fit text-md lg:text-lg flex flex-col items-center gap-2 sm:flex-row sm:gap-4`}>

                {/* Doctor profile image or fallback icon */}
                {appointment["doctor-imageUrl"] ?
                    <img src={appointment["doctor-imageUrl"]} alt={appointment["doctor-name"]} className="object-cover object-center rounded-md sm:max-h-70 min-[920px]:max-h-80" />
                :
                    <div className="flex items-center justify-center w-full sm:w-[38%] md:w-[30%] xmd:w-[20%]">
                        <div className="flex items-center justify-center size-20 [&>svg]:size-10 [&>svg]:fill-rf-primary border-4 border-rf-primary rounded-full sm:size-30 sm:[&>svg]:size-15 sm:border-5 min-[920px]:size-40 min-[920px]:[&>svg]:size-20 min-[920px]:border-6">
                            {/* Doctor icon */}
                            <FaUserDoctor className=""/>
                        </div>
                    </div>
                }

                {/* Appointment form with (delete/cancel actions) */}
                <Form method="delete" action="/dashboard/appointments" className="w-full pr-6 flex flex-col items-center gap-2 sm:self-start sm:w-[62%] md:w-2/3 xmd:w-[80%]">

                    {/* hidden appointment-id input */}
                    <input type="hidden" name="appointment-id" value={appointment["appointment-id"]} />

                    {/* Doctor details section */}
                    <section className="w-full flex flex-col items-center gap-2 sm:items-start">
                        {/* Doctor name */}
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Doctor Name: </span>
                            <span className="capitalize">{appointment["doctor-name"]}</span>
                        </h2>
                        {/* Doctor Speciality */}
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Doctor Speciality: </span>
                            <span className="capitalize">{appointment["doctor-speciality"]}</span>
                        </h2>
                        {/* Doctor Contact number */}
                        {appointment["doctor-phone"] &&
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Doctor Contact: </span>
                            <span className="capitalize">{appointment["doctor-phone"]}</span>
                        </h2>}
                    </section>

                    {/* Appointment details section */}
                    <section className="w-full flex flex-col items-center gap-2 sm:items-start">

                        {/* Appointment Date */}
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Appointment Date: </span>
                            <span className="capitalize">{appointment["appointment-date"]}</span>
                        </h2>

                        {/* Appointment Slot */}
                        {appointment["appointment-slot"] &&
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Appointment Time: </span>
                            <span className="">{appointment["appointment-slot"]}</span>
                        </h2>}

                        {/* Payment Status */}
                        {appointment["payment-status"] === "paid" &&
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Payment Status: </span>
                            <span className="capitalize flex items-center gap-x-1">{appointment["payment-status"]}<PiSealCheckFill className="fill-green-600" /></span>
                        </h2>}

                        {/* Appointment Status */}
                        {appointment["appointment-status"] === "complete" &&
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Appointment Status: </span>
                            <span className="capitalize flex items-center gap-x-1">{appointment["appointment-status"]}<BsCalendar2CheckFill className="fill-rf-primary size-4" /></span>
                        </h2>}

                    </section>

                    {/* Action buttons for upcoming appointments */}
                    {appointment["appointment-status"] === "pending" && 
                        <section className="w-full flex flex-col items-center gap-2 mt-6 min-[500px]:flex-row min-[500px]:justify-start">

                            {/* Update appointment link */}
                            <Link to={appointment["appointment-id"]} className="no-underline! w-40 text-xbase min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 hover:text-rf-white-100! active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg min-[500px]:w-30"
                            >
                                Update
                            </Link>

                            {/* Pay online link */}
                            {appointment["payment-status"] === "unpaid" && 
                                <Link to={`${appointment["appointment-id"]}/payments`} className="no-underline! w-40 text-xbase min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 hover:text-rf-white-100! active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg xmd:w-30"
                                >
                                    Pay Online
                                </Link>
                            }

                            {/* Cancel appointment link */}
                            <button className="text-xbase w-40 min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg min-[500px]:w-30"
                            >
                                Cancel
                            </button>
                            
                        </section>
                    }
                </Form>

            </AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
    )
    
}
