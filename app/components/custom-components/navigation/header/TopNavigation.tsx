import { useMediaQuery } from "~/hooks/useMediaQuery";
import { Button } from "~/components/ui/button";

type TopNavigationProps = {};

export default function TopNavigation({}: TopNavigationProps) {
  const isTablet = useMediaQuery("(min-width: 567px)");
  return (
    <div
      className={`flex flex-col justify-center items-center gap-x-4 text-center gap-y-2 ${isTablet ? "flex-row" : ""}`}
    >
      <span className="text-sm">
        Get seen today! Same day appointments available.
      </span>
      <Button
        variant="secondary"
        className="rounded-full bg-white text-rf-primary-100 uppercase text-xs h-6 px-4 py-1 cursor-pointer hover:shadow"
      >
        Book Now
      </Button>
    </div>
  );
}
