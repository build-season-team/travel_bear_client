import React, { useContext, useEffect } from 'react'
import classes from './Withdrawal.module.css'

import Button from '../../../../components/UI/Button'

import Avatar from '../../../../assets/images/avatar.png'
import { TransactionContext } from '../../../../store/transactionContext/TransactionProvider'
import getTrans from '../../../../store/transactionContext/actionCreators/getTrans'
import transfers from '../../../../store/transactionContext/actionCreators/transfers'
import Toast from '../../../../components/UI/Toast'

const Withdrawal = () => {

  const { transactionDispatch, transactionState: { loading, message, error, banks, transactions, trans } } = useContext(TransactionContext);

  useEffect(() => {
    getTrans()(transactionDispatch);
  }, [])

  const transfer = (user, trans, amount) => {
    transfers({user, trans, amount})(transactionDispatch);
  }

  return (
    
    <>
      {message && <Toast emoji='🤗' message={message} success />}
        <div className={classes.withdrawalContainer}>
            <div className={classes.container_child}>

            
            <div className={classes.withdrawal_heading}>
          
          <table>
            <tr>
              <th>Name</th>
              <th>Bank</th>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Accept</th>
              <th>Decline</th>
            </tr>
            {

            trans.map((cur, i) => (
              <tr key={i}>
                <td>{cur.user.firstName + " " + cur.user.lastName}</td>
                <td>{cur.bankName}</td>
                <td>{cur.accountNumber}</td>
                <td>{cur.amount}</td>
                <td><Button primary name={'Accept'} onClick={() => transfer(cur.user._id, cur._id, cur.amount)} /></td>
                <td><Button danger name={'Decline'} onClick={() => { }} /></td>
              </tr>
              ))
            }

          </table>
            </div>
          </div>
        </div>

    </>
  )
}


export default Withdrawal