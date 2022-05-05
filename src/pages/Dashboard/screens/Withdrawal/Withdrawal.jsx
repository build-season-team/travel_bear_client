import React from 'react'
import classes from './Withdrawal.module.css'

import Button from '../../../../components/UI/Button'

import Avatar from '../../../../assets/images/avatar.png'

const Withdrawal = () => {
  return (
    
    <>

        <div className={classes.withdrawalContainer}>
            <div className={classes.container_child}>

            
            <div className={classes.withdrawal_heading}>
                <ul>
                    <li>User</li>
                    <li>Amount</li>
                    <li>Bank Name</li>
                    <li>Account Number</li>
                    <li>Available Balance</li>
                    <li>Action</li>
                    
                </ul>
                <WithdrawalRequest name='Nancy Isime' amount='50,000' bank='First Bank' bankNumber='0034556831' balance='700,000' />

                <WithdrawalRequest name='Linda Osifo' amount='50,000' bank='UBA' bankNumber='0034556831' balance='810,000' />

                <WithdrawalRequest name='Ramsey' amount='155,000' bank='Abeg' bankNumber='0034556831' balance='350,000' />
            </div>
          </div>
        </div>

    </>
  )
}
const WithdrawalRequest = ({name, amount, balance, bank, bankNumber})=>{
  return(
      <>
          <div className={classes.single_request}>
            <ul> 
              <li> <div className={classes.list_option}><span></span> <p>{name}</p></div> </li>
              <li> <div className={classes.list_option}> <p>₦{amount}</p></div> </li>
              <li> <div className={classes.list_option} ><p>{bank}</p></div> </li>
              <li> <div className={classes.list_option} ><p>{bankNumber}</p></div> </li>
              <li> <div className={classes.list_option}> <p>₦{balance}</p></div> </li>
              <li> <div className={classes.list_option_last}> <div className={classes.decline_btn}> <Button primary authBtn name='Accept' /> </div> <div className={classes.decline_btn}> <Button secondary authBtn name='Decline' /> </div>  </div></li>
            </ul>
          </div>
      
      </>

  )
}

export default Withdrawal