import { tabLabel } from "~/helper/tabLabel";
import type { Administrator, Customer } from "~/data/static-data";
import { redirect, useNavigation } from "react-router";
import Loader from "~/components/custom-components/Loader";
import type { Route } from "./+types/update-customer";
import UpdateCustomersForm from "~/components/custom-components/forms/updateUserForms/UpdateCustomersForm";
import CustomError from "~/components/custom-components/CustomError";

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

  const customerDataStringified = sessionStorage.getItem("customerData"); // get customer data stored in sessionStorage (if exists)
  const customerData: Customer[] =
    customerDataStringified && JSON.parse(customerDataStringified); // parse customer data back into customerData array (if it exists)

  return { customerData }; // Return customer data to be used in the component
};


export const clientAction = async ({ request }: Route.ClientActionArgs) => {
  const formData = await request.formData(); // Extract form data from the request
  const action = formData.get("action")?.toString(); // get the action field from the formData (differentiator field)
  const customerId = formData.get("customerId")?.toString(); // get the customerId field from the formData

  const customerDataStringified = sessionStorage.getItem("customerData"); // get customer data stored in sessionStorage (if exists)
  const customerData: Customer[] =
    customerDataStringified && JSON.parse(customerDataStringified); // parse customer data back into customerData array (if it exists)

  // Handle PUT request
  if (request.method === "PUT") {
    if (action === "update-subscription-status") {
      // toggle customer's subscription status
        const updatedCustomers = customerData.map(
          (item) =>
            ({
              ...item,
              subscriber: item.id === customerId ? !item.subscriber : item.subscriber
            }),
        ); // Update the selected customer's subscription status while leaving all other customer records unchanged.

        sessionStorage.setItem(
          "customerData",
          JSON.stringify(updatedCustomers),
        ); // Save updated customers back to sessionStorage

    }
  }
};

export default function UpdateCustomer({loaderData, params}: Route.ComponentProps) {

  const { customerData } = loaderData;

  const navigation = useNavigation();
  // for the loading state, return a Loader
  if(navigation.state === "loading") return <Loader/>
  
  const customerId = params["patients-id"];  // get the customerId from the params

  const customer = customerData.find(cust => cust.id === customerId) // get the selected customer

  // for no customer, show fallback
  if(!customer) return <CustomError>Sorry! Patient does not exists.</CustomError>

  return (
    <UpdateCustomersForm customer={customer} />
  )
}