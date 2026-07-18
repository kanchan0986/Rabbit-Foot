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

type Props = {};

export default function RootLayout({}: Props) {
  const isTablet = useMediaQuery("(min-width: 640px)");
  const isLaptop = useMediaQuery("(min-width: 992px)");

  const isHomepage = useMatch("/");
  const isAboutUsPage = useMatch("about-us");
  const isDoctorsDetailsPage = useMatch("our-doctors/:doctor-id");

  // Default navigation menu (mobile)
  let navigationMenu = (
    <Wrapper as={"header"} className="bg-rf-primary-300 sticky inset-0 w-full z-10">
      <MobileNavigation />
    </Wrapper>
  );

  // Override with tablet navigation if breakpoint matches
  if (isTablet)
    navigationMenu = (
      <Wrapper
        as={"header"}
        className="bg-rf-primary-300 sticky inset-0 w-full z-10"
      >
        <TabletNavigation />
      </Wrapper>
    );

  // Override again with laptop navigation if breakpoint matches
  if (isLaptop)
    navigationMenu = (
      <Wrapper
        as={"header"}
        className="bg-rf-primary-300 sticky inset-0 w-full z-10"
      >
        <RootNavigation />
      </Wrapper>
    );

  // Default footer navigation menu (mobile)
  let footerMenu = (
    <Wrapper
      as={"footer"}
      className="bg-rf-primary-300 w-full p-0 [&>div]:w-full"
    >
      <MobileFooterNavigation />
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
        <TabletFooterNavigation />
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
        <RootFooterNavigation />
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

      {/* Decorated curvy spacer before the footer */}
      <SpacerVector className={`[&>path:nth-child(2)]:fill-rf-primary-300  ${(isHomepage || isAboutUsPage) && '[&>path:nth-child(1)]:fill-rf-secondary'} ${isDoctorsDetailsPage && '[&>path:nth-child(1)]:fill-rf-white-100'} w-full [&>path:nth-child(2)]:drop-shadow-[0_-4px_2px_rgba(0,0,0,0.12)]`}  />
      
      {/* Responsive footer navigation menu (mobile/tablet/laptop) */}
      {footerMenu}
    </>
  );
}
