import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/dashboard";
import type { Administrator, Doctor } from "~/data/static-data";
import { redirect } from "react-router";
import Wrapper from "~/components/custom-components/Wrapper";

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (if exists)

  const userData : Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an Customer object (if it exists)

  if(!userData) return redirect('/login');

  if(userData.type !== "doctor" && userData.type !== "administrator") return redirect('./profile');

 }

export default function Dashboard({}: Route.ComponentProps) {
  return (
      // Wrapper for profile Information sections
      <Wrapper className="overflow-hidden pb-20 [&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:gap-x-4 md:[&>div]:gap-y-4 xl:pb-30 3xl:pb-40" as={"aside"}>

        <h1>Overview</h1>

      </Wrapper>
  )
}