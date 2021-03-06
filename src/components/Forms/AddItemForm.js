import React from "react";

const AddItemForm = () => {
  const productName = React.useRef(null);
  const productSku = React.useRef(null);
  const productDescription = React.useRef(null);
  const productCategory = React.useRef(null);
  const productManufacturer = React.useRef(null);
  const productSellingPrice = React.useRef(null);
  const productCost = React.useRef(null);

  const onSubmit = () => {
    alert(productName.current.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <div className="columns">
            <div className="field column is-6">
              <label className="label">Product Name</label>
              <div className="control">
                <input className="input" ref={productName} type="text" />
              </div>
            </div>
            <div className="field field column is-6">
              <label className="label">Product Sku</label>
              <div className="control">
                <input className="input" ref={productSku} type="text" />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="field column is-12">
              <label className="label">Description</label>
              <div className="control">
                <input className="input" ref={productDescription} type="text" />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="field column is-6">
              <label className="label">Category</label>
              <div className="control">
                <div className="select" ref={productCategory}>
                  <select>
                    <option>Category 1</option>
                    <option>Category 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field column is-6">
              <label className="label">Manufacturer</label>
              <div className="control">
                <div className="select" ref={productManufacturer}>
                  <select>
                    <option>Manufacturer 1</option>
                    <option>Manufacturer 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="field column is-6">
              <label className="label">Selling Price</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  ref={productSellingPrice}
                />
              </div>
            </div>
            <div className="field field column is-6">
              <label className="label">Cost</label>
              <div className="control">
                <input className="input" type="text" ref={productCost} />
              </div>
            </div>
          </div>
          <div className="buttons level-right mx-3">
            <button className="button is-small is-primary">Save</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItemForm;
