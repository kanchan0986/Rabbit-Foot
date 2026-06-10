import type { Route } from './+types/about-us';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | About Us" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function AboutUs({}: Route.ComponentProps) {
  return (
    <div>AboutUs</div>
  )
}