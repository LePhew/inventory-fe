import React, { useState } from "react";

import Products from "../../components/Products/Products";
import Filterbar from "../../components/Filterbar/Filterbar";
import Modal from "../../components/Modal/Modal";
import AddItemForm from "../../components/Forms/AddItemForm";

const InventoryPage = () => {
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
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
              onClick={toggleModal}
            >
              Add
            </button>
          </div>
        </div>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Description</th>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            <Products />
          </tbody>
        </table>
      </div>
      <Modal
        closeModal={toggleModal}
        modalState={modalState}
        title="Modal title"
      >
        <AddItemForm />
      </Modal>
    </>
  );
};

export default InventoryPage;
