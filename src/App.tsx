import React from "react";
import { useRoutes } from "react-router";
import { ComponentA, ComponentB } from "components";

const App: React.FC = () => {
  const routes = useRoutes([
    { path: "/", element: <ComponentA /> },
    { path: "/componentb", element: <ComponentB /> },
  ]);
  return routes;
};

export default App;
