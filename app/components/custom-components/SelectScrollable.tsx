import { useId, useState, type ChangeEvent } from "react"
import { FaUserDoctor } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import type { Doctor, Speciality } from "~/data/static-data"

type SelectScrollableProps = {
  data: Speciality[] | Doctor[];
  name: string;
  changeHandler?: (value: Speciality | Doctor) => void;
}

export default function SelectScrollable({ data, name, changeHandler }: SelectScrollableProps) {
  const selectId = useId(); // generate a unique ID for the <select> element to link with its <label>
  const isSpeciality = typeof data[0] === 'string' // check to find out, if the data passed is a list of specialities (strings) or doctors (objects)
  const [val, setVal] = useState<string>(isSpeciality ? "all" : 'select-doctor') // initial value depends on type: "all" for speciality dropdown, "select-doctor" for doctor dropdown
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => { 
    // update local state when user selects an option
    setVal(event.currentTarget.value)
    // pass the selected option to it's parent component to notify about the change 
    changeHandler?.(event.currentTarget.value as Speciality | Doctor)
   }

  return (
    <>
      {/* main dropdown element */}
      <select value={val} name={name} onChange={handleChange} id={selectId} className="w-full capitalize" required>
        {isSpeciality ?
          <>
            {/* placeholder option for speciality dropdown */}
            <option value="all" disabled className={`capitalize`}>
              Select Speciality
            </option>
            {/* render actual speciality options */}
            {(data as Speciality[]).map((item, idx) => <option key={idx} value={item} className="bg-rf-primary-200 capitalize">{item}</option>)}
          </>
        : 
          <>
            {/* placeholder option for doctor dropdown */}
            <option value="select-doctor" disabled className={`capitalize`}>
              Select doctor
            </option>
            {/* render actual doctor options */}
            {(data as Doctor[]).map(item => <option value={item.name} key={item.id} className="bg-rf-primary-200 capitalize">{item.name}</option>)}            
          </>
        }
      </select>
      {/* label with icon linked to the select element */}
      <label htmlFor={selectId}>
        {isSpeciality ?
          // show certificate icon for speciality dropdown
          <PiCertificateFill className="fill-rf-white-100 cursor-pointer"/>
        : 
          // show doctor icon for doctor dropdown
          <FaUserDoctor className="fill-rf-white-100 cursor-pointer" />}
      </label>
    </>
  )
}
