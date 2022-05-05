import React from 'react'
import classes from './Withdrawal.module.css'

import Button from '../../../../components/UI/Button'

import Avatar from '../../../../assets/images/avatar.png'

const Withdrawal = () => {
  return (
    
    <>

        <div className={classes.withdrawalContainer}>
            
            <div className={classes.withdrawal_heading}>
          
          <table>
            <tr>
              <th>Name</th>
              <th>Bank</th>
              <th>Account Number</th>
              <th>Balance</th>
              <th>Accept</th>
              <th>Decline</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td><Button primary name={'Accept'} onClick={() => { }} /></td>
              <td><Button danger name={'Decline'} onClick={() => { }} /></td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Germany</td>
              <td><Button primary name={'Accept'} onClick={() => { }} /></td>
              <td><Button danger name={'Decline'} onClick={() => { }} /></td>
            </tr>

          </table>
            </div>

        </div>

    </>
  )
}

const WithdrawalRequest = ({name, amount, balance})=>{
  return(
      <>
          <div className={classes.single_request}>
            <ul> 
              <li> <div className={classes.list_option}><span></span> <p>{name}</p></div> </li>
              <li> <div className={classes.list_option}> <p>N{amount}</p></div> </li>
              <li> <div className={classes.list_option}> <p>N{balance}</p></div> </li>
              <li> <div className={classes.list_option_last}> <div className={classes.decline_btn}> <Button primary authBtn name='Accept' /> </div> <div className={classes.decline_btn}> <Button secondary authBtn name='Decline' /> </div>  </div></li>
            </ul>
          </div>
      
      </>

  )
}

export default Withdrawal