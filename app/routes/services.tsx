import { tabLabel } from '~/helper/tabLabel';
import type { Route } from './+types/services';
import Wrapper from '~/components/custom-components/Wrapper';
import Sky from '~/components/custom-components/vectors/Sky';
import SlideInLeft from '~/components/custom-components/animations/SlideInLeft';
import SlideInUp from '~/components/custom-components/animations/SlideInUp';
import { Link, redirect } from 'react-router';
import { Button } from '~/components/ui/button';
import SlideInRight from '~/components/custom-components/animations/SlideInRight';
import SpacerVectorRabitTwoParts from '~/components/custom-components/vectors/SpacerVectorRabitTwoParts';
import Logo from '~/components/custom-components/vectors/Logo';
import heart from '~/assets/Heart.png';
import { customerArr, doctorArray, servicesArray, specialityArray, type BookingDataType } from '~/data/static-data';
import FadeIn from '~/components/custom-components/animations/FadeIn';
import BookingForm from '~/components/custom-components/forms/BookingForm';
import SpacerVectorDoubleOrange from '~/components/custom-components/vectors/SpacerVectorDoubleOrange';
import Summary from '~/components/custom-components/Summary';
import validateBookingForm from '~/helper/validateBookingForm';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({} : Route.ClientLoaderArgs) => { 
  // make api call
  const servicesData = servicesArray
  const specialityData = specialityArray;
  const customerData = customerArr[0]
  const doctorData = doctorArray
  return { servicesData, specialityData, customerData, doctorData };
 }

export const clientAction = async ({ request, url }: Route.ClientActionArgs) => { 
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  const { errors } = validateBookingForm(data as BookingDataType);
  const customerDataError = errors.customerName || errors.customerEmail || errors.customerPhone
  const bookingError = errors.doctorSpeciality || errors.doctorName || errors.appointmentDate
  const {pathname} = url

  if(customerDataError && !bookingError){
    sessionStorage.setItem("bookingData", JSON.stringify(data))
    return redirect('/login')
  }
  
  if(bookingError) {
    return { errors }
  }
  
  sessionStorage.setItem("bookingData", JSON.stringify(data))
  sessionStorage.setItem("redirectPath", pathname)
  return redirect('/thank-you')
 }

