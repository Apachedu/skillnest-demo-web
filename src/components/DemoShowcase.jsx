import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DemoShowcase() {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Demo Showcase</h1>
      <p>You are viewing the demo with ID: <strong>{id}</strong></p>
      <Link to="/demo" style={{ color: "blue" }}>← Back to Demo List</Link>
    </div>
  );
}
