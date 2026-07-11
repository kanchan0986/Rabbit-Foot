import type { Speciality } from "~/data/static-data";
import Wrapper from "./Wrapper";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";


type SpecialityButtonGroupProps = {
  data: Speciality[];
  initialSpeciality: Speciality; // currently selected speciality
  specialityChangeHandler: (value: Speciality) => void // function that updates the selected speciality when a button is clicked
}

export default function SpecialityButtonGroup({ data, specialityChangeHandler, initialSpeciality }: SpecialityButtonGroupProps) {
  const handleClick = (value: string) => {
    // If the clicked speciality is already selected, reset to "all" or default. Otherwise set the clicked speciality as the new selection
    specialityChangeHandler(initialSpeciality === value ? "all" : (value as Speciality));
  };

  return (
    <Wrapper className="sticky top-38 [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:gap-y-4 z-1 overflow-y-auto scrollbar-none md:top-34 2xmd:top-17">
      {data.map((specialityItem, idx) => (
        <Button
          variant="outline"
          className={twMerge(
            "text-sm capitalize cursor-pointer hover:bg-rf-primary-200/30",
            // if the current button’s speciality is the one that’s selected, set the class as active
            specialityItem === initialSpeciality && "bg-rf-primary-200/30 border-rf-primary"
          )}
          key={idx}
          onClick={() => handleClick(specialityItem)}
        >
          {specialityItem}
        </Button>
      ))}
    </Wrapper>
  );
}

