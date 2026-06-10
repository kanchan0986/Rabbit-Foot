import type { Route } from './+types/our-doctors';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | Our Doctors" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function OurDoctors({}: Route.ComponentProps) {
  return (
    <div>OurDoctors</div>
  )
}