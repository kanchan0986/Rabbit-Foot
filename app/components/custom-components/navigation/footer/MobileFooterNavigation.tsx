import Wrapper from "../../Wrapper";
import Logo from "../../vectors/Logo";
import { Form, Link, NavLink } from "react-router";
import { navMenuArr } from "../header/MobileNavigation";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "~/components/ui/button";

type Props = {};

export default function MobileFooterNavigation({}: Props) {
  const updatedNavMenuArr = [{ to: ".", content: "Home" }, ...navMenuArr];
  return (
    <Wrapper className="py-8 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-y-4">
      <div className="w-full flex flex-col gap-y-4">
        {/* logo section*/}
        <section className="w-fit mx-auto flex flex-col items-center">
          <Link to="." className="flex flex-col items-center group">
            <Logo className="size-20 fill-rf-secondary group-active:fill-rf-primary-100" />
            <span className="font-flavours text-[2rem] text-rf-secondary group-active:text-rf-primary-100">
              Rabbit Foot
            </span>
          </Link>
          <div className="flex gap-x-4 items-center">
            <Link to="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare className="size-6 fill-rf-secondary active:fill-rf-primary-100" />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare className="size-6 fill-rf-secondary active:fill-rf-primary-100" />
            </Link>
            <Link to="https://linkedin.com/" target="_blank">
              <FaLinkedin className="size-6 fill-rf-secondary active:fill-rf-primary-100" />
            </Link>
          </div>
        </section>
        <div className="flex flex-col gap-y-4">
          {/* Navigation section */}
          <ul className="flex flex-col items-center gap-y-3">
            <h3 className="font-flavours text-[1.3rem] text-rf-primary text-center">
              Navigation
            </h3>
            <nav className="grid grid-cols-1 gap-y-2 xs:grid-cols-2 justify-items-center ">
              {updatedNavMenuArr.map((menuItem) => {
                return (
                  <li key={menuItem.to}>
                    <NavLink
                      to={menuItem.to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-rf-primary-100"
                          : "active:text-rf-primary-100"
                      }
                    >
                      {menuItem.content}
                    </NavLink>
                  </li>
                );
              })}
            </nav>
          </ul>
          {/* Contact us section */}
          <address className="w-full gap-y-4 items-center flex flex-col not-italic xs:gap-y-2">
            <h3 className="font-flavours text-[1.3rem] text-rf-primary text-center">
              Contact Us
            </h3>
            <a
              href="https://maps.app.goo.gl/8XddWV8bLsdrjVeRA"
              target="_blank"
              className="group"
            >
              <div className="flex flex-col items-center xs:flex-row xs:items-start gap-x-2">
                <FaLocationDot className="size-5 fill-rf-secondary group-active:fill-rf-primary-100" />
                <p className="flex flex-col items-center xs:flex-row xs:items-start xs:gap-x-2">
                  <strong className="text-rf-secondary group-active:text-rf-primary-100">
                    Address:{" "}
                  </strong>
                  <span className="text-center xs:text-start">
                    602 S Harbor Blvd, Santa Ana, CA 92704
                  </span>
                </p>
              </div>
            </a>
            <a href="tel:+18001234567" className="group">
              <div className="flex flex-col items-center xs:flex-row xs:items-start gap-x-2">
                <IoCall className="size-5 fill-rf-secondary group-active:fill-rf-primary-100" />
                <p className="flex flex-col items-center xs:flex-row xs:items-start xs:gap-x-2">
                  <strong className="text-rf-secondary group-active:text-rf-primary-100">
                    Call Us:{" "}
                  </strong>
                  <span>+18001234567</span>
                </p>
              </div>
            </a>
            <a href="mailto:dev.kanchan.sanyal@gmail.com" className="group">
              <div className="flex flex-col items-center xs:flex-row xs:items-start gap-x-2">
                <IoIosMail className="size-5 fill-rf-secondary group-active:fill-rf-primary-100" />
                <p className="flex flex-col items-center xs:flex-row xs:items-start xs:gap-x-2">
                  <strong className="text-rf-secondary group-active:text-rf-primary-100">
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
      </div>
      {/* Newsletter section */}
      <section className="flex flex-col items-center gap-y-2">
        <h3 className="font-flavours text-[1.3rem] text-rf-primary">
          Newsletter
        </h3>
        <p className="text-center whitespace-pre-wrap">
          Get notified with our latest news and promotions directly at your
          email.
        </p>
        <Form className="w-full flex flex-col items-center gap-y-3">
          <div className="flex items-center justify-between py-1 px-3 outline-1 gap-x-1 outline-rf-primary rounded-full">
            <input
              type="email"
              name="newsletter-email"
              id="newsletter-email"
              className="outline-none"
            />
            <label htmlFor="newsletter-email">
              <TfiEmail className="fill-rf-primary cursor-pointer" />
            </label>
          </div>
          <Button
            variant={"default"}
            size={"icon-lg"}
            className="w-fit rounded-none rounded-tr-xl rounded-bl-xl px-6"
          >
            <IoIosSend />
            Submit
          </Button>
        </Form>
      </section>
    </Wrapper>
  );
}
