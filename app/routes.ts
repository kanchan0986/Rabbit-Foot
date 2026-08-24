import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout("layouts/root-layout.tsx", [
        index("routes/home.tsx"),
        route("about-us", "routes/about-us.tsx"),
        ...prefix("our-doctors", [
            index("routes/our-doctors.tsx"),
            route(":doctor-id", "routes/doctor-details.tsx"),
        ]),
        ...prefix("services", [
            index("routes/services.tsx"),
            ...prefix(":service-id/", [
                index("routes/service-details.tsx"),
                route(":sub-service-id", "routes/sub-service-details.tsx")
            ]),
        ]),
        route("office-locations", "routes/office-locations.tsx"),
        route("login", "routes/login.tsx"),
        route("logout", "routes/logout.tsx"),
        layout("layouts/dashboard-layout.tsx", [
            route("profile", "routes/profile.tsx"),
        ]),
        route("thank-you", "routes/thank-you.tsx"),
    ])
] satisfies RouteConfig;
