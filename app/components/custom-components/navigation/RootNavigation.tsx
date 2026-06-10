import { NavLink } from "react-router";
import { IoLogInOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { navMenuArr } from "./MobileNavigation";
import Logo from "../Logo";

type RootNavigationProps = {};

export default function RootNavigation({}: RootNavigationProps) {
  return (
    <nav className="flex items-center gap-x-2">
      {/* Logo + brand link */}
      <NavLink
        to="."
        className={({ isActive }) =>
          isActive
            ? "text-orange-600 flex items-center gap-x-2 w-[20%]"
            : "text-sidebar-primary hover:text-orange-600 flex items-center gap-x-2 w-[20%] group"
        }
      >
        {/* active state passed to the Logo component */}
        {({ isActive }) => (
          <>
            {/* Logo changes color based on active state */}
            <Logo
              className={`size-10 transition-colors ${
                isActive ? "fill-orange-600" : "group-hover:fill-orange-600"
              }`}
            />
            <span className="font-flavours text-[1.35rem]">Rabbit Foot</span>
          </>
        )}
      </NavLink>

      {/* Center navigation menu */}
      <div className="w-[50%] flex justify-center gap-x-4 mx-auto">
        {navMenuArr.map((menuItem) => (
          <NavLink
            to={menuItem.to}
            key={menuItem.to}
            className={({ isActive }) =>
              isActive ? "text-orange-600" : "hover:text-orange-600"
            }
          >
            {menuItem.content}
          </NavLink>
        ))}
      </div>

      {/* Right-side actions: phone + login */}
      <div className="ms-auto flex gap-x-4">
        {/* Call link */}
        <a href="tel:+18001234567" className="hover:text-orange-600">
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
              ? "text-orange-600 flex gap-x-1"
              : "hover:text-orange-600 flex gap-x-1"
          }
        >
          <IoLogInOutline className="size-6" />
          Login
        </NavLink>
      </div>
    </nav>
  );
}
