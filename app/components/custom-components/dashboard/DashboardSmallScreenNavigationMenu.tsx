import { NavLink, useMatch } from "react-router";
import type { DashboardMenu } from "~/data/static-data"
import SlideInUp from "../animations/SlideInUp";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { twMerge } from "tailwind-merge";


type DashboardSmallScreenNavigationMenuProps = {
    data: DashboardMenu[];
}

export default function DashboardSmallScreenNavigationMenu({data}: DashboardSmallScreenNavigationMenuProps) {
 const isSmallTablet = useMediaQuery("(min-width: 470px)"); // check if the screen width is from small tablet to larger tablets
 const isAppointmentsPage = useMatch("dashboard/appointments");
  return (
    // provide an animated slide-in-up effect for the menu bar
    <SlideInUp inView={false}>
        <nav className="fixed bottom-0 h-10 inset-x-4 z-2 flex items-center justify-center bg-rf-primary-300 shadow-rf-direct-300 rounded-t-sm">
            <ul className={`w-full flex items-center justify-center gap-x-3 ${isSmallTablet && 'justify-evenly'}`}>
                {data.map((item) => (
                <li key={item.content}>
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                        isActive
                            ? `${twMerge('text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-7', isSmallTablet && '[&>svg]:size-5')}` // active icon size increases in mobile screen sizes
                            : 'hover:text-rf-primary-100 flex items-center gap-x-1 [&>svg]:size-5' // Hover styling for inactive links
                        }
                        end={isAppointmentsPage ? true : false}
                    >
                        <item.icon />
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