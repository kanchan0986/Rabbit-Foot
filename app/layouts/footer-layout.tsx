import CopyrightInformation from "~/components/custom-components/navigation/footer/CopyrightInformation";
import MobileFooterNavigation from "~/components/custom-components/navigation/footer/MobileFooterNavigation";
import RootFooterNavigation from "~/components/custom-components/navigation/footer/RootFooterNavigation";
import TabletFooterNavigation from "~/components/custom-components/navigation/footer/TabletFooterNavigation";
import Wrapper from "~/components/custom-components/Wrapper";
import type { NavMenu } from "~/data/static-data";

type FooterLayoutProps = {
    navMenuData: NavMenu[];
}

export default function FooterLayout({navMenuData}: FooterLayoutProps) {
  return (
    <Wrapper as={"footer"} className="bg-rf-primary-300 w-full p-0 [&>div]:w-full" >

      {/* Default footer navigation menu (mobile = below 640px)  */}
      <div className="block sm:hidden">
        <MobileFooterNavigation navMenu={navMenuData} />
        {/* Copyright information always visible */}
        <CopyrightInformation />
      </div>

      {/* Override with tablet footer navigation if breakpoint falls within (tablet = 640px to 991px) */}
      <div className="hidden sm:block 2xmd:hidden">
          <TabletFooterNavigation navMenu={navMenuData} />
          {/* Copyright information always visible */}
          <CopyrightInformation />
      </div>

      {/* Override again with laptop footer navigation if breakpoint goes (laptop = 992px and above) */}
      <div className="hidden 2xmd:block">
          <RootFooterNavigation navMenu={navMenuData} />
          {/* Copyright information always visible */}
          <CopyrightInformation />
      </div>

    </Wrapper>
  );
}