import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>GlennPacker.net</h1>
    <p>React, Redux and React Router for ...</p>
    <Link to="clients" className="btn btn-primary btn-lg">
      Clients
    </Link>
  </div>
);

export default HomePage;
