import React, { useState } from "react";

import Products from "../../components/Products/Products";
import Filterbar from "../../components/Filterbar/Filterbar";
import AddProductModal from "../../components/Modal/AddProductModal";
import AddItemForm from "../../components/Forms/AddItemForm";
import ProductDetailForm from "../../components/Forms/ProductDetailForm";
import ProductDetailModal from "../../components/Modal/ProductDetailModal";

const InventoryPage = () => {
  const [addProductModalState, setaddProductModalState] = useState(false);
  const [productDetailModalState, setproductDetailModalState] = useState(false);
  const [productState, setProductState] = useState({});

  const toggleAddModal = () => {
    setaddProductModalState(!addProductModalState);
  };

  const toggleProductDetailModal = () => {
    setproductDetailModalState(!productDetailModalState);
  };

  const onProductClickHandle = (item) => {
    setProductState(item);
    toggleProductDetailModal();
  };

  return (
    <>
      <Filterbar />
      <div className="box">
        <div>
          <div className="buttons level-right mx-3">
            <button
              className="button is-small is-primary modal-button"
              data-target="addItemModal"
              onClick={toggleAddModal}
            >
              Add
            </button>
          </div>
        </div>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            <Products onProductClick={onProductClickHandle} />
          </tbody>
        </table>
        <div>
          <nav
            className="pagination is-small "
            role="navigation"
            aria-label="pagination"
          >
            <a
              className="pagination-previous is-disabled"
              title="This is the first page"
            >
              Previous
            </a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 1"
                  aria-current="page"
                >
                  1
                </a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 2">
                  2
                </a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 3">
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <AddProductModal
        closeModal={toggleAddModal}
        modalState={addProductModalState}
        title="Add Product"
      >
        <AddItemForm />
      </AddProductModal>

      <ProductDetailModal
        closeModal={toggleProductDetailModal}
        modalState={productDetailModalState}
        title="Product Details"
      >
        <ProductDetailForm product={productState} />
      </ProductDetailModal>
    </>
  );
};

export default InventoryPage;
