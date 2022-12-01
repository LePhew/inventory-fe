import React from "react";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const InventoryPage = React.lazy(() =>
  import("./pages/InventoryPage/InventoryPage")
);
const CategoryPage = React.lazy(() =>
  import("./pages/CategoryPage/CategoryPage")
);

const routes = [
  { path: "/", name: "HomePage", exact: true, component: HomePage },
  {
    path: "/inventory",
    name: "InventoryPage",
    exact: true,
    component: InventoryPage,
  },
  {
    path: "/categories",
    name: "CategoryPage",
    exact: true,
    component: CategoryPage,
  },
];

export default routes;
