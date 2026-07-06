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
import Logo from '~/components/custom-components/vectors/Logo';
import { FaClipboardCheck, FaRegCircle } from 'react-icons/fa6';
import { funToKnowFacts, goodToKnowFacts } from '../../static-data';
import SpacerVector from '~/components/custom-components/vectors/SpacerVector';
import SpacerVectorDoubleOrange from '~/components/custom-components/vectors/SpacerVectorDoubleOrange';
import FadeIn from '~/components/custom-components/animations/FadeIn';
import BookingForm from '~/components/custom-components/forms/BookingForm';
import heart from '~/assets/Heart.png';

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

      {/*********************************************** Introduction section ***********************************************/}
      <Wrapper
        as={"section"}
        className="bg-rf-white-100 pt-10 pb-0 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:pt-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:pt-40 xl:[&>div]:gap-y-20"
      >
        {/* left section */}
        <SlideInLeft className="flex flex-col items-center justify-center xmd:w-full xl:max-w-137.5 2xl:max-w-[35%]">
            {/* styled border around the image */}
            <div className="relative w-10/12 h-60 before:absolute before:-inset-1 before:size-20 before:bg-rf-primary after:absolute after:-right-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0 xs:h-90 xs:w-11/12 lg:h-150">
              {/* responsive image of the doctor */}
              <div className="relative size-full bg-cover bg-no-repeat bg-center bg-[url('~/assets/dentist_main.jpg')] rounded-tr-2xl rounded-bl-2xl shadow-rf-direct-100 z-1 min-[360px]:bg-position-[center_top_-4rem] xs:bg-position-[center_top_-6rem] sm:bg-position-[center_top_-8rem] xmd:bg-position-[center_top_-2rem]"/>
            </div>
        </SlideInLeft>
        {/* right section */}
        <SlideInRight className="flex flex-col gap-y-4 xmd:w-full 2xmd:gap-y-7">
          <div className="flex justify-center sm:justify-between">
            {/* title text */}
              <h2 className='self-center w-full font-flavours text-rf-primary text-center text-3xl xmd:w-auto lg:text-4xl'>Dr. Steven Anderson</h2>
            {/* logo at the top right corner */}
            <Logo className="hidden sm:block sm:size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
          </div>
          {/* description text */}
          <div className="flex flex-col gap-y-4">
            <SlideInUp delay={0.1}>
              <p className="text-xbase lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium voluptas cum molestiae sequi voluptatum tenetur, optio reprehenderit vero animi ullam officia repellat earum repudiandae nihil non exercitationem nam sunt amet vel perspiciatis. Veritatis corrupti impedit sunt dolore ipsum at labore quos molestiae quisquam eos, laboriosam rerum exercitationem, architecto iure
              </p>
            </SlideInUp>
            <SlideInUp delay={0.2}>
              <p className="text-xbase lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, labore? Quam pariatur voluptate, est fuga nostrum similique iure repellat, voluptatum eaque voluptas, iusto molestias! Obcaecati voluptas, odit natus modi sit, laborum assumenda est nobis, minima deserunt ea? Inventore, eaque ea.
              </p>
            </SlideInUp>
            <SlideInUp delay={0.3}>
              <p className="text-xbase lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sequi id vel commodi vero consequuntur aperiam est dignissimos explicabo possimus suscipit animi? Cum, error quo!
              </p>
            </SlideInUp>
          </div>
        </SlideInRight>
      </Wrapper>

      {/*********************************************** Facts section ***********************************************/}
      <Wrapper
        as={"section"}
        className="bg-rf-white-100 py-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:py-14 xl:[&>div]:gap-y-20"
      >
        {/* left section with styled border around the fact box */}
        <SlideInLeft className='relative before:absolute before:-inset-1 before:size-20 before:bg-rf-primary after:absolute after:-right-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0 xl:w-full'>
          {/* fact box */}
          <div className="flex flex-col gap-y-4 overflow-hidden xmd:w-full bg-white p-4 relative size-full rounded-tr-2xl rounded-bl-2xl z-1">
            {/* title text */}
            <h2 className="font-flavours text-rf-primary text-center text-2xl lg:text-3xl">Good to know</h2>
            {/* description box */}
            <ul className="flex flex-col gap-y-3 lg:text-xl after:absolute after:inset-0 after:size-full after:bg-rf-primary-200/50 after:-z-1">
              {goodToKnowFacts.map((fact, idx) => {
                return (
                  <li className="flex items-baseline gap-x-2" key={idx}>
                    <FaClipboardCheck className='fill-rf-primary w-1/12'/>
                    <span className="text-xbase lg:text-xl w-5/6">{fact}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </SlideInLeft>
        {/* right section with styled border around the fact box */}
        <SlideInRight className='relative before:absolute before:-top-1 before:-right-1 before:size-20 before:bg-rf-primary after:absolute after:-left-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0 xl:w-full'>
          {/* fact box */}
          <div className="flex flex-col gap-y-4 overflow-hidden xmd:w-full bg-white p-4 relative size-full rounded-tl-2xl rounded-br-2xl z-1">
            {/* title text */}
            <h2 className="font-flavours text-rf-secondary text-center text-2xl lg:text-3xl">Fun to know</h2>
            {/* description box */}
            <ul className="flex flex-col gap-y-3 lg:text-xl after:absolute after:inset-0 after:size-full after:bg-rf-secondary/50 after:-z-1">
              {funToKnowFacts.map((fact, idx) => {
                return (
                  <li className="flex items-baseline gap-x-2" key={idx}>
                    <FaClipboardCheck className='fill-rf-secondary w-1/12'/>
                    <span className="text-xbase lg:text-xl w-5/6">{fact}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </SlideInRight>
      </Wrapper>

      {/******************************** Spacer section with decorative vector image ********************************/}
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVector className="[&>path:nth-child(2)]:fill-rf-primary-200/50 [&>path:nth-child(1)]:fill-rf-white-100"/>
      </Wrapper>

      {/****************************************** Our Team section ***********************************************/}
      <Wrapper
        as={"section"}
        className="bg-rf-primary-200/50 py-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:py-40 xl:[&>div]:gap-y-20"
      >
       <div className="w-full flex flex-col gap-y-10 xs:gap-y-16 xl:gap-y-20">
        <div className='w-full flex flex-col gap-y-4'>
          {/* subtitle text with icons */}
           <div className="w-full flex items-center justify-center gap-x-4">
            <div className="flex items-center">
              <FaRegCircle className="fill-rf-primary"/><span className="text-rf-grey-100/60">&mdash;&mdash;&mdash;&mdash;</span>
            </div>
            <h2 className="uppercase text-rf-secondary text-center text-sm lg:text-xl">Our Team</h2>
            <div className="flex items-center">
              <span className="text-rf-grey-100/60">&mdash;&mdash;&mdash;&mdash;</span><FaRegCircle className="fill-rf-primary"/>
            </div>
           </div>
           {/* title text */}
           <h3 className="font-flavours text-3xl lg:text-4xl text-center">Where clinical excellence meets a
            <div className="block">
              <span className="text-rf-primary"> G</span><span className="text-rf-secondary">e</span><span className="text-rf-primary-200">n</span><span className="text-rf-secondary">t</span><span className="text-rf-primary-200">l</span><span className="text-rf-primary">e</span><span className="text-rf-secondary"> T</span><span className="text-rf-primary-200">o</span><span className="text-rf-secondary">u</span><span className="text-rf-primary">c</span><span className="text-rf-secondary">h</span>
            </div>
           </h3>
        </div>
        {/* team content box */}
        <div className="flex flex-col-reverse items-center gap-y-4 xmd:flex-row">
          {/* left section */}
          <SlideInLeft className="flex flex-col gap-y-4 xmd:w-full 2xmd:gap-y-7">
            <div className="flex justify-between">
              {/* title text */}
              <div className="font-flavours">
                <span className="block text-rf-secondary text-2xl lg:text-3xl">
                  At Rabbit Foot dental.
                </span>
                <h2>
                  <span className="block text-rf-grey-100 text-3xl lg:text-4xl">
                    we're focused of helping
                  </span>
                  <span className="block text-rf-primary-100 text-3xl lg:text-4xl">
                    kids smile brighter
                  </span>
                  <span className="block text-rf-grey-100 text-3xl lg:text-4xl">
                    every day...
                  </span>
                </h2>
              </div>
            </div>
            {/* description text */}
            <p className="lg:text-xl xmd:max-w-80 2xmd:max-w-90 lg:max-w-100 xl:max-w-130">
              We’re so excited to meet you! Here at Rabbit Foot dental, we mix
              expert care with a whole lot of fun. We want your kid to feel safe,
              encouraged, and right at home. Families choose us for our welcoming
              atmosphere, trusted expertise, and strong commitment to the
              community.
            </p>
          </SlideInLeft>
          {/* right section */}
          <div className="flex flex-col w-full ">
            <SlideInRight className="flex flex-col relative">
              {/* image of the group of team members with pseudo image of leaves on the top right */}
              <div
                className="w-11/12 h-60 bg-cover bg-center bg-[url('~/assets/management_team.jpg')] rounded-tr-2xl rounded-bl-2xl relative
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
      </Wrapper>

      {/******************************** Spacer section with decorative vector image ********************************/}
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVectorDoubleOrange className='[&>path:nth-child(3)]:fill-rf-secondary [&>rect]:fill-rf-primary-200/50'/>
      </Wrapper>

      {/******************************************** Book appointment section ********************************************/}

      <Wrapper
        as={"section"}
        className="bg-rf-secondary py-8 relative [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-y-5 xs:py-16 xs:[&>div]:gap-y-8 xl:py-30 xl:[&>div]:gap-y-10"
      >
        {/* Animating sky background */}
        <Sky/>
        <div className="bg-rf-white-100/70 flex gap-x-4 px-4 py-8 rounded-xl shadow-rf-direct-100 relative overflow-hidden h-125 xs:h-120 sm:h-100 md:h-100 2xmd:h-120 2xmd:w-9/12 2xmd:py-4">
          {/* child image visible from tablet screen  */}
          <div className="hidden 2xmd:block w-1/2 bg-[url('~/assets/girl_biting_carrot.jpg')] bg-cover bg-center bg-no-repeat h-auto rounded-xl"/>
          <div className="flex flex-col items-center justify-center gap-y-4 2xmd:w-3/4">
            {/* title text */}
            <h3 className="font-flavours text-3xl lg:text-4xl text-center capitalize">Book an
              <div className="inline">
                <span className="text-rf-primary"> A</span><span className="text-rf-secondary">p</span><span className="text-rf-primary-200">p</span><span className="text-rf-secondary">o</span><span className="text-rf-primary-200">i</span><span className="text-rf-primary">n</span><span className="text-rf-secondary">t</span><span className="text-rf-primary-200">m</span><span className="text-rf-primary">e</span><span className="text-rf-secondary">n</span><span className="text-rf-primary-200">t</span>
              </div>
            </h3>
            <FadeIn className="relative">
              {/* Booking form of split type */}
              <BookingForm inputBoxStyles="bg-rf-secondary" buttonStyles="text-rf-secondary" formId="form-3" formType="split"/>
            </FadeIn>
          </div>
        </div>
      </Wrapper>

    </main>
  )
}