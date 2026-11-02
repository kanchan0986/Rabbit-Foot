import { useState } from "react";
import { FaUserInjured } from "react-icons/fa6";
import { Link, useMatch } from "react-router";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import type { Customer } from "~/data/static-data";
import { calculateAge } from "~/helper/calculateAge";
import { SwitchSubscriptionStatus } from "./SwitchSubscriptionStatus";

type CustomerAccordionItemProps = {
    customer: Customer;
}

// AccordionItem to be used for Customer's when exploring as an administrator
export default function CustomerAccordionItem({customer}: CustomerAccordionItemProps) {

    const [subscriptionStatus, setSubscriptionStatus] = useState<boolean>(customer.subscriber ? true : false); // Customer subscription status

    // Extract first name and age of the customer
    const firstName = customer.name.split(" ")[0] // extract the first name
    const customerAge = customer.dob && calculateAge(customer.dob) // calculate age

    // Check current route to adjust links accordingly
    const isDashboard = useMatch("/dashboard");
    const isCustomers = useMatch("/dashboard/patients");

    return (
        <AccordionItem
        key={customer.id}
        value={customer.id}
        className="border-b last:border-b-0 border-rf-primary"
        >
            {/* Accordion header showing customer image or fallback icon along with first name */}
            <AccordionTrigger className="px-4 flex items-center gap-2 bg-rf-primary/50 rounded-none [&[data-state=closed]>svg]:stroke-black [&[data-state=open]>svg]:stroke-rf-primary text-md lg:text-lg lg:[&>svg]:size-5! hover:cursor-pointer hover:data-[state=open]:cursor-auto">
            {customer.imageUrl ? 
                <div style={{backgroundImage: `url(${customer.imageUrl})`}} className="bg-cover bg-center bg-no-repeat size-6 rounded-full border border-rf-primary shadow-rf-direct-300" />
                : 
                <FaUserInjured className="bg-rf-white-100 size-6 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary"/>
            }
            <span>{firstName}</span>
            </AccordionTrigger>

            {/* Accordion content with detailed user info */}
            <AccordionContent className="bg-rf-primary-300 h-fit">

                <div className="px-4 pt-2 text-md flex flex-col items-center justify-center gap-2 2xs:flex-row flex-wrap lg:text-lg">

                    {/* Customer image or fallback icon */}
                    <Link to={isDashboard ? `patients/${customer.id}` : isCustomers ? `./${customer.id}` : ''} className="peer">
                        {customer.imageUrl ?
                            <div style={{backgroundImage: `url(${customer.imageUrl})`}} className="bg-cover bg-center bg-no-repeat size-15 rounded-full border border-rf-primary shadow-rf-direct-300 2xs:mx-auto" />
                            :
                            <FaUserInjured className="bg-rf-white-100 size-15 rounded-full p-0.5 border border-rf-primary shadow-rf-direct-300 fill-rf-primary 2xs:mx-auto"/>
                        }
                    </Link>

                    {/* Customer Name */}
                    <Link to={isDashboard ? `patients/${customer.id}` : isCustomers ? `./${customer.id}` : ''} className="2xs:w-full 2xs:text-center no-underline! hover:underline! peer-hover:underline!">
                        <h2>{customer.name}</h2>
                    </Link>

                    {/* Customer Age */}
                    {customerAge &&
                        <div className="justify-self-start flex gap-x-2 text-sm ">
                            <span className="font-medium text-rf-primary">Age: </span>
                            <span>{customerAge} Yrs</span>
                        </div>
                    }

                    {/* Customer Gender */}
                    {customer.gender &&
                        <div className="justify-self-start flex gap-x-2 text-sm ">
                            <span className="font-medium text-rf-primary">Gender: </span>
                            <span className="capitalize">{customer.gender}</span>
                        </div>
                    }

                    {/* Customer Email */}
                    {customer.email &&
                        <div className="justify-self-start flex gap-x-2 text-sm ">
                            <span className="font-medium text-rf-primary">Email: </span>
                            <span className="wrap-anywhere">{customer.email}</span>
                        </div>
                    }

                    {/* Customer Phone */}
                    {customer.phone &&
                        <div className="justify-self-start flex gap-x-2 text-sm ">
                            <span className="font-medium text-rf-primary">Phone: </span>
                            <span>{customer.phone}</span>
                        </div>
                    }

                    {/* Customer Address */}
                    {customer.address &&
                        <div className="justify-self-start flex gap-x-2 text-sm ">
                            <span className="font-medium text-rf-primary">Address: </span>
                            <span className="wrap-anywhere">{customer.address}</span>
                        </div>
                    }

                    {/* Action button wrapper */}
                    <div className=" flex items-center justify-center gap-2 mt-2 2xs:w-full">
                        <span className="font-medium text-sm text-rf-primary">{subscriptionStatus ? "Subscribed" : "Unsubscribed"}: </span>
                        {/* Form to toggle subscription status */}
                        <SwitchSubscriptionStatus
                            name="isSubscribed"
                            subscriptionStatus={subscriptionStatus}
                            setSubscriptionStatus={setSubscriptionStatus}
                            customerId={customer.id}
                        />
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}