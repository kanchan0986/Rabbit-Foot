import { Form } from "react-router"
import type { Doctor, Slot, Speciality } from "~/data/static-data"
import { SpecialityDropdownMenuRadioGroup } from "../SpecialityDropdownMenuRadioGroup"
import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import { twMerge } from "tailwind-merge"
import type { FormError } from "~/routes/doctor-details"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import FadeIn from "../animations/FadeIn"

type BookingFormAdvancedProps = {
    doctorData: Doctor;
    errors?: FormError;
}

// doctor's availability slots
const availabilitySlots: Slot[] = [
    '10:00 am', '11:00 pm', '12:00 pm', '01:00 pm', '03:00 pm', '04:00 pm', '05:00 pm'
]

export default function BookingFormAdvanced({doctorData, errors}: BookingFormAdvancedProps) {
    
    const today = new Date(); // Get today's date

    // Track which speciality is selected, start with the doctor's first speciality
    const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality>(doctorData.speciality[0]); 

    // Track which date is selected, start with today's date
    const [selectedDate, setSelectedDate] = useState<string>(today.toDateString()) 

    // Track which time slot is selected, start with none
    const [selectedSlot, setSelectedSlot] = useState<string>('') 

    // Track form errors (coming from clientAction), start with any existing errors
    const [formErrors, setFormErrors] = useState<FormError | undefined>(errors); 

    // Create an array of the next 7 days (including today)
    const upcomingSevenDays = Array.from({length: 7}, (_, idx) => {
        const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + idx) 
        const day = date.getDay() // Day of the week (0 = Sunday, 6 = Saturday)
        return { date, day }
    })

    // Find dates where all slots are fully booked
    const fullyBookedSchedules = doctorData.schedule.filter(item => item.slot.length === availabilitySlots.length) 
    const fullyBookedDateStrings = fullyBookedSchedules.map(item => new Date(item.date).toDateString()) 

    // Get the slots already booked for the selected date (or empty if none)
    const bookedSlotsForSelectedDate = doctorData.schedule.find(item => new Date(item.date).toDateString() === selectedDate)?.slot || [] 

    // Check if the selected date is fully booked
    const isSelectedDateFullyBooked = fullyBookedDateStrings.includes(selectedDate) 

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
        setFormErrors(errors);
    }, [errors]);

    // Handle speciality change
    const handleSpecialityChange = (newSpeciality: Speciality) => { 
        setSelectedSpeciality(newSpeciality)

        // Clear speciality error if it exists
        if (formErrors?.speciality) {
            setFormErrors(prev => ({ ...prev, speciality: undefined }));
        }
    }

    // Handle date change
    const handleDateSelection = (newDate: string) => { 
        setSelectedDate(newDate) 
        setSelectedSlot('') // Reset slot when date changes

        // Error handling logic
        const newDateInstance = new Date(newDate) // Create a Date instance from the new date
        const isNewDateWeekend = newDateInstance.getDay() === 0 || newDateInstance.getDay() === 6 // Check if the new date falls on a weekend
        const isNewDateFullyBooked = fullyBookedDateStrings.includes(newDate) // Check if the new date is fully booked

        // If the new date is valid (not weekend, not fully booked) and errors exist, clear them
        if (!isNewDateWeekend && !isNewDateFullyBooked && formErrors?.date && formErrors.slot) {
            setFormErrors(prev => ({ ...prev, date: undefined, slot: undefined }));
        }
    }

    // Handle slot change
    const handleSlotSelection = (newSlot: string) => { 
        setSelectedSlot(newSlot);
    }

    
  return (
    <Form method="post">
        <div className="flex flex-col gap-y-5">
            <div className="flex flex-col">
                {/* hidden doctor name input */}
                <input
                    type="hidden"
                    name="name"
                    defaultValue={doctorData.name}
                />
                {/* hidden doctor speciality input */}
                <input
                    type="hidden"
                    name="speciality"
                    value={selectedSpeciality}
                />
                {/* hidden appointment date input */}
                <input
                    type="hidden"
                    name="date"
                    value={isSelectedDateFullyBooked || isSelectedDateWeekend ? '' : selectedDate} // important to make fully booked dates look similar to fully booked slots 
                />
                {/* hidden appointment slot input */}
                <input
                    type="hidden"
                    name="slot"
                    value={selectedSlot}
                />

                {/* title and subtitle */}
                <h2 className="mb-6 text-sm text-center text-rf-secondary uppercase">Book a consultation with <span className="font-flavours capitalize block text-3xl text-rf-primary">Dr. {doctorData.name}</span></h2>

                {/* speciality selection box */}
                <div className="flex flex-col items-center justify-between min-[350px]:flex-row xmd:flex-col min-[885px]:flex-row!">
                    <span>Choose Speciality</span>                    
                    <SpecialityDropdownMenuRadioGroup data={doctorData.speciality} initialSpeciality={selectedSpeciality} specialityChangeHandler={handleSpecialityChange} className="relative inset-0 shadow-none [&>button]:bg-rf-primary [&>button]:text-foreground w-full min-[350px]:w-[50%] md:w-2xs" reference="booking-form" defaultSpeciality={doctorData.speciality[0]} />
                    {/* errors in inline message for speciality */}
                    {formErrors?.speciality && <small className="text-red-500 text-center">{formErrors.speciality}</small>}
                </div>

                {/* availability selection box */}
                <div className="flex flex-col gap-4">
                    <span className="self-center min-[350px]:self-auto xmd:self-center min-[885px]:self-auto!">Choose Available Slots</span>
                    {/* date selection box */}
                    <div className="grid grid-cols-4 gap-2 min-[330px]:grid-cols-5 xs:grid-cols-7 xs:w-full min-[500px]:w-[90%]! min-[520px]:w-[60%] sm:w-[80%]! md:w-[70%] xmd:w-full! 2xmd:w-[90%]! lg:w-110!">
                        {upcomingSevenDays.map(({date, day}, idx) => {
                            const isWeekendDay = day === 0 || day === 6 // Check if this date falls on a weekend
                            const isFullyBookedDay = fullyBookedDateStrings.some(bookedDate => bookedDate === date.toDateString()) // Check if this date is fully booked (all slots taken)
                            const isNotAvailable = isWeekendDay || isFullyBookedDay // Mark date as unavailable if it’s weekend, or fully booked
                            return (
                                <div key={idx} 
                                    className={twMerge(`
                                        flex flex-col items-center justify-center min-h-25 py-4 rounded-full border border-rf-primary transition-[colors_shadow] duration-200 ease-in hover:cursor-pointer hover:bg-rf-primary hover:shadow-rf-direct-300 hover:text-rf-white-100 focus:bg-rf-primary active:bg-rf-primary text-xs uppercase gap-y-1 min-[500px]:text-sm 
                                        ${(date.toDateString() === selectedDate) && 'bg-rf-primary'} 
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
                    {formErrors?.date && <small className="text-red-500 text-center">{formErrors.date}</small>}

                    {/* slot selection box */}
                    <div className="grid gap-y-1 gap-x-[0.2rem] grid-cols-2 min-[276px]:gap-2 xs:grid-cols-3 sm:grid-cols-4 xmd:grid-cols-3 min-[960px]:grid-cols-4! min-[960px]:gap-x-[0.2rem] min-[970px]:gap-2 xl:grid-cols-5! 2xl:grid-cols-6! 4xl:grid-cols-7!">
                        {availabilitySlots.map((slot, idx) => {
                            const isNotAvailable = bookedSlotsForSelectedDate.includes(slot) || isSelectedDateFullyBooked || isSelectedDateWeekend // Mark slot as unavailable if already booked for the selected date or the selected date itself is fully booked or the selected date falls on a weekend
                            return (
                                <span key={idx} 
                                    className={`
                                        flex items-center justify-center py-2 px-6 rounded-full border border-rf-primary transition-[colors_shadow] duration-200 ease-in hover:cursor-pointer hover:bg-rf-primary hover:shadow-rf-direct-300 hover:text-rf-white-100 focus:bg-rf-primary active:bg-rf-primary text-xs gap-y-1 min-[500px]:text-sm 
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
                    {formErrors?.slot && <small className="text-red-500 text-center">{formErrors.slot}</small>}

                </div>
            </div>
            {/* selected values for verification --> automatic and manual selection both */}
            <div className="flex flex-col items-center justify-center gap-2 transition-all duration-1000 ease-in xs:flex-row xs:gap-4 xs:flex-wrap">
                {selectedSpeciality && 
                    <FadeIn className="font-bold flex items-center flex-col gap-x-2 xs:flex-row">Selected Speciality: <span className="flex items-center gap-x-1 capitalize font-normal">{selectedSpeciality}<RiVerifiedBadgeFill className="fill-rf-secondary size-4"/></span></FadeIn>
                }
                {(selectedDate && !isSelectedDateWeekend && !isSelectedDateFullyBooked) && 
                    <FadeIn className="font-bold flex items-center flex-col gap-x-2 xs:flex-row">Date: <span className="flex items-center gap-x-1 capitalize font-normal">{selectedDate}<RiVerifiedBadgeFill className="fill-rf-secondary size-4"/></span></FadeIn>
                }
                {selectedSlot && 
                    <FadeIn className="font-bold flex items-center flex-col gap-x-2 xs:flex-row">Slot: <span className="flex items-center gap-x-1  font-normal">{selectedSlot}<RiVerifiedBadgeFill className="fill-rf-secondary size-4"/></span></FadeIn>
                }
            </div>
            {/* submit button */}
            <Button
                variant={"outline"}
                size={"lg"}
                className="self-center px-4 rounded-full bg-rf-primary hover:bg-rf-primary-100 hover:text-white text-sm capitalize min-[500px]:py-5 2xmd:hover:shadow-xl 2xmd:cursor-pointer lg:text-sm"
            >
            Book an appointment
            </Button>
        </div>
    </Form>
  )
}