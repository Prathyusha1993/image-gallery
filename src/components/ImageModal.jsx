import React from "react";
import ReactModal from "react-modal";
import "./ImageModal.css";

const ImageModal = ({ modalIsOpen, closeModal, currentImage }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={closeModal}>
        X
      </button>
      <img src={currentImage.src} alt="" className="modal-image" />
    </ReactModal>
  );
};

export default ImageModal;
