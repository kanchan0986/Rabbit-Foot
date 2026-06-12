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
      <div className="w-[50%] flex justify-center gap-x-4 mx-auto">
        {navMenuArr.map((menuItem) => (
          <NavLink
            to={menuItem.to}
            key={menuItem.to}
            className={({ isActive }) =>
              isActive ? "text-rf-primary-100" : "hover:text-rf-primary-100"
            }
          >
            {menuItem.content}
          </NavLink>
        ))}
      </div>

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
