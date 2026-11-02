import { useState } from 'react';
import { Link, useFetcher, useNavigation, useParams } from 'react-router';
import type { Administrator, Appointment, Customer, Doctor } from '~/data/static-data';
import { calculateAge } from '~/helper/calculateAge';
import Loader from '../../Loader';
import Wrapper from '../../Wrapper';
import { SlUser, SlUserFemale } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';
import { BsCalendar2Check, BsCalendar2Week, BsGenderAmbiguous } from 'react-icons/bs';
import { LiaBirthdayCakeSolid, LiaClipboardListSolid, LiaMoneyBillWaveSolid } from 'react-icons/lia';
import SlideInUp from '../../animations/SlideInUp';
import { GrUserAdmin } from "react-icons/gr";
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { PiCalendarDots } from 'react-icons/pi';
import { FaRegCreditCard, FaUserDoctor, FaUserInjured } from 'react-icons/fa6';
import { LuCircleDollarSign } from 'react-icons/lu';
import { VscUnverified, VscVerified } from 'react-icons/vsc';

type UpdateDoctorAndAdminAppointmentsFormProps = {
    appointmentsData: Appointment[];
    userData?: Customer | Doctor | Administrator;
}

export default function UpdateDoctorAndAdminAppointmentsForm({appointmentsData, userData}: UpdateDoctorAndAdminAppointmentsFormProps) {
  
  const navigation = useNavigation();

  const fetcher = useFetcher(); // to avoid redirection to "?index" on url bar

  const { "appointment-id": appointmentId } = useParams<{ "appointment-id": string; }>(); // Get appointment ID from URL params

  const appointment = appointmentsData.find(appointment => appointment["appointment-id"] === appointmentId) // Find the customer's appointment from the appointmentsData, that matches the appointment ID

  const isLoggedInDoctor = appointment?.['doctor-id'] === userData?.id // Check if logged-in doctor id matches appointment's doctor id

  const [appointmentStatus, setAppointmentStatus] = useState<boolean>(appointment?.['appointment-status'] === "complete" ? true : false); // Customer appointment status

  const customerAge = (appointment?.['customer-dob'] && calculateAge(appointment["customer-dob"])) // if customer's dob exists, calculate his age

  // Show loader if the route is rendering
  if(navigation.state === "loading") return <Loader/>

  // for no customer, show fallback
  if(!appointment) return <div className="text-center py-4">Sorry! Patient does not exists.</div>

  return (
    <aside className="overflow-hidden pb-20 xl:pb-30 3xl:pb-40">
      
      {/* Wrapper for customer profile Information sections */}
      <Wrapper className="[&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:grid-cols-[40%_60%] md:[&>div]:gap-x-4 md:[&>div]:gap-y-4" as={"section"}>

        {/******************* Customer Profile Information section *******************/}
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-4 md:row-span-4">
          {/* Customer profile image or fallback icon */}
          {appointment['customer-imageUrl'] ?
            <img src={appointment['customer-imageUrl']} alt={appointment['customer-name']} className="object-cover object-center rounded-md sm:max-h-160 2xmd:max-h-full" />
            :
            <div className="self-center flex items-center justify-center size-35 [&>svg]:size-20 [&>svg]:fill-rf-primary border-6 border-rf-primary rounded-full md:size-40">
              {appointment['customer-gender'] === "female" ?
                <SlUserFemale/>  // Female customer icon
                :
                <SlUser/> // Default customer icon
              } 
            </div>
          }
        </div>

        {/************ Appointment Information section ************/}

        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4 ">
          <h1 className="text-rf-primary text-center lg:text-2xl">Appointment Information</h1>

        {/************ Appointment ID ************/}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <GrUserAdmin className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Appointment Id: </span>
            <span className="wrap-anywhere text-xbase lg:text-xl">{appointment['appointment-id']}</span>
          </h3>

        {/************ Appointment Date ************/}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <PiCalendarDots className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Appointment Date: </span>
            <span className="wrap-anywhere text-xbase lg:text-xl">{appointment['appointment-date']}</span>
          </h3>

        {/************ Appointment Slot ************/}
          {appointment['appointment-slot'] &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <RiCalendarScheduleLine className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Appointment Slot: </span>
            <span className="wrap-anywhere text-xbase lg:text-xl">{appointment['appointment-slot']}</span>
          </h3>}

        {/************ Appointment Status ************/}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            {!appointmentStatus ? <BsCalendar2Week className="-mb-1"/> : <BsCalendar2Check className='-mb-1'/>}
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Appointment Status: </span>
            <span className="wrap-anywhere capitalize text-xbase lg:text-xl">{appointment['appointment-status']}</span>
          </h3>

        </div>

        {/************ Contact Information section ************/}
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4 ">
          <h2 className="text-rf-primary text-center lg:text-2xl">Contact Information</h2>

          {/* Name */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <FaUserInjured className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Patient Name: </span>
            <span className="wrap-anywhere text-xbase lg:text-xl">{appointment['customer-name']}</span>
          </h3>

          {/* Email */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <HiOutlineMail className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Email: </span>
            <span className="wrap-anywhere text-xbase lg:text-xl">{appointment['customer-email']}</span>
          </h3>

          {/* Phone */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <TbPhoneCall />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Phone: </span>
            <span className="text-xbase lg:text-xl">{appointment['customer-phone'] ? appointment['customer-phone'] : 'Not Available'}</span>
          </h3>

        </div>

        {/******************* Medical Information section  *******************/}
        
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4">
          <h2 className="text-rf-primary text-center lg:text-2xl">Medical Information</h2>

          {/* Gender */}
            <h3 className="flex items-center gap-x-1">
              <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <BsGenderAmbiguous />
              </span>
              <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Gender: </span>
              <span className="text-xbase lg:text-xl capitalize">{appointment['customer-gender'] ? appointment['customer-gender'] : 'Not Available'}</span>
            </h3>

          {/* Age */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <LiaBirthdayCakeSolid />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Age: </span>
            <span className="text-xbase lg:text-xl">{customerAge ? `${customerAge} years` : 'Not Available'}</span>
          </h3>

          {/* Medical history*/}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <LiaClipboardListSolid />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">History: </span>
            <span className="capitalize text-xbase lg:text-xl">{appointment['doctor-speciality']}</span>
          </h3>

          {/* Doctor name*/}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <FaUserDoctor/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Doctor Name: </span>
            <span className="capitalize text-xbase lg:text-xl">{isLoggedInDoctor ? "Myself" : appointment['doctor-name']}</span>
          </h3>

        </div>

        {/******************* Payment Information section (only for loggedInDoctors)  *******************/}

        {isLoggedInDoctor &&
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4">
          <h2 className="text-rf-primary text-center lg:text-2xl">Payment Information</h2>

          {/* Fee */}
            <h3 className="flex items-center gap-x-1">
              <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <LuCircleDollarSign />
              </span>
              <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Doctor Fee: </span>
              <span className="text-xbase lg:text-xl capitalize">${appointment['doctor-fee']}</span>
            </h3>

          {/* Payment Status */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              {appointment['payment-status'] === "unpaid" ? <VscUnverified /> : <VscVerified />}
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Payment Status: </span>
            <span className="text-xbase lg:text-xl capitalize">{appointment['payment-status']}</span>
          </h3>

          {/* Payment mode*/}
          {appointment['payment-status'] === "paid" && 
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              {appointment['payment-mode'] === "cash" ? <LiaMoneyBillWaveSolid /> : <FaRegCreditCard />}
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Payment Mode: </span>
            <span className="capitalize text-xbase lg:text-xl">{appointment['payment-mode']}</span>
          </h3>}

        </div>}

        {/****************** Action buttons ******************/}
        <div className={`p-2 grid grid-cols-1 gap-4 md:col-start-2 ${appointmentStatus ? 'xs:grid-cols-3 xl:grid-cols-3' : 'xs:grid-cols-2 xl:grid-cols-4'}`}>

            {/* Back link */}
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100 md:w-full xmd:h-15">
              <Link to=".." relative="path" className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer md:h-full 2xmd:col-start-2 2xmd:h-15 sm:py-1.5 2xmd:py-2">
                <span className="xl:text-xbase lg:text-xl">Go Back</span>
              </Link>
            </SlideInUp>

            {/* Mark Appointmet complete */}
            {!appointmentStatus &&
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100 md:w-full xmd:h-15">
              <fetcher.Form method="PUT" onSubmit={() => setAppointmentStatus(true)} 
                className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 group hover:cursor-pointer md:h-full 2xmd:col-start-2 2xmd:h-15 sm:py-1.5 2xmd:py-2">
                <input type="hidden" name="action" value="update-appointment-status" />
                <input type="hidden" name="appointmentId" value={appointment["appointment-id"]} />
                <button className="xl:text-xbase lg:text-xl group-hover:cursor-pointer">Mark Complete</button>
              </fetcher.Form>
            </SlideInUp>}

            {/* Delete Appointment */}
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100 md:w-full xmd:h-15">
              <fetcher.Form method="DELETE" 
                className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 group hover:cursor-pointer md:h-full 2xmd:col-start-2 2xmd:h-15 sm:py-1.5 2xmd:py-2">
                <input type="hidden" name="action" value="delete-appointment" />
                <input type="hidden" name="appointmentId" value={appointment["appointment-id"]} />
                <button className="xl:text-xbase lg:text-xl group-hover:cursor-pointer">Delete</button>
              </fetcher.Form>
            </SlideInUp>

            {/* Logout button*/}
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100 md:w-full xmd:h-15">
              <Link to="/logout" className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer md:h-full 2xmd:col-start-2 2xmd:h-15 sm:py-1.5 2xmd:py-2">
                <span className="xl:text-xbase lg:text-xl">Logout</span>
              </Link>
            </SlideInUp>

        </div>
        
      </Wrapper>

    </aside>
  )
}