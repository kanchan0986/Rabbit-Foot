import { NavLink } from "react-router";
import Logo from "../../vectors/Logo";
import { type NavMenu as NavMenuData } from "~/data/static-data";
import { NavMenu } from "../../NavMenu";
import { NavigationMenu, NavigationMenuList } from "~/components/ui/navigation-menu";

type TabletNavigationProps = {
  navMenu: NavMenuData[]
};

export default function TabletNavigation({navMenu}: TabletNavigationProps) {
  return (
    <nav className="flex flex-col items-center gap-y-2">
      {/* Logo + brand link */}
      <NavLink
        to="."
        className={({ isActive }) =>
          isActive
            ? "text-rf-primary-100 flex flex-col items-center gap-y-1 w-[25%]"
            : "text-rf-primary hover:text-rf-primary-100 active:text-rf-primary-100 flex flex-col items-center gap-y-1 w-[25%] group"
        }
      >
        {/* active state passed to the Logo component */}
        {({ isActive }) => (
          <>
            {/* Logo changes color based on active state */}
            <Logo
              className={`size-10 transition-colors ${
                isActive
                  ? "fill-rf-primary-100"
                  : "group-hover:fill-rf-primary-100 group-active:fill-rf-primary-100"
              }`}
            />
            <span className="font-flavours text-[1.35rem]">Rabbit Foot</span>
          </>
        )}
      </NavLink>

      {/* Center navigation menu + actions */}
      <div className="flex justify-center w-full items-center text-[15px] [&_svg]:size-4 min-[676px]:text-[1rem]">
        <NavigationMenu>
          <NavigationMenuList>
            {navMenu.map((menuItem, idx) => (
                <NavMenu key={idx} menuItem={menuItem}/>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call link */}
        <a href="tel:+18001234567" className="active:text-rf-primary-100 p-2">
          Call Us Now
        </a>

        {/* Login link */}
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive
              ? "text-rf-primary-100"
              : "hover:text-rf-primary-100 active:text-rf-primary-100 p-2"
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}
