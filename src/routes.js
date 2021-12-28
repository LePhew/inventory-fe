import React from "react";

const HomePage = React.lazy(() => import("./views/HomePage/HomePage"));
const ProductsPage = React.lazy(() =>
  import("./views/ProductsPage/ProductsPage")
);

const routes = [
  { path: "/", name: "HomePage", exact: true, component: HomePage },
  {
    path: "/products",
    name: "ProductsPage",
    exact: true,
    component: ProductsPage,
  },
];

export default routes;
