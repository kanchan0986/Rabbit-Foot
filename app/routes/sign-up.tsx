import Wrapper from '~/components/custom-components/Wrapper';
import Sky from '~/components/custom-components/vectors/Sky';
import SlideInUp from '~/components/custom-components/animations/SlideInUp';
import { Form, Link, redirect } from 'react-router';
import { tabLabel } from '~/helper/tabLabel';
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogIn, IoLogInOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import type { Route } from './+types/sign-up';
import validateSignupForm from '~/helper/validateSignupForm';
import type { BookingDataType, Customer, Doctor, SignUpDataType, User } from '~/data/static-data';
import { useState } from 'react';
import handleErrorFreeBookings from '~/helper/handleErrorFreeBookings';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientAction = async ({request}: Route.ClientActionArgs) => { 

  // Retrieve booking data string from session storage Parse the string into a BookingDataType object if it exists
  const bookingDataStringified = sessionStorage.getItem("bookingData")
  const bookingData: BookingDataType = bookingDataStringified && JSON.parse(bookingDataStringified)

  // Extract submitted form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const customerDataStringified = sessionStorage.getItem("customerData") // Retrieve customer data string from session storage (if it exists)
  const customerDataParsed: Customer[] = customerDataStringified && JSON.parse(customerDataStringified) // Parse the stringified data into a Customer array (only if data exists)

  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorDataParsed: Doctor[] = doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  // Validate signup input and check for conflicts with existing users, then extract the resulting errors and validated user data.
  const { errors, user } = validateSignupForm({data: data as unknown as SignUpDataType, customerArr: customerDataParsed, doctorArray: doctorDataParsed});

  // Prevent user registration from continuing when validation fails for the name, email, phone number, or password fields.
  if(errors.name || errors.email || errors.phone || errors.password) return { errors };

  // If booking data exists and user is a customer, update booking info with customer details
  if(bookingData && user?.type === 'customer'){
    // update the new userData, booking data, and appointments data
    handleErrorFreeBookings({bookingData: bookingData as BookingDataType, user: user})
    // store the new user to the customerData in session storage
    sessionStorage.setItem("customerData", JSON.stringify([...(customerDataParsed || []), user])) 

    // Redirect customer to thank-you page after booking
    return redirect('/thank-you')
  }

  // If the user is a doctor
  if(user?.type === 'doctor'){
    // For any type of signup, with or without booking data, save user data to session storage
    sessionStorage.setItem("userData", JSON.stringify(user))

    // But if the booking data exists, clear booking data and redirect path from sessionStorage
    if(bookingData) {
      sessionStorage.removeItem("bookingData")
      sessionStorage.removeItem("redirectPath")
    }

    sessionStorage.setItem(
      "doctorData",
      JSON.stringify([...doctorDataParsed, user]),
    ); // Save signed-up doctor to sessionStorage

    // redirect to under-review page 
    return redirect('/under-review')
  }

  // If it is just a signup then save user data to session storage and redirect to profile page
  if(user) {
  sessionStorage.setItem("userData", JSON.stringify(user))
  const customerDataStringified = sessionStorage.getItem("customerData")
  const customerDataParsed: Customer[] = customerDataStringified && JSON.parse(customerDataStringified)
  sessionStorage.setItem("customerData", JSON.stringify([...(customerDataParsed || []), user]))
  return redirect('/dashboard')
  }

 }

const options: User[] = ['customer', 'doctor'] // User type array to map from

