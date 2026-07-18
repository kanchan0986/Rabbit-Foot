import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { FaUserDoctor } from "react-icons/fa6";
import type { Speciality } from "~/data/static-data";

type SpecialityDropdownMenuRadioGroupProps = {
  initialSpeciality: Speciality; // currently selected speciality
  specialityChangeHandler: (value: Speciality) => void; // function that updates the selected speciality when a dropdown item is clicked
  data: Speciality[];
  className?: string;
  reference?: 'speciality-menu' | 'booking-form';
  defaultSpeciality?: Speciality;
}

export function SpecialityDropdownMenuRadioGroup({ initialSpeciality, specialityChangeHandler, data, className, reference, defaultSpeciality }: SpecialityDropdownMenuRadioGroupProps) {
  const handleChange = (value: string) => {
      // If the component is used in booking-form and If the clicked speciality is already selected, reset to default. Otherwise set the clicked speciality as the new selection
    if(reference === 'booking-form') specialityChangeHandler(initialSpeciality === value ? defaultSpeciality! : (value as Speciality))
    // If the component is used as speciality-menu and If the clicked speciality is already selected, reset to "all". Otherwise set the clicked speciality as the new selection
    if(reference === "speciality-menu") specialityChangeHandler(initialSpeciality === value ? "all" : (value as Speciality));
  };

  return (
    <div className={`sticky top-25.5 bg-rf-white-100/90 py-3 *:w-11/12 flex justify-center z-1 sm:top-35 ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild // mark as child to use button within a trigger
          className="cursor-pointer text-rf-primary-100 hover:bg-rf-primary-100 hover:text-rf-white-100 data-[state=open]:bg-rf-primary-100 data-[state=open]:text-rf-white-100 focus-visible:ring-0 border-rf-primary focus-visible:border-rf-primary w-full" // targeting data attributes to style the active class
        >
          <Button variant="outline" className="capitalize">
            <FaUserDoctor /> {reference === 'booking-form' ? initialSpeciality : 'Speciality'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full" align={reference === "booking-form" ? "end" : "start"} >
          <DropdownMenuGroup>
            <DropdownMenuRadioGroup value={initialSpeciality} onValueChange={handleChange}>
              <div className="grid auto-cols-max gap-y-2">
                {data.map((items, idx) => (
                  <DropdownMenuRadioItem value={items} key={idx}>
                    {items}
                  </DropdownMenuRadioItem>
                ))}
              </div>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}