import React from "react";
import logo from "./logo.png";
import "./styles.scss";

const App: React.FunctionComponent = () => {
  return (
    <>
      <h1>Hello word!</h1>
      <img src={logo} />
      <p>Environment: {process.env.NODE_ENV}</p>
    </>
  );
};

const AppProviders: React.FunctionComponent = () => {
  return <App />;
};

export default AppProviders;
