import { NavLink, useMatch } from 'react-router';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '~/components/ui/sidebar'
import { TooltipProvider } from '~/components/ui/tooltip';
import type { DashboardMenu } from '~/data/static-data';

type DashboardLargeScreenNavigationMenuProps = {
    items: DashboardMenu[]
}

export default function DashboardLargeScreenNavigationMenu({items}: DashboardLargeScreenNavigationMenuProps) {
  const { open } = useSidebar(); // useSidebar hook provides sidebar state; "open" here actually means "collapsed"

  const isDashboard =  useMatch("/dashboard"); // Match the exact "/dashboard" route
  const isEditProfile =  useMatch("/dashboard/edit-profile"); // Match the exact "/dashboard/edit-profile" route
  const isChangePassword =  useMatch("/dashboard/change-password"); // Match the exact "/dashboard/change-password" route

  const isProfileActive = isDashboard || isEditProfile || isChangePassword; // Whether it is dashboard or editProfile or changePassword, it should be under Profile 

  const isAppointmentsActive = useMatch("/dashboard/appointments/*"); // any nested route under appointments should be under Appointments

  return (
    // Wrapping with TooltipProvider ensures tooltips to show up on collapsed view in tablet and above breakpoints
    <TooltipProvider>
      {/* align the menu icons at the center when sidebar is collapsed */}
        <SidebarMenu  className={`w-full flex gap-y-1 ${open && 'items-center'}`}>
          {items.map((item) => (
            <SidebarMenuItem key={item.content}>
                <NavLink
                    to={item.to}
                    className={() => {

                      // Profile menu: highlight if any profile-related route is active or hover on it's in-active state
                      if(item.to === ".") return isProfileActive ? "text-rf-primary-100" : "hover:text-rf-primary-100";

                      // Appointments menu: highlight if any appointment-related route is active or hover on it's in-active state
                      if(item.to === "appointments") return isAppointmentsActive ? "text-rf-primary-100" : "hover:text-rf-primary-100";

                      // Default menu: highlight on hover only
                      return "hover:text-rf-primary-100";
                    }}

                    end={false} // disables exact matching, so nested routes can still mark the parent link as active
                >
                  <SidebarMenuButton tooltip={item.content} className='[&>svg]:size-5 lg:[&>svg]:size-6'>
                    <item.icon />
                    <span className='font-normal text-[1rem]'>{item.content}</span>
                  </SidebarMenuButton>
                </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
    </TooltipProvider>
  )
}