import { tabLabel } from '~/helper/tabLabel';
import type { Customer, Doctor } from '~/data/static-data';
import type { Route } from './+types/dashboard-layout';
import { Navigate, Outlet } from 'react-router';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 
  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage

  const userData : Customer | Doctor = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an object if it exists

  return { userData }
 }

export default function DashboardLayout({loaderData}: Route.ComponentProps) {
    const { userData } = loaderData
    const userIsDoctor = userData?.type === 'doctor';
    const userIsCustomer = userData?.type === 'customer';

  return (
    <main className='h-screen'>
        {userIsDoctor || userIsCustomer ? <Outlet/> : <Navigate to="/login" />}
    </main>
  )
}