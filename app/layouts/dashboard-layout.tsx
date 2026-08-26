import { tabLabel } from '~/helper/tabLabel';
import type { Customer, Doctor } from '~/data/static-data';
import type { Route } from './+types/dashboard-layout';
import { Outlet, redirect } from 'react-router';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 
  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage

  const userData : Customer | Doctor = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an object if it exists

  // if any un-authenticated users accidentally access this path, should be redirected to login page
  if (!userData) {
    return redirect('/login');
  }

  // if any un-verified doctor accidentally access this path, should be redirected to under review page
  if (userData.type === 'doctor' && !userData.isVerified) {
    return redirect('/under-review');
  }

  return { userData }
 }

export default function DashboardLayout({}: Route.ComponentProps) {
  return (
    <main className='h-screen'>
        {/* authenticated and verified users should move further */}
        <Outlet/>
    </main>
  )
}