import products from "../../products";
import Product from "./Product";
const Products = () => {
  return (
    <>
      {products.map((item, idx) => {
        return <Product key={idx} item={item} />;
      })}
    </>
  );
};
export default Products;
