import type { Doctor, Service, ServiceNiche } from "~/data/static-data"
import Wrapper from "./Wrapper";
import SlideInLeft from "./animations/SlideInLeft";
import { twMerge } from "tailwind-merge";
import SlideInRight from "./animations/SlideInRight";
import { ServiceDetailsSummary } from "./ServiceDetailsSummary";
import ServiceNicheCard from "./cards/ServiceNicheCard";
import SpacerVector from "./vectors/SpacerVector";
import Logo from "./vectors/Logo";
import ServiceHighlightsCard from "./cards/ServiceHighlightsCard";
import Sky from "./vectors/Sky";
import { AccordionFaq } from "./AccordionFaq";
import Carousel from "./carousels/Carousel";
import SlideInUp from "./animations/SlideInUp";
import { Link } from "react-router";
import DoctorCard from "./cards/DoctorCard";
import { FaStethoscope } from "react-icons/fa6";
import heart from "~/assets/Heart.png";
import CustomError from "./CustomError";

type ServiceDetailsAndSubDetailsProps = {
    servicesData?: Service | ServiceNiche;
    relatedDoctorsData: Doctor[];
}

export default function ServiceDetailsAndSubDetails({servicesData, relatedDoctorsData}: ServiceDetailsAndSubDetailsProps) {
  if(!servicesData) return <CustomError>Page Not Found!</CustomError>;
  const isService = servicesData?.type === "service";
  return (
    <main className="overflow-hidden relative">
      {/*********************************************** Overview section ***********************************************/}
      <Wrapper
        as={"section"}
        className="bg-rf-white-100 py-12 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xmd:[&>div]:grid xmd:[&>div]:grid-cols-[40%_60%] xl:py-20 xl:[&>div]:gap-y-20"
        >
        {/* left section image box upto 831px */}
        <SlideInLeft className="flex flex-col items-center justify-center xmd:hidden">
            {/* styled border around the image */}
            <div className={twMerge("relative w-full h-90 before:absolute before:-inset-1 before:size-20 before:bg-rf-primary after:absolute after:-right-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0 min-[545px]:h-110 min-[700px]:h-120 min-[720px]:h-130 ")}>
              {/* responsive image of the doctor */}
              <div style={{backgroundImage: `url(${servicesData?.imageUrl})`}} className={twMerge("relative size-full bg-cover bg-no-repeat bg-top rounded-tr-md rounded-bl-md shadow-rf-direct-100 z-1")}/>
            </div>
        </SlideInLeft>
        {/* left section image box from 832px and above */}
        <SlideInLeft className="hidden flex-col items-center justify-center xmd:flex h-auto">
            {/* styled border around the image */}
            <div className={twMerge("relative w-full h-full before:absolute before:-inset-1 before:size-20 before:bg-rf-primary after:absolute after:-right-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0")}>
              {/* responsive image of the doctor */}
              <div style={{backgroundImage: `url(${servicesData?.imageUrl})`}} className={twMerge("relative size-full bg-cover bg-no-repeat bg-center rounded-tr-md rounded-bl-md shadow-rf-direct-100 z-1 2xl:bg-position-[center_top_20%]")}/>
            </div>
        </SlideInLeft>

        {/* right section summary box */}
        <div className="flex flex-col gap-y-8 xs:gap-y-16 xmd:gap-y-8 ">
          {/***************************************** Service description box *****************************************/}
          <SlideInRight className="flex flex-col gap-y-4 2xmd:gap-y-7">
            <Wrapper className="border border-rf-grey-100/40 rounded-md [&>div]:flex [&>div]:flex-col [&>div]:gap-y-6">
              {/* title box */}
              <div className="flex justify-center sm:justify-between">
                <div className="self-end flex flex-col gap-y-2">
                  {/* if the type is service then render its title else render sub-service's title */}
                  <h1 className='w-full font-flavours text-rf-primary text-center sm:text-start text-4xl xmd:w-auto lg:text-5xl capitalize'>{isService ? servicesData.title : servicesData?.title}</h1> 
                  <h2 className='w-full text-rf-primary text-center sm:text-start text-xl xmd:w-auto lg:text-2xl capitalize'>{servicesData?.subtitle}</h2>
                </div>
              {/* logo at the top right corner */}
              <Logo className="hidden sm:block sm:size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
              </div>
              {/* Service Overview */}
              <div className="flex flex-col gap-y-1">
                <small className="text-rf-secondary text-xl italic capitalize text-center sm:text-start">{isService ? servicesData.overview.title : servicesData?.summary?.title}</small>
                <div className="flex flex-col gap-y-4">
                  {/* if it is a service then render Service summary */}
                  {isService && servicesData.overview.summary && <ServiceDetailsSummary summary={servicesData.overview.summary} />}
                  {/* if it is a sub-service then render Sub-Service summary */}
                  {!isService && servicesData?.summary?.summary && <ServiceDetailsSummary summary={servicesData.summary.summary} />}
                </div>
              </div>
            </Wrapper>
          </SlideInRight>

          {/************************************ Service Niche box ************************************/}
          {/* only show if it is a service and has niche and niche is not empty */}
          {isService && servicesData.serviceNiche && servicesData.serviceNiche.length > 0 && 
          <SlideInRight className="flex flex-col gap-y-4 xmd:w-full 2xmd:gap-y-7">
            <Wrapper className="border pb-2 border-rf-grey-100/40 rounded-md [&>div]:flex [&>div]:flex-col [&>div]:gap-y-5 sm:pb-8">
              <span className="text-rf-primary text-center sm:text-start text-xl xmd:w-auto lg:text-2xl capitalize">Our {servicesData.title} services</span>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-4">
                {servicesData.serviceNiche.map(service => (
                  <ServiceNicheCard key={service.id} serviceNicheData={service}/>
                ))}
            </div>
            </Wrapper>
          </SlideInRight>}

        </div>
      </Wrapper>

      {/******************************** Spacer section with decorative vector image ********************************/}
      {servicesData?.showcase && 
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVector className="[&>path:nth-child(2)]:fill-rf-primary-200/50 [&>path:nth-child(1)]:fill-rf-white-100"/>
      </Wrapper>}

      {/***************************************** Showcase section *****************************************/}
      {servicesData?.showcase && 
      <Wrapper
        as={"section"}
        className="bg-rf-primary-200/50 py-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:py-40 xl:[&>div]:gap-y-20"
      >
       <div className="w-full flex flex-col gap-y-10 xs:gap-y-16 xl:gap-y-20">
        {/* team content box */}
        <div className="flex flex-col-reverse items-center gap-y-4 xmd:flex-row">
          {/* left section */}
          <SlideInLeft className="flex flex-col gap-y-4 xmd:w-full 2xmd:gap-y-7">
            {/* title text */}
            <h2 className="font-flavours text-rf-secondary text-center text-3xl xmd:text-start lg:text-4xl">{servicesData.showcase.title}</h2>
            {/* description text */}
            <ServiceDetailsSummary summary={servicesData.showcase.summary} className="xmd:max-w-[85%]" />
          </SlideInLeft>
          {/* right section */}
          <div className="flex flex-col w-full ">
            <SlideInRight className="flex flex-col relative">
              {/* image of the group of team members with pseudo image of leaves on the top right */}
              <div
                style={{backgroundImage: `url('${servicesData.showcase.imageUrl}')`}}
                className="w-11/12 h-60 bg-cover bg-center rounded-tr-2xl rounded-bl-2xl relative
                 after:absolute after:bg-[url('~/assets/leaves-right.png')] after:-scale-y-100 after:-right-10 after:-top-10 after:size-12 after:bg-contain after:bg-no-repeat xs:h-90 xs:after:size-18 xs:after:-right-14 xs:after:-top-15 lg:h-110"
              />
              {/* heart image at the bottom left of the team member image */}
              <img
                src={heart}
                alt="heart"
                className="w-1/5 -mt-6 ms-4 z-1 2xs:size-12 xs:size-14 xs:-mt-8 sm:size-16 2xmd:size-18 2xmd:-mt-10 "
              />
            </SlideInRight>
          </div>
        </div>               
       </div>
      </Wrapper>}

      {/******************************** Spacer section with decorative vector image ********************************/}
      {(servicesData?.expectation) &&
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVector className={servicesData?.showcase ? '[&>path:nth-child(2)]:fill-white [&>path:nth-child(1)]:fill-rf-primary-200/50' : '[&>path:nth-child(2)]:fill-rf-primary-200/50 [&>path:nth-child(1)]:fill-rf-white-100'}/>
      </Wrapper>}

      {/***************************************** Expectations section *****************************************/}

      {servicesData?.expectation && 
      <Wrapper as={"section"} className={`${servicesData?.showcase ? 'bg-white' : 'bg-rf-primary-200/50'} py-10 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-y-8 xs:py-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xmd:[&>div]:items-stretch xl:py-30`}>
        {/* left section */}
        <SlideInLeft delay={0.6} className="flex w-full flex-col items-center justify-center xmd:h-auto xl:max-w-137.5 2xl:max-w-[35%]">
            {/* styled border around the image */}
            <div className="relative h-[50vh] w-full before:absolute before:-inset-1 before:size-20 before:bg-rf-primary after:absolute after:-right-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0 sm:h-[90vh] md:h-screen xmd:h-full">
              {/* responsive image of the doctor */}
              <div style={{backgroundImage: `url(${servicesData.expectation.imageUrl})`}} className="relative size-full bg-cover bg-no-repeat bg-center rounded-tr-2xl rounded-bl-2xl shadow-rf-direct-100 z-1"/>
            </div>
        </SlideInLeft>
        {/* right section */}
        <SlideInRight className="flex flex-col gap-y-4 xmd:w-full xmd:h-full xmd:py-4 2xmd:gap-y-7 2xmd:py-8">
            {/* Heading box */}
            <div className="flex justify-center sm:justify-between">
              <div className="self-center flex flex-col gap-y-2 text-center sm:text-start">
                {/* title text */}
                <h2 className='font-flavours capitalize text-rf-primary text-3xl lg:text-4xl'>{servicesData.expectation.title}</h2>
                {/* sub-title text */}
                <h3 className='text-rf-secondary text-xl lg:text-2xl'>{servicesData.expectation.subtitle}</h3>
              </div>
              {/* logo at the top right corner */}
              <Logo className="hidden sm:block sm:size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
            </div>
          {/* description text */}
          <div className="flex flex-col gap-y-4">
            {/* title text */}
            <h2 className="font-flavours text-rf-secondary text-center text-3xl xmd:text-start lg:text-4xl">{servicesData.expectation.description.title}</h2>
            {servicesData.expectation.description.summary && <ServiceDetailsSummary summary={servicesData.expectation.description.summary}/>}
          </div>
        </SlideInRight>
      </Wrapper>}

      {/***************************************** Highlights section *****************************************/}

      {servicesData?.highlights && 
      <Wrapper as={'section'} className="p-0 [&>div]:w-full [&>div]:flex [&>div]:flex-col [&>div]:items-center gap-y-8 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xmd:[&>div]:items-stretch">
        {/* sets background image if available */}
        <div className={`w-full flex flex-col overflow-hidden active:translate-y-0.5 bg-fixed bg-cover bg-no-repeat bg-center`} style={{backgroundImage: `url(${servicesData?.highlights?.imageUrl})`}}>
            {/* highlights container */}
            <div className={`flex flex-col justify-center gap-y-7 py-6 sm:py-10 xl:min-h-[85vh]`}>
                {/* Heading box */}
                <div className="px-1 flex flex-col gap-4">
                  <h2 className="font-flavours capitalize text-rf-primary text-3xl lg:text-4xl text-shadow-lg tracking-wide text-center">{servicesData.highlights.title}</h2>
                  <h3 className="self-center capitalize text-center max-w-10/12 text-rf-primary">{servicesData.highlights.summary}</h3>
                </div>
                {/* highlights card items */}
                <ServiceHighlightsCard serviceHighlights={servicesData.highlights}/>
            </div>        
        </div>
      </Wrapper>}

      {/******************************** Spacer section with decorative vector image ********************************/}
      {(servicesData?.showcase && !servicesData?.expectation && !servicesData?.highlights && servicesData.faq) &&
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVector className="[&>path:nth-child(2)]:fill-white [&>path:nth-child(1)]:fill-rf-primary-200/50"/>
      </Wrapper>}

      {/********************************************* FAQ section *********************************************/}

      {servicesData?.faq &&
      <Wrapper as={'section'} className="relative py-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-6 xs:py-10 xs:[&>div]:gap-y-10 xmd:[&>div]:gap-20 xl:py-20">
        {/* Animating sky background */}
        <Sky className="fill-rf-primary-200/40"/>
        {servicesData.faq.length > 0 && 
        <div className="relative flex flex-col items-center gap-4 xs:gap-10 xmd:gap-15">
          <h2 className="font-flavours capitalize text-rf-primary text-3xl lg:text-4xl text-shadow-lg tracking-wide text-center">Frequently Asked Questions</h2>
          <AccordionFaq items={servicesData.faq}/>
        </div>}
      </Wrapper>}

      {/******************************** Spacer section with decorative vector image ********************************/}
      {(servicesData?.showcase && !servicesData?.expectation && !servicesData?.highlights && !servicesData?.faq) &&
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVector className="[&>path:nth-child(2)]:fill-white [&>path:nth-child(1)]:fill-rf-primary-200/50"/>
      </Wrapper>}

      {/****************************************** Related Doctors section ***********************************************/}
      {/* only show this section when there is atleast one related doctor present with same speciality other than the current doctor */}
      {relatedDoctorsData.length > 0 &&
        <Wrapper
          as={"section"}
          className="relative py-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-8 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:py-15 xl:[&>div]:gap-y-15"
          id="related-doctors"
        >
          {/* Animating sky background */}
          <Sky className="fill-rf-primary-200/40"/>
          <div className="relative w-full flex flex-col gap-y-4">
            <div className="flex flex-col">
              {/* title text */}
              <h3 className="font-flavours text-3xl lg:text-4xl text-center capitalize text-rf-primary-200">Related
                <div className="inline">
                  <span className="text-rf-primary"> d</span><span className="text-rf-secondary">o</span><span className="text-rf-primary-200">c</span><span className="text-rf-secondary">t</span><span className="text-rf-primary-200">o</span><span className="text-rf-primary">r</span><span className="text-rf-secondary">s</span>
                </div>
              </h3>
              {/* subtitle text with icons */}
              <div className="w-full flex items-center justify-center gap-x-8">
                <span className="hidden min-[360px]:block text-rf-primary rotate-90 text-6xl">&#119171;</span>
                <h2 className="text-rf-secondary text-center italic text-sm lg:text-xl">Extensive list of trusted doctors.</h2>
                <span className="hidden min-[360px]:block text-rf-primary rotate-90 text-6xl">&#119171;</span>
              </div>
            </div>
            {relatedDoctorsData.length > 3 ?
                // Show Doctor carousel when related doctors are more than 3
                <Carousel carousel={relatedDoctorsData}/> :
                // otherwise default to normal column wise look for the related doctors
                <ul className="grid grid-cols-1 py-10 gap-4 xs:grid-cols-2 xs:py-12 md:w-full md:h-fit md:ms-auto 2xmd:flex justify-center 2xmd:[&>div]:w-[20%]">
                  {relatedDoctorsData.map(doctor => (
                    <SlideInUp key={doctor.id} inView={false} className="shadow-rf-direct-100 rounded-md hover:shadow-rf-direct-200 active:translate-y-0.5 transition-[shadow_transform] duration-200 ease-in">
                      <Link to={`/our-doctors/${doctor.id}`} relative="path">
                        <DoctorCard doctorData={doctor} />
                      </Link>
                    </SlideInUp>
                  ))}
                </ul>
              }          
          </div>
        </Wrapper>
      }

      {/*********************************** Scroll to Related doctors button ***********************************/}

      <Link to='./#related-doctors'  className="py-2 px-4 bg-rf-primary shadow-rf-direct-100 fixed h-auto w-fit -right-35 bottom-10 z-1 flex items-center justify-center rounded-l-full hover:-translate-x-35 transition-transform ease-in-out duration-300">
        <div className="flex items-center justify-center gap-x-3 text-white">
          <FaStethoscope className="fill-white size-5" />
          <span>Related Doctors</span>
        </div>
      </Link>

    </main>
  )
}