import React, { useContext, useEffect, useState} from 'react'
import Select from 'react-select'
import okra from 'okra-js';

import classes from './Wallet.module.css'
import TabContent from '../../components/WalletTab/TabContent';
import TabNavItem from '../../components/WalletTab/TabNavItem';
import Button from '../../../../components/UI/Button'
import FormInput from '../../../../components/UI/FormInput/Index';
import Modal from '../../components/Modal/Modal'
import { FaPlus } from 'react-icons/fa'
// import Select from 'react-select'

// icons
import ShortletIcon from '../../../../assets/icons/house.svg'
import Piggy from '../../../../assets/images/piggy.svg'
import Refund from '../../../../assets/images/refund.svg'
import Activities from '../../../../assets/images/activities.svg'
import GTBank from '../../../../assets/images/gt-bank.svg'
import FirstBank from '../../../../assets/images/first-bank.svg'
import Bank from '../../../../assets/icons/bank.svg'
import { AuthContext } from '../../../../store/authContext/AuthProvider';
import { TransactionContext } from '../../../../store/transactionContext/TransactionProvider';
import Toast from '../../../../components/UI/Toast';
import addBank from '../../../../store/transactionContext/actionCreators/addBank';
import getBanks from '../../../../store/transactionContext/actionCreators/getBanks';
import Skeleton from 'react-loading-skeleton';
import withdrawal from '../../../../store/transactionContext/actionCreators/withdrawal';
import getme from '../../../../store/authContext/actionCreators/getme';
import getTransactions from '../../../../store/transactionContext/actionCreators/getTransactions';

