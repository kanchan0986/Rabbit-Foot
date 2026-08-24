import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/profile";


export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function Profile({}: Route.ComponentProps) {
  return (
    <aside>Profile</aside>
  )
}