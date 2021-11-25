import React from "react";

export default function SiteFooter(props: { className: string }) {
  return (
    <footer className={"py-3 bg-dark text-light " + props.className}>
      <div className="container d-flex">
        <span>Copyrights</span>
        <a href="" className="ms-auto link-secondary">
          Developed by Olzhas Kaliyev
        </a>
      </div>
    </footer>
  );
}