const Wallet = ({user}) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [addWithdraw, setAddWithdraw] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({});
  const [isChanged, setIsChanged] = useState(0);
  const {transactionDispatch, transactionState: {loading, message, error, banks, transactions}} = useContext(TransactionContext);
  const { authDispatch} = useContext(AuthContext);
  const [bank, setBank] = useState('');
  const [errors, setErrors] = useState({});



  
  useEffect(() => {
    getTransactions()(transactionDispatch);
    console.log('run')
  }, [])


  const onInputChange = (e, key) => {
    setForm({ ...form, [key]: e.target.value })
    if (key !== '') {
      setErrors((prevState) => {
        return { ...prevState, [key]: null }
      })
    }
  }

  const onblur = (e, key) => {
    if (Object.values(form).length > 0) {
      if (key == 'bankName' && form.bankName.length < 3) {
        setErrors({ ...errors, bankName: 'Bank name must be more than 2 letters' })
      }
      if (key == 'accountNumber' && form.accountNumber.length < 10) {
        setErrors({ ...errors, accountNumber: 'account must be more  10 characters' })
      }
    }
  }

  const onRadioChange = (e, index) => {
    setIsChanged(index)
    setBank(e.target.value)
  }



  const onAddBank = (e) => {
    form.accountName = user.firstName + " " + user.lastName;
    if (Object.values(form).length >= 2 && Object.values(form).every(item => item.trim().length > 0) && Object.values(errors).every(item => !item)) {
      addBank(form)(transactionDispatch)(() => {
        setIsOpen(false);
        setForm({})
      } );
    }

  }

  const withdraw = () => {
    const index = banks.findIndex((item) => item.bankName == bank);
    const details = {
      amount: +form.amount,
      bankName: banks[index]?.bankName || banks[0].bankName,
      accountNumber: banks[index]?.accountNumber || banks[0].accountName,
    }

    withdrawal(details)(transactionDispatch);
    getme()(authDispatch);
  }


  
  return (
    <>
      {message && <Toast emoji='🤗' message={message} success />}
      {error && <Toast emoji='😱' message={error} danger />}
      {isOpen && <Modal dispatch={transactionDispatch} heading={'Add Bank'} description={'Add new bank details to withdraw your funds!!!'} label={'Bank Name'} select={<FormInput className={errors?.bankName == null ? classes.mb : ''} errors={errors} onBlur={onblur} form={form} onChange={onInputChange} name='bankName' placeholder='Bank name' type='bank name' required />} input={<FormInput errors={errors} onBlur={onblur} form={form} onChange={onInputChange} name='accountNumber' label='Account Number' placeholder='Account Number' type='number' required />} addBtn={<Button onClick={onAddBank} authBtn primary name={`${loading ? 'Loading...' : 'Add Bank'} `} />} closeBtn={<Button authBtn onClick={() => setIsOpen(false)} secondary name='Cancel' />} setIsOpen={setIsOpen} />}
    
    <div className={classes.tabs}>
      <ul className={classes.nav_ul} >
        
            <TabNavItem className={classes.active} title="Wallet" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem className={classes.active} getFunc={() => getBanks()(transactionDispatch)} title="Withdrawal" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        
      </ul>
 
      <div>

        {/* First tab content */}
        <TabContent id="tab1" activeTab={activeTab}>
          <div>

          
          <div className={classes.wallet_container} >

              <div className={classes.user_name_wallet}>
                {/* <img src={ ShortletIcon } alt="shortlet icon" /> */}
                <p>{user.firstName + ' ' + user.lastName}</p>
              </div>

              <div className={classes.available_balance}>
                <p>Available Balance</p>
                <p>₦ {user.balance}</p>
              </div>

          </div>
          </div>


        </TabContent>
         {/* Second tab content */}
        <TabContent  id="tab2" activeTab={activeTab}>

          {!addWithdraw
          
          
          ?
              <div className= {classes.nav_tab_content1} >
              <div className={classes.withdrawal_container}>
                  <img src={Piggy} alt="piggy bank icon" />
                  <p>Your money is temporarily being saved on our platform, you can add <br /> new bank to be able to withdraw your money.</p>
                  <Button onClick={() => setIsOpen(true)} primary name='Add new bank' />
              </div>
            </div>

            : 

            <section className={classes.initiate_withdrawal_container}> 


                <div className={classes.initiate_withdrawal_body}>
                  
                  <div className={classes.add_bank}>
                    <img src={Bank} alt="" />
                    <p onClick={() => setIsOpen(true)}>Add Bank</p>
                  </div>
                  {/* Enter amount */}
                    <div className={classes.initiate_withdrawal_body_left}>
                      <div>
                      <FormInput errors={errors} onBlur={onblur} form={form} onChange={onInputChange} name='amount' placeholder='N0.00' type='withdraw' required />
                      </div>
                      
                      <div className={classes.choose_bank}>
                        <p>Choose Bank</p>
                        <div className={classes.choose_bank_radio}>

                          {
                          banks.length > 0 && banks.map((bank , index) => (
                            <div key={index} className={classes.indivi_radio}>
                              <input type="radio" id={bank.bankName} onChange={(e) => onRadioChange(e, index)} name="fav_language" value={bank.bankName} checked={index == isChanged} />
                              <label htmlFor={bank.bankName}>{bank.bankName}</label>
                            </div>
                          ))
                        }
                        </div>
                      </div>

                      {/* <div className={classes.divider}>
                        <Divider />
                      </div> */}
                      <div className={classes.btn_left}>
                        <Button onClick={withdraw} authBtn primary name='Withdraw funds' />
                      </div>
                      
                    </div>
                    
                  {/* Banks */}
                    <div className={classes.initiate_withdrawal_body_right}>
                      <p className={classes.withdrawal_banks}>Banks</p>
                      {
                        loading ?
                        (
                          <div className={classes.first_bank}>
                            <div className={classes.user_bank_details}>
                              <p className={classes.user_name}> <Skeleton /> </p>
                              <p className={classes.bank_name}><Skeleton /></p>
                            </div>
                            <p className={classes.remove}><Skeleton /></p>
                          </div>
                        )
                        :
                         banks.map((bank, i) => (
                            <div key={i} className={classes.first_bank}>
                            <div className={classes.user_bank_details}>
                              <p className={classes.user_name}>{user.firstName + " " + user.lastName}</p>
                              <p className={classes.bank_name}>{bank.bankName}</p>
                            </div>
                            <p className={classes.remove}>Remove</p>
                          </div>

                        )) 
                        }

                        {banks.length == 0 && 
                          <div className={classes.first_bank}>
                            <div style={{ width: '100%', height: "100%", margin: "0px auto" }}> You No banks yet</div>
                          </div>
                        }

                      <div onClick={() => setIsOpen(true)} className={classes.add_bank_mobile}>
                      <FaPlus /> 
                      <p>Add Bank</p>
                      </div>
                    </div>
                </div>
            </section>
          }
          
          
          <div>
            
          </div>
        </TabContent>
        
      </div>

        

    </div>

    

        <div>
          <TransactionHistory loading={loading} data={transactions} user={user} />
        </div>
    
        
    
    </>
  );
};



const TransactionHistory = ({data, user, loading}) =>{

  
  
  return(
    
        <div>
          
            <div className={classes.wallet_activities}>
              <p>Transaction History</p>
              <div className={classes.clear}>Clear All</div>
            </div>
            { !loading &&
            
            data?.length > 0
            ?
            <div className={classes.withdrawalContainer}>
                <div className={classes.container_child}>
                    <div className={classes.withdrawal_heading}>
                    <table>
                      <thead>

                      <tr>
                        <th>Reference</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>status</th>
                      </tr>
                      </thead>
                      <tbody>

                      {
                        data.map((transaction, i) => (
                          <tr key={i}>
                            <td>{transaction?.ref}</td>
                            <td>{transaction?.amount}</td>
                            <td>{transaction?.type}</td>
                            <td>{transaction?.status}</td>
                          </tr>
                        ))
                      }
                      </tbody>
                      

                    </table>
                        
                    </div>
                </div>
            </div>

            : 
            <div>
              <div  className={classes.all_activities}>
                <img src={ Refund } alt="" />
                <p>No transaction at this time.</p>
              </div>
            </div> 

            }
            

        </div>
    
  )
}


 
export default Wallet;
