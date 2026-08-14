import { Link, useFetcher } from 'react-router'
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaCalendarCheck } from "react-icons/fa6";
import { DatePickerInput } from '../DatePickerInput';
import { twMerge } from 'tailwind-merge';
import SlideInUp from '../animations/SlideInUp';
import { useState } from 'react';
import type { Customer, Doctor, Speciality } from '~/data/static-data';
import SelectScrollable from '../SelectScrollable';

type BookingFormProps = {
  inputBoxStyles?: string;
  buttonStyles?: string;
  formType?: 'split';
  doctorData: Doctor[];
  specialityData: Speciality[];
  userData: Customer;
}

export default function BookingForm({inputBoxStyles, buttonStyles, formType, doctorData, userData, specialityData}: BookingFormProps) {

  const fetcher = useFetcher();

  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality>('all') // state to track which speciality is currently selected

  const [selectedDoctorFee, setSelectedDoctorFee] = useState<string>("") // state to store the fee of the selected doctor

  const filteredDoctorData = selectedSpeciality === "all" ? doctorData : doctorData.filter(doctor => doctor.speciality.includes(selectedSpeciality)); // filter doctors based on selected speciality, or show all if "all" is chosen

  // if formType is "split" then use the variable to show different styles within the same breakpoints
  const isSplitForm = formType === "split";

  const handleSpecialityInputChange = (value: Speciality | Doctor) => {
    // update selected speciality when user chooses one 
    setSelectedSpeciality(value as Speciality)
   }

  const handleDoctorInputChange = (value: Doctor | Speciality) => { 
    // find doctor by name and set their fee in state
    const selectedDoctor = filteredDoctorData.find(doctor => doctor.name === value)
    selectedDoctor && setSelectedDoctorFee(selectedDoctor.fee.toString())
   }

  return (
      <fetcher.Form method='post' className={twMerge(`flex flex-col gap-y-8 xl:gap-y-10 ${isSplitForm && 'mt-3 xl:gap-y-6 xl:mt-6'}`)}>
          <div className={twMerge(`grid grid-cols-1 sm:grid-cols-2 2xmd:grid-cols-3 gap-y-4 gap-x-4 ${isSplitForm && '2xmd:grid-cols-1 xl:grid-cols-2'}`)}>
                {/* hidden customer name input */}
                <input
                    type="hidden"
                    name="customer-name"
                    defaultValue={userData.name}
                />
                {/* hidden customer email input */}
                <input
                    type="hidden"
                    name="customer-email"
                    value={userData.email}
                />
                {/* hidden customer phone input */}
                <input
                    type="hidden"
                    name="customer-phone"
                    value={userData.phone} 
                />
                {/* hidden doctor fee input */}
                <input
                    type="hidden"
                    name="doctor-fee"
                    value={selectedDoctorFee} 
                />
            {/* Speciality input */}
            <div className="flex flex-col gap-1">
              <div className={twMerge(`flex items-center justify-between py-2 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md xmd:col-span-2 2xmd:col-span-2 xl:col-span-1 ${inputBoxStyles} ${isSplitForm && 'xl:col-span-2 [&>select>option:not(:first-child)]:bg-rf-secondary-200'}`)}>
                {/* custom dropdown element for speciality selection */}
                <SelectScrollable data={specialityData} name='doctor-speciality' changeHandler={(value) => handleSpecialityInputChange(value)}/>
              </div>
              {/* show validation error if speciality is not selected properly */}
              {fetcher.data?.errors?.doctorSpeciality && <small className={twMerge(`self-center text-rf-white-100 ${isSplitForm && 'text-rf-secondary'}`)}>{fetcher.data.errors.doctorSpeciality}</small>}
            </div>
            {/* Doctor input */}
            <div className="flex flex-col gap-1">
              <div className={twMerge(`flex items-center justify-between py-2 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md xmd:col-span-2 2xmd:col-span-2 xl:col-span-1 ${inputBoxStyles} ${isSplitForm && 'xl:col-span-2 [&>select>option:not(:first-child)]:bg-rf-secondary-200'}`)}>
                {/* custom dropdown element for doctor selection */}
                <SelectScrollable data={filteredDoctorData} name='doctor-name' changeHandler={(value) => handleDoctorInputChange(value)} />
              </div>
              {/* show validation error if doctor is not selected properly */}
              {fetcher.data?.errors?.doctorName && <small className={twMerge(`self-center text-rf-white-100 ${isSplitForm && 'text-rf-secondary'}`)}>{fetcher.data.errors.doctorName}</small>}
            </div>
            {/* Custom Date picker input */}
            <div className={`col-span-full 2xmd:col-span-1 flex flex-col gap-1 ${isSplitForm && 'xl:col-span-full'}`}>
              <div className={twMerge(`flex items-center justify-between py-0.75 px-1 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md 2xmd:col-span-2 2xmd:w-auto xl:col-span-1 ${inputBoxStyles}`)}>
                <DatePickerInput/>
              </div>
              {/* show validation error if date is missing */}
              {fetcher.data?.errors?.appointmentDate && <small className={twMerge(`self-center text-rf-white-100 ${isSplitForm && 'text-rf-secondary'}`)}>{fetcher.data.errors.appointmentDate}</small>}
            </div>
          </div>
          {/* Action buttons */}
        <div className="grid grid-cols-1 gap-y-4 gap-x-4 self-center">
          <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
            {/* Submit button */}
            <button type='submit' className={twMerge(`w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-white-100 text-rf-primary rounded-full hover:bg-rf-white-100/90 active:bg-rf-white-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2 ${buttonStyles} ${isSplitForm && '2xmd:col-start-auto'}`)}>
              <FaCalendarCheck/>
              <span className="xl:text-xbase">Book an Appointment</span>
            </button>
          </SlideInUp>

          {/* alternative options */}

          <small className='text-center'>------ or ------</small>
          <span className='text-center'>For more detailed booking, please visit <Link to="/our-doctors" className={!isSplitForm ? 'text-white hover:text-rf-primary-300' : 'text-rf-primary hover:text-rf-primary-100'}>Our Doctors</Link> page</span>
          
          <small className='text-center'>------ or ------</small>
          <SlideInUp delay={0.1} className="w-fit justify-self-center rounded-full 2xmd:hover:shadow-rf-direct-100">
            {/* Call us link */}
            <a href="tel:+18001234567" className={twMerge(`w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-white-100 text-rf-primary hover:bg-rf-white-100/90 active:bg-rf-white-100/90 rounded-full py-1 px-3 sm:py-1.5 2xmd:py-2 ${buttonStyles}`)}>
              <BiSolidPhoneCall/>
              <span className="xl:text-xbase">Call us Now</span>
            </a>
          </SlideInUp>
          
        </div>
      </fetcher.Form>
  )
}