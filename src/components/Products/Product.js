const Product = ({ item }) => {
  return (
    <>
      <tr>
        <td>{item.code}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.manufacturer}</td>
      </tr>
    </>
  );
};
export default Product;
