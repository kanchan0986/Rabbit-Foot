import type { Customer, Doctor } from "~/data/static-data";
import Wrapper from "./Wrapper";
import DoctorRow from "./DoctorRow";
import CustomerRow from "./CustomerRow";

type TabularUsersForAdminsProps = {
  userData: Doctor[] | Customer[];
  selectedTab: "doctors" | "patients";
};

// Tabular format to be used for both Doctor's and Customer's when exploring as an administrator
export default function TabularUsersForAdmins({userData, selectedTab}: TabularUsersForAdminsProps) {

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

  return (
    <Wrapper className="w-full pt-0 [&>div]:w-full">
      {/* Table header section */}
      <div className="mt-2 grid grid-cols-[11fr_0.5fr] items-center text-sm leading-3 text-center bg-rf-primary/50 border-x border-t border-rf-primary rounded-t-md [&>span]:not-last:border-r [&>span]:border-rf-primary">
        {/* Doctor column headers */}
        {selectedTab === "doctors" && (
          <span className="flex flex-col items-center">
            <span className="py-2">Doctor</span>
            <div className="w-full grid grid-cols-[2.7fr_2.8fr_1.4fr_3fr_1.3fr_2.5fr_1fr_0.8fr_1.2fr_1.2fr] border-t border-rf-primary capitalize">
              <span className="py-2 w-full">Name</span>
              <span className="py-2 border-l border-rf-primary w-full">
                Email
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                Phone
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                Address
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                experience
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                speciality
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                degree
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                fee
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                availability
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                isVerified
              </span>
            </div>
          </span>
        )}

        {/* Patient column headers */}
        {selectedTab === "patients" && (
          <span className="flex flex-col items-center">
            <span className="py-2">Patient</span>
            <div className="w-full grid grid-cols-[2.7fr_0.8fr_1.2fr_2fr_2fr_5fr_1.2fr] border-t border-rf-primary">
              <span className="py-2 w-full">Name</span>
              <span className="py-2 border-l border-rf-primary w-full">
                Age
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                Gender
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                Email
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                Phone
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                Address
              </span>
              <span className="py-2 border-l border-rf-primary w-full">
                Subscription
              </span>
            </div>
          </span>
        )}

        {/* Action header for both doctor & patient */}
        <span className="py-2">Action</span>

      </div>

      {/* Table body section for Doctors */}
      {selectedTab === "doctors" && (
        <div className="bg-rf-primary-300 h-fit rounded-b-md border border-rf-primary overflow-hidden">
          {(userData as Doctor[]).map((doctor) => {
            return <DoctorRow key={doctor.id} doctor={doctor} />
          })}
        </div>
      )}

      {/* Table body section for Customers */}
      {selectedTab === "patients" && (
        <div className="bg-rf-primary-300 h-fit rounded-b-md border border-rf-primary overflow-hidden">
          {(userData as Customer[]).map((customer) => {

            return <CustomerRow key={customer.id} customer={customer} />
          })}
        </div>
      )}

    </Wrapper>
  );
}