export default function SignUp({actionData}: Route.ComponentProps) {
  const [selectedOption, setSelectedOption] = useState<User>('customer'); // state to track the selection of User type
  const [checkNewsletter, setCheckNewsletter] = useState<boolean>(true) // state to track the signup choice for newsletter
  return (
    <main className="relative">
      {/* Animating sky background */}
      <Sky className="fill-rf-primary-200/40"/>
      <Wrapper
        as={"section"}
        className="py-10 relative [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:justify-center xmd:[&>div]:gap-x-8 xl:py-40 xl:[&>div]:gap-y-20"
      >
        <Form method='post' className="flex flex-col gap-6 w-full xs:w-md">
          <div className="flex flex-col item-center gap-4">
            {/* Form heading */}
            <h1 className="text-2xl text-center text-rf-primary-100 lg:text-3xl mb-3">Sign-up</h1>
              {/* Name input */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between p-2 outline-1 gap-x-2 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md">
                  <input type="text" name="name" id="name" placeholder='Name' className='w-full placeholder:text-rf-white-100' />
                  <label htmlFor="name" className='text-rf-white-100 text-base'>
                    <FaUser/>
                  </label>
                </div>
                {/* show validation error if name is blank */}
                {actionData?.errors.name && <small className="self-center text-red-500">{actionData.errors.name}</small>}
              </div>
              {/* Email input */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between p-2 outline-1 gap-x-2 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md">
                  <input type="email" name="email" id="email" placeholder='Email' className='w-full placeholder:text-rf-white-100' />
                  <label htmlFor="email" className='text-rf-white-100 text-base'>
                    <MdEmail/>
                  </label>
                </div>
                {/* show validation error if email is blank or already exists */}
                {actionData?.errors.email && <small className="self-center text-red-500">{actionData.errors.email}</small>}
              </div>
              {/* Phone input */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between p-2 outline-1 gap-x-2 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md">
                  <input type="tel" name="phone" id="phone" placeholder='Phone' className='w-full placeholder:text-rf-white-100' />
                  <label htmlFor="phone" className='text-rf-white-100 text-base'>
                    <FaPhoneFlip/>
                  </label>
                </div>
                {/* show validation error if phone is blank or already exists */}
                {actionData?.errors.phone && <small className="self-center text-red-500">{actionData.errors.phone}</small>}
              </div>
              {/* Password input */}
              <div className={`flex flex-col gap-1`}>
                <div className="flex items-center justify-between p-2 outline-1 gap-x-2 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md">
                  <input type="password" name="password" id="password" placeholder='Create Password' className='w-full placeholder:text-rf-white-100' autoComplete='create-password' />
                  <label htmlFor="password" className='text-rf-white-100 text-base'>
                    <RiLockPasswordFill/>
                  </label>
                </div>
                {/* show validation error if password is blank */}
                {actionData?.errors.password && <small className="self-center text-red-500">{actionData.errors.password}</small>}
              </div>
              {/* Account type input */}
              <div className="self-center flex flex-col gap-y-2 gap-x-4 min-[330px]:flex-row">
                <h3 className='self-center min-[330px]:self-auto'>Account Type:</h3>
                <div className="flex gap-4">
                  {options.map((option, idx) => (
                    <label key={idx} className='flex items-center gap-2 has-checked:text-rf-primary'>
                      {/* Default to customer */}
                      <input type="radio" name="type" id={option} value={option} checked={selectedOption === option} onChange={(event) => setSelectedOption(event.currentTarget.value as User)} className='appearance-none h-3 w-3 rounded-full border border-black checked:border-white checked:bg-rf-primary ring-2 ring-white checked:ring-rf-primary-200' />
                      {/* display customer as a patient in UI */}
                      <span className="capitalize">{option === 'customer' ? 'patient' : option}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Ask for newsletter signup (only for customers) */}
              {selectedOption === 'customer' && 
                <div className="flex gap-2 self-center text-xs">
                  <input type="checkbox" name="subscriber" id="subscriber" checked={checkNewsletter} onChange={() => setCheckNewsletter(prev => !prev)} className='appearance-none w-6 max-w-4 h-4 border border-rf-primary rounded-xs checked:bg-rf-primary relative before:content-["✔"] before:absolute before:inset-0 before:leading-none before:text-white before:flex before:justify-center before:items-center' />
                  <label htmlFor="subscriber">Sign me up for your Newsletter!</label>
                </div>
              }
          </div>
            {/* Action buttons */}
          <div className="grid grid-cols-1 gap-y-4 gap-2">
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
              {/* Submit button */}
              <button type='submit' className="w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-200 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
                <IoLogIn className='size-5'/>
                <span className="xl:text-xbase">Sign Up</span>
              </button>
            </SlideInUp>
            <small className='text-center'>------ or ------</small>
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100 justify-self-center w-60">
              {/* Submit button */}
              <Link to="/login">
                  <button type='button' className="w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-200 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
                    <IoLogInOutline className='size-5'/>
                    <span className="xl:text-xbase">Login with Credentials</span>
                  </button>
              </Link>
            </SlideInUp>
          </div>
        </Form>
      </Wrapper>
    </main>
  )
}