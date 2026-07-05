import Wrapper from '~/components/custom-components/Wrapper';
import type { Route } from './+types/about-us';
import Sky from '~/components/custom-components/vectors/Sky';
import SlideInLeft from '~/components/custom-components/animations/SlideInLeft';
import SlideInRight from '~/components/custom-components/animations/SlideInRight';
import girl from '~/assets/smiling-girl-2-transparent.png'
import SlideInUp from '~/components/custom-components/animations/SlideInUp';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import SpacerVectorRabitTwoParts from '~/components/custom-components/vectors/SpacerVectorRabitTwoParts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | About Us" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function AboutUs({}: Route.ComponentProps) {
  return (
    <main className="overflow-x-hidden">
      {/*********************************************** Banner section ***********************************************/}
      <Wrapper as={"section"} className="py-10 xs:py-16 relative">
        {/* Animating sky background */}
        <Sky className="fill-rf-primary-200/40"/>
        <div className="relative flex flex-col-reverse gap-y-4 2xmd:flex-row 2xmd:items-center 2xmd:justify-between">
          {/* Left section */}
          <SlideInLeft className="flex flex-col items-center gap-y-2 2xmd:w-2xl 2xmd:flex-row 2xmd:gap-y-7">
            {/* Text content container */}
            <div className="flex flex-col items-center gap-y-2 2xmd:items-start 2xmd:gap-y-7">
              {/* Heading text wrapped under span tags */}
              <span className="text-3xl text-center font-flavours text-rf-primary lg:text-5xl 2xmd:self-start 2xmd:text-start">
                Want to
                <span className="block text-4xl text-rf-primary-100 lg:text-6xl">
                  <span className='text-rf-primary-100'>know </span>
                  <h1 className='inline-block'>
                    <span className="text-rf-primary">A</span><span className="text-rf-secondary">b</span><span className="text-rf-primary-200">o</span><span className="text-rf-secondary">u</span><span className="text-rf-primary-200">t</span><span className="text-rf-primary"> U</span><span className="text-rf-secondary">s</span>
                  </h1>
                  <span className='text-rf-primary-200'>!</span>
                </span>
              </span>

              {/* Description paragraph */}
              <p className="lg:text-xl">
                At our fun and bright pediatric dental office, we treat all of our patients like VIPs. Let’s work together to give your child the healthy, beautiful smile they deserve. Schedule a visit at Rabbit Foot dental today!
              </p>

              {/* Call-to-action button */}
              <SlideInUp delay={0.5}>
                <Link to="/">
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="mt-4 rounded-full bg-rf-primary hover:bg-rf-primary-100 hover:text-white text-sm capitalize  2xmd:hover:shadow-xl 2xmd:cursor-pointer lg:text-xl xl:w-130 xl:py-6"
                  >
                    Book an appointment today!
                  </Button>
                </Link>
              </SlideInUp>
            </div>
          </SlideInLeft>

          {/* Right section - Banner Image */}
          <SlideInRight className="flex justify-center 2xmd:w-1/2 2xmd:justify-end relative">
            {/* responsive semicircle background */}
            <div className='bg-radial-[at_50%_100%] from-rf-primary-400 via-rf-primary to-rf-primary-200 to-80% rounded-t-full absolute bottom-0 right-0 w-full h-30 2xs:w-[90%] 2xs:h-35 xs:h-40 xs:w-2/3 2xs:right-[50%] 2xs:translate-x-[50%] sm:w-1/2 md:w-[40%] 2xmd:bottom-0 2xmd:right-[50%] 2xmd:translate-x-[50%] 2xmd:h-50 2xmd:w-[90%] xl:w-[80%] xl:h-60 xl:right-[50%] xl:translate-x-[60%] 2xl:w-[70%] 2xl:right-0 2xl:translate-x-0'/>
            {/* girl image */}
            <img
              src={girl}
              alt="smiling kid"
              className="relative w-75 bg-cover 2xmd:w-lg xl:w-[80%] 2xl:w-[70%]"
            />
          </SlideInRight>
        </div>
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