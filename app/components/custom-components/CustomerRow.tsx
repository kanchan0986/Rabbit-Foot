import { FaUserInjured } from "react-icons/fa6";
import { Link } from "react-router";
import type { Customer } from "~/data/static-data";
import { calculateAge } from "~/helper/calculateAge";
import { SwitchSubscriptionStatus } from "./SwitchSubscriptionStatus";
import { useState } from "react";

type CustomerRowProps = {
  customer: Customer;
};

// Row format to be used for Customer's when exploring as an administrator
export default function CustomerRow({ customer }: CustomerRowProps) {
  const [subscriptionStatus, setSubscriptionStatus] = useState<boolean>(customer.subscriber ? true : false); // Customer subscription status

  const customerAge = customer.dob && calculateAge(customer.dob); // Calculate customer's age if DOB exists

  return (
    <div className="grid grid-cols-[11fr_0.5fr] items-baseline text-sm text-center capitalize not-last:border-b border-rf-primary">
      {/* Patient details row */}
      <div className="w-full grid grid-cols-[2.7fr_0.8fr_1.2fr_2fr_2fr_5fr_1.2fr] items-baseline h-full">
        <div className="w-full grid grid-cols-[0.7fr_2fr] items-baseline h-full capitalize">
          {/* Patient image or fallback icon */}
          <Link to="." className="py-2 w-full h-full peer">
            {customer.imageUrl ? (
              <div
                style={{ backgroundImage: `url(${customer.imageUrl})` }}
                className="bg-cover bg-center bg-no-repeat size-6 rounded-full border border-rf-primary shadow-rf-direct-300 mx-auto"
              />
            ) : (
              <FaUserInjured className="bg-rf-white-100 size-6 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary mx-auto" />
            )}
          </Link>
          {/* Patient name */}
          <Link
            to="."
            className="py-2 border-r border-rf-primary w-full h-full text-start underline-offset-2 hover:underline decoration-[1.5px] peer-hover:underline"
          >
            <span>{customer.name}</span>
          </Link>
        </div>

        {/* Patient age */}
        <span className="py-2 border-r border-rf-primary w-full h-full">
          {customerAge ? `${customerAge} Yrs` : "N/A"}
        </span>

        {/* Patient gender */}
        <span className="py-2 border-r border-rf-primary w-full h-full">
          {customer.gender ?? "N/A"}
        </span>

        {/* Patient email */}
        <span className="py-2 border-r wrap-anywhere border-rf-primary w-full h-full">
          {customer.email ?? "N/A"}
        </span>

        {/* Patient phone */}
        <span className="py-2 border-r wrap-anywhere border-rf-primary w-full h-full">
          {customer.phone ?? "N/A"}
        </span>

        {/* Patient Address */}
        <span className="py-2 border-r wrap-anywhere border-rf-primary w-full h-full">
          {customer.address ?? "N/A"}
        </span>

        {/* Patient subscription status */}
        <span className="py-2 border-r wrap-anywhere border-rf-primary w-full h-full">
          {subscriptionStatus ? "Subscribed" : "Unsubscribed"}
        </span>
      </div>

      {/* Action form to toggle subscription status */}
      <SwitchSubscriptionStatus
        name="isSubscribed"
        subscriptionStatus={subscriptionStatus}
        setSubscriptionStatus={setSubscriptionStatus}
        customerId={customer.id}
      />
    </div>
  );
}
