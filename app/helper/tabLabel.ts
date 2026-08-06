import type { Location } from "react-router";
import type { Doctor, Service, ServiceNiche } from "~/data/static-data";

type TabLabelProps = {
  data: Location & {readonly type: "location"} | Doctor | Service | ServiceNiche
}

// Converts the current URL path segment or the data.name into a capitalized tab label to be used in "meta" function
export const tabLabel = ({data}:TabLabelProps) => { 

  let capitalizedTabLabel;

  // If data type is location and the path is a root path "/", return "Home"
  if (data.type === 'location' && data.pathname === "/") {
    capitalizedTabLabel = "Home";
  }

  // If data type is location and the path is not a root path "/"
  if(data.type === 'location' && data.pathname !== "/") {
    // Splits by "/" and grabs the last non-empty path segment
    const pathSegmentArr = data.pathname.split("/").filter(Boolean);
    const currentPathSegment = pathSegmentArr[pathSegmentArr.length - 1];
    // regex to replaces the "-" with a whiteSpace
    const replaceDashWithSpace = currentPathSegment.replace(/-/g, ' ')
    // regex to find the first letter of each word and turn it to uppercase+
    capitalizedTabLabel = replaceDashWithSpace.replace(/\b\w/g, char => char.toUpperCase())
  }

  // If data type is doctor
  if(data.type === 'doctor'){
    // regex to find the first letter of each word and turn it to uppercase
    capitalizedTabLabel = data.name.replace(/\b\w/g, char => char.toUpperCase())
  }

  // If data type is service or service niche
  if(data.type === 'service' || data.type === "service-niche"){
    // regex to find the first letter of each word and turn it to uppercase
    capitalizedTabLabel = data.title.replace(/\b\w/g, char => char.toUpperCase())
  }

  return capitalizedTabLabel
 }