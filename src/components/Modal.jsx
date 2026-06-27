import React, { useState, useEffect } from "react";
import "./Modal.css";

import admissionPoster from "../assets/brochure.png"; // Change your image path

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="admission-modal">
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>

        <div className="modal-image-container">
          <img
            src={admissionPoster}
            alt="ITI Admission Notice"
            className="modal-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;