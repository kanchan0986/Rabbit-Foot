import { DashboardSidebar } from './DashboardSidebar'
import { SidebarProvider } from '~/components/ui/sidebar'
import { Outlet } from 'react-router'
import type { DashboardMenu } from '~/data/static-data'

export default function DashboardLayoutForLargeScreen({data}: {data: DashboardMenu[]}) {
  return (
    <SidebarProvider>
      {/* sidebar navigation area for tablet and above */}
      <DashboardSidebar data={data}/>
      {/* children contents of the dashboard-layout */}
      <main>
        <Outlet/>
      </main>
    </SidebarProvider>
  )
}