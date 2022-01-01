import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>
        Welcome to your own <a href="http://localhost:8080/graphiql">GraphQL</a>{" "}
        web front end!
      </h1>
      <h2>You can start editing source code and see results immediately</h2>
    </>
  );
};

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </div>
);

export default App;
