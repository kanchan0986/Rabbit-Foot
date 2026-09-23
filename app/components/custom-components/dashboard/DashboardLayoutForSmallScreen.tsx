import { Outlet } from 'react-router'
import type { Administrator, Customer, DashboardMenu, Doctor } from '~/data/static-data'
import DashboardSmallScreenNavigationMenu from './DashboardSmallScreenNavigationMenu'

type DashboardLayoutForSmallScreenProps = {
  data: {
    userData: Customer | Doctor | Administrator;
    dashboardMenu: DashboardMenu[];
  }
}

export default function DashboardLayoutForSmallScreen({data}: DashboardLayoutForSmallScreenProps) {
  return (
    <>
        {/* children contents of the dashboard-layout */}
        <main>
          <Outlet/>
        </main>
        {/* navigation area for mobile */}
        <DashboardSmallScreenNavigationMenu data={data} />    
    </>
  )
}