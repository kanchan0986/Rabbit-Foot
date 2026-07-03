import { Form } from 'react-router'
import { FaUserTie, FaPhoneAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoIosMail } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { DatePickerInput } from '../DatePickerInput';
import { twMerge } from 'tailwind-merge';
import SlideInUp from '../animations/SlideInUp';

type BookingFormProps = {
  formId: string;
  inputBoxStyles?: string;
  buttonStyles?: string;
  formType?: 'split';
}

export default function BookingForm({inputBoxStyles, buttonStyles, formId, formType}: BookingFormProps) {

  // if formType is "split" then use the variable to show different styles within the same breakpoints
  const isSplitForm = formType === "split";

  return (
      <Form method='post' className={twMerge(`flex flex-col gap-y-8 xl:gap-y-10 ${isSplitForm && 'mt-3 xl:gap-y-6 xl:mt-6'}`)}>
          <div className={twMerge(`grid grid-cols-1 sm:grid-cols-2 2xmd:grid-cols-4 gap-y-4 gap-x-4 ${isSplitForm && '2xmd:grid-cols-1 xl:grid-cols-2'}`)}>
            {/* Name input */}
            <div className={twMerge(`flex items-center justify-between py-1 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md xmd:col-span-2 2xmd:col-span-2 xl:col-span-1 ${inputBoxStyles} ${isSplitForm && 'xl:col-span-2'}`)}>
              <input
                type="text"
                name="name"
                id={`${formId}-name`}
                className="outline-none w-[90%]"
                placeholder='Name *'
                required
              />
              <label htmlFor={`${formId}-name`}>
                <FaUserTie className="fill-rf-white-100 cursor-pointer" />
              </label>
            </div>
            {/* Email input */}
            <div className={twMerge(`flex items-center justify-between py-1 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md xmd:col-span-2 2xmd:col-span-2 xl:col-span-1 ${inputBoxStyles} ${isSplitForm && 'xl:col-span-2'}`)}>
              <input
                type="email"
                name="email"
                id={`${formId}-email`}
                className="outline-none w-[90%]"
                placeholder='Email *'
                required
              />
              <label htmlFor={`${formId}-email`}>
                <IoIosMail className="fill-rf-white-100 cursor-pointer size-5" />
              </label>
            </div>
            {/* Phone input */}
            <div className={twMerge(`flex items-center justify-between py-1 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md 2xmd:col-span-2 xl:col-span-1 ${inputBoxStyles}`)}>
              <input
                type="tel"
                name="phone"
                id={`${formId}-phone`}
                className="outline-none w-[90%]"
                placeholder='Phone *'
                required
              />
              <label htmlFor={`${formId}-phone`}>
                <FaPhoneAlt className="fill-rf-white-100 cursor-pointer" />
              </label>
            </div>
            {/* Custom Date picker input */}
            <div className={twMerge(`flex items-center justify-between py-1 px-1 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md 2xmd:col-span-2 2xmd:w-110 xl:w-auto xl:col-span-1 ${inputBoxStyles} ${isSplitForm && '2xmd:w-93.5'}`)}>
              <DatePickerInput/>
            </div>
          </div>
          {/* Action buttons */}
        <SlideInUp delay={0.1} className={twMerge(`grid grid-cols-1 sm:grid-cols-2 2xmd:grid-cols-4 gap-y-4 gap-x-4 ${isSplitForm && '2xmd:grid-cols-1 xl:grid-cols-2'}`)}>
          {/* Submit button */}
          <button type='submit' className={twMerge(`w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-white-100 text-rf-primary rounded-full hover:bg-rf-white-100/90 active:bg-rf-white-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2 2xmd:hover:shadow-rf-direct-100 ${buttonStyles} ${isSplitForm && '2xmd:col-start-auto'}`)}>
            <FaCalendarCheck/>
            <span className="xl-text-2xl">Book an Appointment</span></button>
          {/* Call us link */}
          <a href="tel:+18001234567" className={twMerge(`w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-white-100 text-rf-primary hover:bg-rf-white-100/90 active:bg-rf-white-100/90 rounded-full py-1 px-3 sm:py-1.5 2xmd:py-2 2xmd:hover:shadow-rf-direct-100 ${buttonStyles}`)}>
            <BiSolidPhoneCall/>
            <span className="xl-text-2xl">Call us Now</span>
          </a>
        </SlideInUp>
      </Form>
  )
}