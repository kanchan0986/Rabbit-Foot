import { tabLabel } from "~/helper/tabLabel";
import { doctorArray, type Administrator, type BookingDataType, type Customer, type Doctor, type UpdateDataType } from "~/data/static-data";
import { redirect, useNavigation } from "react-router";
import type { Route } from "./+types/update-appointments";
import { validateAppointmentsUpdateForm } from "~/helper/validateAppointmentsUpdateForm";
import UpdateCustomerAppointmentsForm from "~/components/custom-components/forms/updateAppointmentForms/UpdateCustomerAppointmentsForm";
import Loader from "~/components/custom-components/Loader";

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (if exists)

  const userData : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an object (if it exists)

  const doctorArr = doctorArray; // import list of doctors

  if(!userData) return redirect('/login'); // If no user data found, redirect to login page

  return { userData, doctorArr } // Return user data and doctor array for use in the component

 }
 

export const clientAction = async ({request}: Route.ClientActionArgs) => { 

  const formData = await request.formData() // get submitted form data
  const inputData = Object.fromEntries(formData) // convert formData into a plain object for easier handling

  // Validate appointment update form (date and slot)
  const { errors } = validateAppointmentsUpdateForm(inputData as UpdateDataType)
  const appointmentUpdateError = errors.appointmentDate || errors.appointmentSlot

  const userData = sessionStorage.getItem("userData"); // get user data stored in sessionStorage (if exists)
  const parsedUserData : Customer = userData && JSON.parse(userData) // parse user data back into a Customer object (if it exists)

  // For no user logged in AND no validation errors
  if(!parsedUserData && !appointmentUpdateError){
    sessionStorage.setItem("bookingData", JSON.stringify(inputData as UpdateDataType)) // Save booking data to the sessionStorage
    return redirect('/login') // redirect user to login page
  }
  
  // For validation errors (if exist)
  if(appointmentUpdateError) {
    return { errors } // Return errors to display in UI
  }


  // For valid appointments updation
  let updatedUserData : Customer = parsedUserData // Create a userData variable with default imported userData
  updatedUserData = {
    ...parsedUserData, // spread the existing userData
    appointments: parsedUserData.appointments?.map(item => item["appointment-id"] === inputData["appointment-id"] ? // if the appointment to be updated matches with appointment from the imported userData
      ({
        ...item, // spread the matching appointment
        "appointment-date": inputData["appointment-date"], // update the date
        "appointment-slot": inputData?.["appointment-slot"] // update the slot (if exists)
      } as BookingDataType & {["appointment-slot"]: string;})
      : item // OR return the non-matching appointment
  )}
  sessionStorage.setItem("userData", JSON.stringify(updatedUserData)) // update the userData on the session storage

  return redirect("../appointments") // redirect to appointments route after successful update

 }


export default function UpdateAppointments({loaderData, actionData}: Route.ComponentProps) {

  const { userData, doctorArr } = loaderData;

  const navigation = useNavigation();
  if(navigation.state === "loading") return <Loader/> // Show loader while navigating

  {/* UI for customers */}
  if(userData.type === "customer") {
    return <UpdateCustomerAppointmentsForm userData={userData} doctorArr={doctorArr} actionData={actionData} />
  }

  {/* UI for doctors */}
  if(userData.type === "doctor") {
    <div>Update Appointments related to Doctors</div>
  } 

  {/* UI for administrators */}
  if(userData.type === "administrator") {
    <div>Update Appointments related to Administrators</div>
  } 

}