import * as React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

type DateOfBirthInputProps = {
  dob?: Date;
  setDob: React.Dispatch<React.SetStateAction<Date | undefined>>;
  name: string;
};

// Component for selecting and displaying Date of Birth
export function DateOfBirthInput({ dob, setDob, name }: DateOfBirthInputProps) {
  // Local state to control whether the calendar popover is open
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-44">
      {/* Hidden input to store dob value for form submission */}
      <input name={name} hidden readOnly value={dob ? dob.toString() : ""} />

      {/* Popover wrapper for calendar dropdown */}
      <Popover open={open} onOpenChange={setOpen}>
        {/* Trigger button to open calendar popover */}
        <PopoverTrigger asChild>
          <div className="flex gap-x-2 items-center">
            {/* Button shows selected date or placeholder text */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`w-30 justify-start font-normal rounded-[3px] indent-2 text-xbase border-2 lg:text-xl ${open ? "border-rf-primary" : "border-rf-grey-100/30"}`}
            >
              {dob ? dob.toLocaleDateString() : "Select date"}
            </button>
            {/* Edit icon to open calendar popover */}
            <FaRegEdit
              onClick={() => setOpen(true)}
              className="hover:cursor-pointer fill-rf-primary 2xmd:size-5"
            />
          </div>
        </PopoverTrigger>

        {/* Popover content containing calendar component */}
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single" // Single date selection
            selected={dob} // Current selected date
            defaultMonth={dob} // Default month view
            captionLayout="dropdown" // Dropdown for month/year navigation
            onSelect={(newDob) => {
              setDob(newDob); // Update dob state when a new date is selected
              setOpen(false); // Close popover after selection
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
