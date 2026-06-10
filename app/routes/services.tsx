import type { Route } from './+types/services';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | Services" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function Services({}: Route.ComponentProps) {
  return (
    <div>Services</div>
  )
}