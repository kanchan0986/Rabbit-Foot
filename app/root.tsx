import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url"; // added "?url" at the end of the import, to solve the css flash out
import Loader from "./components/custom-components/Loader";
import CustomError from "./components/custom-components/CustomError";
import Wrapper from "./components/custom-components/Wrapper";
import TopNavigation from "./components/custom-components/navigation/header/TopNavigation";
import NavbarLayout from "./layouts/navbar-layout";
import FooterLayout from "./layouts/footer-layout";
import { navMenuArr, type Administrator, type Customer, type Doctor } from "./data/static-data";
import spacer from "~/assets/spacer-vector-footer.png";
import { useEffect, useState } from "react";

const cleanStylesheet = stylesheet.split("?")[0]; // used to solve the hydration error

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: cleanStylesheet }, // stylesheet added at the head, to solve the css flash out issue
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <Loader/>;
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  const navMenuData = navMenuArr;

  const [userData, setUserData] = useState<Customer | Doctor | Administrator>();

  useEffect(() => {
    const userDataStringified = sessionStorage.getItem("userData");
    const userDataParsed: Customer | Doctor | Administrator = JSON.parse(userDataStringified || "null");
    setUserData(userDataParsed);
  }, [])

  return (
    <>
      {/* Top bar navigation always visible */}
      <Wrapper className="bg-rf-primary-100 py-2">
        <TopNavigation />
      </Wrapper>

      {/* Responsive navigation menu (mobile/tablet/laptop) */}
      <NavbarLayout navMenuData={navMenuData} userData={userData} />

      {/* Error message, details and stack to be rendered below */}
      <CustomError>
        <div className="container mx-auto">
          <span>{message}</span>
          <p>{details}</p>
          {stack && (
            <pre className="w-full overflow-x-auto">
              <code>{stack}</code>
            </pre>
          )}
        </div>
      </CustomError>

      {/* Decorated curvy spacer before the footer */}
      <img src={spacer} alt="spacer" className="w-full object-cover object-center -mt-18 relative z-1 drop-shadow-[0_-4px_2px_rgba(0,0,0,0.12)]" />

      {/* Responsive footer navigation menu (mobile/tablet/laptop) */}
      <FooterLayout navMenuData={navMenuData} />

    </>
  );
}
