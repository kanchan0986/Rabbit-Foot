import { Form } from 'react-router'
import { FaUserTie, FaPhoneAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoIosMail } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { DatePickerInput } from '../DatePickerInput';

type BookingFormProps = {}

export default function BookingForm({}: BookingFormProps) {
  return (
      <Form method='post' className="flex flex-col gap-y-8 xl:gap-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xmd:grid-cols-4 gap-y-4 gap-x-4">
            {/* Name input */}
            <div className="flex items-center justify-between py-1 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md xmd:col-span-2 2xmd:col-span-2 xl:col-span-1">
              <input
                type="text"
                name="name"
                id="name"
                className="outline-none"
                placeholder='Name *'
                required
              />
              <label htmlFor="name">
                <FaUserTie className="fill-rf-white-100 cursor-pointer" />
              </label>
            </div>
            {/* Email input */}
            <div className="flex items-center justify-between py-1 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md xmd:col-span-2 2xmd:col-span-2 xl:col-span-1">
              <input
                type="email"
                name="email"
                id="email"
                className="outline-none"
                placeholder='Email *'
                required
              />
              <label htmlFor="email">
                <IoIosMail className="fill-rf-white-100 cursor-pointer size-5" />
              </label>
            </div>
            {/* Phone input */}
            <div className="flex items-center justify-between py-1 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md 2xmd:col-span-2 xl:col-span-1">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="outline-none"
                placeholder='Phone *'
                required
              />
              <label htmlFor="phone">
                <FaPhoneAlt className="fill-rf-white-100 cursor-pointer" />
              </label>
            </div>
            {/* Custom Date picker input */}
            <div className="flex items-center justify-between py-1 px-3 outline-1 gap-x-1 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md 2xmd:col-span-2 2xmd:w-110 xl:w-auto xl:col-span-1">
              <DatePickerInput/>
            </div>
          </div>
          {/* Action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xmd:grid-cols-4 gap-y-4 gap-x-4">
          {/* Submit button */}
          <button type='submit' className='w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-white-100 text-rf-primary rounded-full hover:bg-rf-white-100/90 active:bg-rf-white-100/90 active:text-rf-primary hover:text-rf-primary py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2 2xmd:hover:shadow-rf-direct-100'>
            <FaCalendarCheck/>
            <span className="xl-text-2xl">Book an Appointment</span></button>
          {/* Call us link */}
          <a href="tel:+18001234567" className="w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-white-100 text-rf-primary hover:bg-rf-white-100/90 active:bg-rf-white-100/90 active:text-rf-primary hover:text-rf-primary rounded-full py-1 px-3 sm:py-1.5 2xmd:py-2 2xmd:hover:shadow-rf-direct-100">
            <BiSolidPhoneCall/>
            <span className="xl-text-2xl">Call us Now</span>
          </a>
        </div>
      </Form>
  )
}