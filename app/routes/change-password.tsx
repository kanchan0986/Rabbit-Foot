import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/change-password";
import type { Administrator, Customer, Doctor } from "~/data/static-data";
import Loader from "~/components/custom-components/Loader";
import Wrapper from "~/components/custom-components/Wrapper";
import SlideInUp from "~/components/custom-components/animations/SlideInUp";
import { Form, Link, redirect, useNavigation } from "react-router";
import { FaUserDoctor } from "react-icons/fa6";
import { SlUser, SlUserFemale } from "react-icons/sl";
import { MdOutlinePassword } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import validatePasswordChange from "~/helper/validatePasswordChange";


export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (if exists)

  const userData : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an object (Customer, Doctor, or Administrator) (if it exists)

  if(!userData) return redirect('/login');

  return { userData }

 }

export const clientAction = async ({request}: Route.ClientActionArgs) => { 

  // Extract submitted form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const userType = formData.get("type");
  const userId = formData.get("id");
  const newPassword = formData.get("password");

  const { errors } = validatePasswordChange({data})

  // check to show all errors at once (if exists)
  if(Object.keys(errors).length > 0) return errors;

  const userDataStringified = sessionStorage.getItem("userData"); // get user data stored in sessionStorage (if exists)
  const userData: Customer | Doctor | Administrator =
    userDataStringified && JSON.parse(userDataStringified); // parse user data back into an object (if it exists)
  
  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorData: Doctor[] =
  doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  const customerDataStringified = sessionStorage.getItem("customerData"); // get customer data stored in sessionStorage (if exists)
  const customerData: Customer[] =
  customerDataStringified && JSON.parse(customerDataStringified); // parse customer data back into customerData array (if it exists)

  const adminDataStringified = sessionStorage.getItem("adminData"); // get admin data stored in sessionStorage (if exists)
  const adminData: Administrator[] =
  adminDataStringified && JSON.parse(adminDataStringified); // parse admin data back into adminData array (if it exists)

  if(userType === "customer"){
    const updatedCustomers = customerData.map(customer => {
      if (customer.id === userId) return ({
        ...customer,
        password: newPassword
      })
      return customer;
    })

    sessionStorage.setItem(
      "customerData",
      JSON.stringify(updatedCustomers),
    ); // Save updated customers back to sessionStorage

    const updatedUser = userData.type === userType && userData.id === userId ? ({
      ...userData, 
      password: newPassword
    }) : userData

    sessionStorage.setItem(
      "userData",
      JSON.stringify(updatedUser),
    ); // Save updated user back to sessionStorage
  }
  
  if(userType === "doctor"){
    const updatedDoctors = doctorData.map(doctor => {
      if (doctor.id === userId) return ({
        ...doctor,
        password: newPassword
      })
      return doctor;
    })

    sessionStorage.setItem(
      "doctorData",
      JSON.stringify(updatedDoctors),
    ); // Save updated doctors back to sessionStorage

    const updatedUser = userData.type === userType && userData.id === userId ? ({
      ...userData, 
      password: newPassword
    }) : userData

    sessionStorage.setItem(
      "userData",
      JSON.stringify(updatedUser),
    ); // Save updated user back to sessionStorage

  }
  
  if(userType === "administrator"){
    const updatedAdmin = adminData.map(admin => {
      if (admin.id === userId) return ({
        ...admin,
        password: newPassword
      })
      return admin;
    })

    sessionStorage.setItem(
      "adminData",
      JSON.stringify(updatedAdmin),
    ); // Save updated admins back to sessionStorage

    const updatedUser = userData.type === userType && userData.id === userId ? ({
      ...userData, 
      password: newPassword
    }) : userData

    sessionStorage.setItem(
      "userData",
      JSON.stringify(updatedUser),
    ); // Save updated user back to sessionStorage

  }

  return redirect('/dashboard')
  
 }

