import { NavLink } from "react-router";
import Logo from "../../vectors/Logo";
import { type Administrator, type Customer, type Doctor, type NavMenu as NavMenuData } from "~/data/static-data";
import { NavMenu } from "../../NavMenu";
import { NavigationMenu, NavigationMenuList } from "~/components/ui/navigation-menu";
import { FaUser, FaUserDoctor } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

type TabletNavigationProps = {
  navMenu: NavMenuData[];
  userData?: Customer | Doctor | Administrator;
};

export default function TabletNavigation({navMenu, userData}: TabletNavigationProps) {
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

        {/* Show login link if userData doesn't exist */}
        {!userData &&
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "text-rf-primary-100 p-2"
                : "hover:text-rf-primary-100 p-2 active:text-rf-primary-100"
            }
          >
            Login
          </NavLink>
        }

        {/* Show the dashboard link if the userData is present and the user is a customer or verified doctor or verified administrator*/}
        {userData && (userData.type === "customer" || (userData.type === "doctor" && userData.isVerified) || userData.type === "administrator" && userData.isVerified) &&
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive
                ? "text-rf-primary-100 p-2 [&>div]:border-rf-primary"
                : "hover:text-rf-primary-100 active:text-rf-primary-100 p-2 [&>div]:border-black active:[&>div]:border-rf-primary hover:[&>div]:border-rf-primary"
            }
          >

            {/* Show customer profile icon if user is a customer */}
            {userData.type === 'customer' && 
            <div className="border-2 rounded-full p-1.25">
              <FaUser className="size-5" />
            </div>}

            {/* Show doctor profile icon if user is a verified doctor */}
            {userData.type === 'doctor' && 
            <div className="border-2 rounded-full p-1.25">
              <FaUserDoctor className="size-5" />
            </div>}

            {/* Show administrator profile icon if user is a verified administrator */}
            {userData.type === 'administrator' && 
            <div className="border-2 rounded-full p-1.25">
              <RiAdminFill className="size-5" />
            </div>}

          </NavLink>
        }

        {/* Show logout link if userData is present */}
        {userData &&
          <NavLink
            to="logout"
            className={({ isActive }) =>
              isActive
                ? "text-rf-primary-100"
                : "hover:text-rf-primary-100 active:text-rf-primary-100 p-2"
            }
          >
            Logout
          </NavLink>
        }
      </div>
    </nav>
  );
}
