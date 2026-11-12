import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/doctors";
import TabularUsersForAdmins from "~/components/custom-components/TabularUsersForAdmins";
import { redirect, useNavigation } from "react-router";
import type { Administrator, Doctor } from "~/data/static-data";
import Wrapper from "~/components/custom-components/Wrapper";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import AccordionUsersForAdmins from "~/components/custom-components/AccordionUsersForAdmins";
import Loader from "~/components/custom-components/Loader";

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => {
  const userDataStringified = sessionStorage.getItem("userData"); // get user data stored in sessionStorage (if exists)

  const userData: Administrator =
    userDataStringified && JSON.parse(userDataStringified); // parse user data back into an administrator object (if it exists)

  if (!userData) return redirect("/login"); // Redirect to login if no user data is found

  if (userData.type !== "administrator")
    return redirect("../profile"); // Redirect to profile if user is not administrator

  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorData: Doctor[] =
    doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  return { doctorData }; // Return doctor data to be used in the component
};


export const clientAction = async ({ request }: Route.ClientActionArgs) => {
  const formData = await request.formData(); // Extract form data from the request
  const action = formData.get("action")?.toString(); // get the action field from the formData (differentiator field)
  const doctorId = formData.get("doctorId")?.toString(); // get the doctorId field from the formData

  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorData: Doctor[] =
    doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  // Handle PUT request
  if (request.method === "PUT") {
    if (action === "update-verification-status") {
      // toggle doctor's verification status
        const updatedDoctors = doctorData.map(
          (item) =>
            ({
              ...item,
              isVerified: item.id === doctorId ? !item.isVerified : item.isVerified
            }),
        ); // Update the selected doctor's verification status while leaving all other doctor records unchanged.

        sessionStorage.setItem(
          "doctorData",
          JSON.stringify(updatedDoctors),
        ); // Save updated doctors back to sessionStorage

    }


    if(action === "update-availability") {
      // toggle doctor's availability

        const updatedDoctorsAvailability = doctorData.map(
          (item) =>
            ({
              ...item,
              availability: item.id === doctorId ? !item.availability : item.availability
            }),
        ); // Update the selected doctor's availability while leaving all other doctor records unchanged.

        sessionStorage.setItem(
          "doctorData",
          JSON.stringify(updatedDoctorsAvailability),
        ); // Save updated doctors back to sessionStorage
    }
  }
};


export default function Doctors({loaderData}: Route.ComponentProps) {

  const { doctorData } = loaderData;

  const navigation = useNavigation();

  const isLargeScreen = useMediaQuery("(min-width: 1024px)"); // Check if screen size is large (for responsive layout)

  // for the loading state, return a Loader
  if(navigation.state === "loading") return <Loader/>

  return (
    <Wrapper
      className="overflow-hidden pb-20 [&>div]:grid [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:gap-x-4 md:[&>div]:gap-y-4 xl:pb-30 3xl:pb-40"
      as={"aside"}
    >
      {!isLargeScreen && <AccordionUsersForAdmins userData={doctorData} selectedTab="doctors" />}

      {isLargeScreen && <TabularUsersForAdmins userData={doctorData} selectedTab="doctors" />}
    </Wrapper>
  )
}