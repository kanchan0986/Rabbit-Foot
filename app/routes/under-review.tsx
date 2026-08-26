import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/under-review";
import Sky from "~/components/custom-components/vectors/Sky";
import Wrapper from "~/components/custom-components/Wrapper";
import type { Customer, Doctor } from "~/data/static-data";
import { Link, redirect } from "react-router";
import { Button } from "~/components/ui/button";



export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 
  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (stringified JSON)
  const userData: Doctor | Customer = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an Doctor or Customer object if it exists

  // any un-authenticated user accidentally access this path, should be redirected to login page
  if(!userData) return redirect('/login')

  // if the authenticated user is a customer or verified doctor and accidentally access this path, then should be redirected to their profile page
  if(userData && (userData.type === "customer" || (userData.type === "doctor" && userData.isVerified))) return redirect('/profile');

  return { userData }
 }

export default function UnderReview({loaderData}: Route.ComponentProps) {
  const { userData } = loaderData
  return (
    <main className="relative">
      {/* Animating sky background */}
      <Sky className="fill-rf-primary-200/40"/>
      <Wrapper
        as={"section"}
        className="py-10 relative [&>div]:flex [&>div]:flex-col [&>div]:gap-y-10 xs:py-16 xs:[&>div]:gap-y-16 xmd:[&>div]:flex-row xmd:[&>div]:justify-center xmd:[&>div]:gap-x-8 xl:py-40 xl:[&>div]:gap-y-20"
      >
        <div className="flex flex-col item-center gap-4">
          {/* Greeting headline with doctor name */}
          <h1 className="text-2xl text-center text-rf-primary-100 lg:text-3xl">Hello Dr. <span className="capitalize">{userData.name}</span></h1>


          {/* Details */}
          <h2 className="text-xl text-center">You account is under review. Please visit after some time.</h2>
          
          <div className="flex flex-col gap-2 justify-center mt-5 min-[330px]:flex-row min-[330px]:mt-3">
            {/* homepage link */}
            <Link to='/' className="self-center">
                <Button
                variant={"outline"}
                size={"sm"}
                className="rounded-full bg-rf-primary hover:bg-rf-primary-100 hover:text-white text-sm capitalize py-5 w-30 min-[330px]:text-md 2xmd:cursor-pointer lg:text-xl lg:w-50"
                >
                Homepage
                </Button>
            </Link>

            {/* logout link */}
            <Link to='/logout' className="self-center">
                <Button
                variant={"outline"}
                size={"sm"}
                className="rounded-full bg-rf-primary hover:bg-rf-primary-100 hover:text-white text-sm capitalize py-5 w-30 min-[330px]:text-md 2xmd:cursor-pointer lg:text-xl lg:w-50"
                >
                Logout
                </Button>
            </Link>
          </div>

        </div>
      </Wrapper>
    </main>
  )
}

