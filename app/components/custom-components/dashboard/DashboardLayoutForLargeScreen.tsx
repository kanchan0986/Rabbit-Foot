import { DashboardSidebar } from './DashboardSidebar'
import { SidebarProvider } from '~/components/ui/sidebar'
import { Outlet } from 'react-router'
import type { Administrator, Customer, DashboardMenu, Doctor } from '~/data/static-data'

type DashboardLayoutForLargeScreenProps = {
  data: {
    userData: Customer | Doctor | Administrator;
    dashboardMenu: DashboardMenu[];
  }
}

export default function DashboardLayoutForLargeScreen({data}: DashboardLayoutForLargeScreenProps) {
  return (
    <SidebarProvider>
      {/* sidebar navigation area for tablet and above */}
      <DashboardSidebar data={{userData: data.userData, dashboardMenu: data.dashboardMenu}}/>
      {/* children contents of the dashboard-layout */}
      <main className='w-full'>
        <Outlet/>
      </main>
    </SidebarProvider>
  )
}