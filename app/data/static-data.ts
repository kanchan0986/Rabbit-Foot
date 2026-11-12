import type { Gallery, Testimonial } from "~/components/custom-components/carousels/CarouselItem";
import smilingKidInOrangeShirt from "~/assets/smiling-kid-in-orange-shirt.jpg";
import smilingGirlWithJacket from "~/assets/smiling-girl-with-jacket.jpg";
import smilingGirlWithDungree from "~/assets/smiling-girl-with-dungree.jpg";
import smilingSisters from "~/assets/smiling-sisters.jpg";
import smiling_boy_thumbs_up from "~/assets/smiling_boy_thumbs_up.jpg";
import smiling_boy_thumbs_up_double from "~/assets/smiling_boy_thumbs_up_double.jpg";
import smiling_boy from "~/assets/smiling-boy.jpg";
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
import girl_with_brush_pic_1 from "~/assets/girl_with_brush_pic_1.jpg";
import girl_with_brush_pic_2 from "~/assets/girl_with_brush_pic_2.jpg";
import girl_with_brush_pic_3 from "~/assets/girl_with_brush_pic_3.jpg";
import mother_and_girl_with_brush from "~/assets/mother_and_girl_with_brush.jpg";
import what_makes_us_special from "~/assets/what_makes_us_special.jpg";
import girl_at_clinic_1 from "~/assets/girl_at_clinic_1.jpg";
import girl_at_clinic_2 from "~/assets/girl_at_clinic_2.jpg";
import girl_at_clinic from "~/assets/girl_at_clinic.jpg";
import busy_family from "~/assets/busy_family.jpg";
import { TbDental } from "react-icons/tb";
import { PiToothFill } from "react-icons/pi";
import { TbEmergencyBed } from "react-icons/tb";
import { MdChildCare } from "react-icons/md";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaRegFaceGrimace, FaUserDoctor, FaUserInjured } from "react-icons/fa6";
import alexa_thomas from '~/assets/alexa-thomas.jpg';
import stella_davidson from '~/assets/stella_davidson.jpg';
import taylor_adams from '~/assets/taylor_adams.jpg';
import maria_jackson from '~/assets/maria_jackson.jpg';
import chung_lee from '~/assets/chung_lee.jpg';
import type { IconType } from "react-icons/lib";
import { generateRandomId } from "~/helper/generateRandomId";
import { FaClipboardCheck } from "react-icons/fa6";
import buildNavItems from "~/helper/buildNavItems";
import { RiProfileLine } from "react-icons/ri";
import { IoCalendarOutline, IoLogOutOutline } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";

