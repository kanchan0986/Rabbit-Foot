import { useState } from "react";
import { Link, useNavigation } from "react-router";
import type { Customer } from "~/data/static-data";
import { calculateAge } from "~/helper/calculateAge";
import Loader from "../../Loader";
import Wrapper from "../../Wrapper";
import { SlUser, SlUserFemale } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { TbNews, TbNewsOff, TbPhoneCall } from "react-icons/tb";
import { BsGenderAmbiguous } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { SwitchSubscriptionStatus } from "../../SwitchSubscriptionStatus";
import SlideInUp from "../../animations/SlideInUp";

type UpdateCustomersFormProps = {
    customer: Customer;
}

export default function UpdateCustomersForm({customer}: UpdateCustomersFormProps) {
  
  const navigation = useNavigation();

  const [subscriptionStatus, setSubscriptionStatus] = useState<boolean>(customer.subscriber ? true : false); // Customer subscription status

  const customerAge = customer.dob && calculateAge(customer.dob) // if customer's dob exists, calculate his age

  // Show loader if the route is rendering
  if(navigation.state === "loading") return <Loader/>

  // for no customer, show fallback
  if(!customer) return <div className="text-center py-4">Sorry! Patient does not exists.</div>

  return (
    <aside className="overflow-hidden pb-20 xl:pb-30 3xl:pb-40">
      
      {/* Wrapper for customer profile Information sections */}
      <Wrapper className="[&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:grid-cols-[40%_60%] md:[&>div]:gap-x-4 md:[&>div]:gap-y-4" as={"section"}>

        {/******************* Customer Profile Information section *******************/}
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-4 md:row-span-4">
          {/* Customer profile image or fallback icon */}
          {customer.imageUrl ?
            <img src={customer.imageUrl} alt={customer.name} className="object-cover object-center rounded-md sm:max-h-160 2xmd:max-h-full" />
            :
            <div className="self-center flex items-center justify-center size-35 [&>svg]:size-20 [&>svg]:fill-rf-primary border-6 border-rf-primary rounded-full md:size-40">
              {customer.gender === "female" ?
                <SlUserFemale/>  // Female customer icon
                :
                <SlUser/> // Default customer icon
              } 
            </div>
          }
        </div>

        {/************ Customer username ************/}
        <h1 className="font-flavours text-rf-primary text-center text-3xl xmd:w-auto lg:text-4xl capitalize md:content-center">
          {customer.name}
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
            <span className="wrap-anywhere text-xbase lg:text-xl">{customer.email}</span>
          </h3>

          {/* Phone */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <TbPhoneCall />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Phone: </span>
            <span className="text-xbase lg:text-xl">{customer.phone ? customer.phone : 'Not Available'}</span>
          </h3>

        </div>

        {/******************* Customer's User Information section  *******************/}
        
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4">
          <h2 className="text-rf-primary text-center lg:text-2xl">User Information</h2>

          {/* Gender */}
            <h3 className="flex items-center gap-x-1">
              <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <BsGenderAmbiguous />
              </span>
              <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Gender: </span>
              <span className="text-xbase lg:text-xl capitalize">{customer.gender ? customer.gender : 'Not Available'}</span>
            </h3>

          {/* Age */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <LiaBirthdayCakeSolid />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Age: </span>
            <span className="text-xbase lg:text-xl">{customerAge ? `${customerAge} years` : 'Not Available'}</span>
          </h3>

        {/****************** Action buttons ******************/}

          {/* Toggle subscription */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              {subscriptionStatus ? <TbNews className="stroke-rf-primary -mb-0.5 2xmd:-mb-1 size-4 2xmd:size-5"/> : <TbNewsOff  className="stroke-rf-primary -mb-0.5 2xmd:-mb-1 size-4 2xmd:size-5"/>}
            </span>
            <span className="text-rf-primary text-xbase lg:text-xl">
                {subscriptionStatus ? 
                  <div className="flex items-center gap-x-1">Subscribed: </div>
                :
                  <div className="flex items-center gap-x-1">Unscubscribed: </div>
                }
            </span>
            <span className="flex items-center flex-wrap gap-2 capitalize text-xbase lg:text-xl">
            <SwitchSubscriptionStatus
                name="isSubscribed"
                customerId={customer?.id}
                subscriptionStatus={subscriptionStatus}
                setSubscriptionStatus={setSubscriptionStatus}
            />
            </span>
          </h3>

        </div>

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