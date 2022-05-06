import React, { useRef } from "react";
import styles from "./ModalReview.module.css";
import { RiCloseLine } from "react-icons/ri";

const ModalReview = ({ setIsOpen, heading, description, select, label, input, addBtn, closeBtn, ratingCard, rating, ratingBtn }) => {
  const modalRef = useRef(null);
  const closeModal = (e) => {
    if(modalRef.current.contains(e.target)) return
    setIsOpen(false)
  }

  // console.log(ratingCard)
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
        </div>
      </div>
      </div>
    </>
  );
};

export default ModalReview