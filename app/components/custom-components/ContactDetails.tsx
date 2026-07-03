import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import Wrapper from "./Wrapper";
import SlideInLeft from "./animations/SlideInLeft";
import SlideInUp from "./animations/SlideInUp";

type ContactDetailsProps = {}

const contactDetails = (
    // contact details box
    <div className="flex flex-col gap-y-4 p-4">
        {/* title text */}
        <h3 className="font-flavours text-3xl lg:text-4xl text-center capitalize">Contact
            <div className="inline">
            <span className="text-rf-primary"> D</span><span className="text-rf-secondary">e</span><span className="text-rf-primary-200">t</span><span className="text-rf-secondary">a</span><span className="text-rf-primary-200">i</span><span className="text-rf-primary">l</span><span className="text-rf-secondary">s</span>
            </div>
        </h3>
        {/* contact description box */}
        <address className="gap-y-4 flex flex-col not-italic xs:gap-y-2">
            {/* location info */}
            <a
                href="https://maps.app.goo.gl/8XddWV8bLsdrjVeRA"
                target="_blank"
                className="group"
            >
                <div className="flex flex-col items-center xs:flex-row xs:items-start gap-x-2">
                <FaLocationDot className="size-5 fill-rf-secondary group-active:fill-rf-primary-100 group-hover:fill-rf-primary" />
                <p className="flex flex-col items-center xs:flex-row xs:items-start xs:gap-x-2">
                    <strong className="text-rf-secondary group-active:text-rf-primary-100 group-hover:text-rf-primary">
                    Address:{" "}
                    </strong>
                    <span className="text-center xs:text-start">
                    602 S Harbor Blvd, Santa Ana, CA 92704
                    </span>
                </p>
                </div>
            </a>
            {/* phone info */}
            <a href="tel:+18001234567" className="group">
                <div className="flex flex-col items-center xs:flex-row xs:items-start gap-x-2">
                <IoCall className="size-5 fill-rf-secondary group-active:fill-rf-primary-100 group-hover:fill-rf-primary" />
                <p className="flex flex-col items-center xs:flex-row xs:items-start xs:gap-x-2">
                    <strong className="text-rf-secondary group-active:text-rf-primary-100 group-hover:text-rf-primary">
                    Call Us:{" "}
                    </strong>
                    <span>+18001234567</span>
                </p>
                </div>
            </a>
            {/* email info */}
            <a href="mailto:dev.kanchan.sanyal@gmail.com" className="group">
                <div className="flex flex-col items-center xs:flex-row xs:items-start gap-x-2">
                <IoIosMail className="size-5 fill-rf-secondary group-active:fill-rf-primary-100 group-hover:fill-rf-primary" />
                <p className="flex flex-col items-center xs:flex-row xs:items-start xs:gap-x-2">
                    <strong className="text-rf-secondary group-active:text-rf-primary-100 group-hover:text-rf-primary">
                    Email:{" "}
                    </strong>
                    <span className="text-center xs:text-start">
                    dev.kanchan.sanyal@gmail.com
                    </span>
                </p>
                </div>
            </a>
        </address>
    </div>
)

export default function ContactDetails({}: ContactDetailsProps) {
  const isTablet = useMediaQuery("(min-width: 640px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  return (
    <Wrapper className="py-0">
        {/* default mobile view */}
        {!(isTablet || isLaptop) && 
            <div className="w-full pt-4 flex flex-col gap-y-6 bg-rf-white-100 rounded-2xl shadow-rf-direct-100 overflow-hidden">
                {contactDetails}
                {/* embedded map */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3205.4894248134146!2d-117.92330972435609!3d33.73969397327624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ0JzIyLjkiTiAxMTfCsDU1JzE0LjciVw!5e1!3m2!1sen!2sin!4v1782938668138!5m2!1sen!2sin" className="w-full h-75" loading="lazy" ></iframe>
            </div>
        }
        {/* tablet view */}
        {(isTablet && !isLaptop) && 
            <div className="relative w-full rounded-2xl overflow-hidden">
                <SlideInUp className="w-2/3 flex flex-col gap-y-6 bg-rf-white-100 rounded-2xl shadow-rf-direct-800 overflow-hidden absolute bottom-3 left-1/2 -translate-x-1/2 2xmd:items-center">
                {contactDetails}
                </SlideInUp>
                {/* embedded map */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3205.4894285501737!2d-117.9232882243562!3d33.739693873276295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ0JzIyLjkiTiAxMTfCsDU1JzE0LjYiVw!5e1!3m2!1sen!2sin!4v1782938363530!5m2!1sen!2sin" className="w-full h-113.5" loading="lazy" ></iframe>
            </div>
        }
        {/* laptop view */}
        {isLaptop && 
            <div className="relative w-full rounded-2xl overflow-hidden">
                <SlideInLeft className="w-2/5 flex flex-col items-center gap-y-6 bg-rf-white-100 rounded-2xl shadow-rf-direct-100 hover:shadow-rf-direct-800 overflow-hidden absolute bottom-20 left-3">
                {contactDetails}
                </SlideInLeft>
                {/* embedded map */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3205.4894285501737!2d-117.9232882243562!3d33.739693873276295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ0JzIyLjkiTiAxMTfCsDU1JzE0LjYiVw!5e1!3m2!1sen!2sin!4v1782938363530!5m2!1sen!2sin" className="w-full h-150" loading="lazy"></iframe>
            </div>
        }
    </Wrapper>
  )
}