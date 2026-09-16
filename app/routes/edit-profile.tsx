import { degreeArr, specialityArray, type Administrator, type Customer, type Degree, type Doctor, type Speciality } from '~/data/static-data';
import type { Route } from './+types/edit-profile';
import { tabLabel } from '~/helper/tabLabel';
import Loader from '~/components/custom-components/Loader';
import Wrapper from '~/components/custom-components/Wrapper';
import { FaRegAddressCard, FaUserDoctor } from 'react-icons/fa6';
import { SlBadge, SlUser, SlUserFemale } from 'react-icons/sl';
import { TbPhoneCall } from 'react-icons/tb';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { PiCertificate } from 'react-icons/pi';
import { Form, Link, redirect, useNavigation } from 'react-router';
import SlideInUp from '~/components/custom-components/animations/SlideInUp';
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { DateOfBirthInput } from '~/components/custom-components/DateOfBirthInput';
import { ComboboxMultipleSpeciality } from '~/components/custom-components/ComboboxMultipleSpeciality';
import { IoEyeOutline, IoNewspaperOutline } from 'react-icons/io5';
import { BiMessageDetail } from 'react-icons/bi';
import { SwitchAvailability } from '~/components/custom-components/SwitchAvailability';
import { RiMoneyDollarCircleLine, RiUserStarLine } from 'react-icons/ri';
import ComboboxCreatableDegree from '~/components/custom-components/ComboboxCreatableDegree';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({}: Route.ClientLoaderArgs) => { 

  const userDataStringified = sessionStorage.getItem("userData") // get user data stored in sessionStorage (if exists)

  const userData : Customer | Doctor | Administrator = userDataStringified && JSON.parse(userDataStringified) // parse user data back into an object (Customer, Doctor, or Administrator) (if it exists)

  if(!userData) return redirect('/login');

  return { userData }

 }

export const clientAction = async ({request}: Route.ClientActionArgs) => { 

  // Extract submitted form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

 }

type Gender = "male" | "female" | undefined

// Gender options array
const gender : Gender[] = ["male", "female"]


