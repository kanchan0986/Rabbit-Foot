import Wrapper from '~/components/custom-components/Wrapper';
import type { Route } from './+types/office-locations';
import { tabLabel } from '~/helper/tabLabel';
import ContactDetails from '~/components/custom-components/ContactDetails';
import Sky from '~/components/custom-components/vectors/Sky';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function OfficeLocations({}: Route.ComponentProps) {
  return (
    <main className="overflow-hidden">
      {/******************************************* Location section *******************************************/}
      <Wrapper
        as={"section"}
        className="py-10 relative [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4 xs:py-16 xl:py-20"
      >
        {/* Animating sky background */}
        <Sky className="fill-rf-primary-200/40"/>
        {/* responsive contact details component */}
        <ContactDetails/>
      </Wrapper>
    </main>
  )
}