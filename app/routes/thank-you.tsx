import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/thank-you";
import { Link, redirect, useNavigation } from "react-router";
import { Button } from "~/components/ui/button";
import Sky from "~/components/custom-components/vectors/Sky";
import Wrapper from "~/components/custom-components/Wrapper";
import type { Administrator, BookingDataType, Customer, Doctor } from "~/data/static-data";
import Loader from "~/components/custom-components/Loader";

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 
  const bookingDataStringified = sessionStorage.getItem("bookingData") // get booking data stored in sessionStorage (stringified JSON)
  const redirectPath = sessionStorage.getItem("redirectPath") // get redirect path stored in sessionStorage

  const bookingData: BookingDataType = bookingDataStringified && JSON.parse(bookingDataStringified) // parse booking data back into an object if it exists
  
  const userDataStringified = sessionStorage.getItem("userData");
  const userDataParsed : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified);

  sessionStorage.removeItem("bookingData") // clear booking data from sessionStorage after retrieving it
  sessionStorage.removeItem("redirectPath") // clear redirect path from sessionStorage after retrieving it

  // In case of not userData, redirect to login page
  if(!userDataParsed) return redirect('/login');

  // if any doctor or administrator accidentally access this path, should be redirected to their dashboard page
  if(userDataParsed.type === "doctor" || userDataParsed.type === "administrator") return redirect("/dashboard");

  // if anyone tries to access this path without booking an appointment, should be redirected to their dashboard page
  if(!bookingData) return redirect('/dashboard/appointments');

  return {redirectPath, bookingData} // return data for use in the ThankYou component
 }

export default function ThankYou({loaderData}: Route.ComponentProps) {
  const { redirectPath, bookingData } = loaderData;
  const pathname = redirectPath === '/' ? 'homepage' : redirectPath?.
        replace(/\/#.*$/, "")   // remove everything after /# (like /#book-appointment)
        .replace(/^\/+|\/$/gm, '') // remove any leading or trailing slashes
        .replace(/^.*our-doctors\//, "") // remove everything up to "our-doctors/"
        .replace(/-+/gm, ' ');    // replace any - with empty space

  const navigation = useNavigation();
  if(navigation.state === "loading") return <Loader/>

  return (
    <main className="relative">
      {/* Animating sky background */}
      <Sky className="fill-rf-primary-200/40"/>
      <Wrapper
        as={"section"}
        className="py-10 relative [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:justify-center xmd:[&>div]:gap-x-8 xl:py-40 xl:[&>div]:gap-y-20"
      >
        <div className="flex flex-col item-center gap-4">
          {/* thank you message with customer name */}
          <h1 className="text-3xl text-center text-rf-primary-100 lg:text-4xl">Thank you <span className="capitalize">{bookingData["customer-name"]}</span></h1>

          {/* confirmation message with doctor name */}
          <h2 className="text-xl text-center">Your appointment with Dr. <span className="capitalize">{bookingData["doctor-name"]}</span> registered successfully!</h2>

          {/* appointment details list */}
          <ul className="self-center capitalize bg-rf-primary-200/20 p-3 rounded-md xl:w-120">
            <span className="normal-case font-medium">Please check your appointment details below:</span>
            <li><span className="font-medium">Doctor:</span> Dr. {bookingData["doctor-name"]}</li>
            <li><span className="font-medium">Speciality:</span> {bookingData["doctor-speciality"]}</li>
            <li><span className="font-medium">Appointment Date:</span> {bookingData["appointment-date"]}</li>
            {/* show appointment slot only if it exists */}
            {bookingData["appointment-slot"] && <li className="lowercase"><span className="font-medium capitalize">Appointment Slot:</span> {bookingData["appointment-slot"]}</li>}
            <li><span className="font-medium">Doctor Fee:</span> ${bookingData["doctor-fee"]}</li>

          </ul>
          
          <section className="flex flex-col gap-2 xmd:flex-row xmd:gap-4 xmd:justify-center">
            {/* back button to redirect path */}
            <Link to={redirectPath ?? '/'} className="self-center">
                <Button
                variant={"outline"}
                size={"sm"}
                className="rounded-full bg-rf-primary hover:bg-rf-primary-100 hover:text-white text-sm capitalize 2xmd:cursor-pointer lg:text-xl xl:w-100 xl:py-5"
                >
                Back to {pathname}
                </Button>
            </Link>
            
            {/* back button to redirect path */}
            <Link to="/dashboard/appointments" className="self-center">
                <Button
                variant={"outline"}
                size={"sm"}
                className="rounded-full bg-rf-primary hover:bg-rf-primary-100 hover:text-white text-sm capitalize 2xmd:cursor-pointer lg:text-xl xl:w-100 xl:py-5"
                >
                Manage / Pay for Appointment
                </Button>
            </Link>
          </section>
        </div>
      </Wrapper>
    </main>
  )
}