import Wrapper from "~/components/custom-components/Wrapper";
import type { Appointment } from "~/data/static-data";
import { SlUser, SlUserFemale } from "react-icons/sl";
import Loader from "~/components/custom-components/Loader";
import SlideInUp from "~/components/custom-components/animations/SlideInUp";
import { TbPhoneCall } from "react-icons/tb";
import { BsGenderAmbiguous } from "react-icons/bs";
import { LiaBirthdayCakeSolid, LiaClipboardListSolid } from "react-icons/lia";
import { Link, useNavigation, useParams } from "react-router";
import { calculateAge } from "~/helper/calculateAge";
import { HiOutlineMail } from "react-icons/hi";

type CustomerProfileProps = {
    appointmentsData: Appointment[];
}

export default function CustomerProfile({ appointmentsData }: CustomerProfileProps) {
  
  const navigation = useNavigation();

  const { "appointment-id": appointmentId } = useParams<{ "appointment-id": string; }>(); // Get appointment ID from URL params

  const appointment = appointmentsData?.find(appointment => appointment["appointment-id"] === appointmentId) // Find the customer's appointment from the appointmentsData, that matches the appointment ID

  const customerAge = appointment?.["customer-dob"] && calculateAge(appointment["customer-dob"]) // if customer's dob exists, calculate his age

  // Show loader if the route is rendering
  if(navigation.state === "loading") return <Loader/>

  return (
    <aside className="overflow-hidden pb-20 xl:pb-30 3xl:pb-40">
      
      {/* Wrapper for customer profile Information sections */}
      <Wrapper className="[&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:grid-cols-[40%_60%] md:[&>div]:gap-x-4 md:[&>div]:gap-y-4" as={"section"}>

        {/******************* Customer Profile Information section *******************/}
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-4 md:row-span-4">
          {/* Customer profile image or fallback icon */}
          {appointment?.["customer-imageUrl"] ?
            <img src={appointment["customer-imageUrl"]} alt={appointment["customer-name"]} className="object-cover object-center rounded-md sm:max-h-160 2xmd:max-h-full" />
            :
            <div className="self-center flex items-center justify-center size-35 [&>svg]:size-20 [&>svg]:fill-rf-primary border-6 border-rf-primary rounded-full md:size-40">
              {appointment?.["customer-gender"] === "female" ?
                <SlUserFemale/>  // Female customer icon
                :
                <SlUser/> // Default customer icon
              } 
            </div>
          }
        </div>

        {/************ Customer username ************/}
        <h1 className="font-flavours text-rf-primary text-center text-3xl xmd:w-auto lg:text-4xl capitalize md:content-center">
          {appointment?.["customer-name"]}
        </h1>

        {/************ Contact Information section ************/}
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4 ">
          <h2 className="text-rf-primary text-center lg:text-2xl">Contact Information</h2>

          {/* Email */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <HiOutlineMail className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Email: </span>
            <span className="wrap-anywhere text-xbase lg:text-xl">{appointment?.["customer-email"]}</span>
          </h3>

          {/* Phone */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <TbPhoneCall />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Phone: </span>
            <span className="text-xbase lg:text-xl">{appointment?.["customer-phone"] ? appointment["customer-phone"] : 'Not Available'}</span>
          </h3>

        </div>

        {/******************* Basic Information section  *******************/}
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4">
          <h2 className="text-rf-primary text-center lg:text-2xl">Basic Information</h2>

          {/* Gender */}
            <h3 className="flex items-center gap-x-1">
              <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <BsGenderAmbiguous />
              </span>
              <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Gender: </span>
              <span className="text-xbase lg:text-xl capitalize">{appointment?.["customer-gender"] ? appointment["customer-gender"] : 'Not Available'}</span>
            </h3>

          {/* Age */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <LiaBirthdayCakeSolid />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Age: </span>
            <span className="text-xbase lg:text-xl">{customerAge ? `${customerAge} years` : 'Not Available'}</span>
          </h3>

          {/* Medical history */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <LiaClipboardListSolid />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">History: </span>
            <span className="capitalize text-xbase lg:text-xl">{appointment?.["doctor-speciality"]}</span>
          </h3>

        </div>

        {/****************** Action buttons ******************/}
        <div className="p-2 flex flex-col gap-4 md:col-start-2 md:flex-row">

            {/* Back link */}
            <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100 md:w-full xmd:h-15">
              <Link to=".." relative="path" className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer md:h-full 2xmd:col-start-2 2xmd:h-15 sm:py-1.5 2xmd:py-2">
                <span className="xl:text-xbase lg:text-xl">Go Back</span>
              </Link>
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