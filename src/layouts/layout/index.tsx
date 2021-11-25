import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal;
}) {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <SiteHeader />
      <div>{props.children}</div>
      <SiteFooter className="mt-auto" />
    </div>
  );
}
