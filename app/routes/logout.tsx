import { redirect } from "react-router";
import type { Route } from "./+types/logout";

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  sessionStorage.removeItem("userData") // clear user data from sessionStorage after retrieving it
  sessionStorage.removeItem("bookingData") // clear booking data from sessionStorage after retrieving it
  sessionStorage.removeItem("redirectPath") // clear redirect path from sessionStorage after retrieving it

  return redirect('/login')
 }