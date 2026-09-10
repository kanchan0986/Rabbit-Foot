import { NavLink } from 'react-router';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '~/components/ui/sidebar'
import { TooltipProvider } from '~/components/ui/tooltip';
import type { DashboardMenu } from '~/data/static-data';

type DashboardLargeScreenNavigationMenuProps = {
    items: DashboardMenu[]
}

export default function DashboardLargeScreenNavigationMenu({items}: DashboardLargeScreenNavigationMenuProps) {
  const { open } = useSidebar(); // useSidebar hook provides sidebar state; "open" here actually means "collapsed"
  return (
    // Wrapping with TooltipProvider ensures tooltips to show up on collapsed view in tablet and above breakpoints
    <TooltipProvider>
      {/* align the menu icons at the center when sidebar is collapsed */}
        <SidebarMenu  className={`w-full flex gap-y-1 ${open && 'items-center'}`}>
          {items.map((item) => (
            <SidebarMenuItem key={item.content}>
                <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                    isActive
                        ? "text-rf-primary-100"
                        : "hover:text-rf-primary-100"
                    }
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