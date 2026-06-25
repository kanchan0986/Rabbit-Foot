import Wrapper from "~/components/custom-components/Wrapper";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import smilingKid from "~/assets/smiling-kid.png";
import smilingKidInOrangeShirt from "~/assets/smiling-kid-in-orange-shirt.jpg";
import smilingGirlWithJacket from "~/assets/smiling-girl-with-jacket.jpg";
import smilingGirlWithDungree from "~/assets/smiling-girl-with-dungree.jpg";
import smilingSisters from "~/assets/smiling-sisters.jpg";
import spacerVectorRabbitBlue from "~/assets/Spacer-Vector-Rabbit-blue.png";
import leavesLeft from "~/assets/leaves-left.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import heart from "~/assets/Heart.png";
import Logo from "~/components/custom-components/vectors/Logo";
import { Link } from "react-router";
import SpacerVector from "~/components/custom-components/vectors/SpacerVector";
import { FaRegCircle } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { PiToothFill } from "react-icons/pi";
import { MdChildCare } from "react-icons/md";
import { TbEmergencyBed } from "react-icons/tb";
import type { Card } from "~/components/custom-components/carousels/CarouselItem";
import Carousel from "~/components/custom-components/carousels/Carousel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | Home" },
    {
      name: "description",
      content: "A dental services company totally committed for your kids!",
    },
  ];
}

const cardArray: Card[] = [
  {
    imageUrl: smilingKidInOrangeShirt,
    icon: PiToothFill,
    title: 'preventive care',
    subtitle: 'exams, cleanings, fluoride sealants.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex suscipit, eaque accusamus doloribus beatae, nesciunt rem architecto saepe ratione odit veniam maxime, placeat eos error! Culpa quasi ducimus unde.',
    link: '/',
    type: 'card'
  },
  {
    imageUrl: smilingGirlWithJacket,
    icon: TbDental,
    title: 'Treatments',
    subtitle: 'fillings and crowns for kids treatments.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum hic totam saepe assumenda officiis ut. Commodi, nam maxime. Non blanditiis fugit quaerat molestias, qui dolorum dignissimos delectus distinctio sunt',
    link: '/',
    type: 'card'
  },
  {
    imageUrl: smilingGirlWithDungree,
    icon: TbEmergencyBed,
    title: 'emergencies',
    subtitle: 'same-day appointments available.',
    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, nobis. Harum repellat itaque totam! At ad ducimus sequi voluptas, veniam delectus molestias aspernatur voluptatibus commodi amet, tenetur ea, doloremque accusantium.',
    link: '/',
    type: 'card'
  },
  {
    imageUrl: smilingSisters,
    icon: MdChildCare,
    title: 'Approach',
    subtitle: 'treatments mainly focused on children',
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit consequatur! Nostrum doloremque minima cum aspernatur laborum unde velit, esse sequi minus tenetur eum optio eos. Et exercitationem minima explicabo.',
    link: '/',
    type: 'card'
  }
]

