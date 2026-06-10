import { NavLink } from "react-router";
import Logo from "../Logo";
import { navMenuArr } from "./MobileNavigation";

type TabletNavigationProps = {};

export default function TabletNavigation({}: TabletNavigationProps) {
  return (
    <nav className="flex flex-col items-center gap-y-2">
      {/* Logo + brand link */}
      <NavLink
        to="."
        className={({ isActive }) =>
          isActive
            ? "text-orange-600 flex flex-col items-center gap-y-1 w-[25%]"
            : "text-sidebar-primary hover:text-orange-600 active:text-orange-600 flex flex-col items-center gap-y-1 w-[25%] group"
        }
      >
        {/* active state passed to the Logo component */}
        {({ isActive }) => (
          <>
            {/* Logo changes color based on active state */}
            <Logo
              className={`size-10 transition-colors ${
                isActive
                  ? "fill-orange-600"
                  : "group-hover:fill-orange-600 group-active:fill-orange-600"
              }`}
            />
            <span className="font-flavours text-[1.35rem]">Rabbit Foot</span>
          </>
        )}
      </NavLink>

      {/* Center navigation menu + actions */}
      <div className="flex justify-between w-full gap-x-1">
        {navMenuArr.map((menuItem) => (
          <NavLink
            to={menuItem.to}
            key={menuItem.to}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "hover:text-orange-600 active:text-orange-600"
            }
          >
            {menuItem.content}
          </NavLink>
        ))}

        {/* Call link */}
        <a href="tel:+18001234567" className="active:text-orange-600">
          Call Us Now
        </a>

        {/* Login link */}
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600"
              : "hover:text-orange-600 active:text-orange-600"
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}
