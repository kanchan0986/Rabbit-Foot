import type { Customer, Doctor } from '~/data/static-data';
import Wrapper from '../../Wrapper'
import { Form, Link, useParams } from 'react-router'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import type { ValidationAppointmentUpdateTypes } from '~/helper/validateAppointmentsUpdateForm';
import { twMerge } from 'tailwind-merge';
import { availabilitySlots } from '../BookingFormAdvanced';
import { FaUserDoctor } from 'react-icons/fa6';

type UpdateCustomerAppointmentsFormProps = {
    userData: Customer;
    doctorArr: Doctor[];
    actionData?: {
        errors: ValidationAppointmentUpdateTypes;
    }
}

export default function UpdateCustomerAppointmentsForm({
    userData, 
    doctorArr, 
    actionData,
}: UpdateCustomerAppointmentsFormProps) {

  const { "appointment-id": appointmentId } = useParams<{ "appointment-id": string; }>(); // Get appointment ID from URL params

  const customer = userData.appointments?.filter(appointment => appointment["appointment-id"] === appointmentId) // Find the customer appointment that matches the appointment ID
  
  const doctorData = doctorArr.find(doctor => doctor.name === (customer && customer[0]["doctor-name"])) // Find doctor details based on the doctor name in the appointment

  const previousSelectedDate = customer && customer[0]["appointment-date"]; // Store previously selected date

  const previousSelectedSlot = customer && customer[0]?.["appointment-slot"]; // Store previously selected slot (if any)
    
  const today = new Date(); // Get today's date

  // Track selected date (default: previous date or today)
  const [selectedDate, setSelectedDate] = useState<string>(previousSelectedDate || today.toDateString())

  // Track selected slot (default: previous slot or none)
  const [selectedSlot, setSelectedSlot] = useState<string>(previousSelectedSlot || '') 

  // Track form errors (default: errors from clientAction if any)
  const [formErrors, setFormErrors] = useState<ValidationAppointmentUpdateTypes | undefined>(actionData?.errors);

    // Create an array of the next 7 days (including today) for selection
    const upcomingSevenDays = Array.from({length: 7}, (_, idx) => {
        const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + idx) 
        const day = date.getDay() // Day of the week (0 = Sunday, 6 = Saturday)
        return { date, day }
    })

    // Find dates where all slots are fully booked
    const fullyBookedSchedules = doctorData?.schedule?.filter(item => item.slot.length === availabilitySlots.length) 
    const fullyBookedDateStrings = fullyBookedSchedules?.map(item => new Date(item.date).toDateString()) 

    // Get the slots already booked for the selected date (or empty if none)
    const bookedSlotsForSelectedDate = doctorData?.schedule?.find(item => new Date(item.date).toDateString() === selectedDate)?.slot || [] 

    // Check if the selected date is fully booked
    const isSelectedDateFullyBooked = fullyBookedDateStrings?.includes(selectedDate) 

    // Create a Date instance from the selected date
    const selectedDateInstance = selectedDate && new Date(selectedDate) 

    // Check if the selected date falls on a weekend
    const isSelectedDateWeekend = selectedDateInstance ? 
        (selectedDateInstance.getDay() === 0 || selectedDateInstance.getDay() === 6) : false 

    useEffect(() => {
        // Auto-select a slot if:
        // - No slot is chosen yet
        // - The date is not fully booked
        // - The date is not a weekend
        if (!selectedSlot && !isSelectedDateFullyBooked && !isSelectedDateWeekend) {
            // Find the first available slot that isn’t already booked
            const firstAvailableSlot = availabilitySlots.find((slot) => !bookedSlotsForSelectedDate.includes(slot));
            // If found, set it as the selected slot
            if (firstAvailableSlot) {
                setSelectedSlot(firstAvailableSlot);
            }
        }
    }, [selectedDate, bookedSlotsForSelectedDate, isSelectedDateFullyBooked, isSelectedDateWeekend, selectedSlot]);

    useEffect(() => {
        // Update form errors whenever new errors come from clientAction
        setFormErrors(actionData?.errors);
    }, [actionData?.errors]);

    // Handle date change
    const handleDateSelection = (newDate: string) => { 
        setSelectedDate(newDate) 
        setSelectedSlot('') // Reset slot when date changes

        // Error handling logic
        const newDateInstance = new Date(newDate) // Create a Date instance from the new date
        const isNewDateWeekend = newDateInstance.getDay() === 0 || newDateInstance.getDay() === 6 // Check if the new date falls on a weekend
        const isNewDateFullyBooked = fullyBookedDateStrings?.includes(newDate) // Check if the new date is fully booked

        // If the new date is valid (not weekend, not fully booked) and errors exist, clear them
        if (!isNewDateWeekend && !isNewDateFullyBooked && formErrors?.appointmentDate && formErrors.appointmentSlot) {
            setFormErrors(prev => ({ ...prev, appointmentDate: '', appointmentSlot: '' }));
        }
    }

    // Handle slot change
    const handleSlotSelection = (newSlot: string) => { 
        setSelectedSlot(newSlot);
    }

    // Reset to existing appointment details
    const handleRefresh = () => { 
        setSelectedDate(previousSelectedDate || today.toDateString());
        setSelectedSlot(previousSelectedSlot || '')
     }

    if(!customer) return

    return (        
        // Wrapper for profile Information sections
        <Wrapper className="overflow-hidden pb-20 [&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-4 md:[&>div]:gap-x-4 md:[&>div]:gap-y-4 xl:pb-30 3xl:pb-40" as={"aside"}>
            <div className="bg-rf-primary-300 px-4 py-4 h-fit text-md lg:text-lg flex flex-col items-center gap-2 sm:flex-row sm:gap-4">

                {/* Profile image or fallback icon */}
                {customer[0]["doctor-imageUrl"] ?
                    <img src={customer[0]["doctor-imageUrl"]} alt={customer[0]["doctor-name"]} className="object-cover object-center rounded-md sm:max-h-70 min-[920px]:max-h-100" />
                :
                    <div className="flex items-center justify-center w-full sm:w-[38%] md:w-[30%] xmd:w-[20%]">
                        <div className="flex items-center justify-center size-20 [&>svg]:size-10 [&>svg]:fill-rf-primary border-4 border-rf-primary rounded-full sm:size-30 sm:[&>svg]:size-15 sm:border-5 min-[920px]:size-40 min-[920px]:[&>svg]:size-20 min-[920px]:border-6">
                            {/* Doctor icon */}
                            <FaUserDoctor className=""/>
                        </div>
                    </div>
                }

                <Form method="put" className="w-full pr-6 flex flex-col items-center gap-2 sm:self-start sm:w-[62%] md:w-2/3 xmd:w-[80%]">

                    {/* hidden appointment-id input to send appointment details */}
                    <input type="hidden" name="appointment-id" value={customer[0]["appointment-id"]} />

                    {/* hidden appointment date input to send appointment details */}
                    <input
                        type="hidden"
                        name="appointment-date"
                        value={isSelectedDateFullyBooked || isSelectedDateWeekend ? '' : selectedDate} // important to make fully booked dates look similar to fully booked slots 
                    />

                    {/* hidden appointment slot input to send appointment details */}
                    <input
                        type="hidden"
                        name="appointment-slot"
                        value={selectedSlot}
                    />

                    {/* Doctor details */}
                    <section className="w-full flex flex-col items-center gap-2 sm:items-start">
                        {/* Doctor name */}
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Doctor Name: </span>
                            <span className="capitalize">{customer[0]["doctor-name"]}</span>
                        </h2>
                        {/* Doctor Speciality */}
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Doctor Speciality: </span>
                            <span className="capitalize">{customer[0]["doctor-speciality"]}</span>
                        </h2>
                        {/* Doctor Contact number */}
                        {customer[0]["doctor-phone"] &&
                        <h2 className="text-xbase flex flex-col items-center min-[400px]:flex-row min-[400px]:gap-x-2 min-[400px]:text-lg">
                            <span className="text-rf-primary">Doctor Contact: </span>
                            <span className="capitalize">{customer[0]["doctor-phone"]}</span>
                        </h2>}
                    </section>

                    {/* Appointment details section */}
                    <section className="w-full flex flex-col items-center gap-2 sm:items-start">
                        {/* availability selection box */}
                        <div className="w-full flex flex-col gap-4">
                            <span className="self-center text-center text-rf-primary min-[350px]:self-auto sm:text-start min-[885px]:self-auto!">Choose Available Slots</span>

                            {/* date selection box */}
                            <div className="grid grid-cols-4 gap-2 min-[330px]:grid-cols-5 min-[400px]:grid-cols-6 xs:grid-cols-7 xs:w-full min-[500px]:px-1 min-[530px]:px-2 min-[560px]:px-3 min-[590px]:px-4 min-[620px]:px-8 sm:grid-cols-7 sm:px-0 md:w-full xmd:pe-14 min-[920px]:w-sm! min-[920px]:pe-0!">
                                {upcomingSevenDays.map(({date, day}, idx) => {
                                    const isWeekendDay = day === 0 || day === 6 // Check if this date falls on a weekend
                                    const isFullyBookedDay = fullyBookedDateStrings?.some(bookedDate => bookedDate === date.toDateString()) // Check if this date is fully booked (all slots taken)
                                    const isNotAvailable = isWeekendDay || isFullyBookedDay // Mark date as unavailable if it’s weekend, or fully booked
                                    return (
                                        <div key={idx} 
                                            className={twMerge(`
                                                flex flex-col items-center justify-center min-h-25 py-4 rounded-full border border-rf-primary transition-[colors_shadow] duration-200 ease-in hover:cursor-pointer hover:bg-rf-primary hover:shadow-rf-direct-300 hover:text-rf-white-100 focus:bg-rf-primary active:bg-rf-primary text-xs uppercase gap-y-1 min-[500px]:text-sm 
                                                ${(date.toDateString() === new Date(selectedDate).toDateString()) && 'bg-rf-primary'} 
                                                ${isNotAvailable && 'bg-gray-300 active:bg-rf-primary active:text-rf-white-100'}
                                            `)}
                                            onClick={() => handleDateSelection(date.toDateString())}
                                        >   
                                            {/* Display weekday abbreviation (Mon, Tue, etc.) */}
                                            <span className="">{date.toLocaleDateString("us-en", {weekday: 'short'})}</span>
                                            {/* Display day of the month */}
                                            <span className="">{date.getDate()}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* errors in inline message for date */}
                            {formErrors?.appointmentDate && <small className="text-red-500 text-center">{formErrors.appointmentDate}</small>}

                            {/* slot selection box */}
                            <div className="grid gap-y-2 gap-x-[0.4rem] grid-cols-2 min-[276px]:gap-2 xs:grid-cols-3 sm:grid-cols-2 md:w-full xmd:grid-cols-3 min-[960px]:grid-cols-4! min-[920px]:w-sm! min-[960px]:gap-x-[0.2rem] min-[970px]:gap-2">
                                {availabilitySlots.map((slot, idx) => {
                                    const isNotAvailable = bookedSlotsForSelectedDate.includes(slot) || isSelectedDateFullyBooked || isSelectedDateWeekend // Mark slot as unavailable if already booked for the selected date or the selected date itself is fully booked or the selected date falls on a weekend
                                    return (
                                        <span key={idx} 
                                            className={`
                                                flex items-center justify-center py-2 px-2 rounded-full border border-rf-primary transition-[colors_shadow] duration-200 ease-in hover:cursor-pointer hover:bg-rf-primary hover:shadow-rf-direct-300 hover:text-rf-white-100 focus:bg-rf-primary active:bg-rf-primary text-xs gap-y-1 min-[500px]:text-sm 
                                                ${slot === selectedSlot && 'bg-rf-primary'} ${isNotAvailable && 'bg-gray-300'}
                                            `}
                                            onClick={!isNotAvailable ? () => handleSlotSelection(slot) : undefined} // if slots are booked return nothing
                                        >
                                            {/* Display slot label (e.g., "10:00 AM") */}
                                            <span className="">{slot}</span>
                                        </span>
                                    )
                                })}
                            </div>

                            {/* errors in inline message for slot */}
                            {formErrors?.appointmentSlot && <small className="text-red-500 text-center">{formErrors.appointmentSlot}</small>}

                        </div>
                    </section>

                    {/* Action buttons */}
                    <section className="w-full flex flex-col items-center gap-2 mt-6 min-[500px]:flex-row min-[500px]:justify-center min-[920px]:justify-start">

                        {/* Refresh appointment button */}
                        <button type="reset" onClick={handleRefresh} className="text-xbase w-40 min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg min-[500px]:w-30"
                        >
                            Refresh
                        </button>

                        {/* Update appointment button */}
                        <button className="text-xbase w-40 min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg min-[500px]:w-30"
                        >
                            Update
                        </button>

                        {/* Go back link */}
                        <Link to=".." relative="path" className="no-underline! w-40 text-xbase min-[400px]:w-4xs flex gap-x-2 items-center justify-center bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 hover:text-rf-white-100! active:bg-rf-primary-100/90 py-2 px-3 hover:cursor-pointer min-[400px]:text-lg min-[500px]:w-30"
                        >
                            Back
                        </Link>
                        
                    </section>
                </Form>

            </div>

        </Wrapper>
    )
}