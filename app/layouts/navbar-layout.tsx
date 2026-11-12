import MobileNavigation from '~/components/custom-components/navigation/header/MobileNavigation';
import RootNavigation from '~/components/custom-components/navigation/header/RootNavigation';
import TabletNavigation from '~/components/custom-components/navigation/header/TabletNavigation';
import Wrapper from '~/components/custom-components/Wrapper';
import type { Administrator, Customer, Doctor, NavMenu } from '~/data/static-data';

type NavbarLayoutProps = {
    navMenuData: NavMenu[];
    userData?: Customer | Doctor | Administrator;
}

export default function NavbarLayout({navMenuData, userData}: NavbarLayoutProps) {
  return (
    <Wrapper as={"header"} className="bg-rf-primary-300 sticky inset-0 w-full z-10">
      {/* Default navigation menu (mobile = below 640px)  */}

        <div className="block sm:hidden">
          <MobileNavigation navMenu={navMenuData} userData={userData} />
        </div>

      {/* Override with tablet navigation if breakpoint falls within (tablet = 640px to 991px) */}

          <div className="hidden sm:block 2xmd:hidden">
            <TabletNavigation navMenu={navMenuData} userData={userData} />
          </div>

      {/* Override again with laptop navigation if breakpoint goes (laptop = 992px and above) */}

          <div className="hidden 2xmd:block">
            <RootNavigation navMenu={navMenuData} userData={userData} />
          </div>

    </Wrapper>
  );
}