import { Outlet } from "react-router";
import MobileNavigation from "~/components/custom-components/navigation/MobileNavigation";
import RootNavigation from "~/components/custom-components/navigation/RootNavigation";
import TabletNavigation from "~/components/custom-components/navigation/TabletNavigation";
import TopNavigation from "~/components/custom-components/navigation/TopNavigation";
import Wrapper from "~/components/custom-components/Wrapper";
import { useMediaQuery } from "~/hooks/useMediaQuery";

type Props = {};

export default function RootLayout({}: Props) {
  const isTablet = useMediaQuery("(min-width: 640px)");
  const isLaptop = useMediaQuery("(min-width: 992px)");

  // Default navigation menu (mobile)
  let navigationMenu = (
    <Wrapper className="bg-orange-100 sticky inset-0 w-full">
      <MobileNavigation />
    </Wrapper>
  );

  // Override with tablet navigation if breakpoint matches
  if (isTablet)
    navigationMenu = (
      <Wrapper className="bg-orange-100 sticky inset-0 w-full">
        <TabletNavigation />
      </Wrapper>
    );

  // Override again with laptop navigation if breakpoint matches
  if (isLaptop)
    navigationMenu = (
      <Wrapper className="bg-orange-100 sticky inset-0 w-full">
        <RootNavigation />
      </Wrapper>
    );

  return (
    <>
      {/* Top bar navigation always visible */}
      <Wrapper className="bg-orange-600 py-2">
        <TopNavigation />
      </Wrapper>

      {/* Responsive navigation menu (mobile/tablet/laptop) */}
      {navigationMenu}

      {/* Outlet for nested routes */}
      <Outlet />
    </>
  );
}
