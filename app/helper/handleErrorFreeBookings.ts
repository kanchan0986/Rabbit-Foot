import type { Appointment, BookingDataType, Customer, Speciality } from "~/data/static-data";

type handleErrorFreeBookingsProps = {
  bookingData: BookingDataType;
  pathname?: string;
  user?: Customer;
}

export default function handleErrorFreeBookings({bookingData, pathname, user}: handleErrorFreeBookingsProps) {

  /////////////////////// handle bookingData and userData ////////////////////////////

  const userData = sessionStorage.getItem("userData"); // Retrieve any existing user data from session storage
  const parsedUserData : Customer = userData && JSON.parse(userData) // parse the userData to a Customer object (if exists)

  let updatedUserData = user ?? parsedUserData // default the userData to a variable from the user (if exists) or from the parsed user data

  if(user){
    // If user exists, merge booking data with user details
    const bookingDataWithUserDetails: BookingDataType = {
      ...bookingData,
      "customer-name": user.name,
      "customer-email": user.email,
      "customer-phone": user.phone.toString(),
    }  

    // store the booking data with user details into session storage
    sessionStorage.setItem("bookingData", JSON.stringify(bookingDataWithUserDetails))

    // add on new appointment to existing appointments list (if exists)
    updatedUserData = {...user, appointments: [...(user.appointments || []), bookingDataWithUserDetails as BookingDataType]}

  }else{
    // If user DOESN'T exists, fallback to parsed user data
    updatedUserData = {...parsedUserData, appointments: [...(parsedUserData.appointments || []), bookingData as BookingDataType]} // add on new appointment to existing appointments list (if exists)

    // Add updated user details into booking data
    const bookingDataWithUpdatedUserDetails = {
      ...bookingData, 
      "customer-name": updatedUserData.name,
      "customer-email": updatedUserData.email,
      "customer-phone": updatedUserData.phone.toString()
    } as BookingDataType

    // store the booking data with updated user details into session storage
    sessionStorage.setItem("bookingData", JSON.stringify(bookingDataWithUpdatedUserDetails))

    // If pathname exists, store it for redirect purposes
    pathname && sessionStorage.setItem("redirectPath", pathname)
    
  }
  
  // store the updated user data back into session storage
  sessionStorage.setItem("userData", JSON.stringify(updatedUserData))


  /////////////////////// handle appointmentData ////////////////////////////


  const appointmentsDataStringified = sessionStorage.getItem("appointmentsData"); // Retrieve appointments data from session storage
  const appointmentsDataParsed : Appointment[] = appointmentsDataStringified && JSON.parse(appointmentsDataStringified); // parse the appointmentsData to a appointments array (if exists)
  
  // Add the new appointment to the appointments list
  const appointmentsDataUpdated : Appointment[] = [...(appointmentsDataParsed || []), 
    {
      "appointment-id": bookingData["appointment-id"],
      "customer-id": updatedUserData.id,
      "customer-name": updatedUserData.name,
      "customer-email": updatedUserData.email,
      "customer-dob": updatedUserData.dob,
      "customer-imageUrl": updatedUserData.imageUrl,
      "customer-gender": updatedUserData.gender,
      "customer-phone": updatedUserData.phone.toString(),
      "appointment-date": bookingData['appointment-date'],
      "appointment-slot": bookingData['appointment-slot'],
      "doctor-id": bookingData['doctor-id'],
      "doctor-name": bookingData['doctor-name'],
      "doctor-imageUrl": bookingData['doctor-imageUrl'],
      "doctor-speciality": bookingData['doctor-speciality'] as Speciality,
      "doctor-fee": bookingData['doctor-fee'],
      "doctor-phone": bookingData["doctor-phone"],
      "appointment-status": 'pending', // Default status for new appointment
      "payment-mode": 'cash', // Default payment mode
      "payment-status": 'unpaid' // Default payment status
    }
  ]

  // store the updated appointments list back into session storage
  sessionStorage.setItem("appointmentsData", JSON.stringify(appointmentsDataUpdated));

  return null;
}