import type { Appointment, Doctor } from "~/data/static-data"
import { calculateAge } from "~/helper/calculateAge"
import Wrapper from "./Wrapper"
import { FaUserInjured } from "react-icons/fa6";
import { Form, Link, useMatch } from "react-router";
import { MdDeleteForever } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { PiCalendarXDuotone } from "react-icons/pi";

type TabularAppointmentsForDoctorsAndAdminsProps = {
    appointments: Appointment[];
    userData?: Doctor | null;
    activeLink?: "all" | "pending" | "complete";
}

// TabularAppointmentsForDoctorsAndAdmins component to display upcoming appointments in a tabular format
export function TabularAppointmentsForDoctorsAndAdmins({appointments, userData, activeLink}: TabularAppointmentsForDoctorsAndAdminsProps) {

    // Check current route to adjust links accordingly
    const isDashboard = useMatch("/dashboard");
    const isAppointments = useMatch("/dashboard/appointments");

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
    <Wrapper className="w-full pt-0 [&>div]:w-full">

        {/* Table header section */}
        <div className="mt-2 grid grid-cols-[2.5fr_2fr_1.5fr_1fr_0.5fr] items-center text-sm leading-3 text-center bg-rf-primary/50 border-x border-t border-rf-primary rounded-t-md [&>span]:not-last:border-r [&>span]:border-rf-primary">

            {/* Patient column headers */}
            <span className="flex flex-col items-center">
                <span className="py-2">Patient</span> 
                <div className="w-full grid grid-cols-[2.7fr_0.8fr_1.2fr_2fr] border-t border-rf-primary">
                    <span className="py-2 w-full">Name</span>
                    <span className="py-2 border-l border-rf-primary w-full">Age</span>
                    <span className="py-2 border-l border-rf-primary w-full">Gender</span>
                    <span className="py-2 border-l border-rf-primary w-full">Phone</span>
                </div>
            </span>

            {/* Appointment column headers */}
            <span className="flex flex-col items-center">
                <span className="py-2">Appointment</span> 
                <div className="w-full flex justify-evenly border-t border-rf-primary">
                    <span className="py-2 w-full">Date</span>
                    <span className="py-2 border-l border-rf-primary w-full">Slot</span>
                    <span className="py-2 border-l border-rf-primary w-full">Status</span>
                </div>
            </span>

            {/* Doctor column headers */}
            <span className="flex flex-col items-center">
                <span className="py-2">Doctor</span> 
                <div className="w-full grid grid-cols-[1.5fr_2fr_1.2fr] border-t border-rf-primary">
                    <span className="py-2 w-full">Name</span>
                    <span className="py-2 border-l border-rf-primary w-full">Speciality</span>
                    <span className="py-2 border-l border-rf-primary w-full">Fee</span>
                </div>
            </span>

            {/* Payment column headers */}
            <span className="flex flex-col items-center">
                <span className="py-2">Payment</span> 
                <div className="w-full flex justify-evenly border-t border-rf-primary">
                    <span className="py-2 w-full">Status</span>
                    <span className="py-2 border-l border-rf-primary w-full">Mode</span>
                </div>
            </span>
            <span className="py-2">Action</span>
        </div>
      
        {/* Table body section */}
        <div className="bg-rf-primary-300 h-fit rounded-b-md border border-rf-primary overflow-hidden">
        {appointments.map((item) => {

            const customerAge = item["customer-dob"] && calculateAge(item["customer-dob"])  // Calculate customer's age if DOB exists
            const isLoggedInDoctorsId = item["doctor-id"] === userData?.id // Check if logged-in doctor id matches appointment doctor id

            return (

                <div key={item["appointment-id"]} className={`${item["appointment-status"] === 'complete' && 'bg-gray-300'} grid grid-cols-[2.5fr_2fr_1.5fr_1fr_0.5fr] items-baseline text-sm text-center capitalize not-last:border-b border-rf-primary`}>

                    {/* Patient details row */}
                    <div className="w-full grid grid-cols-[0.7fr_2fr_0.8fr_1.2fr_2fr] items-baseline h-full">
                        {/* Patient image or fallback icon */}
                        <Link to={isDashboard ? `appointments/${item["appointment-id"]}` : isAppointments ? `./${item["appointment-id"]}` : ''} className="py-2 w-full h-full peer">
                            {item["customer-imageUrl"] ?
                                <div style={{backgroundImage: `url(${item["customer-imageUrl"]})`}} className="bg-cover bg-center bg-no-repeat size-6 rounded-full border border-rf-primary shadow-rf-direct-300 mx-auto" />
                                :
                                <FaUserInjured className="bg-rf-white-100 size-6 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary mx-auto"/>
                            }
                        </Link>

                        {/* Patient name */}
                        <Link to={isDashboard ? `appointments/${item["appointment-id"]}` : isAppointments ? `./${item["appointment-id"]}` : ''} className="py-2 border-r border-rf-primary w-full h-full text-start underline-offset-2 hover:underline decoration-[1.5px] peer-hover:underline">
                            <span>{item["customer-name"]}</span>
                        </Link>

                        {/* Patient age */}
                        <span className="py-2 border-r border-rf-primary w-full h-full">{customerAge ?? 'N/A'}</span>

                        {/* Patient gender */}
                        <span className="py-2 border-r border-rf-primary w-full h-full">{item["customer-gender"] ?? 'N/A'}</span>

                        {/* Patient phone */}
                        <span className="py-2 border-r wrap-anywhere border-rf-primary w-full h-full">{item["customer-phone"] ?? 'N/A'}</span>
                    </div>

                    {/* Appointment details row */}
                    <div className="w-full flex justify-evenly items-baseline h-full">

                        {/* Appointment Date */}
                        <span className="py-2 border-r border-rf-primary w-full h-full">{item["appointment-date"]}</span>

                        {/* Appointment Slot */}
                        <span className="py-2 border-r border-rf-primary w-full h-full normal-case">{item["appointment-slot"] ?? 'N/A'}</span>
                        
                        {/* Appointment Status */}
                        <span className="py-2 border-r border-rf-primary w-full h-full">{item["appointment-status"]}</span>
                    </div>

                    {/* Doctor details row */}
                    <div className="w-full  grid grid-cols-[1.5fr_2fr_1.2fr] items-baseline h-full">

                        {/* Doctor name */}
                        <span className="py-2 border-r wrap-anywhere border-rf-primary w-full h-full">{isLoggedInDoctorsId ? 'myself' : `${item["doctor-name"]}`}</span>

                        {/* Doctor speciality */}
                        <span className="py-2 border-r wrap-anywhere border-rf-primary w-full h-full">{item["doctor-speciality"]}</span>

                        {/* Doctor fee */}
                        <span className="py-2 border-r border-rf-primary w-full h-full">${item["doctor-fee"]}</span>
                    </div>

                    {/* Payment details row */}
                    <div className="w-full flex justify-evenly items-baseline h-full">

                        {/* Payment Status */}
                        <span className="py-2 border-r border-rf-primary w-full h-full">{item["payment-status"]}</span>

                        {/* Payment Mode */}
                        <span className="py-2 border-r border-rf-primary w-full h-full">{item["payment-status"] === "paid" ? `${item["payment-mode"]}` : 'N/A'}</span>
                    </div>

                    {/* Action buttons row */}
                    <div className="w-full h-full flex flex-col xl:flex-row ">

                        {/* Mark appointment as completed (only if pending) */}
                        {item["appointment-status"] === "pending" && 
                            <Form method="PUT" className="w-full h-full">
                                <input type="hidden" name="action" defaultValue="update-appointment" /> {/* Hidden form differentiator field for common method */}
                                <input type="hidden" name="appointment-id" defaultValue={item["appointment-id"]} />
                                <button className="text-rf-primary hover:text-green-600 hover:cursor-pointer"><IoMdDoneAll className="size-6 xl:-mb-2"/></button>
                            </Form>
                        }

                        {/* Cancel appointment (only if unpaid) */}
                        {item["payment-status"] !== "paid" &&
                            <Form method="DELETE" className="w-full h-full">
                                <input type="hidden" name="appointment-id" defaultValue={item["appointment-id"]} />
                                <button className="text-rf-primary hover:text-red-600 hover:cursor-pointer"><PiCalendarXDuotone className="size-6 xl:-mb-2"/></button>
                            </Form>
                        }

                        {/* Delete appointment (only if paid and completed) */}
                        {(item["payment-status"] === "paid" && item["appointment-status"] === "complete") &&
                            <Form method="DELETE" className="w-full h-full">
                                <input type="hidden" name="appointment-id" defaultValue={item["appointment-id"]} />
                                <button className="text-rf-grey-100 hover:text-red-600 hover:cursor-pointer"><MdDeleteForever className="size-6 xl:-mb-2"/></button>
                            </Form>
                        }
                    </div>


                </div>

            )})}
        </div>
    </Wrapper>
  )
}