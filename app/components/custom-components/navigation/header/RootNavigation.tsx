import { NavLink } from "react-router";
import { IoLogInOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import Logo from "../../vectors/Logo";
import { NavMenu } from "../../NavMenu";
import { NavigationMenu, NavigationMenuList } from "~/components/ui/navigation-menu";
import type { NavMenu as NavMenuData } from "~/data/static-data";

type RootNavigationProps = {
  navMenu: NavMenuData[]
};

export default function RootNavigation({navMenu}: RootNavigationProps) {
  return (
    <nav className="flex items-center gap-x-2">
      {/* Logo + brand link */}
      <NavLink
        to="."
        className={({ isActive }) =>
          isActive
            ? "text-rf-primary-100 flex items-center gap-x-2 w-[20%]"
            : "text-rf-primary hover:text-rf-primary-100 flex items-center gap-x-2 w-[20%] group"
        }
      >
        {/* active state passed to the Logo component */}
        {({ isActive }) => (
          <>
            {/* Logo changes color based on active state */}
            <Logo
              className={`size-10 transition-colors ${
                isActive ? "fill-rf-primary-100" : "group-hover:fill-rf-primary-100"
              }`}
            />
            <span className="font-flavours text-[1.35rem]">Rabbit Foot</span>
          </>
        )}
      </NavLink>

      {/* Center navigation menu */}
      <NavigationMenu className="w-[50%] flex justify-center gap-x-4 mx-auto [&_svg]:size-4">
        <NavigationMenuList>
          {navMenu.map((menuItem, idx) => (
            <NavMenu key={idx} menuItem={menuItem}/>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right-side actions: phone + login */}
      <div className="ms-auto flex gap-x-4">
        {/* Call link */}
        <a href="tel:+18001234567" className="hover:text-rf-primary-100">
          <div className="flex gap-x-1">
            <PiPhoneCallLight className="size-6" />
            <span>Call Us Now</span>
          </div>
        </a>

        {/* Login link */}
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive
              ? "text-rf-primary-100 flex gap-x-1"
              : "hover:text-rf-primary-100 flex gap-x-1"
          }
        >
          <IoLogInOutline className="size-6" />
          Login
        </NavLink>
      </div>
    </nav>
  );
}
