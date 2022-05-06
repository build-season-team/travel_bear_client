import React, { useRef, useState } from "react";
import Select from 'react-select'

import Calender from '../../../assets/icons/calendar.svg'
import Dropdown from '../../../assets/images/drop-down.svg'
import Moon from '../../../assets/icons/moon.svg'


import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

import DarkLocation from '../../../assets/icons/location-dark.svg'

const Modal = ({ setIsAble, amount, setDetails, details, setIsOpen, heading, description, select, selectLabel, durationLabel, input, date, checkOut, addBtn, closeBtn, locationSummary, houseLocation, duration }) => {


  
  const modalRef = useRef(null);
  const closeModal = (e) => {
    if(modalRef.current.contains(e.target)) return
    setIsOpen(false)
  }

  const onInputChange = (e) => {
    if(e.target.value > 0) {
      setIsAble(true)
      setDetails({ ...details, amount: amount * e.target.value});
    }
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

            <div>
                {locationSummary

                ?
                  <div className={styles.localDesc}>
                      <img src={DarkLocation} alt="Darkened location icon" />
                      <p>{houseLocation}</p>
                  </div>
                : null
                
                }
            </div>
            
            <div className={styles.select_option}>
            <span>{selectLabel}</span>
                {select
                ?
                <div className={styles.selectStyle}>
                    <img src={Calender} alt="calender icon" />
                     <input className={styles.calender_style}  type="date" />
                </div>

                : null


                }
                
                
        
            </div>

            <div className={styles.select_option}>
            <span>{durationLabel}</span>
                {duration
                
                ?
                <div className={styles.selectStyle}>
                    <img src={Moon} alt="calender icon" />
                     <input onChange={(e) => onInputChange(e)}  type="number" placeholder="Enter number of days" />
                    <img className={styles.select_img} src={ Dropdown } alt="dropdown" />
                </div>

                : null
              
              }
            </div>
              
            <div className={styles.checkout_text}>
              
              
            </div>
              
            {/* <div className={styles.select_option}>
                {input}
            </div> */}

            <div className={styles.modal_btn}>
                {addBtn}
            </div>

            <div className={styles.modal_btn}>
                {closeBtn}
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Modal;