export default function EditProfile({loaderData}: Route.ComponentProps) {
  
  const { userData } = loaderData; // Extract userData from loaderData  

  const navigation = useNavigation();
  
  // Flags to check user type for conditional rendering
  const isCustomer = userData.type === "customer";
  const isDoctor = userData.type === "doctor";

  // State variables for profile fields
  const [imageUrl, setImageUrl] = useState<string>(userData.imageUrl ? userData.imageUrl : ''); // Profile image
  
  const [name, setName] = useState<string>(userData.name ? userData.name : ''); // Username

  const [email, setEmail] = useState<string | undefined>(userData.email); // Email (hidden field)
  
  const [phone, setPhone] = useState<string>(userData.phone ? userData.phone.toString() : ''); // Phone number

  const [address, setAddress] = useState<string>((isCustomer || isDoctor) && userData.address ? userData.address : ''); // Address (only for customer/doctor)

  const [details, setDetails] = useState<string>(isDoctor && userData.details ? userData.details.join("\n\n") : ''); // Doctor details (joined with spacing)

  const [availability, setAvailability] = useState<boolean>(isDoctor && userData.availability ? true : false); // Doctor availability

  const [selectedGender, setSelectedGender] = useState<Gender | undefined>((isCustomer && userData.gender) ? userData.gender : undefined); // Gender (only for customer)

  const [dob, setDob] = useState<Date | undefined>((isCustomer && userData.dob) ? new Date(userData.dob) : undefined); // Date of birth (customer only)
  
  const [subscriber, setSubscriber] = useState<boolean>((isCustomer && userData.subscriber) && userData.subscriber); // Subscription status (customer only)

  const [speciality, setSpeciality] = useState<Speciality[]>((isDoctor && userData.speciality) ? userData.speciality : []); // Doctor speciality list

  const [experience, setExperience] = useState<number | undefined>((isDoctor && userData.experience) ? userData.experience : undefined); // Doctor experience

  const [degree, setDegree] = useState<Degree[] | undefined>(isDoctor && userData.degree ? userData.degree : undefined); // Doctor degrees

  const [degreeList, setDegreeList] = useState<Degree[]>(degreeArr ?? []); // Available degree list of Doctors

  const [fee, setFee] = useState<number | undefined>((isDoctor && userData.fee) ? userData.fee : undefined); // Doctor consultation fee


  // Handle profile image upload and preview
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const uploadedFile = event.currentTarget.files?.[0];
    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile); // for temporary preview of Uploaded image from URL
      setImageUrl(url);
    }
   }

  // Reset all fields to original userData values
  const handleRefresh = () => { 
    setImageUrl(userData.imageUrl ? userData.imageUrl : '');
    setName(userData.name ? userData.name : '');
    setEmail(userData.email);
    setPhone(userData.phone ? userData.phone.toString() : '');
    setAddress((isCustomer || isDoctor) && userData.address ? userData.address : '');
    setDetails(isDoctor && userData.details ? userData.details.join("\n\n") : '');
    setAvailability(isDoctor && userData.availability ? true : false);
    setSelectedGender((isCustomer && userData.gender) ? userData.gender : undefined);
    setDob((isCustomer && userData.dob) ? new Date(userData.dob) : undefined);
    setSubscriber((isCustomer && userData.subscriber) && userData.subscriber);
    setSpeciality((isDoctor && userData.speciality) ? userData.speciality : []);
    setExperience((isDoctor && userData.experience) ? userData.experience : undefined);
    setDegree(isDoctor && userData.degree ? userData.degree : undefined);
    setDegreeList(degreeArr ?? []);
    setFee((isDoctor && userData.fee) ? userData.fee : undefined);
   }

  // Show loader while navigation state is "loading"
  if(navigation.state === "loading") return <Loader/>

  return (
    <Form method='post' className="overflow-hidden pb-20 xl:pb-30 3xl:pb-40">
      
      {/* Wrapper for profile Information sections */}
      <Wrapper className="[&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-y-8 md:[&>div]:w-full md:[&>div]:pl-4 md:[&>div]:pr-8 md:[&>div]:grid-cols-[40%_60%] md:[&>div]:gap-x-4 md:[&>div]:gap-y-4" as={"section"}>

        {/******************* Profile Information section *******************/}
        <div className="flex flex-col gap-y-4 relative md:flex-row md:justify-center md:gap-x-4 md:row-span-3">
          {/* if Profile image exists, show profile image or fallback to icon */}
          {imageUrl ?
            <>
              <img src={imageUrl} alt={userData.name || 'user profile image'} className="object-cover object-center rounded-md sm:max-h-160 2xmd:max-h-full" />
              {/* Hidden input to store imageUrl for form submission */}
              <input name="imageUrl" hidden defaultValue={imageUrl} />
            </>
            :
            <div className="self-center flex items-center justify-center size-35 [&>svg]:size-20 [&>svg]:fill-rf-primary border-6 border-rf-primary rounded-full md:size-40">
              {isDoctor ?
                <FaUserDoctor/>  // Doctor icon
                : (selectedGender || (isCustomer && userData.gender)) === "female" ?
                <SlUserFemale/>  // Female customer icon
                :
                <SlUser/> // Default user icon
              }
            </div>
          }

          {/* Profile image upload option with edit icon */}
          <div className="absolute right-5 bottom-5">
            <input type='file' className="hidden" id='imageFile' name='imageFile' accept='image/*' onChange={(event) => handleImageChange(event)}/>
            <label htmlFor='imageFile' className='hover:cursor-pointer'>
                <FaRegEdit className='fill-rf-primary 2xmd:size-5' />
            </label>
          </div>

        </div>

        {/************ Username input section ************/}
        <h1 className="flex justify-center gap-x-2 font-flavours text-rf-primary text-center text-3xl xmd:w-auto lg:text-4xl capitalize md:content-center">
          {isDoctor && <span>Dr. </span>}
          <input type='text' className="h-10 w-full box-border resize-none rounded-[3px] indent-2 border-2 font-flavours border-rf-grey-100/30 focus:outline-rf-primary text-3xl 2xs:w-60 lg:text-4xl" placeholder='Not Available' id='name' name='name' value={name} onChange={(event) => setName(event.currentTarget.value)}/>
          <label htmlFor='name' className='ml-1 hover:cursor-pointer'>
              <FaRegEdit className='fill-rf-primary size-4 2xmd:size-5' />
          </label>
        </h1>

        {/************ Contact Information section ************/}
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4 ">
          <h2 className="text-rf-primary text-center lg:text-2xl">Contact Information</h2>

          {/* Hidden email input (not editable directly) */}
          <input type="email" name="email" hidden defaultValue={email} />

          {/* Phone input */}
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <TbPhoneCall />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Phone: </span>
            <input type='tel' className="w-full box-border resize-none rounded-[3px] indent-2 border border-rf-grey-100/30 focus:outline-rf-primary text-xbase 2xs:w-50 lg:text-xl" placeholder='Not Available' id='phone' name='phone' value={phone} onChange={(event) => setPhone(event.currentTarget.value)}/>
            <label htmlFor='phone' className='ml-1 hover:cursor-pointer'>
                <FaRegEdit className='fill-rf-primary 2xmd:size-5' />
            </label>
          </h3>

          {/* Address input (only for customers and doctors)  */}
          {(userData && (isCustomer || isDoctor)) &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <FaRegAddressCard className="-mb-1" />
            </span>
            <div className="w-full h-20 flex gap-2 items-baseline">
                <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Address: </span>
                <textarea name="address" id="address" value={address} placeholder='Not Available' onChange={(event) => setAddress(event.currentTarget.value)} className='w-10/12 h-full box-border resize-none rounded-[3px] indent-2 border border-rf-grey-100/30 focus:outline-rf-primary text-xbase min-[315px]:grow min-[315px]:w-full lg:text-xl' />
                <label htmlFor='address' className='hover:cursor-pointer'>
                    <FaRegEdit className='fill-rf-primary 2xmd:size-5' />
                </label>
            </div>
          </h3>}

          {/* Details input (only for doctors)  */}
          {isDoctor &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
            <BiMessageDetail className="-mb-1" />
            </span>
            <div className="w-full h-20 flex gap-2 items-baseline">
                <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Details: </span>
                <textarea name="details" id="details" value={details} placeholder='Not Available' onChange={(event) => setDetails(event.currentTarget.value)} className='w-10/12 h-full box-border resize-none rounded-[3px] indent-2 border p-1 border-rf-grey-100/30 focus:outline-rf-primary text-xbase min-[315px]:grow min-[315px]:w-11/12 lg:text-xl' />
                <label htmlFor='details' className='hover:cursor-pointer'>
                    <FaRegEdit className='fill-rf-primary 2xmd:size-5' />
                </label>
            </div>
          </h3>}

          {/* Availability toggle input (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <IoEyeOutline />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Availability: </span>
            <div className="flex items-center gap-2 2xmd:ml-2">
              <SwitchAvailability availability={availability} setAvailability={setAvailability} name='availability'/>
            </div>
          </h3>}
          
        </div>

        {/******************* Basic Information section  (only for customers and doctors)   *******************/}
        {(userData && (isCustomer || isDoctor)) &&
        <div className="border border-rf-grey-100/40 rounded-md p-2 flex flex-col gap-y-4">
          <h2 className="text-rf-primary text-center lg:text-2xl">Basic Information</h2>

          {/* Gender selection input (only for customers) */}
          {isCustomer && 
            <h3 className="flex items-center gap-x-1">
              <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <BsGenderAmbiguous />
              </span>
              <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Gender:</span>
              <div className="flex ml-2 gap-4">
                {gender.map((option, idx) => (
                  <label key={idx} className='flex items-center gap-2 has-checked:text-rf-primary text-xbase lg:text-xl'>
                      {/* Default to userData.gender (if exists) or leave it blank */}
                      <input type="radio" name="gender" id={option} value={option} checked={selectedGender === option} onChange={(event) => setSelectedGender(event.currentTarget.value as Gender) } className='appearance-none h-3 w-3 rounded-full border border-black checked:border-white checked:bg-rf-primary ring-2 ring-white checked:ring-rf-primary-200' />
                        {/* Gender type label */}
                      <span className="capitalize">{option}</span>
                  </label>
                ))}
              </div>
            </h3>
          }

          {/* Date of Birth input (only for customers) */}
          {isCustomer &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <LiaBirthdayCakeSolid />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">D.O.B: </span>
            {/* Custom date picker component */}
            <DateOfBirthInput dob={dob} setDob={setDob} name='dob'/>
          </h3>}

          {/* Newsletter subscription input (only for customers) */}
          {isCustomer &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <IoNewspaperOutline />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Newsletter: </span>
            <div className="flex items-center gap-2 2xmd:ml-2">
              {/* Checkbox to subscribe/unsubscribe */}
              <input type="checkbox" name="subscriber" id="subscriber" checked={subscriber} onChange={() => setSubscriber(prev => !prev)} className='appearance-none w-6 max-w-4 h-4 border border-rf-primary rounded-xs checked:bg-rf-primary relative before:content-["✔"] before:absolute before:inset-0 before:leading-none before:text-white before:flex before:justify-center before:items-center' />
              <label htmlFor="subscriber" className='text-xbase lg:text-xl'>{subscriber ? "Unsubscribe" : "Subscribe"}</label>
            </div>
          </h3>}

          {/* Speciality selection input (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <PiCertificate className='-mb-1' />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Speciality: </span>
            <div className="w-full flex items-center min-[315px]:justify-between gap-x-2">
              <div className="w-9/12 flex items-center flex-wrap gap-2 capitalize min-[315px]:w-full">
                {/* Multi-select combobox for doctor specialities */}
                <ComboboxMultipleSpeciality doctorSpeciality={speciality} setDoctorSpeciality={setSpeciality} specialityArr={specialityArray} name="speciality"/>
              </div>
              <div className="flex gap-2 items-baseline">
                  <label htmlFor='selected-speciality' className='hover:cursor-pointer'>
                      <FaRegEdit className='fill-rf-primary 2xmd:size-5' />
                  </label>
              </div>
            </div>
          </h3>}

          {/* Experience input (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <RiUserStarLine />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Experience: </span>
            {/* Numeric input for years of experience (0–40 range) */}
            <input type='number' className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield] w-full box-border resize-none rounded-[3px] indent-2 border border-rf-grey-100/30 focus:outline-rf-primary text-xbase 2xs:w-50 lg:text-xl" placeholder='Not Available' id='experience' name='experience' value={experience ?? ""} onChange={(event) => setExperience(event.currentTarget.value !== "" ? parseInt(event.currentTarget.value) : undefined)} min={0} max={40}/>
            <label htmlFor='experience' className='ml-1 hover:cursor-pointer'>
                <FaRegEdit className='fill-rf-primary 2xmd:size-5' />
            </label>
          </h3>}

          {/* Degree selection input (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-baseline gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <SlBadge className="-mb-1" />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Degree: </span>
            <div className="w-9/12 flex items-center gap-2 min-[315px]:justify-between min-[315px]:w-full">
              {/* Combobox allowing doctors to select or "CREATE" degrees */}
              <ComboboxCreatableDegree doctorDegree={degree} setDoctorDegree={setDegree} degreeList={degreeList} setDegreeList={setDegreeList} name='degree'/>
              <div className="flex gap-2 items-baseline">
                  <label htmlFor='selected-degree' className='hover:cursor-pointer'>
                      <FaRegEdit className='fill-rf-primary 2xmd:size-5' />
                  </label>
              </div>
            </div>
          </h3>}

          {/* Consultation Fee input (only for doctors) */}
          {isDoctor &&
          <h3 className="flex items-center gap-x-1">
            <span className="w-[10%] [&>svg]:text-rf-primary 2xs:w-[8%] min-[376px]:w-[6%]! xs:w-[4%]! md:w-[5%]! 2xmd:w-[6%]! 2xmd:[&>svg]:size-6 lg:w-[5%]! xl:w-[4%]! 2xl:w-[3%]!">
              <RiMoneyDollarCircleLine />
            </span>
            <span className="hidden text-rf-primary text-xbase lg:text-xl 2xmd:block">Fee: </span>
            <input type='number' className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield] w-full box-border resize-none rounded-[3px] indent-2 border border-rf-grey-100/30 focus:outline-rf-primary text-xbase 2xs:w-50 lg:text-xl" placeholder='Not Available' id='fee' name='fee' value={fee ?? ""} onChange={(event) => setFee(event.currentTarget.value !== "" ? parseInt(event.currentTarget.value) : undefined)} min={0}/>
            <label htmlFor='fee' className='ml-1 hover:cursor-pointer'>
                <FaRegEdit className='fill-rf-primary 2xmd:size-5' />
            </label>
          </h3>}

        </div>}
      </Wrapper>

      {/*********************** Action Buttons ***********************/}
      <Wrapper className="[&>div]:grid [&>div]:grid-cols-1 [&>div]:gap-y-4 min-[482px]:[&>div]:grid-cols-3 min-[482px]:[&>div]:gap-x-1 sm:[&>div]:gap-x-4" as={'section'}>

        {/* Refresh button to reset fields to original userData */}
        <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
          <button type='reset' onClick={handleRefresh} className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
            <span className="xl:text-xbase lg:text-xl">Refresh</span>
          </button>
        </SlideInUp>

        {/* Save button to submit changes */}
        <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
          <button type='submit' className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
            <span className="xl:text-xbase lg:text-xl">Save</span>
          </button>
        </SlideInUp>

        {/* Back button to navigate to previous page */}
        <SlideInUp delay={0.1} className="rounded-full 2xmd:hover:shadow-rf-direct-100">
          <Link to=".." className="w-full flex gap-x-2 items-center justify-center outline outline-rf-secondary bg-rf-primary text-rf-white-100 rounded-full hover:bg-rf-primary-100/90 active:bg-rf-primary-100/90 py-1 px-3 hover:cursor-pointer 2xmd:col-start-2 sm:py-1.5 2xmd:py-2">
            <span className="xl:text-xbase lg:text-xl">Back</span>
          </Link>
        </SlideInUp>
      </Wrapper>

    </Form>
  )
}