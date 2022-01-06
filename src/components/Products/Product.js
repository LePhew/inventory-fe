const Product = ({ item, onProductClick }) => {
  return (
    <>
      <tr className="is-clickable" onClick={() => onProductClick(item)}>
        <td>{item.sku}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.manufacturer}</td>
      </tr>
    </>
  );
};
export default Product;
