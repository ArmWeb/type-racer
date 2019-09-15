import React from "react";
import TypeRacer from "../typeRacer";
import History from "../history";
import ErrorBoundary from "../common/ErrorBoundary";

const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <TypeRacer />
      </ErrorBoundary>
      <ErrorBoundary>
        <History />
      </ErrorBoundary>
    </>
  );
};

export default Home;
