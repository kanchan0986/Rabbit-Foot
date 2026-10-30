import Wrapper from "~/components/custom-components/Wrapper";
import type { Doctor } from "~/data/static-data";
import { SlBadge } from "react-icons/sl";
import Loader from "~/components/custom-components/Loader";
import SlideInUp from "~/components/custom-components/animations/SlideInUp";
import { TbPhoneCall } from "react-icons/tb";
import { Link, useNavigation } from "react-router";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegAddressCard, FaUserDoctor } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine, RiUserStarLine, RiVerifiedBadgeFill } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";
import { SwitchVerificationStatus } from "./SwitchVerificationStatus";
import { useState } from "react";
import { VscUnverified } from "react-icons/vsc";

type DoctorProfileProps = {
    doctor: Doctor;
}

export default function DoctorProfile({ doctor }: DoctorProfileProps) {
  
  const navigation = useNavigation();
  const [verificationStatus, setVerificationStatus] = useState<boolean>(doctor.isVerified ? true : false); // Doctor verification status

  // Show loader if the route is rendering
  if(navigation.state === "loading") return <Loader/>

  return (
    <aside className="overflow-hidden pb-20 xl:pb-30 3xl:pb-40">
      
      {/* Wrapper for Doctor profile Information sections */}
      <Wrapper className="[&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:grid-cols-[40%_60%] md:[&>div]:gap-x-4 md:[&>div]:gap-y-4" as={"section"}>

        {/******************* Doctor Profile Information section *******************/}
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-4 md:row-span-4">
          {/* Doctor profile image or fallback icon */}
          {doctor.imageUrl ?
            <img src={doctor.imageUrl} alt={doctor.name} className="object-cover object-center rounded-md sm:max-h-160 2xmd:max-h-full" />
            :
            <div className="self-center flex items-center justify-center size-35 [&>svg]:size-20 [&>svg]:fill-rf-primary border-6 border-rf-primary rounded-full md:size-40">
                {/* doctor icon */}
                <FaUserDoctor/>  
            </div>
          }
        </div>

        {/************ Doctor name ************/}
        <h1 className="font-flavours text-rf-primary text-center text-3xl xmd:w-auto lg:text-4xl capitalize md:content-center">
          {doctor.name}
        </h1>

        {/************ Doctor Contact Information section ************/}
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4 ">
          <h2 className="text-rf-primary text-center lg:text-2xl">Contact Information</h2>

          {/* Email */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <HiOutlineMail className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Email: </span>
            <span className="wrap-anywhere text-xbase lg:text-xl">{doctor.email}</span>
          </h3>

          {/* Phone */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <TbPhoneCall />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Phone: </span>
            <span className="text-xbase lg:text-xl">{doctor.phone ? doctor.phone : 'Not Available'}</span>
          </h3>

          {/* Address */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <FaRegAddressCard className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Address: </span>
            <span className="text-xbase lg:text-xl">{doctor.address ? doctor.address : 'Not Available'}</span>
          </h3>

          {/* Details */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <BiMessageDetail className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Details: </span>
            <div className="flex flex-col gap-2">
              {doctor.details ? doctor.details.map((detail, idx) => (
                <span key={idx} className="text-xbase lg:text-xl">{detail}</span>
              )) :
                <span className="text-xbase lg:text-xl">Not Available</span>
              }
            </div>
          </h3>

        </div>

        {/******************* Doctor's Basic Information section  *******************/}

        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4">
          <h2 className="text-rf-primary text-center lg:text-2xl">Basic Information</h2>

          {/* Experience */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <RiUserStarLine />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Experience: </span>
            <span className="text-xbase lg:text-xl capitalize">{doctor.experience ? `${doctor.experience} year` : 'Not Available'}</span>
          </h3>

          {/* Speciality */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <PiCertificate className="-mb-1" />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Speciality: </span>
            <div className="flex items-center flex-wrap gap-2 capitalize">
              {doctor.speciality.length > 0 ? (
                // In case of no speciality provided, default to "all"
                <>
                  {doctor.speciality.map((speciality, idx) => (
                    <Link key={idx} to={`../../our-doctors?speciality=${speciality}`}>
                      <span className="text-xbase font-light lg:text-xl bg-rf-primary-200/30 rounded-sm px-2 border border-rf-primary hover:shadow-rf-direct-300">{speciality}</span>
                    </Link>
                  ))}
                </>
              ) : (
              <Link to='../../our-doctors?speciality=all'>
                <span className="text-xbase font-light lg:text-xl bg-rf-primary-200/30 rounded-sm px-2 border border-rf-primary hover:shadow-rf-direct-300">all</span>
              </Link>
              )}
            </div>
          </h3>

          {/* Degree */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <SlBadge className="-mb-1" />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Degree: </span>
            <div className="flex items-center flex-wrap gap-2 capitalize">
              {doctor.degree ? doctor.degree.map((degree, idx) => (
                // ensures the comma is added only if the current degree is not the last one
                <span key={idx} className="text-xbase lg:text-xl">{degree}{(idx !== (doctor.degree && doctor.degree.length - 1)) && ","}</span>
              )) :
                <span className="text-xbase lg:text-xl">Not Available</span>
              }
            </div>
          </h3>

          {/* Fee */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <RiMoneyDollarCircleLine />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Fee: </span>
            <span className="text-xbase lg:text-xl capitalize">{doctor.fee ? `$${doctor.fee}` : 'Not Available'}</span>
          </h3>

          {/* Availability */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <IoEyeOutline />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Availability: </span>
            <span className="capitalize text-xbase lg:text-xl">{doctor.availability ? "available" : "unavailable"}</span>
          </h3>

        {/****************** Action buttons ******************/}

          {/* Verification Status */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              {verificationStatus ? <RiVerifiedBadgeFill className="fill-rf-secondary -mb-0.5 2xmd:-mb-1 size-4 2xmd:size-5"/> : <VscUnverified className="fill-rf-primary -mb-0.5 2xmd:-mb-1 size-4 2xmd:size-5"/>}
            </span>
            <span className="text-rf-primary text-xbase lg:text-xl">
                {verificationStatus ? 
                  <div className="flex items-center gap-x-1">Verified: </div>
                :
                  <div className="flex items-center gap-x-1">Unverified: </div>
                }
            </span>
            <span className="flex items-center flex-wrap gap-2 capitalize text-xbase lg:text-xl">
            <SwitchVerificationStatus
                name="isVerified"
                doctorId={doctor.id}
                verificationStatus={verificationStatus}
                setVerificationStatus={setVerificationStatus}
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