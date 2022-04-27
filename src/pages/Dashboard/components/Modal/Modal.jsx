import React, { useRef } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, heading, description, select, label, input, addBtn, closeBtn }) => {
  const modalRef = useRef(null);
  const closeModal = (e) => {
    if(modalRef.current.contains(e.target)) return
    setIsOpen(false)
  }
   return (
    <>
      <div  className={styles.darkBG} onClick={closeModal} >
      <div className={styles.centered}>
           <div ref={modalRef} className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{heading}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.modalDesc}>
                {description}
            </div>
            
            <div className={styles.select_option}>
            <span>{label}</span>
                {select}
            </div>
            <div className={styles.select_option}>
                {input}
            </div>

            <div className={styles.modal_btn}>
                {addBtn}
            </div>

            <div className={styles.modal_btn}>
                {closeBtn}
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              
              
              
              {/* <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button> */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Modal;