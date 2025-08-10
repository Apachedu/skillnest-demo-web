import React from "react";
import { Link } from "react-router-dom";

export default function DemoLanding() {
  return (
    <div>
      <h1>Welcome to the Demo</h1>
      <Link to="/demo/1">Go to Demo 1</Link>
    </div>
  );
}
