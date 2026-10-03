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
        route("sign-up", "routes/sign-up.tsx"),
        route("dashboard", "layouts/dashboard-layout.tsx", [
            index("routes/dashboard.tsx"),
            ...prefix("profile", [
                index("routes/profile.tsx"),
                route("edit-profile", "routes/edit-profile.tsx"),
                route("change-password", "routes/change-password.tsx"),
            ]),
            ...prefix("appointments", [
                index("routes/appointments.tsx"),
                ...prefix(":appointment-id", [
                    index("routes/update-appointments.tsx"),
                    route("payments", "routes/payments.tsx"),
                ]),
            ]),
        ]),
        route("thank-you", "routes/thank-you.tsx"),
        route("under-review", "routes/under-review.tsx"),
    ])
] satisfies RouteConfig;
