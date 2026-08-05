import type { ServiceNiche } from "~/data/static-data";
import type { ElementType } from "react";
import { Link } from "react-router";
import SlideInUp from "../animations/SlideInUp";
import { Button } from "~/components/ui/button";

type ServiceNicheCardProps = {
    serviceNicheData: ServiceNiche;
    as?: ElementType;
}

// component to render the service niches within the main service items
export default function ServiceNicheCard({serviceNicheData, as: Component = "li" }: ServiceNicheCardProps) {
  return (
    <Component className="flex flex-col shadow-rf-direct-100 rounded-md overflow-hidden h-full hover:shadow-rf-direct-200 active:translate-y-0.5 transition-[shadow_transform] duration-200 ease-in">  
        {/* card image at the top */}
        <div className="w-full min-h-50 bg-cover bg-no-repeat bg-center 2xs:bg-top" style={{backgroundImage: `url(${serviceNicheData.imageUrl})`}}/>

        {/* card details at the bottom */}
        <div className="grow flex flex-col gap-y-2 bg-rf-white-100 p-2 pb-4 min-h-35">
            {/* title */}
            <h4 className="capitalize font-semibold text-rf-primary text-center text-base lg:text-lg">{serviceNicheData.title}</h4>
            <h5 className="capitalize text-center text-xbase lg:text-md">{serviceNicheData.subtitle}</h5>
            {/* cta button */}
            <SlideInUp delay={0.3} className="self-center rounded-full 2xmd:hover:shadow-rf-direct-100 mt-auto">
              <Link to={serviceNicheData.id}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="rounded-full bg-rf-primary hover:bg-rf-primary-100 hover:text-white capitalize transition-colors ease-in duration-200 2xmd:cursor-pointer px-4 text-xs lg:text-md"
                >
                  Know in details
                </Button>
              </Link>
            </SlideInUp>
        </div>        
    </Component>
  )
}