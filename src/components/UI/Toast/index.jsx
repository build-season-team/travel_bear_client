import React, { useContext, useEffect, useState } from 'react'
import { CLEAR_MESSAGE } from '../../../constants/actionTypes';
import { AdminContext } from '../../../store/adminContext/AdminProvider';
import { AuthContext } from '../../../store/authContext/AuthProvider';
import { ShortletContext } from '../../../store/shortletContext/ShortletProvider';
import { TransactionContext } from '../../../store/transactionContext/TransactionProvider';

import classes from './Toast.module.css';

const Toast = ({success, info, danger, message, emoji}) => {
    const {authDispatch} = useContext(AuthContext);
    const { transactionDispatch} = useContext(TransactionContext);
    const { shortletDispatch } = useContext(ShortletContext)
    const { adminDispatch } = useContext(AdminContext);

    const [showToast, setShowToast] = useState(true)
    let stroke, toastType;
    if(success) {
        stroke = "#10B981";
        toastType = 'toast__success';
    } else if(info) {
        stroke = "#3B82F6";
        toastType = 'toast__info';
    } else if(danger) {
        stroke = "#EF4444";
        toastType = 'toast__danger';
    }

    useEffect(() => {
        if(!danger) {
            setTimeout(() => {
                setShowToast(false);
                authDispatch({
                    type: CLEAR_MESSAGE
                })
                transactionDispatch({
                    type: CLEAR_MESSAGE
                })
                shortletDispatch({
                    type: CLEAR_MESSAGE
                })
                adminDispatch({
                    type: CLEAR_MESSAGE
                })
            }, 5000)
        }
    }, [])

    const handleCtaClick = () => {
        setShowToast(false);
        authDispatch({
            type: CLEAR_MESSAGE
        })
        transactionDispatch({
            type: CLEAR_MESSAGE
        })
        shortletDispatch({
            type: CLEAR_MESSAGE
        })
        adminDispatch({
            type: CLEAR_MESSAGE
        })
    }

    const cta = (<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5L15 15M5 15L15 5L5 15Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>);

  return (
    <div className={`${classes.toast} ${classes[toastType]} ${showToast ? '' : classes.hide__toast}`}>
        <div className={classes.toast__emoji}><span >{emoji}</span></div>
        <div className={classes.toast__message}>  {message}</div>
        <div onClick={handleCtaClick} className={classes.toast_action}> {cta} </div>
    </div>
  )
}

export default Toast