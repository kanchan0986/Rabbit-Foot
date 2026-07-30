import { GoChevronDown } from "react-icons/go";
import { NavLink } from "react-router";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"
import type { NavMenu } from "~/data/static-data";
import { DrawerClose } from "../ui/drawer";

  // Recursive helper component to render individual menu items which recursively calls itself if the item has children
  export function CollapsibleItem ({item, isMobile}:{item: NavMenu, isMobile: boolean}) {

    if (item.children && item.children.length > 0) {
      return (
        // Collapsible wrapper for items with submenus
        <Collapsible className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-2">
              {/* secondary menu items those who have any sub menu */}
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-rf-primary-100"
                    : "active:text-rf-primary-100"
                }
              >
                {/* wrap Drawer closing button around the item content for the mobile menu otherwise render the without it */}
                {isMobile ? <DrawerClose className="cursor-pointer">{item.content}</DrawerClose> : item.content }
              </NavLink>
              {/* Trigger to expand/collapse submenu */}
              <CollapsibleTrigger className="data-[state=open]:[&>svg]:rotate-180 data-[state=open]:[&>svg]:fill-rf-primary">
                <GoChevronDown className="size-4 transition-transform ease-in duration-100" />
              </CollapsibleTrigger>
            </div>
          {/* Submenu content rendered recursively */}
          <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
            <div className="flex flex-col gap-2">
              {item.children.map((child, itemIdx) => <CollapsibleItem key={itemIdx} item={child} isMobile={isMobile} />)}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
          // secondary menu items those do not have any sub menu
          <NavLink 
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "text-rf-primary-100"
                : "active:text-rf-primary-100"
            } 
          >
            {/* wrap Drawer closing button around the item content for the mobile menu otherwise render the without it */}
            {isMobile ? <DrawerClose className="cursor-pointer">{item.content}</DrawerClose> : item.content }
          </NavLink>
    )
  }

export function CollapsibleMenu({menuItem, isMobile}: {menuItem: NavMenu; isMobile: boolean}) {
  return (
    <div className="flex flex-col gap-2">
      <CollapsibleItem item={menuItem} isMobile={isMobile} />
    </div>
  )
}