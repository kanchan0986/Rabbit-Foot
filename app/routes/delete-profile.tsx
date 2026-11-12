import type { Administrator, Customer, Doctor } from '~/data/static-data';
import type { Route } from './+types/delete-profile'
import { redirect } from 'react-router';

export const clientAction = async ({request}: Route.ClientActionArgs) => { 

  // Extract submitted form data
  const formData = await request.formData();
  const userId = formData.get('id');
  const userType = formData.get('type');

  const customerDataStringified = sessionStorage.getItem("customerData") // Retrieve customer data string from session storage (if it exists)
  const customerDataParsed: Customer[] = customerDataStringified && JSON.parse(customerDataStringified) // Parse the stringified data into a Customer array (only if data exists)

  const doctorDataStringified = sessionStorage.getItem("doctorData"); // get doctor data stored in sessionStorage (if exists)
  const doctorDataParsed: Doctor[] = doctorDataStringified && JSON.parse(doctorDataStringified); // parse doctor data back into doctorData array (if it exists)

  const adminDataStringified = sessionStorage.getItem("adminData"); // get admin data stored in sessionStorage (if exists)
  const adminDataParsed: Administrator[] = adminDataStringified && JSON.parse(adminDataStringified); // parse admin data back into adminData array (if it exists)


  if(userType === "customer"){
    const updatedCustomersData = customerDataParsed.filter(customer => customer.id !== userId);

    // store the updated customerData in session storage
    sessionStorage.setItem("customerData", JSON.stringify(updatedCustomersData)) 
  }

  if(userType === "doctor"){
    const updatedDoctorsData = doctorDataParsed.filter(doctor => doctor.id !== userId);

    // store the updated doctorData in session storage
    sessionStorage.setItem("doctorData", JSON.stringify(updatedDoctorsData)) 
  }

  if(userType === "administrator"){
    const updatedAdminsData = adminDataParsed.filter(admin => admin.id !== userId);

    // store the updated adminData in session storage
    sessionStorage.setItem("adminData", JSON.stringify(updatedAdminsData)) 
  }

  return redirect("/logout");

 }