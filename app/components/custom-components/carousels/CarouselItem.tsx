import type { IconType } from 'react-icons/lib';
import { Button } from '~/components/ui/button';
import { Link } from 'react-router';

export type Card = {
  imageUrl: string;
  icon: IconType;
  title: string;
  subtitle: string;
  details?: string;
  link: string;
  type: 'card';
}

type CarouselItemProps = {
    carouselItem: Card
}

export default function CarouselItem({carouselItem}: CarouselItemProps) {
  return (
    <>
    {(carouselItem.type === 'card') && 
        <>
          <div className={`w-full h-80 bg-cover bg-center bg-no-repeat rounded-t-2xl`} style={{backgroundImage: `url(${carouselItem.imageUrl})`}} />
          <div className="flex h-50 flex-col items-center gap-y-2 -mt-8">
              <carouselItem.icon className='text-rf-white-100 bg-rf-primary p-1 2xs:p-3 rounded-full size-16 border-4 border-rf-white-100'/>
              <span className="text-2xl text-center capitalize font-bold">{carouselItem.title}</span>
              <span className="text-md text-center capitalize">{carouselItem.subtitle}</span>
              <Link to={carouselItem.link} className='mt-auto'><Button className='rounded-full text-rf-white-100 uppercase px-6 hover:cursor-pointer'>Read More</Button></Link>
          </div>
        </>
    }
    </>
  )
}