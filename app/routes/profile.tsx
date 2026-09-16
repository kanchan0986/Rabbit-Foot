import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/profile";
import Wrapper from "~/components/custom-components/Wrapper";
import type { Administrator, Customer, Doctor } from "~/data/static-data";
import { SlBadge, SlUser, SlUserFemale } from "react-icons/sl";
import Loader from "~/components/custom-components/Loader";
import SlideInUp from "~/components/custom-components/animations/SlideInUp";
import { FaRegAddressCard } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import { BsGenderAmbiguous } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { Link, redirect, useNavigation } from "react-router";
import { PiCertificate } from "react-icons/pi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiMoneyDollarCircleLine, RiUserStarLine, RiVerifiedBadgeFill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { IoEyeOutline, IoNewspaperOutline } from "react-icons/io5";


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

export default function Profile({ loaderData }: Route.ComponentProps) {

  const { userData } = loaderData; // Extract userData from loaderData
  
  const navigation = useNavigation();
  
  // Check user type for conditional rendering
  const isCustomer = userData.type === "customer";
  const isDoctor = userData.type === "doctor";
  const isAdmin = userData.type === "administrator";

  // Show loader if the route is rendering
  if(navigation.state === "loading") return <Loader/>

  return (
    <aside className="overflow-hidden pb-20 xl:pb-30 3xl:pb-40">
      
      {/* Wrapper for profile Information sections */}
      <Wrapper className="[&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:grid-cols-[40%_60%] md:[&>div]:gap-x-4 md:[&>div]:gap-y-4" as={"section"}>

        {/******************* Profile Information section *******************/}
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-4 md:row-span-3">
          {/* Profile image or fallback icon */}
          {userData.imageUrl ?
            <img src={userData.imageUrl} alt={userData.name} className="object-cover object-center rounded-md sm:max-h-160 2xmd:max-h-full" />
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
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4 ">
          <h2 className="text-rf-primary text-center lg:text-2xl">Contact Information</h2>

          {/* Email */}
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <HiOutlineMail className="-mb-1"/>
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Email: </span>
            <span className="wrap-anywhere text-xbase lg:text-xl">{userData.email}</span>
          </h3>

          {/* Phone */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <TbPhoneCall />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Phone: </span>
            <span className="text-xbase lg:text-xl">{userData.phone ? userData.phone : 'Not Available'}</span>
          </h3>

          {/* Address (only for customers & doctors) */}
          {(userData && (isCustomer || isDoctor)) &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <FaRegAddressCard className="-mb-1" />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Address: </span>
            <p className="text-xbase lg:text-xl">{userData.address ? userData.address : 'Not Available'}</p>
          </h3>}

          {/* Details (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <BiMessageDetail className="-mb-1" />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Details: </span>
            <div className="flex flex-col gap-2">
              {userData.details ? userData.details.map((detail, idx) => (
                <span key={idx} className="text-xbase lg:text-xl">{detail}</span>
              )) :
                <span className="text-xbase lg:text-xl">Not Available</span>
              }
            </div>
          </h3>}

          {/* Availability (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <IoEyeOutline />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Availability: </span>
            <span className="flex items-center flex-wrap gap-2 capitalize text-xbase lg:text-xl">
              {userData.availability ? "available" : "unavailable"}
            </span>
          </h3>}

        </div>

        {/******************* Basic Information section  *******************/}
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4">
          <h2 className="text-rf-primary text-center lg:text-2xl">Basic Information</h2>

          {/* Gender (only for customers) */}
          {isCustomer && 
            <h3 className="flex items-center gap-x-1">
              <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <BsGenderAmbiguous />
              </span>
              <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Gender: </span>
              <span className="text-xbase lg:text-xl capitalize">{userData.gender ? userData.gender : 'Not Available'}</span>
            </h3>
          }

          {/* Date of Birth (only for customers) */}
          {isCustomer &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <LiaBirthdayCakeSolid />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">D.O.B: </span>
            <span className="text-xbase lg:text-xl">{userData.dob ? userData.dob : 'Not Available'}</span>
          </h3>}

          {/* Subscriber (only for customers) */}
          {isCustomer &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <IoNewspaperOutline />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Newsletter: </span>
            <span className="text-xbase lg:text-xl capitalize">{userData.subscriber ? 'subscribed' : 'non-subscribed'}</span>
          </h3>}

          {/* Verification Status (only for doctors and Administrators) */}
          {isDoctor || isAdmin &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <HiOutlineClipboardDocumentList className="-mb-1" />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Verification Status: </span>
            <span className="flex items-center flex-wrap gap-2 capitalize text-xbase lg:text-xl">
              {userData.isVerified && 
                <div className="flex items-center gap-x-1">
                  verified
                  <RiVerifiedBadgeFill className="fill-rf-secondary size-4 2xmd:size-5"/>
                </div>}
            </span>
          </h3>}

          {/* Speciality (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <PiCertificate className="-mb-1" />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Speciality: </span>
            <div className="flex items-center flex-wrap gap-2 capitalize">
              {userData.speciality.length > 0 ? (
                // In case of not speciality provided, default to "all"
                <>
                  {userData.speciality.map((speciality, idx) => (
                    <Link key={idx} to={`../our-doctors?speciality=${speciality}`}>
                      <span className="text-xbase font-light lg:text-xl bg-rf-primary-200/30 rounded-sm px-2 border border-rf-primary hover:shadow-rf-direct-300">{speciality}</span>
                    </Link>
                  ))}
                </>
              ) : (
              <Link to='../our-doctors?speciality=all'>
                <span className="text-xbase font-light lg:text-xl bg-rf-primary-200/30 rounded-sm px-2 border border-rf-primary hover:shadow-rf-direct-300">all</span>
              </Link>
              )}
            </div>
          </h3>}

          {/* Experience (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <RiUserStarLine />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Experience: </span>
            <span className="text-xbase lg:text-xl capitalize">{userData.experience ? `${userData.experience} year` : 'Not Available'}</span>
          </h3>}

          {/* Degree (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <SlBadge className="-mb-1" />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Degree: </span>
            <div className="flex items-center flex-wrap gap-2 capitalize">
              {userData.degree ? userData.degree.map((degree, idx) => (
                // ensures the comma is added only if the current degree is not the last one
                <span key={idx} className="text-xbase lg:text-xl">{degree}{(idx !== (userData.degree && userData.degree.length - 1)) && ","}</span>
              )) :
                <span className="text-xbase lg:text-xl">Not Available</span>
              }
            </div>
          </h3>}

          {/* Fee (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <RiMoneyDollarCircleLine />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Fee: </span>
            <span className="text-xbase lg:text-xl capitalize">{userData.fee ? `$${userData.fee}` : 'Not Available'}</span>
          </h3>}

        </div>
      </Wrapper>

      {/*********************** Action Buttons ***********************/}
      <Wrapper className="[&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-y-4 min-[482px]:[&>div]:grid-cols-2 min-[482px]:[&>div]:gap-x-1 min-[932px]:[&>div]:grid-cols-4 sm:[&>div]:gap-x-4 min-[1024px]:[&>div]:grid-cols-2 xl:[&>div]:grid-cols-4" as={'section'}>

        {/* Edit details button*/}
        <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
          <Link to="edit-profile" className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
            <span className="xl:text-xbase lg:text-xl">Edit</span>
          </Link>
        </SlideInUp>

        {/* Change password button*/}
        <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
          <Link to="change-password" className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
            <span className="xl:text-xbase lg:text-xl">Change Password</span>
          </Link>
        </SlideInUp>

        {/* Delete Account button*/}
        <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
          <button className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
            <span className="xl:text-xbase lg:text-xl">Delete Account</span>
          </button>
        </SlideInUp>

        {/* Logout button*/}
        <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
          <Link to="/logout" className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
            <span className="xl:text-xbase lg:text-xl">Logout</span>
          </Link>
        </SlideInUp>
      </Wrapper>

    </aside>
  )
}