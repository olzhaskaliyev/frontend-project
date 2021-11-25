import React from "react";
import Layout from "../layouts/layout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <div className="container py-5 text-center">
        <h1 className="display-1 mb-4">404</h1>
        <p className="lead mb-4">Not found</p>
        <Link to="/" className="btn btn-lg btn-primary">
          Go home
        </Link>
      </div>
    </Layout>
  );
}