export const goodToKnowFacts = [
  "Pediatric Dentistry Specialist",
  "Undergraduate: University of Tennessee, Smallville",
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

export type Speciality = "preventive-care" | "sealants" | "fluoride-treatments" | "restorations" | "nerve-treatments" | "crowns" | "space-maintainers" | "mouthguards" | "whitening" | "extractions" | "nitrous-oxide-analgesia" | "hospital-dentistry" | "in-Office-sedation" | "all"

export type Degree = "D.D.S." | "D.M.D." | "M.S." | "M.D.Sc." | "Ph.D."

export type Slot = '10:00 am' | '11:00 pm' | '12:00 pm' | '01:00 pm' | '03:00 pm' | '04:00 pm' | '05:00 pm';

export const degreeArr : Degree[] = ['D.D.S.', 'D.M.D.', 'M.S.', 'M.D.Sc.', 'Ph.D.']

export type Schedule = {
  date: string; 
  slot: Slot[]
}

export type Doctor = {
  id: string;
  imageUrl?: string;
  name: string;
  email: string;
  phone?: number;
  address?: string;
  experience?: number;
  speciality: Speciality[];
  schedule?: Schedule[];
  degree?: Degree[];
  fee?: number;
  details?: string[];
  availability?: boolean;
  password: string;
  isVerified: boolean;
  weeklyEarnings?: number;
} & { readonly type: 'doctor'}

export const specialityArray : Speciality[] = [
  "all", "crowns", "extractions", "fluoride-treatments", "hospital-dentistry", "in-Office-sedation", "mouthguards", "nerve-treatments", "nitrous-oxide-analgesia", "preventive-care", "restorations", "sealants", "space-maintainers", "whitening"
]

export const doctorArray : Doctor[] = [
  {
    id: 'alexa-thomas',
    imageUrl: alexa_thomas,
    name: 'alexa thomas',
    email: 'alexa.thomas@gmail.com',
    address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos.',
    experience: 8,
    degree: ["D.D.S.", "D.M.D."],
    fee: 250,
    details: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero quasi laborum, officia expedita dolor harum fuga modi nesciunt ad, sit id ut non eum voluptatum deserunt quidem? Mollitia.'],
    availability: true,
    speciality: ["crowns", "extractions"],
    schedule: [],
    password: '12345',
    isVerified: true,
    phone: 8257463452,
    type: "doctor"
  },
  {
    id: 'stella-davidson',
    imageUrl: stella_davidson,
    name: 'stella davidson',
    email: 'stella.davidson@gmail.com',
    address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos.',
    experience: 5,
    degree: ["M.D.Sc."],
    fee: 200,
    details: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero quasi laborum, officia expedita dolor harum fuga modi nesciunt ad, sit id ut non eum voluptatum deserunt quidem? Mollitia.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero quasi laborum, officia expedita dolor harum fuga modi nesciunt ad, sit id ut non eum voluptatum deserunt quidem? Mollitia.'],
    availability: true,
    speciality: ["mouthguards", "crowns", "sealants"],
    schedule: [
        {
            date: '7/20/26',
            slot: ['10:00 am', '11:00 pm', '12:00 pm', '01:00 pm', '03:00 pm', '04:00 pm', '05:00 pm']
        },
        {
            date: '7/21/26',
            slot: ['10:00 am', '03:00 pm', '04:00 pm', '05:00 pm']
        },
    ],
    password: '12345',
    isVerified: false,
    type: "doctor"
  },
  {
    id: 'taylor-adams',
    imageUrl: taylor_adams,
    name: 'taylor adams',
    email: 'taylor.adams@gmail.com',
    address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos.',
    experience: 4,
    degree: ["M.S."],
    fee: 275,
    details: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero quasi laborum, officia expedita dolor harum fuga modi nesciunt ad, sit id ut non eum voluptatum deserunt quidem? Mollitia.'],
    availability: true,
    speciality: ["fluoride-treatments", "hospital-dentistry", "mouthguards", "restorations"],
    schedule: [],
    password: '12345',
    isVerified: true,
    type: "doctor"
  },
  {
    id: 'maria-jackson',
    imageUrl: maria_jackson,
    name: 'maria jackson',
    email: 'maria.jackson@gmail.com',
    address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos.',
    experience: 6,
    degree: ["D.D.S.", "Ph.D."],
    fee: 200,
    details: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero quasi laborum, officia expedita dolor harum fuga modi nesciunt ad, sit id ut non eum voluptatum deserunt quidem? Mollitia.'],
    availability: true,
    speciality: ["nerve-treatments", "crowns", "nitrous-oxide-analgesia", "space-maintainers"],
    schedule: [],
    password: '12345',
    isVerified: true,
    type: "doctor"
  },
  {
    id: 'chung-lee',
    imageUrl: chung_lee,
    name: 'chung lee',
    email: 'chung.lee@gmail.com',
    address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eos.',
    experience: 7,
    degree: ["M.D.Sc.", "Ph.D."],
    fee: 250,
    details: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure libero quasi laborum, officia expedita dolor harum fuga modi nesciunt ad, sit id ut non eum voluptatum deserunt quidem? Mollitia.'],
    availability: true,
    speciality: ["whitening", "restorations", "hospital-dentistry", "mouthguards", "sealants"],
    schedule: [],
    password: '12345',
    isVerified: true,
    type: "doctor"
  },
]

export type Showcase = {
  imageUrl: string;
  title: string;
  summary: (string | Point[])[];
}

export type Point = {
  id: string;
  icon?: IconType;
  title?: string;
  summary: string;
}

export type Description = {
  title?: string;
  summary?: (string | Point[])[];
}

export type Expectation = {
  imageUrl: string;
  title: string;
  subtitle?: string;
  description: Description
}

export type ServiceNiche = {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  summary?: Description;
  showcase?: Showcase;
  expectation?: Expectation;
  faq?: Faq[];
  highlights?: Highlights;
  speciality: Speciality[];
} & { readonly type: 'service-niche'}

export type Faq = {
  id: string;
  question: string;
  answer: string[];
}

export type Highlights = {
  title: string;
  summary?: string;
  imageUrl?: string;
  item: {
    id: string;
    title: string;
    summary?: string[];
  }[]
}

export type Service = {
  id: string;
  imageUrl: string;
  icon?: IconType;
  title: string;
  subtitle?: string;
  overview: Description;
  showcase?: Showcase;
  serviceNiche?: ServiceNiche[];
  expectation?: Expectation;
  faq?: Faq[];
  highlights?: Highlights;
  speciality: Speciality[];
} & { readonly type: 'service'}


export const servicesArray: Service[] = [
  { 
    id: 'preventive-dentist',
    imageUrl: smilingKidInOrangeShirt,
    icon: PiToothFill,
    title: 'Preventive Dentist',
    subtitle: 'Focused on long-term dental health, from the start',
    overview: {
      title: "Building a foundation for bright and beautiful smiles",
      summary: [
        "At Rabbit Foot Dentals, we believe prevention is the secret to healthy smiles. As your Rabbit Foot dental for kids and teens, we make regular checkups and cleanings simple and effective, helping to protect your child’s smile from cavities and future dental issues.", 
        "We’re here to give your family all the tips and tricks for great oral health. With a full range of preventive services, we help smiles stay big, bright, and strong. Catching small problems early means healthier smiles and fewer worries for the future."
      ]
    },
    type: "service",
    showcase: {
      title: "Convenient care for busy families",
      imageUrl: busy_family,
      summary: [
        "Between juggling after-school pickups, homework, and soccer practice, the last thing you need is one more chore. Our office sits just steps away from Farragut Intermediate, Middle, and High School—so your child can pop in for a quick check-up or same-day appointment without turning your day upside down.",
        "In consequat proident ipsum consequat ullamco sint. Cillum et commodo Lorem ex. In esse enim irure dolore sunt aute nulla Lorem duis reprehenderit non magna et incididunt. Duis cupidatat do laboris mollit cupidatat id ex consequat. Fugiat consectetur duis officia aute nulla. Excepteur commodo nulla amet ullamco."
      ]
    },
    faq: [
      {
        id: generateRandomId(),
        question: "When should my baby first visit the dentist?",
        answer: ["We recommend bringing your baby in for their first visit around their first birthday or when that first tooth pops in — whichever comes first."]
      },
      {
        id: generateRandomId(),
        question: "How often should my child visit the dentist?",
        answer: ["To keep those smiles healthy, we suggest a checkup and cleaning twice a year — about every 6 months. For those in braces, we may recommend more frequent cleanings to help promote great outcomes."]
      },
      {
        id: generateRandomId(),
        question: "What kind of toothpaste should I use?",
        answer: ["The American Academy of Pediatric Dentists recommends using: a smear of fluoridated toothpaste for children under 3 years, and a pea-sized amount for those 3-5 years, brushing twice daily with parental supervision. Once children are able to spit, they should be encouraged to do so after brushing."]
      },
      {
        id: generateRandomId(),
        question: "What foods should I avoid giving my child?",
        answer: ["Sugary drinks and snacks are the biggest culprits when it comes to cavities. Sticky candies and starchy foods like cookies and crackers can also be harmful to your child's teeth."]
      },
      {
        id: generateRandomId(),
        question: "Is preventive care covered by insurance?",
        answer: ["Great news! Most insurance plans cover 100% of preventive care. Since plans can vary, give us a call and we’ll help you figure out the details of your coverage."]
      },
    ],
    speciality: ["preventive-care", "restorations", "sealants", "whitening"],
    serviceNiche: [
      {
        id: 'cleanings-&-checkups',
        imageUrl: girl_with_brush_pic_1,
        type: 'service-niche',
        title: "Cleanings & Checkups",
        subtitle: "Building strong, confident smiles from the start",
        summary: {
          title: "Gentle cleanings for every smile",
          summary: [
            "At Rabbit Foot Dentals, we believe healthy smiles start with good habits — and regular dental visits! Dr. Drew Mallard and our caring team make cleanings and checkups fun, positive, and stress-free. Whether it’s your child’s first dental visit or their tenth, we’re here to help them feel comfortable and confident about caring for their teeth.", 
            "Our routine Rabbit Foot dental cleanings and checkups can help with:",
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Preventing cavities and gum disease early"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Tracking tooth growth and jaw development"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Encouraging great brushing and flossing habits"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Building lifelong confidence at the dentist"
              },
            ]
          ]
        },
        showcase: {
          title: "Helping every age feel comfortable at the dentist",
          imageUrl: mother_and_girl_with_brush,
          summary: [
            "A great dental experience starts at home! Before their appointment, you can help by:",
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                title: "Starting the conversation early:",
                summary: "Talk about the dentist as a friendly place that helps keep their smile healthy, no need to wait until the day of the appointment.",
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                title: "Making dental care part of your routine:",
                summary: "Brushing, flossing, and talking about teeth daily helps kids feel more in control at their visit.",
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                title: "Leading by example:",
                summary: "When children see you taking care of your own smile, they’re more likely to feel good about theirs too.",
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                title: "Encouraging, not pressuring:",
                summary: "Teens, especially, appreciate being part of the conversation. We’ll meet them where they are and build trust at their pace.",
              },
            ],
            "Our team understands that every stage comes with its own needs. That’s why we adjust our approach for each age group, using clear communication, patience, and plenty of smiles to make every visit a positive one."
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "What happens during a cleaning and checkup?",
            answer: ["Our visits include a gentle teeth cleaning, a complete exam, and — depending on age and need — digital x-rays. We’ll remove plaque, check for cavities, and make sure teeth are developing properly."]
          },
          {
            id: generateRandomId(),
            question: "Are cleanings uncomfortable?",
            answer: ["Not at all! We use soft instruments and gentle techniques to make our Rabbit Foot dental cleanings easy and comfortable. Most kids even look forward to their visit once they see how quick and easy it is."]
          },
          {
            id: generateRandomId(),
            question: "How often should my child have a cleaning in Rabbit Foot dental?",
            answer: ["We recommend visiting every 6 months to help prevent problems before they start. Regular visits allow us to catch small issues early and keep your child’s smile in tip-top shape."]
          },
          {
            id: generateRandomId(),
            question: "What if my child is nervous?",
            answer: ["That’s totally okay and very common. Our team specializes in helping kids feel at ease. We take things slowly, explain every step, and use plenty of encouragement to build trust and confidence."]
          }
        ],
        expectation: {
          title: "What to expect during your visit",
          imageUrl: girl_at_clinic,
          description: {
            summary: [
              [
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Warm welcome:",
                  summary: "Our friendly team will greet your family, get your child comfortable, and answer any questions."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Gentle cleaning:",
                  summary: "We’ll carefully clean the teeth, remove plaque buildup, and apply a fluoride treatment if needed."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Comprehensive exam:",
                  summary: "Dr. Mallard will check teeth, gums, and jaw development to make sure everything looks healthy."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Encouragement:",
                  summary: "We’ll talk to your child about brushing and flossing and send them home smiling."
                },
              ],
              "Our goal is to make every visit enjoyable, educational, and rewarding, setting the foundation for a lifetime of healthy smiles."
            ]
          }
        },
        highlights: {
          title: "What makes us special?",
          imageUrl: what_makes_us_special,
          item: [
            {
              id: generateRandomId(),
              title: "Trusted Experts",
              summary: ["As a Board Certified Pediatric Dentist, Dr. Mallard has received extensive training in pediatrics, allowing him to perform expert care and specialized treatments tailored to your child's needs."]
            },
            {
              id: generateRandomId(),
              title: "Convenient Location",
              summary: ["As your friendly Farragut pediatric dentist, we’re steps away from Farragut intermediate, middle, and high school – making visits easy, quick, and stress-free."]
            },
            {
              id: generateRandomId(),
              title: "Community is at our heart",
              summary: ["We love our community! That's why a part of what we earn goes to support local nonprofits and missions."]
            },
            {
              id: generateRandomId(),
              title: "Same-Day Smiles!",
              summary: ["Need a quick visit? We’ve got you covered with same-day appointments to keep your child’s smile on track!"]
            },
          ]
        },
        speciality: ["whitening"]
      },
      {
        id: 'fluoride-treatment',
        imageUrl: girl_with_brush_pic_2,
        type: 'service-niche',
        title: "Fluoride Treatment",
        subtitle: "Protecting smiles, strengthening teeth",
        summary: {
          title: "Simple protection for growing smiles",
          summary: [
            "At Rabbit Foot Dentals, we believe prevention is the best medicine for healthy teeth. One of the easiest and most effective ways to protect your child’s smile is with fluoride treatments.", 
            "Dr. Drew Mallard and our friendly team use gentle, quick applications of fluoride to help strengthen tooth enamel and prevent cavities before they start. Whether it’s your child’s first visit or part of their regular checkup, fluoride gives their smile an extra layer of defense, especially for kids and teens still perfecting their brushing and flossing habits.",
            "Our Rabbit Foot dental fluoride treatment can help with:",
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Strengthening developing teeth"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Preventing cavities and decay"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Protecting against acid and sugar damage"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Reducing sensitivity for kids with delicate enamel"
              },
            ]
          ]
        },
        showcase: {
          title: "Why fluoride matters",
          imageUrl: girl_with_brush_pic_3,
          summary: [
            "Fluoride is a natural mineral that helps rebuild and harden enamel, the outer layer of your child’s teeth. Every day, enamel is exposed to acids from food and bacteria, which can weaken it over time. Fluoride replaces lost minerals and keeps teeth strong and healthy.",
            "Our Rabbit Foot professional fluoride treatments provide much stronger protection than toothpaste or tap water alone. For kids at higher risk of cavities, these treatments can make a big difference in keeping smiles healthy for years to come."
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "How often should my child get fluoride treatments?",
            answer: ["Most kids benefit from fluoride every 6 months, usually during their routine cleaning and checkup. Some children may need it more often if they’re prone to cavities or have early signs of enamel weakening."]
          },
          {
            id: generateRandomId(),
            question: "Is fluoride safe?",
            answer: ["Yes! Professional fluoride treatments are completely safe and recommended by the American Dental Association (ADA) and American Academy of Pediatric Dentistry (AAPD). Our Rabbit Foot fluoride treatment dentist uses kid-friendly doses and gentle application methods to ensure comfort and safety."]
          },
          {
            id: generateRandomId(),
            question: "Does fluoride replace brushing and flossing?",
            answer: ["No, fluoride is an extra layer of protection, not a replacement for daily care. Regular brushing, flossing, and dental visits all work together to keep your child’s smile strong and healthy."]
          }
        ],
        expectation: {
          title: "What to expect during a fluoride treatment",
          imageUrl: girl_at_clinic_1,
          description: {
            summary: [
              [
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Quick and easy application:",
                  summary: "We’ll apply a small amount of fluoride varnish or gel to your child’s teeth — it only takes a minute!"
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Strong protection:",
                  summary: "The fluoride continues to strengthen teeth even after the appointment."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Simple aftercare:",
                  summary: "Your child can eat and drink normally soon after their visit."
                }
              ],
              "Our goal is to make every step simple, positive, and effective — keeping your child’s smile bright and cavity-free."
            ]
          }
        },
        highlights: {
          title: "What makes us special?",
          imageUrl: what_makes_us_special,
          item: [
            {
              id: generateRandomId(),
              title: "Trusted Experts",
              summary: ["As a Board Certified Pediatric Dentist, Dr. Mallard has received extensive training in pediatrics, allowing him to perform expert care and specialized treatments tailored to your child's needs."]
            },
            {
              id: generateRandomId(),
              title: "Convenient Location",
              summary: ["As your friendly Farragut pediatric dentist, we’re steps away from Farragut intermediate, middle, and high school – making visits easy, quick, and stress-free."]
            },
            {
              id: generateRandomId(),
              title: "Community is at our heart",
              summary: ["We love our community! That's why a part of what we earn goes to support local nonprofits and missions."]
            },
            {
              id: generateRandomId(),
              title: "Same-Day Smiles!",
              summary: ["Need a quick visit? We’ve got you covered with same-day appointments to keep your child’s smile on track!"]
            },
          ]
        },
        speciality: ["fluoride-treatments"]
      },
      {
        id: 'dental-sealants',
        imageUrl: girl_with_brush_pic_3,
        type: 'service-niche',
        title: "Dental Sealants",
        subtitle: "Shielding smiles from cavities",
        summary: {
          title: "Extra protection for growing teeth",
          summary: [
            "At Rabbit Foot Dentals, we know that even the best brushers can miss tiny spots — especially in the deep grooves of back teeth where food and bacteria love to hide. That’s where our Rabbit Foot dental sealants come in.", 
            "Sealants are thin, protective coatings that cover the chewing surfaces of molars, helping prevent cavities before they start. They’re a quick, painless, and highly effective way to keep your child’s smile healthy between visits.",
            "Sealants can help with:",
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Preventing cavities in hard-to-reach areas"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Protecting permanent molars as they come in"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Reducing the need for fillings later on"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Supporting healthy brushing and flossing habits"
              },
            ]
          ]
        },
        showcase: {
          title: "Who is a good candidate for sealants?",
          imageUrl: girl_at_clinic_2,
          summary: [
            "Sealants are most often recommended when the first and second permanent molars appear, usually around ages 6 and 12. But they’re also helpful for older kids and teens who are prone to cavities or still developing great oral hygiene habits.",
            "A single sealant application can last for several years, and our team checks them at every cleaning to ensure they’re still in great shape. If one needs a quick touch-up, it’s fast and easy to redo."
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "Are sealants safe?",
            answer: ["Sealants are made from safe, BPA-free materials approved by the American Dental Association (ADA) and the American Academy of Pediatric Dentistry (AAPD)."]
          },
          {
            id: generateRandomId(),
            question: "Do sealants replace brushing and flossing?",
            answer: ["No, they work best with good hygiene! Our Rabbit Foot dental sealants protect where toothbrushes can’t always reach, but daily brushing and flossing are still essential."]
          },
          {
            id: generateRandomId(),
            question: "How long do sealants last?",
            answer: ["Sealants can last anywhere from 3 to 10 years, depending on your child’s habits and chewing patterns. We’ll monitor them at every visit and reapply as needed."]
          },
          {
            id: generateRandomId(),
            question: "Does it hurt?",
            answer: ["Not one bit! Our Rabbit Foot dental sealants are completely painless — no needles, no drilling, and no discomfort. Most kids say it feels like getting their nails painted!"]
          }
        ],
        expectation: {
          title: "What to expect during your child’s visit",
          imageUrl: girl_at_clinic_1,
          description: {
            summary: [
              [
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Easy application:",
                  summary: "The entire process takes just a few minutes per tooth."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "No downtime:",
                  summary: "Your child can eat and drink right after the appointment."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Strong defense:",
                  summary: "Once sealed, teeth are better protected against bacteria and decay."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Ongoing care:",
                  summary: "We’ll check sealants at every cleaning to make sure they stay strong and effective."
                },
              ],
              "Sealants are one of the best ways to keep your child’s teeth healthy for the long run — simple, affordable, and highly protective!"
            ]
          }
        },
        highlights: {
          title: "What makes us special?",
          imageUrl: what_makes_us_special,
          item: [
            {
              id: generateRandomId(),
              title: "Trusted Experts",
              summary: ["As a Board Certified Pediatric Dentist, Dr. Mallard has received extensive training in pediatrics, allowing him to perform expert care and specialized treatments tailored to your child's needs."]
            },
            {
              id: generateRandomId(),
              title: "Convenient Location",
              summary: ["As your friendly Farragut pediatric dentist, we’re steps away from Farragut intermediate, middle, and high school – making visits easy, quick, and stress-free."]
            },
            {
              id: generateRandomId(),
              title: "Community is at our heart",
              summary: ["We love our community! That's why a part of what we earn goes to support local nonprofits and missions."]
            },
            {
              id: generateRandomId(),
              title: "Same-Day Smiles!",
              summary: ["Need a quick visit? We’ve got you covered with same-day appointments to keep your child’s smile on track!"]
            },
          ]
        },
        speciality: ['sealants']
      },
    ]
  },
  { 
    id: 'restorative-dentist',
    imageUrl: smilingGirlWithJacket,
    icon: TbDental,
    title: "Restorative Dentist",
    subtitle: "Restoring healthy, confident smiles",
    overview: {
      title: "Aesthetic solutions to restore healthy smiles",
      summary: [
        "Having trouble with your teeth? Don’t worry! As your trusted restorative dentist for children in Smallville, we are here to treat cavities, repair damaged teeth, and help bring those bright smiles back to their best. We are committed to supporting healthy, happy smiles by educating parents, so you can feel confident at every stage of your child’s dental care."        
      ]
    },
    type: "service",
    showcase: {
      title: "Convenient care for busy families",
      imageUrl: smilingGirlWithJacket,
      summary: [
        "Between juggling after-school pickups, homework, and soccer practice, the last thing you need is one more chore. Our office sits just steps away from Farragut Intermediate, Middle, and High School—so your child can pop in for a quick check-up or same-day appointment without turning your day upside down.",
        "Amet non dolor incididunt nostrud non cillum ipsum ipsum. Proident incididunt irure aute aliqua enim aute anim non sit. Officia amet cillum laborum voluptate incididunt et cillum ut enim voluptate. Incididunt fugiat veniam quis ullamco culpa laboris ea qui ipsum esse cupidatat proident sint. Esse proident fugiat elit esse ad deserunt eu tempor ut laboris laborum nulla. Consequat ut Lorem elit tempor proident velit dolore sint ullamco labore occaecat."
      ]
    },
    speciality: ["restorations", "extractions", "mouthguards", "nerve-treatments", "crowns"],
    serviceNiche: [
      {
        id: 'dental-crowns',
        imageUrl: girl_with_brush_pic_1,
        type: 'service-niche',
        title: "Dental Crowns",
        subtitle: "Restoring and protecting little smiles",
        summary: {
          title: "Restoring teeth, protecting confidence",
          summary: [
            "Sometimes, even with great brushing and regular checkups, kids’ teeth can develop cavities or get damaged. When that happens, a dental crown can help restore the tooth’s shape, strength, and function, keeping your child’s smile healthy and their confidence high.", 
            "At Rabbit Foot Dentals, we make restorative care simple and stress-free. We use Smallville dental crowns to protect teeth that are too weak for a filling or have had more advanced treatment, like a baby root canal. The result? A strong, healthy tooth that looks and feels great!"
          ]
        },
        showcase: {
          title: "Why your child might need a crown",
          imageUrl: mother_and_girl_with_brush,
          summary: [
            "Sometimes a filling isn’t enough to keep a tooth healthy. If a tooth is badly decayed, chipped, or weakened, a dental crown helps protect it and restore its strength.",
            "We may recommend Rabbit Foot dental crowns when:",
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "A cavity is too large for a simple filling",
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "A tooth has been cracked or chipped in an accident or injury",
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "A tooth has had pulp therapy (a “baby root canal”)",
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "There’s significant enamel wear from grinding or developmental conditions",
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "You want to avoid an early tooth extraction that could affect spacing for adult teeth",
              }
            ],
            "By covering and reinforcing the tooth, a crown helps your child chew comfortably, prevents further damage, and preserves space for their future adult teeth."
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "Do crowns hurt to get?",
            answer: ["We make sure your child is fully comfortable with gentle numbing and calm, reassuring care. Many kids are surprised by how easy the process feels."]
          },
          {
            id: generateRandomId(),
            question: "How long will the crown last?",
            answer: ["Crowns typically last until the baby tooth naturally falls out, usually several years. We check them at every visit to ensure they’re secure and healthy."]
          },
          {
            id: generateRandomId(),
            question: "Can you place crowns on adult teeth too?",
            answer: ["For older kids or teens with permanent teeth, we can place our Rabbit Foot dental crowns that are designed to last for many years and protect long-term oral health."]
          },
          {
            id: generateRandomId(),
            question: "What if my child is nervous?",
            answer: ["We use a calm, positive approach and can offer light sedation if needed to make the visit easier for anxious or younger patients."]
          }
        ],
        expectation: {
          title: "What to expect during a crown’s visit",
          imageUrl: girl_at_clinic,
          description: {
            summary: [
              [
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Evaluation and explanation:",
                  summary: "We’ll examine the tooth and explain whether a crown is the best option."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Gentle preparation:",
                  summary: "The damaged area is cleaned and shaped for a perfect fit."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Crown placement:",
                  summary: "The crown is carefully placed and adjusted for comfort and bite alignment."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "A strong, restored tooth:",
                  summary: "Your child leaves with a healthy, functional smile that’s ready for everyday eating and play!"
                },
              ],
              "With every crown, our goal is to protect your child’s smile with care that makes them feel proud of their dental visit."
            ]
          }
        },
        highlights: {
          title: "What makes us special?",
          imageUrl: what_makes_us_special,
          item: [
            {
              id: generateRandomId(),
              title: "Trusted Experts",
              summary: ["As a Board Certified Pediatric Dentist, Dr. Mallard has received extensive training in pediatrics, allowing him to perform expert care and specialized treatments tailored to your child's needs."]
            },
            {
              id: generateRandomId(),
              title: "Convenient Location",
              summary: ["As your friendly Farragut pediatric dentist, we’re steps away from Farragut intermediate, middle, and high school – making visits easy, quick, and stress-free."]
            },
            {
              id: generateRandomId(),
              title: "Community is at our heart",
              summary: ["We love our community! That's why a part of what we earn goes to support local nonprofits and missions."]
            },
            {
              id: generateRandomId(),
              title: "Same-Day Smiles!",
              summary: ["Need a quick visit? We’ve got you covered with same-day appointments to keep your child’s smile on track!"]
            },
          ]
        },
        speciality: ["crowns"]
      },
      {
        id: 'fillings',
        imageUrl: girl_with_brush_pic_2,
        type: 'service-niche',
        title: "Fillings",
        subtitle: "Restoring little teeth with big care",
        summary: {
          title: "Is your child dealing with cavities? We can help!",
          summary: [
            "Even with great brushing and regular checkups, kids can still get cavities. At Rabbit Foot Dentals, we make fixing them simple, stress-free, and comfortable.", 
            "Dr. Drew Mallard and our team use gentle, tooth-colored fillings to repair small areas of decay before they become bigger problems. Each filling restores the tooth’s shape and strength, helping your child chew, talk, and smile with confidence.",
            "Our Rabbit Foot dental fillings can help with:",
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Treating small to medium cavities"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Preventing pain or sensitivity"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Stopping decay from spreading"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Protecting baby teeth until they’re ready to fall out naturally"
              },
            ]
          ]
        },
        showcase: {
          title: "What happens if tooth decay is left untreated",
          imageUrl: girl_with_brush_pic_3,
          summary: [
            "Tooth decay may start small, but it can spread quickly. If a cavity isn’t treated right away, it can reach deeper layers of the tooth, causing pain, infection, and even damage to the surrounding teeth and gums. Cavities can cause:",
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Toothaches or sensitivity that make eating uncomfortable"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Infections or abscesses that may require more advanced treatment"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Difficulty chewing or speaking clearly"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Early tooth loss, which can affect how permanent teeth grow in"
              },
            ],
            "Baby teeth are essential for guiding adult teeth into place. Tooth decay can disrupt natural development and create long-term problems for your child’s smile. Early care helps prevent discomfort and keeps your child’s mouth healthy as they grow."
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "Do fillings hurt?",
            answer: ["Our Rabbit Foot fillings dentist uses gentle numbing and calming techniques to make sure your child feels comfortable. Most kids say they didn’t feel a thing."]
          },
          {
            id: generateRandomId(),
            question: "Are fillings safe for kids?",
            answer: ["Yes! We use modern, tooth-colored materials that are durable, biocompatible, and blend naturally with your child’s smile."]
          },
          {
            id: generateRandomId(),
            question: "How long does a filling last?",
            answer: ["With good brushing, flossing, and regular checkups, a Rabbit Foot filling can last for years — often until the baby tooth naturally falls out."]
          },
          {
            id: generateRandomId(),
            question: "How can I help prevent future cavities?",
            answer: ["Encourage brushing twice a day with fluoride toothpaste, flossing daily, limiting sugary snacks, and visiting us every 6 months for cleanings and exams."]
          }
        ],
        expectation: {
          title: "What to expect during a fillings treatment",
          imageUrl: girl_at_clinic_1,
          description: {
            summary: [
              [
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Quick diagnosis:",
                  summary: "We’ll identify any decay using gentle digital x-rays and an exam."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Comfort first:",
                  summary: "We explain each step to your child and ensure they’re relaxed and at ease."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Precise restoration:",
                  summary: "The decay is removed, and the filling is placed and shaped for a perfect fit."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "A strong, healthy smile:",
                  summary: "Your child leaves with a restored tooth and plenty of reasons to smile!"
                }
              ],
              "At Rabbit Foot Dentals, our approach is simple: gentle treatment, long-lasting protection, and a positive experience every step of the way."
            ]
          }
        },
        highlights: {
          title: "What makes us special?",
          imageUrl: what_makes_us_special,
          item: [
            {
              id: generateRandomId(),
              title: "Trusted Experts",
              summary: ["As a Board Certified Pediatric Dentist, Dr. Mallard has received extensive training in pediatrics, allowing him to perform expert care and specialized treatments tailored to your child's needs."]
            },
            {
              id: generateRandomId(),
              title: "Convenient Location",
              summary: ["As your friendly Farragut pediatric dentist, we’re steps away from Farragut intermediate, middle, and high school – making visits easy, quick, and stress-free."]
            },
            {
              id: generateRandomId(),
              title: "Community is at our heart",
              summary: ["We love our community! That's why a part of what we earn goes to support local nonprofits and missions."]
            },
            {
              id: generateRandomId(),
              title: "Same-Day Smiles!",
              summary: ["Need a quick visit? We’ve got you covered with same-day appointments to keep your child’s smile on track!"]
            },
          ]
        },
        speciality: ["restorations"]
      },
      {
        id: 'tooth-extractions',
        imageUrl: girl_with_brush_pic_3,
        type: 'service-niche',
        title: "Tooth Extractions",
        subtitle: "Gentle care when a tooth needs to go",
        summary: {
          title: "Compassionate care for every tooth",
          summary: [
            "At Rabbit Foot Dentals, we do everything possible to save and protect your child’s natural teeth. But sometimes, removing a tooth is the healthiest option. Whether it’s a stubborn baby tooth, a badly decayed tooth, or one causing crowding, Dr. Drew Mallard and our caring team make the process gentle, safe, and stress-free.", 
            "Our goal is to keep your child comfortable from start to finish and ensure the experience feels calm, positive, and easy to understand.",
            "Rabbit Foot tooth extractions may be recommended when:",
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "A tooth is too damaged to be repaired"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Severe decay or infection is present"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "A baby tooth is blocking an incoming permanent tooth"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "Overcrowding is affecting your child’s bite or orthodontic plan"
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                summary: "An injury has fractured a tooth beyond repair"
              }
            ]
          ]
        },
        showcase: {
          title: "Gentle techniques for tooth removal",
          imageUrl: girl_at_clinic_2,
          summary: [
            "We understand that “tooth extraction” can sound intimidating, especially for kids. That’s why we take a calm, supportive approach and explain everything in simple, positive terms.",
            "Our team uses modern techniques and local anesthesia to ensure a completely comfortable experience. For children who are anxious or need extra reassurance, we also offer sedation options to help them stay relaxed throughout the procedure.",
            "Dr. Mallard, our Rabbit Foot tooth extraction dentist, is patient, compassionate, and experienced in helping kids of all ages feel safe and confident in the dental chair."
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "Does an extraction hurt?",
            answer: ["Your child’s mouth will be numbed before the tooth is removed, so they won’t feel any pain. Afterward, we’ll provide easy-to-follow instructions to keep them comfortable as they heal."]
          },
          {
            id: generateRandomId(),
            question: "How long does it take to recover?",
            answer: ["Most children recover within a few days. Minor tenderness or swelling is normal, and we’ll recommend soft foods and gentle care during healing."]
          },
          {
            id: generateRandomId(),
            question: "Will my child need a space maintainer?",
            answer: ["If the extracted tooth was a baby tooth that came out early, Dr. Mallard may recommend a small device to keep the space open until the permanent tooth is ready to come in. This helps prevent future crowding or misalignment."]
          },
          {
            id: generateRandomId(),
            question: "What can I do to prepare my child?",
            answer: ["Talk about the visit positively! You can reassure your child that removing the tooth will help their smile stay healthy and strong, and we’ll take great care of them the entire time."]
          }
        ],
        expectation: {
          title: "What to expect during your child’s visit",
          imageUrl: girl_at_clinic_1,
          description: {
            summary: [
              [
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Careful evaluation:",
                  summary: "We’ll examine your child’s tooth and explain why extraction is the best option."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Comfort first:",
                  summary: "Local anesthesia or sedation ensures your child feels relaxed and pain-free."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Gentle removal:",
                  summary: "The tooth is carefully extracted with precision and care."
                },
                {
                  id: generateRandomId(),
                  icon: FaClipboardCheck,
                  title: "Simple aftercare:",
                  summary: "We’ll give you clear, easy instructions for healing and help you schedule any necessary follow-ups."
                },
              ],
              "At Rabbit Foot Dentals, every Smallville tooth extraction is done with compassion and attention to your child’s comfort."
            ]
          }
        },
        highlights: {
          title: "What makes us special?",
          imageUrl: what_makes_us_special,
          item: [
            {
              id: generateRandomId(),
              title: "Trusted Experts",
              summary: ["As a Board Certified Pediatric Dentist, Dr. Mallard has received extensive training in pediatrics, allowing him to perform expert care and specialized treatments tailored to your child's needs."]
            },
            {
              id: generateRandomId(),
              title: "Convenient Location",
              summary: ["As your friendly Farragut pediatric dentist, we’re steps away from Farragut intermediate, middle, and high school – making visits easy, quick, and stress-free."]
            },
            {
              id: generateRandomId(),
              title: "Community is at our heart",
              summary: ["We love our community! That's why a part of what we earn goes to support local nonprofits and missions."]
            },
            {
              id: generateRandomId(),
              title: "Same-Day Smiles!",
              summary: ["Need a quick visit? We’ve got you covered with same-day appointments to keep your child’s smile on track!"]
            },
          ]
        },
        speciality: ["extractions"]
      },
    ]
  },
  { 
    id: 'frenectomy-services',
    imageUrl: smilingGirlWithDungree,
    icon: TbEmergencyBed,
    title: 'Frenectomy Services',
    subtitle: 'For easier feeding, talking, and smiling',
    overview: {
      title: "Quick and easy frenectomies",
      summary: [
        "At Rabbit Foot Dentals, we’re here to make frenectomies easy for you and your child! If your child has a tongue tie, lip tie, or both, Dr. Drew Mallard and our friendly team use modern techniques to make the procedure quick and stress-free. Our Rabbit Foot dental frenectomy services are all about helping your child with feeding, talking, and keeping their smile healthy.",
        "A frenectomy can help with:",
        [
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Babies who have trouble breastfeeding or bottle-feeding."
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Toddlers working on their words."
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Children with tongue or lip movement issues."
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Kids who need help keeping their teeth clean."
          },
        ]
      ]
    },
    type: "service",
    showcase: {
      title: "Personalized care for every kid’s needs",
      imageUrl: mother_and_girl_with_brush,
      summary: [
        "Every child is unique, and we love that! Whether your child has a tongue tie or lip tie, Dr. Mallard and our friendly team take the time to understand what makes them them and figure out how we can help! Our goal? To help your kids’ mouths move better, feel better, and smile bigger.",
        "Cillum veniam cupidatat ad qui culpa in id duis reprehenderit sint esse. Officia esse ipsum laborum anim sint eu reprehenderit id eiusmod nulla fugiat et ea. Et ullamco aliquip magna ex."
      ]
    },
    serviceNiche: [],
    faq: [
      {
        id: generateRandomId(),
        question: "What is a frenectomy?",
        answer: ["A frenectomy is a quick, easy procedure that releases any tissue that causes tongue or lip restrictions. It helps your child’s mouth move better and feel more comfortable."]
      },
      {
        id: generateRandomId(),
        question: "Is a frenectomy uncomfortable?",
        answer: ["With laser technology and specialized techniques, minimal to no discomfort is felt for our kids needing releases. In certain instances, numbing can also be used in the area to enhance our patient's comfort."]
      },
      {
        id: generateRandomId(),
        question: "How long does the procedure take?",
        answer: ["Just a few minutes! Using a laser increases the quickness and efficiency of the release. In addition, our kids also experience less bleeding, less healing time, and a more comfortable recovery."]
      },
      {
        id: generateRandomId(),
        question: "How do I know if my child needs a frenectomy?",
        answer: ["Look for signs like trouble breastfeeding, speech delays, or a tongue or lip that doesn’t move freely. We’ll give your child a thorough exam and let you know if a frenectomy can help. We’ll also recruit other specialists (i.e. Lactation Consultants, Speech Therapists, Myofunctional Therapists, etc.) to join us so we can have the most favorable outcome for you and your child."]
      },
    ],
    expectation: {
      title: "What to expect with a frenectomy",
      imageUrl: smilingGirlWithJacket,
      description: {
        summary: [
          [
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              title: "Initial consultation",
              summary: "We’ll check your child’s tongue or lip movement and chat about any challenges you’ve noticed. We’re here to listen and answer all your questions."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              title: "Personalized plan",
              summary: "Every child is unique, so we’ll explain the procedure and create a plan that fits your child’s needs perfectly."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              title: "Quick and easy procedure",
              summary: "The frenectomy is quick and done with laser technology for extra precision and comfort."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              title: "Simple aftercare",
              summary: "We’ll give you easy-to-follow aftercare tips to help with healing and demonstrate critical stretches that will help ensure the best outcome and mobility for your child."
            }
          ],
          "Most children (and Moms) notice a difference right away, with improvements in feeding, talking, and comfort."
        ]
      }
    },
    speciality: ["mouthguards", "hospital-dentistry", "nitrous-oxide-analgesia"]
  },
  { 
    id: 'pediatric-sedation',
    imageUrl: smilingSisters,
    icon: MdChildCare,
    title: 'Pediatric Sedation',
    subtitle: 'Keeping dental work calm and stress-free',
    overview: {
      title: "Relax and Smile",
      summary: [
        "If your child feels anxious about visiting the dentist, you’re not alone, and there are solutions. As Rabbit Foot pediatric sedation dentists, we offer safe, effective options to help your child feel calm and at ease during their appointment. From simple cleanings to more complex procedures, sedation dentistry can make each visit a more relaxed and positive experience.",
        "Sedation may be a great fit for children who:",
        [
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Experience dental anxiety or fear"
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Need longer or more involved treatments"
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Have extra-sensitive teeth or a low pain threshold"
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Have a strong gag reflex"
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Struggle to sit still for extended periods"
          },
        ]
      ]
    },
    type: "service",
    showcase: {
      title: "Relaxing care for every child",
      imageUrl: dental_clinic,
      summary: [
        "Every child is unique, and we’re here to make sure they feel safe and calm. As your Rabbit Foot pediatric sedation dentist, Dr. Mallard and our team offer sedation options to help kids — including those with special needs — have smooth, stress-free visits. We offer both hospital and in-office sedation to ensure we can meet every child’s needs.",
        "Voluptate occaecat incididunt esse sunt proident tempor veniam ea enim ad eiusmod. Laborum deserunt nulla duis esse. Lorem cupidatat officia adipisicing ad irure nisi nulla in fugiat voluptate. Elit adipisicing sunt consectetur elit fugiat adipisicing irure sint qui fugiat ex veniam. Cupidatat aliquip consequat amet cupidatat eiusmod et pariatur nisi pariatur quis. Non quis enim culpa reprehenderit."
      ]
    },
    serviceNiche: [],
    faq: [
      {
        id: generateRandomId(),
        question: "Is sedation dentistry safe?",
        answer: ["Absolutely! Keeping your child safe during these procedures is our main priority. We make sure to do a thorough check of your child’s medical history before any sedation is discussed. Feel at peace knowing that our team has undergone extensive sedation and emergency training to make sure we keep your child safe."]
      },
      {
        id: generateRandomId(),
        question: "Will my child feel any pain with sedation dentistry?",
        answer: ["Sedation helps you feel relaxed and comfortable. Under certain sedations, kids won’t even remember the procedure."]
      },
      {
        id: generateRandomId(),
        question: "Is sedation dentistry right for every child?",
        answer: ["We’ll take a look at your child’s needs and medical history to see if sedation is a good fit for them."]
      }
    ],
    expectation: {
      title: "What to expect with sedation dentistry",
      imageUrl: dental_clinic_2,
      description: {
        summary: [
          "Here’s how we make your family’s visit easy and stress-free with sedation:",
          [
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              summary: "We begin with a thorough and friendly exam to determine the best way to keep your child comfortable and at ease."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              summary: "Together, we’ll review our sedation options and choose the one that best meets your child’s needs."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              summary: "On the day of the procedure, your child will receive the selected form of sedation to help ensure a calm and smooth experience."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              summary: "Throughout the entire visit, our team will carefully monitor your child to ensure their safety and comfort at every moment."
            }
          ],
          "When it’s all done, you’ll wake up slowly, with your dental needs taken care of and no recollection of the procedure at all."
        ]
      }
    },
    speciality: ["in-Office-sedation", "nitrous-oxide-analgesia"]
  },
  { 
    id: 'special-needs-dentistry',
    imageUrl: smiling_boy_thumbs_up,
    icon: BsEmojiLaughing,
    title: 'Special Needs',
    subtitle: 'Patient, compassionate, and always understanding',
    overview: {
      title: "Gentle, personalized care for every special smile",
      summary: [
        "As your Rabbit Foot special needs pediatric dentist, our team is trained to provide empathetic, patient, and compassionate care tailored to your child’s needs.",
        "Our special needs dentistry helps:",
        [
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Kids with sensory challenges."
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Children with developmental or physical disabilities."
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Little ones who feel anxious at the dentist."
          },
          {
            id: generateRandomId(),
            icon: FaClipboardCheck,
            summary: "Anyone who needs extra time, care, and understanding."
          }
        ],
        "We’re here to make every visit positive and stress-free."
      ]
    },
    type: "service",
    showcase: {
      title: "Personalized care for every smile",
      imageUrl: smilingSisters,
      summary: [
        "If your child needs a dress rehearsal for any visit, we’re happy to help. We know that earning trust and coming to a familiar place with familiar faces really helps them succeed. Let us know your child’s needs and preferences so we can create a positive, personalized experience for them.",
        "Anim voluptate aliqua enim ut velit enim sit consectetur consequat excepteur aute. Ea aliquip dolore laborum culpa magna incididunt elit est nostrud exercitation. Aliquip cupidatat ex reprehenderit dolor eiusmod aliqua culpa anim dolore reprehenderit. Eu ea eiusmod et culpa consequat ea dolor tempor duis minim aute."
      ]
    },
    serviceNiche: [],
    faq: [
      {
        id: generateRandomId(),
        question: "Is special needs dentistry different?",
        answer: ["Special needs dentistry is all about tailoring care to fit your child’s unique physical, emotional, and sensory needs."]
      },
      {
        id: generateRandomId(),
        question: "How do you help with sensory sensitivities?",
        answer: ["We understand that each child is unique and may experience sensory sensitivities. Our team is trained to create a calming and supportive environment by adjusting lights, sounds, and using techniques tailored to ensure your child's comfort."]
      },
      {
        id: generateRandomId(),
        question: "Can parents stay with their child?",
        answer: ["Of course. We love having you by your child’s side to help them feel safe and comfortable."]
      },
      {
        id: generateRandomId(),
        question: "How do you prepare kids for visits?",
        answer: ["We offer fun pre-visit tours, easy-to-understand visuals, and simple explanations so your child knows what to expect for every visit."]
      }
    ],
    expectation: {
      title: "What to expect with special needs dentistry",
      imageUrl: smilingSisters,
      description: {
        summary: [
          "Here’s how we make your family’s visit easy and stress-free with sedation:",
          [
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              title: "Friendly chat:",
              summary: "We’ll start by getting to know your child — their needs, likes, and feels comfortable."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              title: "Tailored just for them:",
              summary: "Every child is unique, so we make sure their visit is designed to fit them perfectly."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              title: "Compassionate, patient care:",
              summary: "Our team uses calming techniques, kind words, and lots of patience to make every visit feel easy and relaxed."
            },
            {
              id: generateRandomId(),
              icon: FaClipboardCheck,
              title: "A safe, fun space:",
              summary: "A comfortable and welcoming environment where patients feel at ease and cared for."
            }
          ],
          "When it’s all done, you’ll wake up slowly, with your dental needs taken care of and no recollection of the procedure at all."
        ]
      }
    },
    highlights: {
      title: "What makes us special?",
      imageUrl: what_makes_us_special,
      item: [
        {
          id: generateRandomId(),
          title: "Trusted Experts",
          summary: ["As a Board Certified Pediatric Dentist, Dr. Mallard has received extensive training in pediatrics, allowing him to perform expert care and specialized treatments tailored to your child's needs."]
        },
        {
          id: generateRandomId(),
          title: "Convenient Location",
          summary: ["As your friendly Farragut pediatric dentist, we’re steps away from Farragut intermediate, middle, and high school – making visits easy, quick, and stress-free."]
        },
        {
          id: generateRandomId(),
          title: "Community is at our heart",
          summary: ["We love our community! That's why a part of what we earn goes to support local nonprofits and missions."]
        },
        {
          id: generateRandomId(),
          title: "Same-Day Smiles!",
          summary: ["Need a quick visit? We’ve got you covered with same-day appointments to keep your child’s smile on track!"]
        },
      ]
    },
    speciality: ["nerve-treatments", "space-maintainers", "whitening"]
  },
  { 
    id: 'orthodontics',
    imageUrl: smiling_boy_thumbs_up_double,
    icon: FaRegFaceGrimace,
    title: "Orthodontics",
    subtitle: "Confident smiles start young",
    overview: {
      title: "Unlock your child’s best smile",
      summary: [
        "As kids and teens grow, so do their smiles, and sometimes they need a little help. Crooked teeth can affect your child’s confidence and health, but the right care makes all the difference. At Rabbit Foot Dentals, we make orthodontics easy, effective, and fun. Led by Dr. Drew Mallard, our team offers trusted Rabbit Foot orthodontics for kids and teens in a space where they feel safe and parents feel confident.",
        "Whether it’s early guidance or a teen-friendly plan, we’re here every step of the way. Book a visit today and get your child smiling bright."        
      ]
    },
    type: "service",
    showcase: {
      title: "Convenient care for busy families",
      imageUrl: busy_family,
      summary: [
        "Between juggling after-school pickups, homework, and soccer practice, the last thing you need is one more chore. Our office sits just steps away from Farragut Intermediate, Middle, and High School—so your child can pop in for a quick check-up or same-day appointment without turning your day upside down.",
        "Sit ex est aute velit anim culpa aliquip esse mollit qui ut consequat. Excepteur eu irure adipisicing exercitation aliquip. Ex enim do deserunt mollit in id non irure reprehenderit. Ut esse consequat minim veniam. Tempor deserunt irure dolore excepteur consectetur sit amet quis non duis elit adipisicing Lorem."
      ]
    },
    serviceNiche: [
      {
        id: 'orthodontic-evaluation',
        imageUrl: girl_at_clinic,
        type: 'service-niche',
        title: "Orthodontic Evaluation",
        subtitle: "Catch dental issues early",
        summary: {
          title: "Why early orthodontic evaluations matter",
          summary: [
            "Most people think of orthodontics as something that happens in middle school or high school. But the American Association of Orthodontists recommends an initial orthodontic evaluation by age , and for good reason.", 
            "By the time a child turns seven, enough permanent teeth have come in, and our Rabbit Foot early orthodontic evaluation can identify developing alignment issues, jaw growth concerns, and bite problems that are far easier to correct while the jaw is still growing.",
            "Catching these issues early doesn’t always mean starting treatment right away, but it does mean we can monitor, plan, and act at exactly the right time to get the best result with the least intervention."
          ]
        },
        showcase: {
          title: "Phase 1 vs. Phase 2 orthodontics",
          imageUrl: mother_and_girl_with_brush,
          summary: [
            [
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                title: "Phase 1 (Early Intervention, Ages 6–10)",
                summary: "If a developing issue requires it, we may recommend Phase 1 treatment — often involving an expander, space maintainer, or limited braces — to guide jaw growth and create space before all permanent teeth come in. Not every child needs Phase 1, but for those who do, it can simplify or even eliminate Phase 2 treatment entirely.",
              },
              {
                id: generateRandomId(),
                icon: FaClipboardCheck,
                title: "Phase 2 (Comprehensive Treatment, Ages 11+)",
                summary: "Once most or all permanent teeth have come in, comprehensive orthodontic treatment aligns all the teeth and finalizes the bite. Phase 2 is typically shorter and more predictable when early concerns were addressed in Phase 1.",
              }
            ]
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "When should my child have their first orthodontic evaluation in Rabbit Foot?",
            answer: ["The American Association of Orthodontists recommends a first evaluation by age 7. At Rabbit Foot Dentals, we can perform this evaluation during your child's routine checkup; no separate orthodontist referral is needed."]
          },
          {
            id: generateRandomId(),
            question: "Does an early evaluation mean my child will need braces right away?",
            answer: ["Not necessarily. Many children who come in for an early evaluation are simply monitored over time. The goal is to identify any developing concerns, not to start treatment prematurely."]
          },
          {
            id: generateRandomId(),
            question: "What if my child needs early orthodontic treatment?",
            answer: ["If treatment is recommended, we'll walk you through every option, explain the timeline, and make sure you and your child feel comfortable and informed before anything begins."]
          },
          {
            id: generateRandomId(),
            question: "Is early orthodontic treatment expensive?",
            answer: ["Phase 1 treatment, when needed, is often less involved than comprehensive orthodontics, and catching issues early can reduce the complexity and cost of future treatment. Our team will review your insurance benefits and discuss payment options at your visit."]
          },
          {
            id: generateRandomId(),
            question: "What orthodontic services does Rabbit Foot offer?",
            answer: ["Rabbit Foot Dentals offers a range of orthodontic solutions for children and teens. Our team will recommend the best approach based on your child's specific needs during their evaluation."]
          }
        ],
        highlights: {
          title: "What we look for in an early orthodontic evaluation",
          imageUrl: what_makes_us_special,
          item: [
            {
              id: generateRandomId(),
              title: "Bite alignment",
              summary: ["We assess how the upper and lower teeth come together. Overbites, underbites, crossbites, and open bites are all easier to correct in younger children when the jaw is still developing."]
            },
            {
              id: generateRandomId(),
              title: "Jaw development",
              summary: ["We evaluate the size and symmetry of the upper and lower jaw to identify crowding, spacing, or skeletal concerns early."]
            },
            {
              id: generateRandomId(),
              title: "Tooth eruption",
              summary: ["We check that teeth are coming in properly — in the right order, at the right time, and with enough space to emerge correctly."]
            },
            {
              id: generateRandomId(),
              title: "Habits affecting tooth development",
              summary: ["Prolonged thumb sucking, pacifier use, or mouth breathing can affect how teeth and the jaw develop. We identify these early and provide guidance to address them."]
            },
            {
              id: generateRandomId(),
              title: "Space management",
              summary: ["If a baby tooth is lost early, nearby teeth can drift and block the space needed for permanent teeth. Early evaluation helps us plan space maintenance if needed."]
            }
          ]
        },
        speciality: ["extractions"]
      },
      {
        id: 'early-orthodontics',
        imageUrl: dental_clinic_3,
        type: 'service-niche',
        title: "Early Orthodontics",
        subtitle: "Starting early makes a lasting difference",
        summary: {
          title: "Why early orthodontics matters — and when to start",
          summary: [
            "The American Academy of Pediatric Dentistry and the American Association of Orthodontists recommend that children receive an orthodontic evaluation by age 7. That doesn’t mean treatment starts at 7 — but it does mean Dr. Mallard can identify bite problems while the jaw is still developing and address them at the moment when treatment is simplest, shortest, and most effective.", 
            "Rabbit Foot Phase 1 early orthodontic treatment is interceptive care designed to work with your child’s growth rather than against it. By the time all adult teeth are in, many issues are already harder to correct."
          ]
        },
        showcase: {
          title: "What Phase 1 orthodontics looks like at Rabbit Foot",
          imageUrl: mother_and_girl_with_brush,
          summary: [
            "Smallville early orthodontics at Rabbit Foot Dentals might include expanders, partial braces, or specialized appliances, depending on what your child needs. Every plan is designed around your child’s specific jaw, teeth, and development stage.",
            "The goal of Phase 1 is not to finish orthodontic treatment. It’s to correct the problems that will make Phase 2 (if needed) faster, simpler, and more predictable — or to eliminate the need for Phase 2 entirely.",
            "Dr. Mallard is a Board Certified Pediatric Dentist with advanced training in child growth and development. He’ll walk you through what he’s seeing, what he recommends, and what the timeline looks like — in terms you and your child can understand."
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "My child is 7 — do they need treatment already?",
            answer: ["Not necessarily. The evaluation at age 7 is to assess development and catch any concerns early. Most children who come in at that age don't need treatment yet — but the information Dr. Mallard gathers at that visit helps us plan ahead."]
          },
          {
            id: generateRandomId(),
            question: "How long does Phase 1 treatment take?",
            answer: ["Most Phase 1 cases are completed in 9–12 months. After active treatment, your child wears a retainer through the growth period until they're ready for Phase 2, if needed."]
          },
          {
            id: generateRandomId(),
            question: "Will my child need braces again after Phase 1?",
            answer: ["Sometimes yes. Phase 1 addresses specific structural problems — it doesn't replace comprehensive alignment work later. But if Phase 1 is done well, Phase 2 is typically shorter and more straightforward."]
          },
          {
            id: generateRandomId(),
            question: "Does early orthodontics hurt?",
            answer: ["There's usually some soreness after each adjustment, similar to what adults experience with orthodontic treatment. Dr. Mallard and the team prepare kids for what to expect and make the visits as comfortable as possible."]
          },
          {
            id: generateRandomId(),
            question: "Is early orthodontics covered by insurance?",
            answer: ["Many dental insurance plans with orthodontic benefits cover Phase 1 treatment, often as a portion of the lifetime orthodontic maximum. We'll verify your benefits before treatment begins so you know what to expect."]
          }
        ],
        highlights: {
          title: "What early orthodontic treatment addresses",
          imageUrl: what_makes_us_special,
          item: [
            {
              id: generateRandomId(),
              title: "Crossbite",
              summary: ["When upper teeth sit inside the lower teeth on one side, the jaw compensates by shifting. Left uncorrected during growth, a crossbite can cause permanent jaw asymmetry and uneven wear on teeth. Early treatment corrects the alignment before the jaw locks into a mismatched position."]
            },
            {
              id: generateRandomId(),
              title: "Underbite",
              summary: ["An underbite is much more manageable when caught early. While the jaw is still growing, we have tools to guide development into a better relationship between the upper and lower arches."]
            },
            {
              id: generateRandomId(),
              title: "Severe Crowding",
              summary: ["When there isn't room for adult teeth to erupt properly, early expansion can create space — sometimes preventing the need for extractions later. Dr. Mallard monitors crowding carefully and recommends intervention when it will make the biggest difference."]
            },
            {
              id: generateRandomId(),
              title: "Narrow Arch or Airway Concerns",
              summary: ["A narrow upper arch can restrict breathing, contribute to mouth breathing habits, and affect speech development. Early expansion addresses the arch while growth is still on our side."]
            },
            {
              id: generateRandomId(),
              title: "Habits Affecting Jaw Development",
              summary: ["Prolonged thumb-sucking, tongue thrusting, or pacifier use after age 3–4 can affect how the jaw and teeth develop. Early orthodontic intervention can address the structural effects of these habits and help retrain oral posture."]
            }
          ]
        },
        speciality: ["fluoride-treatments"]
      },
      {
        id: 'invisalign',
        imageUrl: smiling_boy,
        type: 'service-niche',
        title: "Invisalign",
        subtitle: "Straight teeth, no metal mouth",
        summary: {
          title: "Why families choose Invisalign for kids and teens",
          summary: [
            "If your child needs orthodontic treatment but metal braces just don’t feel like the right fit, you’re not alone. We offer Invisalign First in Smallville, designed for kids whose adult teeth are still coming in, as a comfortable, virtually invisible way to align growing smiles.", 
            "For kids and teens, the upside is huge: no food restrictions, easier brushing, no broken brackets, no embarrassing photos. For parents, treatment is more predictable, with fewer emergency visits and better hygiene throughout."
          ]
        },
        showcase: {
          title: "What Invisalign can and can’t do",
          imageUrl: mother_and_girl_with_brush,
          summary: [
            "Invisalign handles most common alignment issues well: crowding, spacing, and mild to moderate bite problems. For severe cases, traditional braces or a referral to an orthodontist might be the better option. We’ll tell you honestly which makes sense for your child after an exam."
          ]
        },
        faq: [
          {
            id: generateRandomId(),
            question: "How young can my child start Invisalign?",
            answer: ["Invisalign First is designed for kids as young as 6 or 7, once they have a mix of baby and adult teeth and can be relied on to keep the aligners in."]
          },
          {
            id: generateRandomId(),
            question: "How long does treatment take?",
            answer: ["Most kids and teens finish in 12–18 months, though shorter and longer cases happen. We'll give you a realistic timeline at the consultation."]
          },
          {
            id: generateRandomId(),
            question: "Will my child remember to wear them?",
            answer: ["Most do: Invisalign First and Teen aligners have wear indicators that help parents see at a glance. We also check progress at every appointment."]
          },
          {
            id: generateRandomId(),
            question: "Does insurance cover Invisalign?",
            answer: ["Many dental insurance plans with orthodontic coverage include Invisalign. We'll verify your benefits and explain any out-of-pocket costs before treatment starts."]
          },
          {
            id: generateRandomId(),
            question: "What if my child needs traditional braces instead?",
            answer: ["We'll let you know after the exam. If braces are the better fit, we'll refer you to a trusted Rabbit Foot orthodontist and stay involved in your child's overall care."]
          }
        ],
        highlights: {
          title: "When Invisalign First makes sense",
          imageUrl: what_makes_us_special,
          summary: "The American Association of Orthodontists recommends a first orthodontic evaluation by age 7, and for many kids, early intervention can correct bite issues before they become bigger problems. Invisalign First in Smallville was developed specifically for children who still have a mix of baby and adult teeth. It works particularly well for:",
          item: [
            {
              id: generateRandomId(),
              title: "Crowding and Spacing",
              summary: ["When new teeth don't have room to come in correctly, Invisalign First can create space and guide eruption."]
            },
            {
              id: generateRandomId(),
              title: "Bite Issues",
              summary: ["Crossbites, overbites, and underbites are far easier to correct while the jaw is still developing."]
            },
            {
              id: generateRandomId(),
              title: "Arch Width Concerns",
              summary: ["A narrow upper arch can affect breathing, speech, and tooth alignment. Invisalign First can expand the arch as your child grows."]
            },
            {
              id: generateRandomId(),
              title: "Habit Correction",
              summary: ["For kids who've had thumb-sucking or tongue-thrust habits, Invisalign can help retrain oral posture as it aligns teeth."]
            },
            {
              id: generateRandomId(),
              title: "How Invisalign works at Rabbit Foot",
              summary: ["We start with a digital scan, no goopy impressions, which kids appreciate. Dr. Mallard reviews the scan and designs a custom treatment plan. Your child gets a series of clear aligners, each one slightly different from the last, and switches to the next set every 1–2 weeks."]
            }
          ]
        },
        speciality: ["in-Office-sedation", "sealants"]
      },
    ],
    faq: [
      {
        id: generateRandomId(),
        question: "At what age should children receive orthodontic treatment?",
        answer: ["According to the American Association of Orthodontists, children should have their first orthodontic evaluation by the age of 7. This allows us to detect and treat any potential issues before they become more serious."]
      },
      {
        id: generateRandomId(),
        question: "Can my child play sports while wearing braces or Invisalign?",
        answer: ["Yes! However, they may need to wear a mouthguard to protect their teeth and braces or aligners."]
      },
      {
        id: generateRandomId(),
        question: "What dental issues can braces help with?",
        answer: ["Braces can be used to correct a range of dental issues, including crooked or crowded teeth, overbites, underbites, crossbites, and gaps between teeth."]
      },
      {
        id: generateRandomId(),
        question: "Will orthodontic treatment affect my child's speech or eating habits?",
        answer: ["It’s common for children to experience some temporary changes to their speech and eating habits during orthodontic treatment. However, these usually resolve within a few days or weeks."]
      },
      {
        id: generateRandomId(),
        question: "How long does orthodontic treatment usually take?",
        answer: ["The duration of orthodontic treatment varies according to the severity of the problem and the type of treatment. On average, orthodontic treatment takes between 12 and 36 months."]
      }
    ],
    highlights: {
      title: "How can we help your child?",
      imageUrl: what_makes_us_special,
      item: [
        {
          id: generateRandomId(),
          title: "Keep their smile healthy and bright"
        },
        {
          id: generateRandomId(),
          title: "Bring back their smile!"
        },
        {
          id: generateRandomId(),
          title: "Make eating and speaking easy"
        },
        {
          id: generateRandomId(),
          title: "Inclusive, special needs care"
        },
      ]
    },
    speciality: ["extractions", "fluoride-treatments", "in-Office-sedation", "restorations"]
  }
]

