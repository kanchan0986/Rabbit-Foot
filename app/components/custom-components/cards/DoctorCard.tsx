import type { Doctor } from "~/data/static-data";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import type { ElementType } from "react";

type DoctorCardProps = {
    doctorData: Doctor;
    as?: ElementType;
}

export default function DoctorCard({doctorData, as: Component = "li" }: DoctorCardProps) {
  return (
    <Component className="flex flex-col shadow-rf-direct-100 rounded-md overflow-hidden h-full hover:shadow-rf-direct-200 active:translate-y-0.5 transition-[shadow_transform] duration-200 ease-in">  
        {/* card image at the top */}
        <div className="w-full h-70 bg-cover bg-no-repeat bg-center 2xs:bg-top 2xs:h-90 xs:h-70 sm:h-90 md:h-60" style={{backgroundImage: `url(${doctorData.imageUrl})`}}/>

        {/* card details at the bottom */}
        <div className="grow flex flex-col gap-y-2 bg-rf-white-100 p-2 min-h-35">
            <div className="flex justify-between align-center">
                {/* availability status ui */}
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
                <small className="">Exp: {doctorData.experience} years</small>
            </div>
            {/* title */}
            <h4 className="capitalize text-xl">Dr. {doctorData.name}</h4>
            {/* speciality */}
            <div className="flex items-center flex-wrap gap-1 capitalize">
                {doctorData.speciality.map((item, idx) => <span key={idx} className="bg-white rounded-sm px-2 border border-rf-primary text-xs">{item}</span>)}
            </div>
        </div>        
    </Component>
  )
}