export default function ChangePassword({loaderData, actionData}: Route.ComponentProps) {

  const { userData } = loaderData; // Extract userData from loaderData
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigation = useNavigation();
  const [formHasErrors, setFormHasErrors] = useState<boolean>(false);
  
  // Check user type for conditional rendering
  const isCustomer = userData.type === "customer";
  const isDoctor = userData.type === "doctor";

  useEffect(() => {
    if(actionData?.password || actionData?.reEnterPassword || actionData?.confirmPassword) setFormHasErrors(true)
  }, [actionData?.password, actionData?.reEnterPassword, actionData?.confirmPassword])

  const handleRefresh = () => { 
    setFormHasErrors(false)
   }

  // Show loader if fetching data
  if(navigation.state === "loading") return <Loader/>
  
  return (
    <Form method="PUT" className="overflow-hidden">
      <input type="hidden" name="id" value={userData.id} />
      <input type="hidden" name="type" value={userData.type} />
      {/* Wrapper for profile Information sections */}
      <Wrapper className="[&>div]:grid [&>div]:gap-y-8 [&>div]:pb-20 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:pb-0 md:[&>div]:grid-cols-[40%_60%] md:[&>div]:gap-x-4 md:[&>div]:gap-y-4" as={"section"}>

        {/******************* Profile Information section *******************/}
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-4 md:row-span-2">
          {/* Profile image or fallback icon */}
          {userData.imageUrl ?
            <div style={{backgroundImage: `url(${userData.imageUrl})`}} className="bg-cover bg-center bg-no-repeat rounded-md w-full h-[50vh] xs:h-[60vh] min-[500px]:h-[70vh]! min-[700px]:h-[80vh]!" />
            :
            <div className="self-center flex items-center justify-center size-35 [&>svg]:size-20 [&>svg]:fill-rf-primary border-6 border-rf-primary rounded-full md:size-40">
              {isDoctor ?
                <FaUserDoctor/>  // Doctor icon
                : (isCustomer && userData.gender) === "female" ?
                <SlUserFemale/>  // Female customer icon
                :
                <SlUser/> // Default user icon
              }
            </div>
          }
        </div>

        {/************ Username display ************/}
        <h1 className="font-flavours text-rf-primary text-center text-3xl xmd:w-auto lg:text-4xl capitalize md:content-center">
          {isDoctor && <span>Dr. </span>}
          {userData.name}
        </h1>

        {/************ Contact Information section ************/}
        <div className="border border-rf-grey-100/40 rounded-md p-4 flex flex-col justify-center gap-y-8 xs:p-10 min-[500px]:p-15! min-[580px]:p-20! min-[700px]:p-30! md:p-4! 2xmd:p-20!">
          <h2 className="text-rf-primary text-center text-xl lg:text-2xl w-2x">Change Password</h2>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between p-2 outline-1 gap-x-2 bg-rf-white-100 outline-rf-primary text-rf-primary rounded-md">
                <input type={isPasswordVisible? "text" : "password"} name="password" id="password" placeholder='New Password' className='w-full placeholder-rf-primary/80 outline-rf-white-100' autoComplete='new-password' />
                <label htmlFor="password" onTouchStart={() => setIsPasswordVisible(true)} onMouseDown={() => setIsPasswordVisible(true)} onMouseUp={() => setIsPasswordVisible(false)} onMouseLeave={() => setIsPasswordVisible(false)} className='text-rf-primary text-2xl'>
                  {isPasswordVisible ? <IoEye /> : <IoMdEyeOff />}
                </label>
              </div>
              {/* show validation error if password is blank */}
              {formHasErrors && actionData?.password && <small className="self-center text-red-500">{actionData.password}</small>}
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between p-2 outline-1 gap-x-2 bg-rf-white-100 outline-rf-primary text-rf-primary rounded-md">
                <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm Password' className='w-full placeholder-rf-primary/80 outline-rf-white-100' autoComplete='confirm-password' />
                <label htmlFor="confirm-password" className='text-rf-primary text-2xl'>
                  <MdOutlinePassword />
                </label>
              </div>
              {/* show validation error if re-enter password is blank */}
              {formHasErrors && actionData?.reEnterPassword && <small className="self-center text-red-500">{actionData.reEnterPassword}</small>}
              {/* show validation error if re-entered password doesn't matches with password */}
              {formHasErrors && actionData?.confirmPassword && <small className="self-center text-red-500">{actionData.confirmPassword}</small>}
            </div>

          </div>

          {/*********************** Action Buttons ***********************/}
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">

            {/* Refresh password button*/}
            <SlideInUp delay={0.1} className="w-full rounded-full 2xmd:hover:shadow-rf-direct-100">
              <button type='reset' onClick={handleRefresh} className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
                <span className="xl:text-xbase lg:text-xl">Refresh</span>
              </button>
            </SlideInUp>

            {/* Save new password button*/}
            <SlideInUp delay={0.1} className="w-full rounded-full 2xmd:hover:shadow-rf-direct-100">
              <button type='submit' className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
                <span className="xl:text-xbase lg:text-xl">Save</span>
              </button>
            </SlideInUp>

            {/* Back button*/}
            <SlideInUp delay={0.1} className="w-full rounded-full 2xmd:hover:shadow-rf-direct-100">
              <Link to=".." relative='path' className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
                <span className="xl:text-xbase lg:text-xl">Back</span>
              </Link>
            </SlideInUp>

          </div>
        </div>

      </Wrapper>
    </Form>
  )
}