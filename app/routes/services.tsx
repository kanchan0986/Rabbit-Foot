import { tabLabel } from '~/helper/tabLabel';
import type { Route } from './+types/services';
import Wrapper from '~/components/custom-components/Wrapper';
import Sky from '~/components/custom-components/vectors/Sky';
import SlideInLeft from '~/components/custom-components/animations/SlideInLeft';
import SlideInUp from '~/components/custom-components/animations/SlideInUp';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import SlideInRight from '~/components/custom-components/animations/SlideInRight';
import SpacerVectorRabitTwoParts from '~/components/custom-components/vectors/SpacerVectorRabitTwoParts';
import Logo from '~/components/custom-components/vectors/Logo';
import heart from '~/assets/Heart.png';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({} : Route.ClientLoaderArgs) => { 
  return null;
 }

export default function Services({}: Route.ComponentProps) {
  return (
    <main className="overflow-hidden">
      {/*********************************************** Summary section ***********************************************/}
      <Wrapper
        as={"section"}
        className="relative py-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:pt-30 xl:pb-20 xl:[&>div]:gap-y-20"
      >
        {/* Animating sky background */}
        <Sky className="fill-rf-primary-200/40"/>
        {/* left section */}
        <div className="flex flex-col xmd:w-full xl:max-w-137.5">
          <SlideInLeft className="flex flex-col relative">
            {/* first image with doctor & patient at top left with pseudo image of leaves on the top right */}
            <div
              className="w-10/12 h-60 bg-cover bg-position-[center_left_25%] bg-no-repeat bg-[url('~/assets/girl_at_clinic_2.jpg')] rounded-tr-2xl rounded-bl-2xl relative
               after:absolute after:bg-[url('~/assets/leaves-right.png')] after:-scale-y-100 after:-right-10 after:-top-10 after:size-12 after:bg-contain after:bg-no-repeat xs:h-90 xs:w-11/12 xs:after:size-18 xs:after:-right-14 xs:after:-top-15 lg:h-110"
            />
            {/* heart image at the bottom left of the first image */}
            <img
              src={heart}
              alt="heart"
              className="w-1/5 -mt-8 ms-4 z-1 xs:-mt-12 xs:ms-8"
            />
          </SlideInLeft>
          {/* second image of the dental office at the bottom right */}
          <SlideInLeft delay={0.1}>
            <div className="w-2/3 h-40 bg-cover bg-[url('~/assets/dental_clinic_6.jpg')] bg-center bg-no-repeat rounded-tr-2xl rounded-bl-2xl border-6 border-white ms-auto mt-[-40%] relative z-1 xs:h-60 lg:h-70" />
          </SlideInLeft>
        </div>
        {/* right section */}
        <SlideInRight className="relative flex flex-col gap-y-4 xmd:w-full 2xmd:gap-y-7">
          <div className="flex justify-center text-center sm:text-start sm:justify-between">
            {/* Heading text wrapped under span tags */}
            <span className="text-3xl font-flavours text-rf-primary lg:text-5xl">
              Look at the
              <span className="block text-4xl text-rf-primary-100 lg:text-6xl">
                <h1 className='inline-block capitalize'>
                  <span className="text-rf-primary">s</span><span className="text-rf-secondary">e</span><span className="text-rf-primary-200">r</span><span className="text-rf-secondary">v</span><span className="text-rf-primary-200">i</span><span className="text-rf-primary">c</span><span className="text-rf-secondary">e</span><span className="text-rf-primary-200">s</span>
                </h1>
                <span className='text-rf-primary text-3xl lg:text-5xl'> we provide</span>
              </span>
            </span>
            {/* logo at the top right corner */}
            <Logo className="hidden sm:block size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
          </div>
          {/* description text */}
          <p className="lg:text-xl">
            We are pediatric dentists and orthodontists proudly serving the greater Las Vegas, NV area.  Thousands of people have come to trust the friendly and honest approach of Children’s Dentistry and Orthodontics along with the easy appointment scheduling, flexible payment plans and convenient office location.
          </p>
          <p className="lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor dolorem expedita sapiente illo iste repellendus animi nesciunt natus ut officia rerum consequuntur odio facilis amet voluptatibus debitis quod, ipsa magnam ratione dignissimos nostrum inventore. Eveniet similique maiores nesciunt, ullam odit voluptate sed amet magni, perferendis delectus, ex necessitatibus dolorem!
          </p>
          {/* cta section */}
          <div className="flex flex-col items-center gap-y-4 mt-8 xs:mt-8 xs:gap-y-8">
            {/* read more button */}
            <SlideInUp delay={0.5}>
              <Link to=".">
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="bg-rf-secondary uppercase min-w-55 rounded-full 2xmd:cursor-pointer 2xmd:hover:shadow-xl lg:text-xl xl:w-130 xl:py-6"
                >
                  Explore
                </Button>
              </Link>
            </SlideInUp>
          </div>
        </SlideInRight>
      </Wrapper>

      {/******************************** Spacer section with decorative vector image ********************************/}
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVectorRabitTwoParts className="[&>path:nth-child(1)]:fill-rf-white-100 [&>path:nth-child(2)]:fill-transparent [&>path:nth-child(3)]:fill-rf-primary-100 [&>path:nth-child(4)]:fill-rf-primary-200"/>
      </Wrapper>

    </main>
  )
}