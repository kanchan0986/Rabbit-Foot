import Wrapper from '~/components/custom-components/Wrapper';
import type { Route } from './+types/login';
import Sky from '~/components/custom-components/vectors/Sky';
import SlideInUp from '~/components/custom-components/animations/SlideInUp';
import { Form, Link, redirect } from 'react-router';
import { tabLabel } from '~/helper/tabLabel';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLogIn, IoLogInOutline } from "react-icons/io5";
import { validateLoginForm } from '~/helper/validateLoginForm';
import type { Administrator, BookingDataType, Customer, Doctor, LoginDataType } from '~/data/static-data';
import handleErrorFreeBookings from '~/helper/handleErrorFreeBookings';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 
  // Retrieve user data string from session storage and parse the string into a Customer or Doctor object if it exists
  const userDataStringified = sessionStorage.getItem("userData")
  const user: Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified)
  return { user }
 }

export const clientAction = async ({request}: Route.ClientActionArgs) => { 

  // Retrieve booking data string from session storage Parse the string into a BookingDataType object if it exists
  const bookingDataStringified = sessionStorage.getItem("bookingData")
  const bookingData: BookingDataType = bookingDataStringified && JSON.parse(bookingDataStringified)

  // Extract submitted form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // If validation errors exist, return them to display on UI
  const customerDataStringified = sessionStorage.getItem("customerData") // Retrieve customer data string from session storage (if it exists)
  const customerDataParsed: Customer[] = customerDataStringified && JSON.parse(customerDataStringified) // Parse the stringified data into a Customer array (only if data exists)

  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorDataParsed: Doctor[] = doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  const administratorDataStringified = sessionStorage.getItem("adminData"); // get admin data stored in sessionStorage (if exists)
  const administratorDataParsed: Administrator[] = administratorDataStringified && JSON.parse(administratorDataStringified); // parse admin data back into adminData array (if it exists)

  // Validate the login credentials against existing customer and doctor records, then extract any validation errors and the matching user data
  const { errors, user } = validateLoginForm({data: data as LoginDataType, customerArr: customerDataParsed, doctorArray: doctorDataParsed, adminArray: administratorDataParsed});

  // If the username or password validation fails, stop the login process and return the validation errors
  if(errors.username || errors.password) return { errors };

  // If booking data exists and user is a customer, update booking info with customer details
  if(bookingData && user?.type == 'customer'){
    // update the userData, booking data, and appointments data
    handleErrorFreeBookings({bookingData: bookingData as BookingDataType, user: user});
    // Redirect customer to thank-you page after booking
    return redirect('/thank-you')
  }

  // If the user is a doctor
  if(user?.type === 'doctor'){
    // For any type of login, with or without booking data, save user data to session storage
    sessionStorage.setItem("userData", JSON.stringify(user))

    // But if the booking data exists, clear booking data and redirect path from sessionStorage
    if(bookingData) {
      sessionStorage.removeItem("bookingData")
      sessionStorage.removeItem("redirectPath")
    }

    if(user.isVerified){
      // if the doctor is verified, show their profile
      return redirect('/dashboard')
    }else{
      // if the doctor is not verified, redirect to under-review route
      return redirect('/under-review')
    }
  }

  // If the user is a administrator
  if(user?.type === 'administrator'){
    // For any type of login, with or without booking data, save user data to session storage
    sessionStorage.setItem("userData", JSON.stringify(user))

    // But if the booking data exists, clear booking data and redirect path from sessionStorage
    if(bookingData) {
      sessionStorage.removeItem("bookingData")
      sessionStorage.removeItem("redirectPath")
    }

    if(user.isVerified){
      // if the administrator is verified, show their profile
      return redirect('/dashboard')
    }else{
      // if the administrator is not verified, redirect to under-review route
      return redirect('/under-review')
    }
  }
  

  // If it is just a login then save user data to session storage and redirect to profile page
  sessionStorage.setItem("userData", JSON.stringify(user))
  return redirect('/dashboard')
 }

export default function Login({loaderData, actionData}: Route.ComponentProps) {
  const { user } = loaderData
  return (
    <main className="relative">
      {/* Animating sky background */}
      <Sky className="fill-rf-primary-200/40"/>
      <Wrapper
        as={"section"}
        className="py-10 relative [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16  xmd:[&>div]:justify-center xmd:[&>div]:gap-x-8 xl:py-40 xl:[&>div]:gap-y-20"
      >
        <Form method='post' className="flex flex-col gap-6 w-full xs:w-md">
          <div className="flex flex-col item-center gap-4">

            {/* Heading changes if user is a doctor or an administrator */}
            <h1 className="text-2xl text-center text-rf-primary-100 lg:text-3xl mb-3">
              Login{(user?.type === 'doctor' || user?.type === 'administrator') && ' as a Patient'}
            </h1>

              {/* Username / Email input field */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between p-2 outline-1 gap-x-2 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md">
                  <input type="text" name="username" id="username" placeholder='Username / Email' className='w-full placeholder:text-rf-white-100' autoComplete='username' />
                  <label htmlFor="username" className='text-rf-white-100 text-base'>
                    <MdEmail />
                  </label>
                </div>
                {/* Show error if username is invalid */}
                {actionData?.errors.username && <small className="self-center text-red-500">{actionData.errors.username}</small>}
              </div>

              {/* User Password input */}
              <div className={`flex flex-col gap-1`}>
                <div className="flex items-center justify-between p-2 outline-1 gap-x-2 bg-rf-primary outline-rf-white-100 text-rf-white-100 rounded-md">
                  <input type="password" name="password" id="password" placeholder='Password' className='w-full placeholder:text-rf-white-100' autoComplete="current-password" />
                  <label htmlFor="password" className='text-rf-white-100 text-base'>
                    <RiLockPasswordFill/>
                  </label>
                </div>
                {/* Show error if password is invalid */}
                {actionData?.errors.password && <small className="self-center text-red-500">{actionData.errors.password}</small>}
              </div>

          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 gap-y-4 gap-2">

            {/* Login submit button */}
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
              <button type='submit' className="w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-200 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
                <IoLogInOutline className='size-5'/>
                <span className="xl:text-xbase">Login</span>
              </button>
            </SlideInUp>

            {/* Divider text */}
            <small className='text-center'>------ or ------</small>

            {/* Sign-up button */}
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100 justify-self-center w-60">
              {/* Submit button */}
              <Link to="/sign-up">
                <button type='button' className="w-full flex gap-x-2 items-center justify-center outline outline-rf-white-100 bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-200 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
                  <IoLogIn className='size-5'/>
                  <span className="xl:text-xbase">Sign Up for Credentials</span>
                </button>
              </Link>
            </SlideInUp>

          </div>
        </Form>

        {/* login hint */}
        <div className="flex flex-col gap-4 min-[650px]:flex-row">
          <div className="flex flex-col bg-rf-primary-200 p-2 rounded-sm">
            <span className='text-center'>Patient Login Hint:</span>
            <span className="text-xs">Username: philip.kotler@gmail.com</span>
            <span className="text-xs">Password: 12345</span>
          </div>
          <div className="flex flex-col bg-rf-primary-200 p-2 rounded-sm">
            <span className='text-center'>Doctor Login Hint:</span>
            <span className="text-xs">Username: alexa.thomas@gmail.com</span>
            <span className="text-xs">Password: 12345</span>
          </div>
          <div className="flex flex-col bg-rf-primary-200 p-2 rounded-sm">
            <span className='text-center'>Admin Login Hint:</span>
            <span className="text-xs">Username: david.jones@gmail.com</span>
            <span className="text-xs">Password: 12345</span>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}