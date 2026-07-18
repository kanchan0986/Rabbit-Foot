import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout("layouts/root-layout.tsx", [
        index("routes/home.tsx"),
        route("about-us", "routes/about-us.tsx"),
        ...prefix("our-doctors", [
            index("routes/our-doctors.tsx"),
            route(":doctor-id", "routes/doctor-details.tsx"),
        ]),
        route("services", "routes/services.tsx"),
        route("office-locations", "routes/office-locations.tsx"),
        route("login", "routes/login.tsx"),
    ])
] satisfies RouteConfig;
