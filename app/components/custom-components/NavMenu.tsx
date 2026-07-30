import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"
import { NavLink } from "react-router";
import type { NavMenu } from "~/data/static-data";
import { CollapsibleMenu } from "./CollapsibleMenu";

export function NavMenu({ menuItem }: { menuItem: NavMenu }) {
  if (menuItem.children && menuItem.children.length > 0) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent! hover:bg-transparent! focus:text-rf-primary-100 hover:text-rf-primary-100 font-normal text-[15px] min-[676px]:text-[1rem]">
          <NavLink
            to={menuItem.to}
            className={({ isActive }) =>
              isActive ? "text-rf-primary-100" : "hover:text-rf-primary-100"
            }
          >
            {menuItem.content}
          </NavLink>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="min-w-max flex flex-col gap-y-1 p-2">
            {menuItem.children.map((item, idx) => (
              <CollapsibleMenu key={idx} menuItem={item} isMobile={false}/>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem className="p-2">
      <NavLink
        to={menuItem.to}
        className={({ isActive }) =>
          isActive ? "text-rf-primary-100" : "hover:text-rf-primary-100"
        }
      >
        {menuItem.content}
      </NavLink>
    </NavigationMenuItem>
  );
}





















// For 2-Layered Navigation menu
// function SubMenu({ item }: { item: NavItem }) {
//   return (
//     <li className="flex flex-col">
//       {/* sub-menu item links */}
//       <NavLink
//         to={item.to}
//         className={({ isActive }) => isActive ? "text-rf-primary-100" : "hover:text-rf-primary-100" }
//       >
//         {item.content}
//       </NavLink>

//       {/* sub-menu content list */}
//       {(item.children && item.children.length > 0) && (
//         <ul className="mt-1 flex flex-col gap-y-1 border-l border-l-rf-grey-100">
//           {item.children.map((subItem, idx) => (
//             // Nested sub-menu item links
//             <li key={idx} className="flex items-center">
//               {/* emdash */}
//               <span className="text-[8px]">&#8212;</span>
//               <NavLink
//                 to={subItem.to}
//                 className={({ isActive }) => `hover:text-rf-primary-100 text-[15px] pl-1 ${isActive && "text-rf-primary-100 font-normal"}`}
//               >
//                 {subItem.content}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }


// For 1-Layered Navigation menu
// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<typeof NavigationMenuItem> & { href: string, title: string }) {
//   return (
//     <NavigationMenuItem {...props} className="p-2">
//       <NavLink to={href} className={({ isActive }) => isActive ? "text-rf-primary-100" : "hover:text-rf-primary-100" }>
//           <div className="flex flex-col gap-1">
//               <div className="leading-none font-normal text-md">{title}</div>
//               {children && <div className="line-clamp-2 text-muted-foreground">{children}</div>}
//           </div>
//       </NavLink>
//     </NavigationMenuItem>
//   )
// }