export default function Home() {
  return (
    <main>
      {/*********************************************** Hero section ***********************************************/}
      <Wrapper as={"section"} className="py-10 xs:py-16">
        <div className="flex flex-col-reverse gap-y-4 2xmd:flex-row 2xmd:items-center 2xmd:justify-between">
          {/* Left section */}
          <div className="flex flex-col items-center gap-y-2 2xmd:w-2xl 2xmd:flex-row 2xmd:gap-y-7">
            {/* Decorative image on the left (only visible on laptop) */}
            <img
              src={leavesLeft}
              alt="leaves-left"
              className="hidden 2xmd:block self-start -mt-8 w-40"
            />

            {/* Text content container */}
            <div className="flex flex-col items-center gap-y-2 2xmd:items-start 2xmd:gap-y-7">
              {/* Heading with responsive font sizes */}
              <h1 className="text-3xl text-center font-flavours text-rf-primary lg:text-5xl 2xmd:self-start 2xmd:text-start">
                Welcome to
                <span className="block text-4xl text-rf-primary-100 lg:text-6xl">
                  Rabbit Foot
                </span>
              </h1>

              {/* Description paragraph */}
              <p className="lg:text-xl">
                We provide accessable, fast and quality dental care for children
                in Santa Ana. Same-day appointments, clear pricing, and a team
                you can trust.
              </p>

              {/* Call-to-action button */}
              <Link to="/">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="mt-4 rounded-full bg-rf-primary hover:bg-rf-primary-100 hover:text-white text-sm capitalize  2xmd:hover:shadow-xl 2xmd:cursor-pointer lg:text-xl xl:w-130 xl:py-6"
                >
                  Book an appointment today!
                </Button>
              </Link>
            </div>
          </div>

          {/* Right section - Hero Image */}
          <div className="flex justify-center 2xmd:w-1/2 2xmd:justify-end">
            <img
              src={smilingKid}
              alt="smiling kid"
              className="w-75 bg-cover 2xmd:w-lg"
            />
          </div>
        </div>
      </Wrapper>

      {/******************************** Spacer section with decorative vector image ********************************/}
      <Wrapper className="w-full [&>div]:w-full">
        <img
          src={spacerVectorRabbitBlue}
          alt="Spacer-Vector-Rabbit-Blue"
          className="w-full"
        />
      </Wrapper>

      {/*********************************************** About section ***********************************************/}
      <Wrapper
        as={"section"}
        className="py-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:py-40 xl:[&>div]:gap-y-20"
      >
        {/* left section */}
        <div className="flex flex-col xmd:w-full xl:max-w-137.5">
          <div className="flex flex-col relative">
            {/* first image with group of kids at top left with pseudo image of leaves on the top right */}
            <div
              className="w-10/12 h-60 bg-cover bg-center bg-[url('~/assets/group-of-kids.jpg')] rounded-tr-2xl rounded-bl-2xl relative
               after:absolute after:bg-[url('~/assets/leaves-right.png')] after:-scale-y-100 after:-right-10 after:-top-10 after:size-12 after:bg-contain after:bg-no-repeat xs:h-90 xs:w-11/12 xs:after:size-18 xs:after:-right-14 xs:after:-top-15 lg:h-110"
            />
            {/* heart image at the bottom left of the first image */}
            <img
              src={heart}
              alt="heart"
              className="w-1/5 -mt-8 ms-4 z-1 xs:-mt-12 xs:ms-8"
            />
          </div>
          {/* second image of the smiling kid at the bottom right */}
          <div className="w-2/3 h-40 bg-cover bg-position-[10%_20%] bg-[url('~/assets/single-smiling-girl.jpg')] rounded-tr-2xl rounded-bl-2xl border-6 border-white ms-auto mt-[-40%] relative z-1 xs:h-60 lg:h-70" />
        </div>
        {/* right section */}
        <div className="flex flex-col gap-y-4 xmd:w-full 2xmd:gap-y-7">
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
                <span className="block text-rf-primary-200 text-3xl lg:text-4xl">
                  every day...
                </span>
              </h2>
            </div>
            {/* logo at the top right corner */}
            <Logo className="size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
          </div>
          {/* description text */}
          <p className="lg:text-xl">
            We’re so excited to meet you! Here at Rabbit Foot dental, we mix
            expert care with a whole lot of fun. We want your kid to feel safe,
            encouraged, and right at home. Families choose us for our welcoming
            atmosphere, trusted expertise, and strong commitment to the
            community.
          </p>
          {/* cta section */}
          <div className="flex flex-col items-center gap-y-4 mt-2 xs:mt-8 xs:gap-y-8">
            {/* read more button */}
            <Link to="about-us">
              <Button
                variant={"default"}
                size={"lg"}
                className="bg-rf-secondary uppercase min-w-55 rounded-full 2xmd:cursor-pointer 2xmd:hover:shadow-xl lg:text-xl xl:w-130 xl:py-6"
              >
                read more
              </Button>
            </Link>
            {/* call us button with leaf image as pseudo element at top right */}
            <a
              className="flex items-center gap-x-2 -ml-10 relative
               after:absolute after:bg-[url('~/assets/leaves-right.png')] after:-right-12 after:top-2 after:size-10 after:bg-contain after:bg-no-repeat xl:after:size-15 xl:after:-right-16 xl:-ml-16"
              href="tel:+18001234567"
            >
              {/* phone icon */}
              <BiSolidPhoneCall className="size-10 bg-rf-primary rounded-full fill-white p-2 xl:size-20 xl:p-5" />
              <div className="flex flex-col">
                <span className="text-xl text-center xl:text-3xl">Call Us</span>
                <span className="xl-text-2xl">+18001234567</span>
              </div>
            </a>
          </div>
        </div>
      </Wrapper>

      {/******************************** Spacer section with decorative vector image ********************************/}
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVector className="fill-rf-white-100"/>
      </Wrapper>


      {/****************************************** Our services section ***********************************************/}
      <Wrapper
        as={"section"}
        className="bg-rf-white-100 py-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:gap-x-8 xl:py-40 xl:[&>div]:gap-y-20"
      >
       <div className="w-full flex flex-col gap-y-4">
        {/* subtitle text with icons */}
         <div className="w-full flex items-center justify-center gap-x-4">
          <div className="flex items-center">
            <FaRegCircle className="fill-rf-primary"/><span className="text-rf-grey-100/60">&mdash;&mdash;&mdash;&mdash;</span>
          </div>
          <h2 className="uppercase text-rf-secondary text-center text-sm lg:text-xl">Our services</h2>
          <div className="flex items-center">
            <span className="text-rf-grey-100/60">&mdash;&mdash;&mdash;&mdash;</span><FaRegCircle className="fill-rf-primary"/>
          </div>
         </div>
         {/* title text */}
         <h3 className="font-flavours text-3xl lg:text-4xl text-center capitalize">we make 
          <div className="inline">
            <span className="text-rf-primary"> d</span><span className="text-rf-secondary">e</span><span className="text-rf-primary-200">n</span><span className="text-rf-secondary">t</span><span className="text-rf-primary-200">a</span><span className="text-rf-primary">l </span>
          </div>
           care simple <span className="text-rf-primary-100 block">and effective</span>
         </h3>
         {/* Card carousel */}
         <Carousel carousel={cardArray}/>          
       </div>
      </Wrapper>

      
    </main>
  );
}