export type NavItem = {
  to: string;
  content: string;
  children?: {
    to: string;
    content: string;
  }[]
}

export type NavMenu = {
  to: string;
  content: string;
  children?: NavItem[]
}

export const navMenuArr: NavMenu[] = [
  { to: "about-us", content: "About Us" },
  { to: "our-doctors", content: "Our Doctors" },
  { to: "services", content: "Services", children: buildNavItems(servicesArray) },
  { to: "office-locations", content: "Office Locations" },
];

export type DashboardMenu = {
  to: string;
  content: string;
  icon: IconType;
}

export const dashboardMenuArr: DashboardMenu[] = [
  { to: ".", content: "Overview", icon: LuLayoutList  },
  { to: "profile", content: "Profile", icon: RiProfileLine  },
  { to: "appointments", content: "Appointments", icon: IoCalendarOutline },
  { to: "doctors", content: "Doctors", icon: FaUserDoctor },
  { to: "patients", content: "Patients", icon: FaUserInjured },
  { to: "/logout", content: "Logout", icon: IoLogOutOutline },
];

export type Customer = {
  id: string;
  imageUrl?: string;
  name: string;
  email: string;
  phone: number;
  address?: string;
  password: string;
  subscriber: boolean;
  gender?: 'male' | 'female',
  dob?: string;
  appointments?: BookingDataType[]
} & { readonly type: 'customer'}

