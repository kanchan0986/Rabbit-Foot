import { Outlet, useMatch } from "react-router";
import TopNavigation from "~/components/custom-components/navigation/header/TopNavigation";
import SpacerVector from "~/components/custom-components/vectors/SpacerVector";
import Wrapper from "~/components/custom-components/Wrapper";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import type { Route } from "./+types/root-layout";
import { navMenuArr, type Administrator, type Customer, type Doctor, customerArr, doctorArray, adminArr } from "~/data/static-data";
import spacer from '~/assets/spacer-vector-footer.png'
import { useEffect } from "react";
import NavbarLayout from "./navbar-layout";
import FooterLayout from "./footer-layout";

export const clientLoader = ({}:Route.ClientLoaderArgs) => { 
  // fetch data from api
  const navMenuData = navMenuArr
  const userDataStringified = sessionStorage.getItem("userData"); // Retrieve user data string from session storage (if it exists)
  const userData: Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // Parse the stringified data into a Customer object or Doctor Object (only if data exists)
  const customerData = customerArr; // fetch the customer array data from the server at app reload
  const doctorData = doctorArray; // fetch the doctor array data from the server at app reload
  const adminData = adminArr; // fetch the admin array data from the server at app reload
  return { navMenuData, userData, customerData, doctorData, adminData }
 }

export default function RootLayout({loaderData}: Route.ComponentProps) {
  const { navMenuData, userData, customerData, doctorData, adminData } = loaderData

  const isTabletAndAbove = useMediaQuery("(min-width: 768px)");

  const isHomepage = useMatch("/");
  const isAboutUsPage = useMatch("about-us");
  const isDoctorsDetailsPage = useMatch("our-doctors/:doctor-id");
  const isServicesPage = useMatch("services");
  const isDashboardPage = useMatch("dashboard/*");
  useEffect(() => {
    sessionStorage.setItem("customerData", JSON.stringify(customerData)) // store the customerData to the session storage and watch for it's changes
    sessionStorage.setItem("doctorData", JSON.stringify(doctorData)) // store the doctorData to the session storage and watch for it's changes
    sessionStorage.setItem("adminData", JSON.stringify(adminData)) // store the adminData to the session storage and watch for it's changes
  }, [customerData, doctorData, adminData])

  return (
    <>
      {/* Top bar navigation always visible */}
      <Wrapper className="bg-rf-primary-100 py-2">
        <TopNavigation />
      </Wrapper>

      {/* Responsive navigation menu (mobile/tablet/laptop) */}
      <NavbarLayout navMenuData={navMenuData} userData={userData} />

      {/* Outlet for nested routes */}
      <Outlet />

      {/* Decorated curvy spacer before the footer but not for dashboard pages*/}
      {!isDashboardPage && <SpacerVector className={`[&>path:nth-child(2)]:fill-rf-primary-300  ${(isHomepage || isAboutUsPage  || isServicesPage) && '[&>path:nth-child(1)]:fill-rf-secondary'} ${isDoctorsDetailsPage && '[&>path:nth-child(1)]:fill-rf-white-100'} w-full [&>path:nth-child(2)]:drop-shadow-[0_-4px_2px_rgba(0,0,0,0.12)]`}  />}
      
      {/* Decorated curvy spacer before the footer only for dashboard pages */}
      {isDashboardPage && <img src={spacer} alt="spacer" className="object-cover object-center -mt-18 relative z-1 drop-shadow-[0_-4px_2px_rgba(0,0,0,0.12)]" />}
      
      {/* Responsive footer navigation menu (mobile/tablet/laptop) */}
      <FooterLayout navMenuData={navMenuData} />

      {(!isTabletAndAbove && isDashboardPage) && <div className="h-10 bg-rf-secondary"/>}
    </>
  );
}
