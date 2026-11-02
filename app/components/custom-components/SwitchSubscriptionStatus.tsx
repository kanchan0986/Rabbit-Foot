import { useFetcher, useMatch } from "react-router";
import { Switch } from "~/components/ui/switch";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { TooltipSides } from "./TooltipSides";

type SwitchSubscriptionStatusProps = {
  subscriptionStatus: boolean;
  setSubscriptionStatus: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  customerId: string;
};

// Component to toggle customer's subscriptionStatus
export function SwitchSubscriptionStatus({
  subscriptionStatus,
  setSubscriptionStatus,
  name,
  customerId
}: SwitchSubscriptionStatusProps) {

  // Detect if screen size is large (≥1024px) to adjust switch size
  const islargeScreen = useMediaQuery("(min-width:1024px)");
  const fetcher = useFetcher(); // useFetcher hook to submit the form (with differentiator for common method) and avoid redirecting to "?index" in the url bar
  const isCustomersPage = useMatch('/dashboard/patients/*');

  return (
    <TooltipSides 
      side={isCustomersPage ? "right" : (!islargeScreen ? "right" : "left")} // Adjust tooltip position based on page type and screen size for better visibility.
      content="Switch Subscription Status"
      >
      <div className="flex h-full items-baseline justify-center space-x-2">
        {/* Toggle switch for subscriptionStatus */}
        <Switch
          id="isSubscribed"
          size={islargeScreen ? "default" : "sm"} // Larger switch on big screens, smaller on mobile
          name={name}
          checked={subscriptionStatus} // Controlled state: true = subscribed, false = unsubscribed
          onCheckedChange={(changedValue: boolean) => {
            setSubscriptionStatus(changedValue)
            fetcher.submit({
              action: "update-subscription-status", // differentiator
              isSubscribed: String(changedValue), // field to be toggeled
              customerId: customerId // to be used to target the selectod customer
            }, {method: "PUT"})
          }} // Update parent state when toggled
          className="data-checked:bg-rf-primary data-unchecked:bg-rf-grey-100/40 hover:cursor-pointer" // Styling for checked/unchecked states
        />
      </div>
    </TooltipSides>
  );
}