export type BookingDataType = {
  ['appointment-id'] : string;
  ['appointment-date'] : string;
  ["appointment-slot"]?: string;
  ['customer-email'] : string;
  ['customer-name'] : string;
  ['customer-imageUrl']?: string;
  ["customer-gender"]?: 'male' | 'female';
  ['customer-phone']?: string;
  ['doctor-fee'] : string;
  ['doctor-id']: string;
  ['doctor-name'] : string;
  ['doctor-speciality'] : string;
  ['doctor-imageUrl']?: string;
  ['doctor-phone']?: string;
}

export type UpdateDataType = {
  ['appointment-id'] : string;
  ['appointment-date'] : string;
  ["appointment-slot"]: string;
}

export const customerArr : Customer[] = [
  {
    id: '9eed51a7-251d-4f76-a558-c6d97cfa680e',
    name: 'John Doe',
    gender: "female",
    email: 'john.doe@gmail.com',
    phone: 1234567890,
    password: '12345',
    subscriber: true,
    type: 'customer'
  },
  {
    id: 'e9d67299-be52-4600-bd3d-dcec1ed0ad55',
    name: 'Philip Kotler',
    gender: "male",
    dob: "Sep-11-1986",
    email: 'philip.kotler@gmail.com',
    phone: 1234567890,
    password: '12345',
    subscriber: false,
    type: 'customer'
  },
]


