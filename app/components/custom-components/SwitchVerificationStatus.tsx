import { useSubmit } from "react-router";
import { Switch } from "~/components/ui/switch";
import { useMediaQuery } from "~/hooks/useMediaQuery";

type SwitchVerificationStatusProps = {
  verificationStatus: boolean;
  setVerificationStatus: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  doctorId: string;
};

// Component to toggle doctor's verificationStatus
export function SwitchVerificationStatus({
  verificationStatus,
  setVerificationStatus,
  name,
  doctorId
}: SwitchVerificationStatusProps) {

  // Detect if screen size is large (≥1024px) to adjust switch size
  const islargeScreen = useMediaQuery("(min-width:1024px)");
  const submit = useSubmit(); // hook to submit the form (with differentiator for common method)

  return (
    <div className="flex h-full items-baseline justify-center space-x-2">
      {/* Toggle switch for verificationStatus */}
      <Switch
        id="isVerified"
        size={islargeScreen ? "default" : "sm"} // Larger switch on big screens, smaller on mobile
        name={name}
        checked={verificationStatus} // Controlled state: true = verified, false = unverified
        onCheckedChange={(changedValue: boolean) => {
          setVerificationStatus(changedValue);
          submit({
            action: "update-verification-status", // differentiator
            isVerified: String(changedValue), // field to be toggeled
            doctorId: doctorId // to be used to target the selectod Doctor
          }, {method: "PUT"})
        }} // Update parent state when toggled
        className="data-checked:bg-rf-primary data-unchecked:bg-rf-grey-100/40 hover:cursor-pointer" // Styling for checked/unchecked states
      />
    </div>
  );
}
