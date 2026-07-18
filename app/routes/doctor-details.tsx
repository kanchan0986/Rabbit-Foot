import { doctorArray } from "~/data/static-data";
import type { Route } from "./+types/doctor-details";
import Wrapper from "~/components/custom-components/Wrapper";
import SlideInLeft from "~/components/custom-components/animations/SlideInLeft";
import SlideInRight from "~/components/custom-components/animations/SlideInRight";
import Logo from "~/components/custom-components/vectors/Logo";
import SlideInUp from "~/components/custom-components/animations/SlideInUp";
import { IoMdEye, IoMdEyeOff  } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router";

export function meta({loaderData}: Route.MetaArgs) {
  // if the loaderData is null or undefined fallback to empty object
  const { doctorData } = loaderData ?? {}
  // regex to find the first letter of each word and turn it to uppercase
  const capitalizedName = doctorData?.name.replace(/\b\w/g, char => char.toUpperCase())
  return [
    { title: `Rabbit Foot | ${doctorData ? 'Dr. ' + capitalizedName : 'Doctor Details'}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = async ({params}: Route.ClientLoaderArgs) => { 
  const doctorId = params["doctor-id"];
  // fetch data from api
  const doctorData = doctorArray.find(doctor => doctor.id === doctorId);
  return { doctorData }
 }

export default function DoctorDetails({loaderData}: Route.ComponentProps) {
  const { doctorData } = loaderData;
  if(!doctorData) return null;
  return (
    <main className="overflow-hidden">
      {/*********************************************** Introduction section ***********************************************/}
      <Wrapper
        as={"section"}
        className="bg-rf-white-100 py-12 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xmd:[&>div]:grid xmd:[&>div]:grid-cols-[40%_60%] xl:py-20 xl:[&>div]:gap-y-20"
      >
        {/* left section image box upto 831px */}
        <SlideInLeft className="flex flex-col items-center justify-center xmd:hidden">
            {/* styled border around the image */}
            <div className={twMerge("relative w-full h-90 before:absolute before:-inset-1 before:size-20 before:bg-rf-primary after:absolute after:-right-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0 min-[545px]:h-110 min-[700px]:h-120 min-[720px]:h-130 ")}>
              {/* responsive image of the doctor */}
              <div style={{backgroundImage: `url(${doctorData.imageUrl})`}} className={twMerge("relative size-full bg-cover bg-no-repeat bg-center rounded-tr-md rounded-bl-md shadow-rf-direct-100 z-1 min-[360px]:bg-position-[center_top_-4rem] xs:bg-position-[center_top_-6rem] sm:bg-position-[center_top_-8rem]")}/>
            </div>
        </SlideInLeft>
        {/* left section image box from 832px and above */}
        <SlideInLeft className="hidden flex-col items-center justify-center xmd:flex h-auto">
            {/* styled border around the image */}
            <div className={twMerge("relative w-full h-full before:absolute before:-inset-1 before:size-20 before:bg-rf-primary after:absolute after:-right-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0")}>
              {/* responsive image of the doctor */}
              <div style={{backgroundImage: `url(${doctorData.imageUrl})`}} className={twMerge("relative size-full bg-cover bg-no-repeat bg-center rounded-tr-md rounded-bl-md shadow-rf-direct-100 z-1 2xl:bg-position-[center_top_20%]")}/>
            </div>
        </SlideInLeft>

        {/* right section description box */}
        <div className="flex flex-col gap-y-8 xs:gap-y-16 xmd:gap-y-8 ">
          {/***************************************** Doctor details box *****************************************/}
          <SlideInRight className="flex flex-col gap-y-4 2xmd:gap-y-7">
            <Wrapper className="border border-rf-grey-100/40 rounded-md [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4">
              {/* title box */}
              <div className="flex justify-center sm:justify-between">
                <h1 className='self-end w-full font-flavours text-rf-primary text-center sm:text-start text-3xl xmd:w-auto lg:text-4xl capitalize'>Dr. {doctorData.name}</h1>
              {/* logo at the top right corner */}
              <Logo className="hidden sm:block sm:size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
              </div>
              {/* Details box */}
              <div className="flex flex-col gap-4">
                {/* availability */}
                <div className="self-center flex justify-between gap-x-4 max-w-4xs sm:self-start">
                  {doctorData.availability ?
                    <div className="flex gap-x-1 items-center capitalize">
                      <IoMdEye className="size-5 fill-rf-secondary"/>
                      <small className="text-rf-secondary">available</small>
                    </div> :
                    <div className="flex gap-x-1 items-center capitalize">
                      <IoMdEyeOff className="size-5 fill-rf-grey-100/50"/>
                      <small className="text-rf-grey-100/50">not available</small>
                    </div>
                  }
                  <small>|</small>
                  {/* experience */}
                  <small className="">Exp: {doctorData.experience} years</small>
                </div>
                {/* Specialities */}
                <div className="flex items-center flex-wrap gap-2 capitalize">
                  {doctorData.speciality.map((item, idx) => <Link to={`../?speciality=${item}`} relative="path" key={idx} className=" bg-rf-primary-200/30 rounded-sm px-2 border border-rf-primary hover:shadow-rf-direct-300 text-xs">{item}</Link>)}
                </div>
              </div>
              {/* About box */}
              <div className="flex flex-col gap-y-1">
                <small className="text-rf-primary">About</small>
                <div className="flex flex-col gap-y-4">
                  {doctorData.details.map((details, idx) => (
                    <SlideInUp delay={idx * 0.1} key={idx}>
                      <p className="text-xbase lg:text-xl">{details}</p>
                  </SlideInUp>
                  ))}
                </div>
              </div>
              {/* Appointment fee */}
              <span className=""><small className="text-rf-primary">Appointment Fee:</small> <small className="font-bold">${doctorData.fee}</small></span>
            </Wrapper>
          </SlideInRight>
        </div>
      </Wrapper>
    </main>
  )
}


