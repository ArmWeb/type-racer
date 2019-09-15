import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";
import routes from "./routes";
import ErrorBoundary from "./common/ErrorBoundary";

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Provider store={Store}>{routes}</Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
