import React, { useState } from "react";

import Products from "../../components/Products/Products";
import Filterbar from "../../components/Filterbar/Filterbar";
import AddProductModal from "../../components/Modal/AddProductModal";
import AddItemForm from "../../components/Forms/AddItemForm";
import ProductDetailForm from "../../components/Forms/ProductDetailForm";
import ProductDetailModal from "../../components/Modal/ProductDetailModal";
import Pagination from "../../components/Pagination/Pagination";

const InventoryPage = () => {
  const [addProductModalState, setaddProductModalState] = useState(false);
  const [productDetailModalState, setproductDetailModalState] = useState(false);
  const [productState, setProductState] = useState({});
  const [toFilter, setToFilter] = useState("");

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

  const productRemoveHandle = (item) => {
    setToFilter(item.id);
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
            <Products
              onProductClick={onProductClickHandle}
              toFilter={toFilter}
            />
          </tbody>
        </table>
        <Pagination />
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
        <ProductDetailForm
          product={productState}
          productRemoveHandle={productRemoveHandle}
        />
      </ProductDetailModal>
    </>
  );
};

export default InventoryPage;
