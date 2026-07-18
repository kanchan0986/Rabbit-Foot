import type { IconType } from 'react-icons/lib';
import { Button } from '~/components/ui/button';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { ImQuotesLeft } from "react-icons/im";
import Ratings from '../Ratings';
import type { Doctor } from '~/data/static-data';
import DoctorCard from '../cards/DoctorCard';

export type Card = {
  imageUrl: string;
  icon: IconType;
  title: string;
  subtitle: string;
  details?: string;
  link: string;
} & { readonly type: 'card'}

export type Testimonial = {
  imageUrl: string;
  name: string;
  role: string;
  organization?: string;
  details: string;
  rating: number;
} & { readonly type: 'testimonial'}

export type Gallery = {
  imageUrl: string;
} & { readonly type: 'gallery'}

type CarouselItemProps = {
    carouselItem: Card | Testimonial | Gallery | Doctor
}

export default function CarouselItem({carouselItem}: CarouselItemProps) {
  return (
    <>
    {(carouselItem.type === 'card') && 
        <>
          <div className="w-full h-80 bg-cover bg-center bg-no-repeat rounded-t-2xl" style={{backgroundImage: `url(${carouselItem.imageUrl})`}} />
          <div className="flex h-50 flex-col items-center gap-y-2 -mt-8">
              <carouselItem.icon className='text-rf-white-100 bg-rf-primary p-1 2xs:p-3 rounded-full size-16 border-4 border-rf-white-100'/>
              <span className="text-2xl text-center capitalize font-bold">{carouselItem.title}</span>
              <span className="text-md text-center capitalize">{carouselItem.subtitle}</span>
              <Link to={carouselItem.link} className='mt-auto'><Button className='rounded-full text-rf-white-100 uppercase px-6 hover:cursor-pointer'>Read More</Button></Link>
          </div>
        </>
    }
    {(carouselItem.type === 'testimonial') && 
        <>
          <div className="flex justify-between items-center">
            <ImQuotesLeft className='size-15 fill-rf-primary-200/30'/>
            <FcGoogle className='size-8'/>
          </div>
          <Ratings star={carouselItem.rating} className='my-4' />
          <p className="mb-4">{carouselItem.details}</p>
          <div className="grid grid-cols-[1fr_4fr] items-center gap-x-4 mt-auto">
            <div className="size-14 outline-offset-2 outline outline-rf-primary bg-cover bg-center bg-no-repeat rounded-full" style={{backgroundImage: `url(${carouselItem.imageUrl})`}} />
            <div className="flex flex-col mb-4">
              <h3 className="font-bold text-rf-primary">{carouselItem.name}</h3>
              <span className="text-xs"><span className='italic'>{carouselItem.role}</span>{carouselItem.organization && <> | {<span className='text-rf-secondary'>{carouselItem.organization}</span>}</>}</span>
            </div>
          </div>
        </>
    }
    {(carouselItem.type === 'gallery') && 
        <div className="overflow-hidden rounded-2xl border-2 group-active:border-rf-white-100 group-hover:border-rf-white-100">
          <div className="w-full h-90 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in grayscale-0 lg:grayscale-100 group-active:grayscale-0 group-active:scale-110 group-hover:grayscale-0 group-hover:scale-110" style={{backgroundImage: `url(${carouselItem.imageUrl})`}} />
        </div>
    }
    {(carouselItem.type === 'doctor') && 
        <Link to={`../${carouselItem.id}`} relative='path'>
          <DoctorCard doctorData={carouselItem} as={"div"}/>
        </Link>
    }
    </>
  )
}