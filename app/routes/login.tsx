import type { Route } from './+types/login';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | Login" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function Login({}: Route.ComponentProps) {
  return (
    <div>Login</div>
  )
}