import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import Logo from "../../vectors/Logo";
import type { Customer, Doctor, NavMenu as NavMenuData } from "~/data/static-data";
import { CollapsibleMenu } from "../../CollapsibleMenu";
import { FaUser, FaUserDoctor } from "react-icons/fa6";

type MobileNavigationProps = {
  navMenu: NavMenuData[];
  userData?: Customer | Doctor;
};

export default function MobileNavigation({navMenu, userData}: MobileNavigationProps) {
  return (
    <nav className="flex items-center gap-x-2">
      {/* Main navigation link with active state styling */}
      <NavLink
        to="."
        className={({ isActive }) =>
          isActive
            ? "text-rf-primary-100 flex flex-col items-center gap-x-2 w-[96%] ml-10"
            : "text-rf-primary active:text-rf-primary-100 flex flex-col items-center gap-x-2 w-[96%] ml-10 group"
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
                  : "group-active:fill-rf-primary-100"
              }`}
            />
            <span className="font-flavours text-[1.3rem]">Rabbit Foot</span>
          </>
        )}
      </NavLink>

      {/* Right-aligned drawer menu */}
      <div className="ms-auto flex flex-wrap gap-2">
        <Drawer direction="right">
          {/* Hamburger menu trigger */}
          <DrawerTrigger
            asChild
            className="cursor-pointer text-rf-primary-100 active:bg-rf-primary-100 active:text-white"
          >
            <Button variant="outline" className="capitalize">
              <GiHamburgerMenu />
            </Button>
          </DrawerTrigger>

          {/* Drawer content with header and navigation items */}
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh] bg-rf-primary-300">
            <DrawerHeader className="flex-row justify-between">
              <DrawerTitle>
                {/* Logo inside drawer with close functionality */}
                <NavLink
                  to="."
                  className={({ isActive }) =>
                    isActive
                      ? "text-rf-primary-100"
                      : "text-rf-primary active:text-rf-primary-100 group"
                  }
                >
                  {({ isActive }) => (
                    <DrawerClose className="flex items-center gap-x-2 cursor-pointer">
                      <Logo
                        className={`size-10 transition-colors ${
                          isActive
                            ? "fill-rf-primary-100"
                            : "group-active:fill-rf-primary-100"
                        }`}
                      />
                      <span className="font-flavours text-[1.3rem]">
                        Rabbit Foot
                      </span>
                    </DrawerClose>
                  )}
                </NavLink>
              </DrawerTitle>
              <DrawerDescription>
                {/* Close button for drawer */}
                <DrawerClose
                  asChild
                  className="cursor-pointer active:bg-rf-primary-100 text-rf-primary-100 active:text-white"
                >
                  <Button variant="outline" className="size-10 rounded-full">
                    <IoCloseCircleOutline className="size-6" />
                  </Button>
                </DrawerClose>
              </DrawerDescription>
            </DrawerHeader>

            {/* Drawer navigation menu items rendered through collapsible component for the mobile view*/}
            <div className="flex flex-col gap-y-2 px-4 text-[0.685rem] min-[271px]:text-sm">
              {navMenu.map((menuItem, idx) => (
                  <CollapsibleMenu key={idx} menuItem={menuItem} isMobile/>
              ))}
              {/* Telephone call link */}
                <a href="tel:+18001234567" className="active:text-rf-primary-100">
                  <DrawerClose className="hover:cursor-pointer">Call Us Now</DrawerClose>
                </a>
              {/* Show login link if userData doesn't exist */}
              {!userData &&
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rf-primary-100"
                      : "active:text-rf-primary-100"
                  }
                >
                  <DrawerClose className="hover:cursor-pointer">Login</DrawerClose>
                </NavLink>
              }

              {/* Show dashboard link if userData is present */}
              {userData &&
                <NavLink
                  to='/profile'
                  className={({ isActive }) =>
                    isActive
                      ? "text-rf-primary-100 self-start [&>button>div]:border-rf-primary"
                      : "hover:text-rf-primary-100 active:text-rf-primary-100 self-start [&>button>div]:border-black active:[&>button>div]:border-rf-primary hover:[&>button>div]:border-rf-primary"
                  }
                >
                <DrawerClose className="hover:cursor-pointer flex items-center gap-2">
                  {/* Show customer profile icon if user is a customer */}
                  {userData.type === 'customer' &&
                  <div className="border rounded-full p-1">
                    <FaUser className="size-3" />
                  </div>}
                  {/* Show doctor profile icon if user is a doctor */}
                  {userData.type === 'doctor' &&
                  <div className="border rounded-full p-1">
                    <FaUserDoctor className="size-3" />
                  </div>}
                  <span>Profile</span>
                </DrawerClose>
                </NavLink>
              }

              {/* Show logout link if userData is present */}
              {userData &&
                <NavLink
                  to="logout"
                  className={({ isActive }) =>
                    isActive
                      ? "text-rf-primary-100"
                      : "active:text-rf-primary-100"
                  }
                >
                  <DrawerClose className="hover:cursor-pointer">Logout</DrawerClose>
                </NavLink>
              }
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
