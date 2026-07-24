import { tabLabel } from '~/helper/tabLabel';
import type { Route } from './+types/services';

export function meta({location}: Route.MetaArgs) {
  return [
    { title: `Rabbit Foot | ${tabLabel({ data: {...location, type: 'location'} })}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function Services({}: Route.ComponentProps) {
  return (
    <div>Services</div>
  )
}