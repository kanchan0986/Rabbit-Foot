import { tabLabel } from '~/helper/tabLabel';
import { dashboardMenuArr, type Administrator, type Customer, type Doctor } from '~/data/static-data';
import type { Route } from './+types/dashboard-layout';
import { redirect } from 'react-router';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import DashboardLayoutForLargeScreen from '~/components/custom-components/dashboard/DashboardLayoutForLargeScreen';
import DashboardLayoutForSmallScreen from '~/components/custom-components/dashboard/DashboardLayoutForSmallScreen';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  // fetch data from API
  const dashboardMenu = dashboardMenuArr
  
  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage

  const userData : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an object if it exists

  // if any un-authenticated users accidentally access this path, should be redirected to login page
  if (!userData) {
    return redirect('/login');
  }

  // if any un-verified doctor accidentally access this path, should be redirected to under review page
  if (userData.type === 'doctor' && !userData.isVerified) {
    return redirect('/under-review');
  }

  // if any un-verified administrator accidentally access this path, should be redirected to under review page
  if (userData.type === 'administrator' && !userData.isVerified) {
    return redirect('/under-review');
  }

  return { userData, dashboardMenu }
 }

export default function DashboardLayout({loaderData}: Route.ComponentProps) {
  const isTabletAndAbove = useMediaQuery("(min-width: 768px)");
  const { dashboardMenu } = loaderData
  
  // authenticated and verified users should move further on tablet and above breakpoints
  if(isTabletAndAbove) {
    return <DashboardLayoutForLargeScreen data={dashboardMenu} />
  }
  
  // authenticated and verified users should move further on mobile breakpoints
  return <DashboardLayoutForSmallScreen data={dashboardMenu} />
}