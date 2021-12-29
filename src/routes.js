import React from "react";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const InventoryPage = React.lazy(() =>
  import("./pages/InventoryPage/InventoryPage")
);

const routes = [
  { path: "/", name: "HomePage", exact: true, component: HomePage },
  {
    path: "/inventory",
    name: "InventoryPage",
    exact: true,
    component: InventoryPage,
  },
];

export default routes;
