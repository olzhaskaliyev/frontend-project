import React from "react";
import { Link } from "react-router-dom";

export default function HomeBanner() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <img src={require("/src/assets/logo.svg")} height="320" alt="" />
        <h1 className="display-2 mb-4">Hello, React!</h1>
        <p className="lead mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          consequatur delectus dolorum ipsam necessitatibus pariatur quam quidem
          similique. Architecto consequatur itaque mollitia nam nisi officiis
          omnis quidem unde vitae voluptatem?
        </p>
        <Link to="details" className="btn btn-lg btn-primary">
          Details
        </Link>
      </div>
    </section>
  );
}
