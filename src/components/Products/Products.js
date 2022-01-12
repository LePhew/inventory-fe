import React, { useState, useEffect } from "react";
import products from "../../products";
import Product from "./Product";
const Products = ({ onProductClick, toFilter }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    let filtered = products.filter((item) => item.id !== toFilter);
    setProductList(filtered);
  }, [toFilter]);

  return (
    <>
      {productList.map((item, idx) => {
        return (
          <Product key={idx} item={item} onProductClick={onProductClick} />
        );
      })}
    </>
  );
};
export default Products;
