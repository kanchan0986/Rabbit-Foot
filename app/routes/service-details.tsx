import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/service-details";
import { servicesArray } from "~/data/static-data";
import Wrapper from "~/components/custom-components/Wrapper";
import SlideInLeft from "~/components/custom-components/animations/SlideInLeft";
import { twMerge } from "tailwind-merge";
import SlideInRight from "~/components/custom-components/animations/SlideInRight";
import Logo from "~/components/custom-components/vectors/Logo";
import ServiceNicheCard from "~/components/custom-components/cards/ServiceNicheCard";
import { ServiceDetailsSummary } from "~/components/custom-components/ServiceDetailsSummary";
import SpacerVector from "~/components/custom-components/vectors/SpacerVector";
import heart from "~/assets/Heart.png";
import ServiceHighlightsCard from "~/components/custom-components/cards/ServiceHighlightsCard";

export function meta({loaderData, location}: Route.MetaArgs) {
    const { servicesData } = loaderData ?? {}
  return [
    { title: `Rabbit Foot | ${servicesData ? tabLabel({ data: servicesData }) : tabLabel({data: {...location, type: 'location'}})}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({params} : Route.ClientLoaderArgs) => { 
    const serviceId = params["service-id"]
  // make api call
  const servicesData = servicesArray.find(service => service.id === serviceId)
  return { servicesData };
 }

export default function ServiceDetails({loaderData}: Route.ComponentProps) {
    const { servicesData } = loaderData
  return (
    <main className="overflow-hidden">
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
              <div style={{backgroundImage: `url(${servicesData?.imageUrl})`}} className={twMerge("relative size-full bg-cover bg-no-repeat bg-center rounded-tr-md rounded-bl-md shadow-rf-direct-100 z-1 min-[360px]:bg-position-[center_top_-4rem] xs:bg-position-[center_top_-6rem] sm:bg-position-[center_top_-8rem]")}/>
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
                  <h1 className='w-full font-flavours text-rf-primary text-center sm:text-start text-4xl xmd:w-auto lg:text-5xl capitalize'>{servicesData?.title}</h1>
                  <h2 className='w-full text-rf-primary text-center sm:text-start text-xl xmd:w-auto lg:text-2xl capitalize'>{servicesData?.subtitle}</h2>
                </div>
              {/* logo at the top right corner */}
              <Logo className="hidden sm:block sm:size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
              </div>
              {/* Service Overview */}
              <div className="flex flex-col gap-y-1">
                <small className="text-rf-secondary text-xl italic capitalize text-center sm:text-start">{servicesData?.overview.title}</small>
                <div className="flex flex-col gap-y-4">
                  {/* Service summary */}
                  {servicesData?.overview.summary && <ServiceDetailsSummary summary={servicesData.overview.summary} />}
                </div>
              </div>
            </Wrapper>
          </SlideInRight>

          {/************************************ Service Niche box ************************************/}
          {servicesData?.serviceNiche && servicesData.serviceNiche.length > 0 && 
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
        <div className={`w-full flex flex-col overflow-hidden active:translate-y-0.5 bg-fixed bg-cover bg-no-repeat bg-center`} style={{backgroundImage: `url(${servicesData.highlights.imageUrl})`}}>
            {/* highlights container */}
            <div className={`flex flex-col justify-center gap-y-7 py-6 sm:py-10 xl:min-h-[85vh]`}>
                {/* Heading box */}
                <div className="px-1 flex flex-col">
                  <h2 className="font-flavours capitalize text-rf-primary text-3xl lg:text-4xl text-shadow-lg tracking-wide text-center">{servicesData.highlights.title}</h2>
                  <h3 className="capitalize text-center">{servicesData.highlights.summary}</h3>
                </div>
                {/* highlights card items */}
                <ServiceHighlightsCard serviceHighlights={servicesData.highlights}/>
            </div>        
        </div>
      </Wrapper>}

    </main>
  )
}