const ProductDetailForm = ({ product, productRemoveHandle }) => {
  return (
    <>
      <form>
        <div>
          <div className="columns">
            <div className="field column is-6">
              <label className="label">Product Name</label>
              <div className="control">
                <input
                  className="input"
                  readOnly
                  defaultValue={product.name}
                  type="text"
                />
              </div>
            </div>
            <div className="field field column is-6">
              <label className="label">Product Sku</label>
              <div className="control">
                <input
                  className="input"
                  readOnly
                  defaultValue={product.sku}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="field column is-12">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="input"
                  readOnly
                  defaultValue={product.description}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="field column is-6">
              <label className="label">Category</label>
              <div className="control">
                <input
                  className="input"
                  readOnly
                  defaultValue={product.category}
                  type="text"
                />
              </div>
            </div>
            <div className="field column is-6">
              <label className="label">Manufacturer</label>
              <div className="control">
                <input
                  className="input"
                  readOnly
                  defaultValue={product.manufacturer}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="field column is-6">
              <label className="label">Selling Price</label>
              <div className="control">
                <input
                  className="input"
                  readOnly
                  defaultValue={product.selling_price}
                  type="text"
                />
              </div>
            </div>
            <div className="field field column is-6">
              <label className="label">Cost</label>
              <div className="control">
                <input
                  className="input"
                  readOnly
                  defaultValue={product.cost}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="buttons level-right mx-3">
            <button
              onClick={() => productRemoveHandle(product)}
              className="button is-small is-danger"
            >
              Remove
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ProductDetailForm;
