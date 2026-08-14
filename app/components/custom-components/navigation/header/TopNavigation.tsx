import { useMediaQuery } from "~/hooks/useMediaQuery";
import { Button } from "~/components/ui/button";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";

type TopNavigationProps = {};

export default function TopNavigation({}: TopNavigationProps) {
  const isTablet = useMediaQuery("(min-width: 567px)");
  
  const pathname = useLocation().pathname;
  const [bookAppointmentLink, setBookAppointmenLink] = useState('./#book-appointment')
  // if present, scroll to book appointment section of the page otherwise got to the same section of the homepage 
  useEffect(() => {
    const element = document.getElementById('book-appointment');
    if(element){
      setBookAppointmenLink(`${pathname}/#book-appointment`)
    }else{
      setBookAppointmenLink('./#book-appointment')
    }
  }, [pathname])

  return (
    <div
      className={`flex flex-col justify-center items-center gap-x-4 text-center gap-y-2 ${isTablet ? "flex-row" : ""}`}
    >
      <span className="text-sm">
        Get seen today! Same day appointments available.
      </span>
      <Link to={bookAppointmentLink}>
        <Button
          variant="secondary"
          className="rounded-full bg-white text-rf-primary-100 uppercase text-xs h-6 px-4 py-1 cursor-pointer hover:shadow"
        >
          Book Now
        </Button>
      </Link>
    </div>
  );
}