export default function Services({ loaderData }: Route.ComponentProps) {
  const { servicesData, specialityData, customerData, doctorData } = loaderData
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
            <SlideInUp delay={0.5} className='rounded-full 2xmd:hover:shadow-xl'>
              <Link to="./#service-default">
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="bg-rf-secondary uppercase min-w-55 rounded-full 2xmd:cursor-pointer lg:text-xl xl:w-130 xl:py-6"
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

      {/*********************************************** All Services section ***********************************************/}
      <Wrapper
        as={"section"}
        className="bg-rf-white-100 py-15 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-6 xs:py-16 xs:[&>div]:gap-y-10 xmd:[&>div]:gap-20 xl:py-30 xl:[&>div]:gap-y-30"
        id='service-default'
      >
        {servicesData.map((service, idx) => {
          const allEvenServices = idx % 2 === 0; // find all even services in servicesData
          const allOddServices = idx % 2 !== 0; // find all odd services in servicesData
          return (
            <div key={service.id}>
              {allEvenServices && (
                <div className="flex flex-col items-center gap-y-8 xmd:flex-row xmd:gap-x-8 xmd:items-stretch">
                  {/* left section */}
                  <SlideInLeft delay={0.55} className="flex w-full flex-col items-center justify-center xmd:h-auto xl:max-w-137.5 2xl:max-w-[35%]">
                      {/* styled border around the image */}
                      <div className="relative h-[50vh] w-full before:absolute before:-inset-1 before:size-20 before:bg-rf-primary after:absolute after:-right-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0 sm:h-[90vh] md:h-screen xmd:h-full">
                        {/* responsive image of the doctor */}
                        <div style={{backgroundImage: `url(${service.imageUrl})`}} className="relative size-full bg-cover bg-no-repeat bg-center rounded-tr-2xl rounded-bl-2xl shadow-rf-direct-100 z-1"/>
                      </div>
                  </SlideInLeft>
                  {/* right section */}
                  <SlideInRight delay={0.55} className="flex flex-col gap-y-4 xmd:w-full xmd:h-full xmd:py-4 2xmd:gap-y-7 2xmd:py-8">
                      {/* Heading box */}
                      <div className="flex justify-center sm:justify-between">
                        <div className="self-center flex flex-col gap-y-2 text-center sm:text-start">
                          {/* title text */}
                          <h2 className='font-flavours capitalize text-rf-primary text-3xl lg:text-4xl'>{service.title}</h2>
                          {/* sub-title text */}
                          <h3 className='text-rf-secondary text-xl lg:text-2xl'>{service.subtitle}</h3>
                        </div>
                        {/* logo at the top right corner */}
                        <Logo className="hidden sm:block sm:size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
                      </div>
                    {/* description text */}
                    <div className="flex flex-col gap-y-4">
                      {/* summary text */}
                      <Summary summary={service.overview?.summary}/>
                      {/* cta button */}
                        <SlideInUp delay={0.5} className="self-center flex justify-center mt-8 xs:gap-y-8 rounded-full 2xmd:hover:shadow-xl">
                          <Link to={service.id}>
                            <Button
                              variant={"default"}
                              size={"lg"}
                              className="bg-rf-secondary min-w-55 rounded-full 2xmd:cursor-pointer lg:text-xl xl:w-130 xl:py-6"
                            >
                              Know in details
                            </Button>
                          </Link>
                        </SlideInUp>
                    </div>
                  </SlideInRight>
                </div>
              )}
              {allOddServices && (
                <div className="flex flex-col items-center gap-y-8 xmd:flex-row-reverse xmd:gap-x-8 xmd:items-stretch">
                  {/* Right section */}
                  <SlideInRight delay={0.55} className="flex w-full flex-col items-center justify-center xmd:h-auto xl:max-w-137.5 2xl:max-w-[35%]">
                      {/* styled border around the image */}
                      <div className="relative h-[50vh] w-full before:absolute before:-right-1 before:-top-1 before:size-20 before:bg-rf-primary after:absolute after:-left-1 after:-bottom-1 after:size-20 after:bg-rf-primary after:z-0 sm:h-[90vh] md:h-screen xmd:h-full">
                        {/* responsive image of the doctor */}
                        <div style={{backgroundImage: `url(${service.imageUrl})`}} className="relative size-full bg-cover bg-no-repeat bg-center rounded-tl-2xl rounded-br-2xl shadow-rf-direct-100 z-1"/>
                      </div>
                  </SlideInRight>
                  {/* Left section */}
                  <SlideInLeft delay={0.55} className="flex flex-col gap-y-4 xmd:w-full xmd:h-full xmd:py-4 2xmd:gap-y-7 2xmd:py-8">
                      {/* Heading Box */}
                      <div className="flex justify-center sm:justify-between">
                        <div className="self-center flex flex-col gap-y-2 text-center sm:text-start">
                          {/* title text */}
                          <h2 className='font-flavours capitalize text-rf-primary text-3xl lg:text-4xl'>{service.title}</h2>
                          {/* sub-title text */}
                          <h3 className='text-rf-secondary text-xl lg:text-2xl'>{service.subtitle}</h3>
                        </div>
                        {/* logo at the top right corner */}
                        <Logo className="hidden sm:block sm:size-20 fill-rf-secondary/30 -rotate-15 self-center xl:size-30" />
                      </div>
                    {/* description text */}
                    <div className="flex flex-col gap-y-4">
                      {/* summary text */}
                      <Summary summary={service.overview?.summary}/>
                      {/* cta button */}
                      <SlideInUp delay={0.5} className="self-center flex justify-center mt-8 xs:gap-y-8 rounded-full 2xmd:hover:shadow-xl">
                        <Link to={service.id}>
                          <Button
                            variant={"default"}
                            size={"lg"}
                            className="bg-rf-secondary min-w-55 rounded-full 2xmd:cursor-pointer lg:text-xl xl:w-130 xl:py-6"
                          >
                            Know in details
                          </Button>
                        </Link>
                      </SlideInUp>
                    </div>
                  </SlideInLeft>
                </div>
              )}
            </div>
          )
        })}
      </Wrapper>

      {/******************************** Spacer section with decorative vector image ********************************/}
      <Wrapper
        as={"div"}
        className="py-0 [&>div]:w-full"
      >
        <SpacerVectorDoubleOrange className='[&>path:nth-child(3)]:fill-rf-secondary [&>rect]:fill-rf-white-100'/>
      </Wrapper>

      {/******************************************** Book appointment section ********************************************/}

      <Wrapper
        as={"section"}
        className="bg-rf-secondary py-8 relative [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-y-5 xs:py-16 xs:[&>div]:gap-y-8 xl:py-30 xl:[&>div]:gap-y-10"
        id='book-appointment'
      >
        {/* Animating sky background */}
        <Sky/>
        <div className="bg-rf-white-100/70 flex gap-x-4 px-4 py-8 rounded-xl shadow-rf-direct-100 relative overflow-hidden min-h-125 xs:min-h-120 sm:h-100 md:min-h-120 2xmd:min-h-140 2xmd:w-9/12 2xmd:py-4">
          {/* child image visible from tablet screen  */}
          <div className="hidden 2xmd:block w-1/2 bg-[url('~/assets/girl_biting_carrot.jpg')] bg-cover bg-center bg-no-repeat h-auto rounded-xl"/>
          <div className="flex flex-col items-center justify-center gap-y-4 2xmd:w-3/4">
            {/* title text */}
            <h3 className="font-flavours text-3xl lg:text-4xl text-center capitalize">Book an
              <div className="inline">
                <span className="text-rf-primary"> A</span><span className="text-rf-secondary">p</span><span className="text-rf-primary-200">p</span><span className="text-rf-secondary">o</span><span className="text-rf-primary-200">i</span><span className="text-rf-primary">n</span><span className="text-rf-secondary">t</span><span className="text-rf-primary-200">m</span><span className="text-rf-primary">e</span><span className="text-rf-secondary">n</span><span className="text-rf-primary-200">t</span>
              </div>
            </h3>
            <FadeIn className="relative min-h-90 xs:min-h-fit lg:min-h-90">
              {/* Booking form of split type */}
              <BookingForm inputBoxStyles="bg-rf-secondary" buttonStyles="text-rf-secondary" formType="split" userData={customerData} doctorData={doctorData} specialityData={specialityData} />
            </FadeIn>
          </div>
        </div>
      </Wrapper>

    </main>
  )
}