import React, { useRef } from "react";
import Select from 'react-select'

import Calender from '../../../assets/icons/calendar.svg'
import Dropdown from '../../../assets/images/drop-down.svg'
import Moon from '../../../assets/icons/moon.svg'


import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

import DarkLocation from '../../../assets/icons/location-dark.svg'

const Modal = ({ setIsOpen, heading, description, select, selectLabel, durationLabel, input, date, checkOut, addBtn, closeBtn, locationSummary, houseLocation, duration }) => {
  const modalRef = useRef(null);
  const closeModal = (e) => {
    if(modalRef.current.contains(e.target)) return
    setIsOpen(false)
  }

  const options = [
    { value: 'one', label: '1 Night' },
    { value: 'two', label: '2 Nights' },
    { value: 'three', label: '3 Nights' },
    { value: 'four', label: '4 Nights' },
    { value: 'five', label: '5 Nights' },
    { value: 'six', label: '6 Nights' },
    { value: 'seven', label: '7 Nights' },
    { value: 'eight', label: '8 Nights' },
    { value: 'nine', label: '9 Nights' },
    { value: 'ten', label: '10 Nights' },
    { value: 'eleven', label: '11 Nights' },
    { value: 'twelve', label: '12 Nights' },
    { value: 'thirteen', label: '13 Nights' },
    { value: 'fourteen', label: '14 Nights' },
  ]

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
                    <input className={styles.calender_style} type="date" />
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
                    <input type="number" placeholder="Enter number of days" />
                    <img className={styles.select_img} src={ Dropdown } alt="dropdown" />
                </div>

                : null
              
              }
            </div>
              
            <div className={styles.checkout_text}>
              {checkOut

              ?

              <div>
                <p>Check-Out Date: <span> {date} </span> </p>
              </div>

              : null

              }
              
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