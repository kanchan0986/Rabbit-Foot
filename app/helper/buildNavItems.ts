import type { Doctor, NavMenu, Service } from "~/data/static-data";

// Utility function to recursively build nav items
export default function buildNavItems(itemArray: Service[] | Doctor[]): NavMenu[] {
  return itemArray.map(item => {
    const doctor = item.type === 'doctor';
    const service = item.type === 'service';
    // create a constant with a similar structure as NavMenu
    const navItem: NavMenu = {
      to: `${item.type}s/${item.id}`, // whatever the type is just add 's' at it's end then '/' and its 'id'
      content: doctor ? item.name : item.title, // if the type is doctor then plot their name else plot service title
    };

    // If the item type is service and it has nested niches, map them too by adding an optional "children" prop to the "navItem"
    if (service && item.serviceNiche && item.serviceNiche.length > 0) {
      navItem.children = item.serviceNiche.map(niche => ({
        to: `${item.type}s/${item.id}/${niche.id}`,
        content: niche.title,
      }));
    }

    return navItem;
  });
}