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

        {/* right section description box */}
        <div className="flex flex-col gap-y-8 xs:gap-y-16 xmd:gap-y-8 ">
          {/***************************************** Service details *****************************************/}
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


    </main>
  )
}