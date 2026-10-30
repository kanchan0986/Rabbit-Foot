import { NavLink, useMatch } from 'react-router';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '~/components/ui/sidebar'
import { TooltipProvider } from '~/components/ui/tooltip';
import type { Administrator, Customer, DashboardMenu, Doctor } from '~/data/static-data';

type DashboardLargeScreenNavigationMenuProps = {
    items: DashboardMenu[];
    userData: Customer | Doctor | Administrator
}

export default function   DashboardLargeScreenNavigationMenu({items, userData}: DashboardLargeScreenNavigationMenuProps) {
  const { open } = useSidebar(); // useSidebar hook provides sidebar state; "open" here actually means "collapsed"

  const isCustomer = userData.type === "customer"; // type check for customer

  const isDoctor = userData.type === "doctor"; // type check for doctor

  const isDashboardActive =  useMatch("/dashboard"); // Match the exact "/dashboard" route

  const isProfileActive =  useMatch("/dashboard/profile/*"); // Match the exact "/dashboard/profile" route 

  const isAppointmentsActive = useMatch("/dashboard/appointments/*"); // any nested route under appointments should be under Appointments

  const isDoctorsActive = useMatch("/dashboard/doctors/*"); // any nested route under doctors should be under Doctors

  return (
    // Wrapping with TooltipProvider ensures tooltips to show up on collapsed view in tablet and above breakpoints
    <TooltipProvider>
      {/* align the menu icons at the center when sidebar is collapsed */}
        <SidebarMenu  className={`w-full flex gap-y-1 ${open && 'items-center'}`}>
          {(isCustomer ? 
              items.filter(item => item.to !== "." && item.to !== "doctors") // don't show overview menu & doctors menu for patients
            : isDoctor ? 
              items.filter(item => item.to !== "doctors") // don't show doctors menu for doctors
            : 
              items
            ).map((item) => (
            <SidebarMenuItem key={item.content}>
                <NavLink
                    to={item.to}
                    className={() => {

                      // Dashboard menu: highlight dashboard route when active or hover on it's in-active state
                      if(item.to === ".") return isDashboardActive ? "text-rf-primary-100" : "hover:text-rf-primary-100";

                      // Profile menu: highlight if any profile-related route is active or hover on it's in-active state
                      if(item.to === "profile") return isProfileActive ? "text-rf-primary-100" : "hover:text-rf-primary-100";

                      // Appointments menu: highlight if any appointment-related route is active or hover on it's in-active state
                      if(item.to === "appointments") return isAppointmentsActive ? "text-rf-primary-100" : "hover:text-rf-primary-100";
                      
                      // Doctors menu: highlight if any doctors-related route is active or hover on it's in-active state
                      if(item.to === "doctors") return isDoctorsActive ? "text-rf-primary-100" : "hover:text-rf-primary-100";

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