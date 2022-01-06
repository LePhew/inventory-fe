import Modal from "./Modal";
const AddProductModal = ({ children, closeModal, modalState, title }) => {
  return (
    <>
      <Modal
        children={children}
        closeModal={closeModal}
        modalState={modalState}
        title={title}
      />
    </>
  );
};

export default AddProductModal;
