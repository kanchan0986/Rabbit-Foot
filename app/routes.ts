import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/root-layout.tsx", [
        index("routes/home.tsx"),
        route("about-us", "routes/about-us.tsx"),
        route("our-doctors", "routes/our-doctors.tsx"),
        route("services", "routes/services.tsx"),
        route("office-locations", "routes/office-locations.tsx"),
        route("login", "routes/login.tsx"),
    ])
] satisfies RouteConfig;
