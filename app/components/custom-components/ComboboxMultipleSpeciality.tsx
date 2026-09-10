import * as React from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "~/components/ui/combobox";
import { type Speciality } from "~/data/static-data";

type ComboboxMultipleSpecialityProps = {
  doctorSpeciality: Speciality[];
  setDoctorSpeciality: React.Dispatch<React.SetStateAction<Speciality[]>>;
  specialityArr: Speciality[];
  name: string;
};

// Component for selecting multiple doctor specialities using a combobox
export function ComboboxMultipleSpeciality({
  doctorSpeciality, // Current selected specialities
  setDoctorSpeciality, // Setter function to update selected specialities
  specialityArr, // List of available specialities
  name, // Field name for form submission
}: ComboboxMultipleSpecialityProps) {

  // Anchor reference for positioning combobox content
  const anchor = useComboboxAnchor();

  // Handle changes when user selects/deselects specialities
  const handleSpecialityChange = (changedSpecialities: string[]) => {
    if (changedSpecialities.length === 0) {
      // If no speciality selected, default to "all"
      setDoctorSpeciality(["all"]);
    } else {
      // Otherwise update with selected specialities
      setDoctorSpeciality(changedSpecialities as Speciality[]);
    }
  };

  // Ensure there's always a value (default to "all" if empty)
  const effectiveValue =
    doctorSpeciality.length > 0 ? doctorSpeciality : ["all"];

  return (
    <Combobox
      multiple // Allow multiple selections
      autoHighlight // Highlight matching items automatically
      items={specialityArr || []} // Available speciality options
      value={effectiveValue} // Current selected values
      onValueChange={handleSpecialityChange} // Update handler
    >
      {/* Hidden input to store selected values for form submission */}
      <input name={name} hidden readOnly value={effectiveValue} />

      {/* Chips display for selected specialities */}
      <ComboboxChips
        ref={anchor}
        className="w-[90%] 2xs:w-full rounded-xs focus-within:border-rf-primary focus-within:ring-1 focus-within:ring-rf-primary"
      >
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {/* Render each selected speciality as a chip */}
              {values.map((value: string) => (
                <ComboboxChip key={value} className="bg-rf-primary-300">
                  {value}
                </ComboboxChip>
              ))}
              {/* Input field for adding new speciality, highlights on clicking the edit label from it's parent component */}
              <ComboboxChipsInput id={`selected-${name}`} />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>

      {/* Dropdown list of available specialities */}
      <ComboboxContent anchor={anchor}>
        {/* Show not found text if the item typed on the input field is not on the list */}
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        {/* Dropdown list */}
        <ComboboxList className="bg-rf-primary-300">
          {(item) => (
            <ComboboxItem
              key={item}
              value={item}
              className="hover:bg-rf-primary-200! hover:text-rf-white-100! active:text-rf-white-100! data-highlighted:bg-rf-primary-200"
            >
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
