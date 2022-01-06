import products from "../../products";
import Product from "./Product";
const Products = ({ onProductClick }) => {
  return (
    <>
      {products.map((item, idx) => {
        return (
          <Product key={idx} item={item} onProductClick={onProductClick} />
        );
      })}
    </>
  );
};
export default Products;