export type LoginDataType = {
  username: string;
  password: string;
}

export type SignUpDataType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  subscriber?: boolean;
} & { readonly type: 'customer' | 'doctor'; }

export type User = 'customer' | 'doctor';

export type Administrator = {
  id: string;
  imageUrl?: string;
  name: string;
  email: string;
  phone?: number;
  password: string;
  isVerified: boolean;
  doctors: Doctor[];
  customers: Customer[];
} & { readonly type: 'administrator'}

export const adminArr : Administrator[] = [
  {
    id: generateRandomId(),
    name: 'David Jones',
    email: 'david.jones@gmail.com',
    phone: 1234567890,
    password: '12345',
    isVerified: true,
    customers: customerArr,
    doctors: doctorArray,
    type: "administrator"
  }
]

export type Appointment = {
  "customer-id": string;
  "customer-name": string;
  "customer-email": string;
  "customer-imageUrl"?: string;
  "customer-dob"?: string;
  "customer-gender"?: 'male' | 'female';
  "customer-phone"?: string;
  "appointment-id": string;
  "appointment-date": string;
  "appointment-slot"?: string;
  "doctor-id": string;
  "doctor-name": string;
  "doctor-imageUrl"?: string;
  "doctor-speciality": Speciality;
  "doctor-fee": string;
  "doctor-phone"?: string;
  "appointment-status": "complete" | "pending";
  "payment-mode": "cash" | "online";
  "payment-status": "paid" | "unpaid";
}

  export type ProfileUpdateType = {
    name: string,
    imageUrl: string,
    phone: number,
    address: string,
    gender?: 'male' | 'female', // customers only
    dob?: string, // customers only
    subscriber?: boolean, // customers only
    details?: string[], // doctors only
    availability?: boolean, // doctors only
    speciality?: Speciality[], // doctors only
    experience?: number, // doctors only
    degree?: Degree[], // doctors only
    fee?: number, // doctors only
    type: 'doctor' | 'customer'
  }

  export type ProfileUpdateErrorType = {
    name: string;
    phone: string;
  }