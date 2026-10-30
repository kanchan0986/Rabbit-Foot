import type { Customer, Doctor } from '~/data/static-data';
import {
  Accordion,
} from "~/components/ui/accordion"
import CustomerAccordionItem from './CustomerAccordionItem';
import DoctorAccordionItem from './DoctorAccordionItem';

type AccordionUsersForAdminsProps = {
  userData: Doctor[] | Customer[];
  selectedTab: "doctors" | "patients";
}

// Accordion to be used for both Doctor's and Customer's when exploring as an administrator
export default function AccordionUsersForAdmins({userData, selectedTab}: AccordionUsersForAdminsProps) {

  // if no users, show fallback message depending upon the selected tab
  if(!userData || userData.length === 0) {
      if(selectedTab === "doctors"){
          return <div className="text-center">Sorry! There is no doctors enlisted yet.</div>
      }else{
          if(selectedTab === "patients") {
            return <div className="text-center">Sorry! There is no patient registered yet.</div>
          }
      }
  }

  if(selectedTab === "doctors") {
    return (
      // Accordion wrapper for Doctors
      <Accordion
        key={(userData as Doctor[])[0].id} // remount the accordion to show the first item opened
        className="w-full rounded-lg border border-rf-primary overflow-hidden 2xmd:w-10/12 lg:h-9/12 xl:w-8/12 bg-white mx-auto"
        defaultValue={(userData as Doctor[])[0].id}
        type="single"
      >
        {(userData as Doctor[]).map((doctor) => {
          return <DoctorAccordionItem key={doctor.id} doctor={doctor}/>
        })}
      </Accordion>
    )
  }

  if(selectedTab === "patients") {
    return (
      // Accordion wrapper for Customers
      <Accordion
        key={(userData as Customer[])[0].id} // remount the accordion to show the first item opened
        className="w-full rounded-lg border border-rf-primary overflow-hidden 2xmd:w-10/12 lg:h-9/12 xl:w-8/12 bg-white mx-auto"
        defaultValue={(userData as Customer[])[0].id}
        type="single"
      >
        {(userData as Customer[]).map((customer) => {
          return <CustomerAccordionItem key={customer.id} customer={customer}/>
        })}
      </Accordion>
    )
  }


}