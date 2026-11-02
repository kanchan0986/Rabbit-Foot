import { NavLink, useMatch } from "react-router";
import type { Administrator, Customer, DashboardMenu, Doctor } from "~/data/static-data"
import SlideInUp from "../animations/SlideInUp";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { twMerge } from "tailwind-merge";
import { TooltipSides } from "../TooltipSides";


type DashboardSmallScreenNavigationMenuProps = {
  data: {
    userData: Customer | Doctor | Administrator;
    dashboardMenu: DashboardMenu[];
  }
}

export default function DashboardSmallScreenNavigationMenu({data}: DashboardSmallScreenNavigationMenuProps) {
 const isSmallTablet = useMediaQuery("(min-width: 700px)"); // check if the screen width is from small tablet to larger tablets

  const isCustomer = data.userData.type === "customer"; // type check for customer

  const isDoctor = data.userData.type === "doctor"; // type check for doctor

  const isDashboardActive =  useMatch("/dashboard"); // Match the exact "/dashboard" route

  const isProfileActive =  useMatch("/dashboard/profile/*"); // Match the exact "/dashboard/profile" route 

  const isAppointmentsActive = useMatch("/dashboard/appointments/*"); // any nested route under appointments should be under Appointments
  
  const isDoctorsActive = useMatch("/dashboard/doctors/*"); // any nested route under doctors should be under Doctors

  const isCustomersActive = useMatch("/dashboard/patients/*"); // any nested route under customers should be under Customers

  return (
    // provide an animated slide-in-up effect for the menu bar
    <SlideInUp inView={false}>
        <nav className="fixed bottom-0 h-10 inset-x-4 z-2 flex items-center justify-center bg-rf-primary-300 shadow-rf-direct-300 rounded-t-sm">
            <ul className={`w-full flex items-center justify-center gap-x-3 ${isSmallTablet && 'justify-evenly'}`}>
                {(isCustomer ? 
                    data.dashboardMenu.filter(item => item.to !== "." && item.to !== "doctors" && item.to !== "patients") // don't show overview menu, doctors & patients menu for patients
                  : isDoctor ?                  
                    data.dashboardMenu.filter(item => item.to !== "doctors" && item.to !== "patients") // don't show doctors & patients menu for doctors
                  : 
                    data.dashboardMenu
                 ).map((item) => (
                <li key={item.content}>
                    <NavLink
                        to={item.to}
                        className={() => {

                            // Dashboard menu: highlight dashboard route when active or hover on it's in-active state
                            if(item.to === ".") return isDashboardActive ?
                                `${twMerge('text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-7', isSmallTablet && '[&>svg]:size-5')}` // active icon size increases in mobile screen sizes
                            : 
                                'hover:text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-5' // Hover styling for inactive links

                            // Profile menu: highlight if any profile-related route is active or hover on it's in-active state
                            if(item.to === "profile") return isProfileActive ? 
                                `${twMerge('text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-7', isSmallTablet && '[&>svg]:size-5')}` // active icon size increases in mobile screen sizes
                            : 
                                'hover:text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-5' // Hover styling for inactive links

                            // Appointments menu: highlight if any appointment-related route is active or hover on it's in-active state
                            if(item.to === "appointments") return isAppointmentsActive ?
                                `${twMerge('text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-7', isSmallTablet && '[&>svg]:size-5')}` // active icon size increases in mobile screen sizes
                            : 
                                'hover:text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-5' // Hover styling for inactive links

                            // Doctors menu: highlight if any doctor-related route is active or hover on it's in-active state
                            if(item.to === "doctors") return isDoctorsActive ?
                                `${twMerge('text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-7', isSmallTablet && '[&>svg]:size-5')}` // active icon size increases in mobile screen sizes
                            : 
                                'hover:text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-5' // Hover styling for inactive links

                            // Customers menu: highlight if any customer-related route is active or hover on it's in-active state
                            if(item.to === "patients") return isCustomersActive ?
                                `${twMerge('text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-7', isSmallTablet && '[&>svg]:size-5')}` // active icon size increases in mobile screen sizes
                            : 
                                'hover:text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-5' // Hover styling for inactive links

                            // Default menu: highlight on hover only
                            return 'hover:text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-5'

                        }}
                        
                        end={false} // disables exact matching, so nested routes can still mark the parent link as active
                    >
                        {!isSmallTablet ? // show icons with tooltip for tablets and above screen sizes
                        <TooltipSides side="top" content={item.content}>
                            <item.icon />
                        </TooltipSides>
                        : <item.icon /> // show only icons for small screens
                        } 
                        {/* Show text label only on small tablets and larger */}
                        {isSmallTablet && <span className="font-normal text-[15px] min-[676px]:text-[1rem]">{item.content}</span>}
                    </NavLink>
                </li>
                ))}
            </ul>
        </nav>
    </SlideInUp>
  )
}