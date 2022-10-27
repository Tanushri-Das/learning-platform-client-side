import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
    const error = useRouteError();
    return (
      <div className="error">
        <h1>Sorry 404 error!!!</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <h2>This route was not found</h2>
      </div>
    );
  };

export default Error