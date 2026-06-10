import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | Home" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function Home() {
  return <div>Home</div>;
}
