import type { Gallery, Testimonial } from "~/components/custom-components/carousels/CarouselItem";
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
import alexa_thomas from '~/assets/alexa-thomas.jpg';
import stella_davidson from '~/assets/stella_davidson.jpg';
import taylor_adams from '~/assets/taylor_adams.jpg';
import maria_jackson from '~/assets/maria_jackson.jpg';
import chung_lee from '~/assets/chung_lee.jpg';
import type { IconType } from "react-icons/lib";
import { generateRandomId } from "~/helper/generateRandomId";
import { FaClipboardCheck } from "react-icons/fa6";

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

export type Schedule = {
  date: string; 
  slot: Slot[]
}

export type Doctor = {
  id: string;
  imageUrl: string;
  name: string;
  email: string;
  address: string;
  experience: number;
  speciality: Speciality[];
  schedule: Schedule[];
  degree: Degree[];
  fee: number;
  details: string[];
  availability: boolean;
} & { readonly type: 'doctor'}

export const specialityArray : Speciality[] = [
  "all", "crowns", "extractions", "fluoride-treatments", "hospital-dentistry", "in-Office-sedation", "mouthguards", "nerve-treatments", "nitrous-oxide-analgesia", "preventive-care", "restorations", "sealants", "space-maintainers", "whitening"
]

export const doctorArray : Doctor[] = [
  {
    id: generateRandomId(),
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
    type: "doctor"
  },
  {
    id: generateRandomId(),
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
    type: "doctor"
  },
  {
    id: generateRandomId(),
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
    type: "doctor"
  },
  {
    id: generateRandomId(),
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
    type: "doctor"
  },
  {
    id: generateRandomId(),
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
}

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
    summary: string[];
    imageUrl?: string;
  }[]
}

export type Service = {
  id: string;
  imageUrl: string;
  icon?: IconType;
  title: string;
  subtitle?: string;
  overview?: Description;
  showcase?: Showcase;
  serviceNiche?: ServiceNiche[];
  expectation?: Expectation;
  faq?: Faq[];
  highlights?: Highlights;
} & { readonly type: 'service'}


export const servicesArray: Service[] = [
  { 
    id: generateRandomId(),
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
        "Between juggling after-school pickups, homework, and soccer practice, the last thing you need is one more chore. Our office sits just steps away from Farragut Intermediate, Middle, and High School—so your child can pop in for a quick check-up or same-day appointment without turning your day upside down."
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
    serviceNiche: [
      {
        id: generateRandomId(),
        imageUrl: girl_with_brush_pic_1,
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
        }
      },
      {
        id: generateRandomId(),
        imageUrl: girl_with_brush_pic_2,
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
        }
      },
      {
        id: generateRandomId(),
        imageUrl: girl_with_brush_pic_3,
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
        }
      },
    ]
  },
  { 
    id: generateRandomId(),
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
        "Between juggling after-school pickups, homework, and soccer practice, the last thing you need is one more chore. Our office sits just steps away from Farragut Intermediate, Middle, and High School—so your child can pop in for a quick check-up or same-day appointment without turning your day upside down."
      ]
    },
    serviceNiche: [],
  },
  { 
    id: generateRandomId(),
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
      imageUrl: smilingGirlWithJacket,
      summary: [
        "Every child is unique, and we love that! Whether your child has a tongue tie or lip tie, Dr. Mallard and our friendly team take the time to understand what makes them them and figure out how we can help! Our goal? To help your kids’ mouths move better, feel better, and smile bigger."
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
      title: "sldkfjls",
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
    }
  },
  { 
    id: generateRandomId(),
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
      imageUrl: smilingSisters,
      summary: [
        "Every child is unique, and we’re here to make sure they feel safe and calm. As your Rabbit Foot pediatric sedation dentist, Dr. Mallard and our team offer sedation options to help kids — including those with special needs — have smooth, stress-free visits. We offer both hospital and in-office sedation to ensure we can meet every child’s needs."
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
      imageUrl: smilingSisters,
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
    }
  }
]