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
import Logo from "../Logo";

type MobileNavigationProps = {};

export const navMenuArr = [
  { to: "about-us", content: "AboutUs" },
  { to: "our-doctors", content: "Our Doctors" },
  { to: "services", content: "Services" },
  { to: "office-locations", content: "Office Locations" },
];

export default function MobileNavigation({}: MobileNavigationProps) {
  return (
    <nav className="flex items-center gap-x-2">
      {/* Main navigation link with active state styling */}
      <NavLink
        to="."
        className={({ isActive }) =>
          isActive
            ? "text-rf-primary-100 flex flex-col items-center gap-x-2 w-[96%]"
            : "text-rf-primary active:text-rf-primary-100 flex flex-col items-center gap-x-2 w-[96%] group"
        }
      >
        {/* active state passed to the Logo component */}
        {({ isActive }) => (
          <>
            {/* Logo changes color based on active state */}
            <Logo
              className={`size-10 transition-colors ${
                isActive ? "fill-rf-primary-100" : "group-active:fill-rf-primary-100"
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
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh] bg-rf-primary-100">
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

            {/* Drawer navigation menu items */}
            <div className="flex flex-col gap-y-2 px-4">
              {navMenuArr.map((menuItem) => (
                <NavLink
                  to={menuItem.to}
                  key={menuItem.to}
                  className={({ isActive }) =>
                    isActive ? "text-rf-primary-100" : "active:text-rf-primary-100"
                  }
                >
                  {/* Drawer closing button along with the menu content */}
                  <DrawerClose className="cursor-pointer">
                    {menuItem.content}
                  </DrawerClose>
                </NavLink>
              ))}
              {/* Telephone call link */}
              <a href="tel:+18001234567" className="active:text-rf-primary-100">
                Call Us Now
              </a>
              {/* Login link */}
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? "text-rf-primary-100" : "active:text-rf-primary-100"
                }
              >
                Login
              </NavLink>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
