import { NavLink } from "react-router";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import Logo from "../../vectors/Logo";
import { NavMenu } from "../../NavMenu";
import { NavigationMenu, NavigationMenuList } from "~/components/ui/navigation-menu";
import type { Administrator, Customer, Doctor, NavMenu as NavMenuData } from "~/data/static-data";
import { FaUser, FaUserDoctor } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

type RootNavigationProps = {
  navMenu: NavMenuData[];
  userData?: Customer | Doctor | Administrator;
};

export default function RootNavigation({navMenu, userData}: RootNavigationProps) {
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
      <div className="ms-auto flex items-center gap-x-4">
        {/* Call link */}
        <a href="tel:+18001234567" className="hover:text-rf-primary-100">
          <div className="flex gap-x-1">
            <PiPhoneCallLight className="size-6" />
            <span>Call Us Now</span>
          </div>
        </a>

        {/* Show login link if userData doesn't exist */}
        {!userData &&
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
        }

        {/* Show the dashboard link if the userData is present and the user is a customer or verified doctor or verified administrator*/}
        {userData && (userData.type === "customer" || (userData.type === "doctor" && userData.isVerified) || (userData.type === "administrator" && userData.isVerified)) &&
          <NavLink
            to='dashboard'
            className={({ isActive }) =>
              isActive
                ? "text-rf-primary-100 flex gap-x-1 [&>div]:border-rf-primary"
                : "hover:text-rf-primary-100 flex gap-x-1 [&>div]:border-black hover:[&>div]:border-rf-primary"
            }
          >
            {/* Show customer profile icon if user is a customer */}
            {userData.type === 'customer' && <div className="border-2 rounded-full p-1.25">
              <FaUser className="size-4" />
            </div>}

            {/* Show doctor profile icon if user is a verified doctor */}
            {userData.type === 'doctor' && <div className="border-2 rounded-full p-1.25">
              <FaUserDoctor className="size-4" />
            </div>}

            {/* Show administrator profile icon if user is a verified administrator */}
            {userData.type === 'administrator' && <div className="border-2 rounded-full p-1.25">
              <RiAdminFill className="size-4" />
            </div>}

          </NavLink>
        }

        {/* Show logout link if userData is present */}
        {userData &&
          <NavLink
            to="logout"
            className={({ isActive }) =>
              isActive
                ? "text-rf-primary-100 flex gap-x-1"
                : "hover:text-rf-primary-100 flex gap-x-1"
            }
          >
            <IoLogOutOutline className="size-6" />
            Logout
          </NavLink>
        }
      </div>
    </nav>
  );
}
