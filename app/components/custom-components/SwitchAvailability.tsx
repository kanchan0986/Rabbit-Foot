import type React from "react";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { useMediaQuery } from "~/hooks/useMediaQuery";

type SwitchAvailabilityProps = {
  name: string;
  availability: boolean;
  setAvailability: React.Dispatch<React.SetStateAction<boolean>>;
};

// Component to toggle doctor's availability status
export function SwitchAvailability({
  availability,
  setAvailability,
  name,
}: SwitchAvailabilityProps) {

  // Detect if screen size is large (≥1024px) to adjust switch size
  const islargeScreen = useMediaQuery("(min-width:1024px)");

  return (
    <div className="flex items-center space-x-2">
      {/* Toggle switch for availability */}
      <Switch
        id="availablity"
        size={islargeScreen ? "default" : "sm"} // Larger switch on big screens, smaller on mobile
        name={name}
        checked={availability} // Controlled state: true = available, false = unavailable
        onCheckedChange={(changedValue: boolean) => setAvailability(changedValue)} // Update parent state when toggled
        className="data-checked:bg-rf-primary data-unchecked:bg-rf-grey-100/40" // Styling for checked/unchecked states
      />
      {/* Label text changes dynamically based on availability */}
      <Label
        htmlFor="availablity"
        className="font-normal text-xbase lg:text-xl"
      >
        {availability ? "I am available" : "I am unavailable"}
      </Label>
    </div>
  );
}
