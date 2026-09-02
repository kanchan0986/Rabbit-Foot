import {
  Sidebar,
  SidebarContent,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "~/components/ui/sidebar"
import { GoSidebarCollapse, GoSidebarExpand  } from "react-icons/go";
import type { DashboardMenu } from "~/data/static-data";
import DashboardLargeScreenNavigationMenu from "./DashboardLargeScreenNavigationMenu";

export function DashboardSidebar({data}: {data: DashboardMenu[]}) {
  const { open } = useSidebar(); // useSidebar hook provides sidebar state; "open" here actually means "collapsed"
  return (
    <Sidebar className="sticky inset-y-18 z-0">
      <SidebarContent className="flex gap-y-1">
        {/* align the trigger icon at the end when sidebar is expanded */}
        <SidebarTrigger className={(`w-full flex items-center hover:cursor-w-resize ${!open ? "justify-end pr-2" : "justify-center  hover:text-rf-primary active:text-rf-primary"}`)}>
          {/* change the trigger icons based on expanded & collapsed state of the sidebar */}
          {!open ? (
            <GoSidebarExpand className="size-5 text-rf-primary lg:size-6" />
          ) : (
            <GoSidebarCollapse className="size-5 lg:size-6" />
          )}
        </SidebarTrigger>
        {/* only show this navigation on tablet and above breakpoints */}
        <DashboardLargeScreenNavigationMenu items={data} />
      </SidebarContent>
      <SidebarRail/>
    </Sidebar>
  )
}