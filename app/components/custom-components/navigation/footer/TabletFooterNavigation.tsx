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

export default function TabletFooterNavigation({}: Props) {
  const updatedNavMenuArr = [{ to: ".", content: "Home" }, ...navMenuArr];
  return (
    <Wrapper className="py-8 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-y-4">
      <div className="w-full flex flex-col gap-y-4 md:gap-y-8">
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
        <div className="flex flex-col gap-y-4 md:gap-y-8">
          {/* Navigation section */}
          <ul className="w-full flex flex-col gap-y-3">
            <h3 className="font-flavours text-[1.3rem] text-rf-primary text-center">
              Navigation
            </h3>
            <nav className="flex justify-evenly">
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
          <address className="w-full gap-y-4 items-center flex flex-col not-italic">
            <h3 className="font-flavours text-[1.3rem] text-rf-primary text-center">
              Contact Us
            </h3>
            <div className="w-full flex flex-col gap-y-4 md:flex-row justify-evenly gap-x-4">
              <a
                href="https://maps.app.goo.gl/8XddWV8bLsdrjVeRA"
                target="_blank"
                className="group md:w-5/12"
              >
                <div className="flex justify-center items-center gap-x-2 md:flex-col md:gap-y-1">
                  <FaLocationDot className="size-5 fill-rf-secondary group-active:fill-rf-primary-100" />
                  <p className="flex justify-center gap-x-2 md:flex-col md:items-center md:gap-y-1">
                    <strong className="text-rf-secondary group-active:text-rf-primary-100">
                      Address:{" "}
                    </strong>
                    <span className="text-center">
                      602 S Harbor Blvd, Santa Ana, CA 92704
                    </span>
                  </p>
                </div>
              </a>
              <a href="tel:+18001234567" className="group md:w-2/12">
                <div className="flex justify-center items-center gap-x-2 md:flex-col md:gap-y-1">
                  <IoCall className="size-5 fill-rf-secondary group-active:fill-rf-primary-100" />
                  <p className="flex justify-center gap-x-2 md:flex-col md:items-center md:gap-y-1">
                    <strong className="text-rf-secondary group-active:text-rf-primary-100">
                      Call Us:{" "}
                    </strong>
                    <span>+18001234567</span>
                  </p>
                </div>
              </a>
              <a
                href="mailto:dev.kanchan.sanyal@gmail.com"
                className="group md:w-5/12"
              >
                <div className="flex justify-center items-center gap-x-2 md:flex-col md:gap-y-1">
                  <IoIosMail className="size-5 fill-rf-secondary group-active:fill-rf-primary-100" />
                  <p className="flex justify-center gap-x-2 md:flex-col md:items-center md:gap-y-1">
                    <strong className="text-rf-secondary group-active:text-rf-primary-100">
                      Email:{" "}
                    </strong>
                    <span className="text-center">
                      dev.kanchan.sanyal@gmail.com
                    </span>
                  </p>
                </div>
              </a>
            </div>
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
