import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Goodstar Demolition: Oklahoma's Demolition Expert",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Fast and Reliable Commercial Demolition For Oklahoma Call (405) 362-7815 today for help on your next project.",
  image: "https://www.goodstardemolition.com/images/team.png",
  "og:url": "https://www.goodstardemolition.com",
  "og:type": "website",
  "og:title": "Goodstar Demolition",
  "og:description":
    "Fast and Reliable Commercial Demolition For Oklahoma Call (405) 362-7815 today for help on your next project.",
  "og:image": "https://www.goodstardemolition.com/images/team.png",
  "twitter:card": "summary_large_item",
  "twitter:title": "Goodstar Demolition",
  "twitter:description":
    "Fast and Reliable Commercial Demolition For Oklahoma Call (405) 362-7815 today for help on your next project.",
  "twitter:image": "https://www.goodstardemolition.com/images/team.png",
});

import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap",
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
