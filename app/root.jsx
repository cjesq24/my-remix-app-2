import React from "react";
import { LiveReload, Outlet } from "@remix-run/react";

export const meta = {
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
};


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <title>Remix APP MAIN</title>
      </head>
      <body>
        ROOT APP = /app/root.jsx
        <Outlet/>
        <LiveReload />
      </body>
    </html>
  );
}
