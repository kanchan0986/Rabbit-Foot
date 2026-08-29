import { Outlet } from 'react-router'
import type { DashboardMenu } from '~/data/static-data'
import DashboardSmallScreenNavigationMenu from './DashboardSmallScreenNavigationMenu'

export default function DashboardLayoutForSmallScreen({data}: {data: DashboardMenu[]}) {
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