import { doctorArray } from "~/data/static-data";
import type { Route } from "./+types/doctor-details";
import Wrapper from "~/components/custom-components/Wrapper";
import SlideInLeft from "~/components/custom-components/animations/SlideInLeft";
import SlideInRight from "~/components/custom-components/animations/SlideInRight";
import Logo from "~/components/custom-components/vectors/Logo";
import SlideInUp from "~/components/custom-components/animations/SlideInUp";
import { IoMdEye, IoMdEyeOff  } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import Carousel from "~/components/custom-components/carousels/Carousel";
import { Link, data, redirect } from "react-router";
import BookingFormAdvanced from "~/components/custom-components/forms/BookingFormAdvanced";
import DoctorCard from "~/components/custom-components/cards/DoctorCard";

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
  const relatedDoctorArray = doctorArray.filter(doctor => doctor.speciality.some(speciality => doctorData?.speciality.includes(speciality)) && doctor.id !== doctorId)
  return { doctorData, relatedDoctorArray }
 }

export type FormError = {
  speciality?: string; 
  date?: string; 
  slot?: string
}

export const clientAction = async ({request}: Route.ClientActionArgs) => { 
  const formData = await request.formData()
  const inputData = Object.fromEntries(formData)
  const errors: FormError = {
    speciality: '', date: '', slot: ''
  };
  
  // validation logic
  if (!inputData.speciality) {
    errors.speciality = 'Please select a speciality'
  }
  if (!inputData.date) {
    errors.date = 'Please select an available date'
  }
  if (!inputData.slot) {
    errors.slot = 'Please select an available slot'
  }

  
  // Check if any errors exist
  const hasErrors = Object.values(errors).some((error) => error !== "");

  if (hasErrors) {
    // Return errors + status code
    return data({ errors }, { status: 400 });
  }

  // Post data to API or handle booking logic
  console.log(inputData)

  // else, return success + errors as undefined
  return redirect('../our-doctors')

 }

export default function DoctorDetails({loaderData, actionData}: Route.ComponentProps) {
  const { doctorData, relatedDoctorArray } = loaderData;
  if(!doctorData || !relatedDoctorArray) return null;
  const errors = actionData?.errors
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
          {/************************************ Availabele Slot booking box ************************************/}
          <SlideInRight className="flex flex-col gap-y-4 xmd:w-full 2xmd:gap-y-7">
            <Wrapper className="border border-rf-grey-100/40 rounded-md [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4">
              <BookingFormAdvanced doctorData={doctorData} errors={errors}/>
            </Wrapper>
          </SlideInRight>
        </div>
      </Wrapper>

      {/****************************************** Related Doctors section ***********************************************/}
      {/* only show this section when there is atleast one related doctor present with same speciality other than the current doctor */}
      {relatedDoctorArray.length > 0 &&
        <Wrapper
          as={"section"}
          className="bg-rf-white-100 py-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-8 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:py-20 xl:[&>div]:gap-y-20"
        >
          <div className="w-full flex flex-col gap-y-4">
            <div className="flex flex-col">
              {/* title text */}
              <h3 className="font-flavours text-3xl lg:text-4xl text-center capitalize">Related
                <div className="inline">
                  <span className="text-rf-primary"> d</span><span className="text-rf-secondary">o</span><span className="text-rf-primary-200">c</span><span className="text-rf-secondary">t</span><span className="text-rf-primary-200">o</span><span className="text-rf-primary">r</span><span className="text-rf-secondary">s</span>
                </div>
              </h3>
              {/* subtitle text with icons */}
              <div className="w-full flex items-center justify-center gap-x-8">
                <span className="hidden min-[360px]:block text-rf-primary rotate-90 text-6xl">&#119171;</span>
                <h2 className="text-rf-secondary text-center text-sm lg:text-xl">Extensive list of trusted doctors.</h2>
                <span className="hidden min-[360px]:block text-rf-primary rotate-90 text-6xl">&#119171;</span>
              </div>
            </div>
            {relatedDoctorArray.length > 3 ?
                // Show Doctor carousel when related doctors are more than 3
                <Carousel carousel={relatedDoctorArray}/> :
                // otherwise default to normal column wise look for the related doctors
                <ul className="grid grid-cols-1 py-10 gap-4 xs:grid-cols-2 xs:py-12 md:w-full md:h-fit md:ms-auto 2xmd:flex justify-center 2xmd:[&>div]:w-[20%]">
                  {relatedDoctorArray.map(doctor => (
                    <SlideInUp key={doctor.id} inView={false}>
                      <Link to={`../${doctor.id}`} relative="path">
                        <DoctorCard doctorData={doctor} />
                      </Link>
                    </SlideInUp>
                  ))}
                </ul>
              }          
          </div>
        </Wrapper>
      }
    </main>
  )
}