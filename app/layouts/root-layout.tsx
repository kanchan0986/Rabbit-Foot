import { Outlet, useMatch } from "react-router";
import CopyrightInformation from "~/components/custom-components/navigation/footer/CopyrightInformation";
import MobileFooterNavigation from "~/components/custom-components/navigation/footer/MobileFooterNavigation";
import MobileNavigation from "~/components/custom-components/navigation/header/MobileNavigation";
import RootFooterNavigation from "~/components/custom-components/navigation/footer/RootFooterNavigation";
import RootNavigation from "~/components/custom-components/navigation/header/RootNavigation";
import TabletFooterNavigation from "~/components/custom-components/navigation/footer/TabletFooterNavigation";
import TabletNavigation from "~/components/custom-components/navigation/header/TabletNavigation";
import TopNavigation from "~/components/custom-components/navigation/header/TopNavigation";
import SpacerVector from "~/components/custom-components/vectors/SpacerVector";
import Wrapper from "~/components/custom-components/Wrapper";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import type { Route } from "./+types/root-layout";
import { navMenuArr, type Administrator, type Customer, type Doctor, customerArr } from "~/data/static-data";
import spacer from '~/assets/spacer-vector-footer.png'
import { useEffect } from "react";

export const clientLoader = ({}:Route.ClientLoaderArgs) => { 
  // fetch data from api
  const navMenuData = navMenuArr
  const userDataStringified = sessionStorage.getItem("userData"); // Retrieve user data string from session storage (if it exists)
  const userData: Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // Parse the stringified data into a Customer object or Doctor Object (only if data exists)
  const customerData = customerArr; // fetch the customer array data from the server at app reload
  return { navMenuData, userData, customerData }
 }

export default function RootLayout({loaderData}: Route.ComponentProps) {
  const { navMenuData, userData, customerData } = loaderData
  const isTablet = useMediaQuery("(min-width: 640px)");
  const isLaptop = useMediaQuery("(min-width: 992px)");
  const isTabletAndAbove = useMediaQuery("(min-width: 768px)");

  const isHomepage = useMatch("/");
  const isAboutUsPage = useMatch("about-us");
  const isDoctorsDetailsPage = useMatch("our-doctors/:doctor-id");
  const isServicesPage = useMatch("services");
  const isDashboardPage = useMatch("dashboard/*");
  useEffect(() => {
    sessionStorage.setItem("customerData", JSON.stringify(customerData)) // store the customerData to the session storage and watch for it's changes
  }, [customerData])

  // Default navigation menu (mobile)
  let navigationMenu = (
    <Wrapper as={"header"} className="bg-rf-primary-300 sticky inset-0 w-full z-10">
      <MobileNavigation navMenu={navMenuData} userData={userData} />
    </Wrapper>
  );

  // Override with tablet navigation if breakpoint matches
  if (isTablet)
    navigationMenu = (
      <Wrapper
        as={"header"}
        className="bg-rf-primary-300 sticky inset-0 w-full z-10"
      >
        <TabletNavigation navMenu={navMenuData} userData={userData} />
      </Wrapper>
    );

  // Override again with laptop navigation if breakpoint matches
  if (isLaptop)
    navigationMenu = (
      <Wrapper
        as={"header"}
        className="bg-rf-primary-300 sticky inset-0 w-full z-10"
      >
        <RootNavigation navMenu={navMenuData} userData={userData} />
      </Wrapper>
    );

  // Default footer navigation menu (mobile)
  let footerMenu = (
    <Wrapper
      as={"footer"}
      className="bg-rf-primary-300 w-full p-0 [&>div]:w-full"
    >
      <MobileFooterNavigation navMenu={navMenuData} />
      {/* Copyright information always visible */}
      <CopyrightInformation />
    </Wrapper>
  );

  // Override with tablet footer navigation if breakpoint matches
  if (isTablet)
    footerMenu = (
      <Wrapper
        as={"footer"}
        className="bg-rf-primary-300 w-full p-0 [&>div]:w-full"
      >
        <TabletFooterNavigation navMenu={navMenuData} />
        {/* Copyright information always visible */}
        <CopyrightInformation />
      </Wrapper>
    );

  // Override again with laptop footer navigation if breakpoint matches
  if (isLaptop)
    footerMenu = (
      <Wrapper
        as={"footer"}
        className="bg-rf-primary-300 w-full p-0 [&>div]:w-full"
      >
        <RootFooterNavigation navMenu={navMenuData} />
        {/* Copyright information always visible */}
        <CopyrightInformation />
      </Wrapper>
    );

  return (
    <>
      {/* Top bar navigation always visible */}
      <Wrapper className="bg-rf-primary-100 py-2">
        <TopNavigation />
      </Wrapper>

      {/* Responsive navigation menu (mobile/tablet/laptop) */}
      {navigationMenu}

      {/* Outlet for nested routes */}
      <Outlet />

      {/* Decorated curvy spacer before the footer but not for dashboard pages*/}
      {!isDashboardPage && <SpacerVector className={`[&>path:nth-child(2)]:fill-rf-primary-300  ${(isHomepage || isAboutUsPage  || isServicesPage) && '[&>path:nth-child(1)]:fill-rf-secondary'} ${isDoctorsDetailsPage && '[&>path:nth-child(1)]:fill-rf-white-100'} w-full [&>path:nth-child(2)]:drop-shadow-[0_-4px_2px_rgba(0,0,0,0.12)]`}  />}
      
      {/* Decorated curvy spacer before the footer only for dashboard pages */}
      {isDashboardPage && <img src={spacer} alt="spacer" className="object-cover object-center -mt-18 relative z-1 drop-shadow-[0_-4px_2px_rgba(0,0,0,0.12)]" />}
      
      {/* Responsive footer navigation menu (mobile/tablet/laptop) */}
      {footerMenu}

      {(!isTabletAndAbove && isDashboardPage) && <div className="h-10 bg-rf-secondary"/>}
    </>
  );
}
