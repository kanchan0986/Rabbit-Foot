import type { Card, Gallery, Testimonial } from "~/components/custom-components/carousels/CarouselItem";
import smilingKidInOrangeShirt from "~/assets/smiling-kid-in-orange-shirt.jpg";
import smilingGirlWithJacket from "~/assets/smiling-girl-with-jacket.jpg";
import smilingGirlWithDungree from "~/assets/smiling-girl-with-dungree.jpg";
import smilingSisters from "~/assets/smiling-sisters.jpg";
import santoshKumar from "~/assets/santosh_kumar.jpg";
import gregJones from "~/assets/greg_jones.jpg";
import jamesSmith from "~/assets/james_smith.jpg";
import jessicaClerk from "~/assets/jessica_clerk.jpg";
import monica_adams from "~/assets/monica_adams.jpg";
import dental_clinic from "~/assets/dental_clinic.jpg";
import dental_clinic_1 from "~/assets/dental_clinic_1.jpg";
import dental_clinic_2 from "~/assets/dental_clinic_2.jpg";
import dental_clinic_3 from "~/assets/dental_clinic_3.jpg";
import dental_clinic_4 from "~/assets/dental_clinic_4.jpg";
import dental_clinic_5 from "~/assets/dental_clinic_5.jpg";
import { TbDental } from "react-icons/tb";
import { PiToothFill } from "react-icons/pi";
import { TbEmergencyBed } from "react-icons/tb";
import { MdChildCare } from "react-icons/md";

export const goodToKnowFacts = [
  "Pediatric Dentistry Specialist",
  "Undergraduate: University of Tennessee, Knoxville",
  "Dental School: University of Tennessee Health Science Center, Memphis",
  "Specialty Training: Texas A&M College of Dentistry",
  "Hospital Privileges: East TN Children’s Hospital"
];

export const funToKnowFacts = [
  "Loves exploring the outdoors through hiking and various watersports.",
  "A Disney movie enthusiast who never misses a chance to sing along",
  "Creates unforgettable memories by building LEGO masterpieces with his kids.",
  "Stays active by playing sports and games with his family.",
  "Enjoys epic dance parties and building forts with his kids",
  "Cheering for the VOLS"
];

export const cardArray: Card[] = [
  {
    imageUrl: smilingKidInOrangeShirt,
    icon: PiToothFill,
    title: 'preventive care',
    subtitle: 'exams, cleanings, fluoride sealants.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex suscipit, eaque accusamus doloribus beatae, nesciunt rem architecto saepe ratione odit veniam maxime, placeat eos error! Culpa quasi ducimus unde.',
    link: '/',
    type: "card"
  },
  {
    imageUrl: smilingGirlWithJacket,
    icon: TbDental,
    title: 'Treatments',
    subtitle: 'fillings and crowns for kids treatments.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum hic totam saepe assumenda officiis ut. Commodi, nam maxime. Non blanditiis fugit quaerat molestias, qui dolorum dignissimos delectus distinctio sunt',
    link: '/',
    type: 'card'
  },
  {
    imageUrl: smilingGirlWithDungree,
    icon: TbEmergencyBed,
    title: 'emergencies',
    subtitle: 'same-day appointments available.',
    details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, nobis. Harum repellat itaque totam! At ad ducimus sequi voluptas, veniam delectus molestias aspernatur voluptatibus commodi amet, tenetur ea, doloremque accusantium.',
    link: '/',
    type: 'card'
  },
  {
    imageUrl: smilingSisters,
    icon: MdChildCare,
    title: 'Approach',
    subtitle: 'treatments mainly focused on children',
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, impedit consequatur! Nostrum doloremque minima cum aspernatur laborum unde velit, esse sequi minus tenetur eum optio eos. Et exercitationem minima explicabo.',
    link: '/',
    type: 'card'
  }
]

export const testimonialArray: Testimonial[] = [
  {
    name: 'Santosh Kumar',
    role: 'Product Manager',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum laborum cupiditate! Cumque, aut cum omnis consectetur autem numquam quas',
    organization: 'Google',
    rating: 3.5,
    imageUrl: santoshKumar,
    type: "testimonial"
  },
  {
    name: 'James Smith',
    role: 'Community Manager',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis non quod consequatur fugiat, aliquid repudiandae. Fuga minus commodi doloribus odio.',
    organization: 'Apple',
    rating: 2.5,
    imageUrl: jamesSmith,
    type: "testimonial"
  },
  {
    name: 'Greg Jones',
    role: 'Graphics Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate rerum quo molestias. Corporis qui explicabo numquam temporibus, esse ex.',
    organization: 'Uniliver',
    rating: 3.5,
    imageUrl: gregJones,
    type: "testimonial"
  },
  {
    name: 'Jessica Clerk',
    role: 'Frontend Developer',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum amet doloremque odio et quidem non consectetur unde quia recusandae velit',
    organization: 'Oracle',
    rating: 4,
    imageUrl: jessicaClerk,
    type: "testimonial"
  },
  {
    name: 'Monica Adams',
    role: 'UI Designer',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ex quia nam possimus rerum excepturi quisquam eum, aliquid impedit perferendis',
    rating: 5,
    imageUrl: monica_adams,
    type: "testimonial"
  },
]

export const galleryArray : Gallery[] = [
  {
    imageUrl: dental_clinic,
    type: "gallery"
  },
  {
    imageUrl: dental_clinic_1,
    type: "gallery"
  },
  {
    imageUrl: dental_clinic_2,
    type: "gallery"
  },
  {
    imageUrl: dental_clinic_3,
    type: "gallery"
  },
  {
    imageUrl: dental_clinic_4,
    type: "gallery"
  },
  {
    imageUrl: dental_clinic_5,
    type: "gallery"
  },
]
