import React, { useEffect, useState} from 'react'
import Select from 'react-select'

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

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [addWithdraw, setAddWithdraw] = useState(true)
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'access', label: 'Access Bank' },
    { value: 'citi-bank', label: 'Citi Bank' },
    { value: 'eco', label: 'Ecobank Nigeria' },
    { value: 'fidelity', label: 'Fidelity Bank' },
    { value: 'first-bank', label: 'First Bank' },
    { value: 'first-city', label: 'First City Monument Bank' },
    { value: 'globus', label: 'Globus' },
    { value: 'guaranty-bank', label: 'Guaranty Bank' },
    { value: 'heritage', label: 'Heritage Banking Company' },
    { value: 'key-stone', label: 'Key Stone Bank' },
    { value: 'polaris', label: 'Polaris Bank' },
    { value: 'stanbic', label: 'Stanbic IBTC' },
    { value: 'standard-chartered', label: 'Standard-chartered Bank' },
    { value: 'sterling', label: 'Sterling Bank' },
    { value: 'union-bank', label: 'Union Bank' },
    { value: 'united-bank', label: 'United Bank For Africa, UBA' },
    { value: 'unity-bank', label: 'Unity Bank' },
    { value: 'zenith', label: 'Zenith Bank' },
    
  ]

  const styles = {
    input: (provided, state) =>({
      ...provided,
      width: 'max-content',
      height: '4.5rem',
      
    }),

    placeholder: (provided, state) =>({
      ...provided,
      // content: 'Se',
      
    }),

    control: (provided, state) =>({
      ...provided,
      border: '1px solid #858585',
      borderRadius: '1rem',
    }),
  
  
  }

  console.log(activeTab);
  
  return (
    <>
    {isOpen && <Modal heading={'Add Bank'} description={'Add new bank details to withdraw your funds!!!'} label={'Bank Name'} select={<Select styles={styles} options={options} />} input={<FormInput label={'Account number'} placeholder={'Account number'} type='number'/>} addBtn={<Button authBtn primary name='Add Bank' />} closeBtn={<Button authBtn onClick={() => setIsOpen(false)} secondary name='Cancel' />} setIsOpen={setIsOpen} />}
    
    <div className={classes.tabs}>
      <ul className={classes.nav_ul} >
        
            <TabNavItem className={classes.active} title="Wallet" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabNavItem className={classes.active} title="Withdrawal" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        
      </ul>
 
      <div>

        {/* First tab content */}
        <TabContent id="tab1" activeTab={activeTab}>
          <div>

          
          <div className={classes.wallet_container} >

              <div className={classes.user_name_wallet}>
                {/* <img src={ ShortletIcon } alt="shortlet icon" /> */}
                <p>Maria Nnanna</p>
              </div>

              <div className={classes.available_balance}>
                <p>Available Balance</p>
                <p>N 0.00</p>
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
                  <Button primary name='Add new bank' />
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
                        <FormInput label='Enter Custom Amount' placeholder='N 0.00' />
                      </div>
                      <div className={classes.radio_container}>
                        <p>Choose amount</p>
                          <div className={classes.radio_input}>
                              <div className={classes.radio_input_items}>
                                <input type="radio" id="ten" name="ten thousand" value="10,000"/>
                                <label for="ten">N10,000</label>
                              </div>
                              <div className={classes.radio_input_items}>
                                <input type="radio" id="twenty" name="twenty thousand" value="20,000" />
                                <label for="twenty">N20,000</label>
                              </div>  
                              <div className={classes.radio_input_items}>
                                <input type="radio" id="thirty" name="thirty thousand" value="30,000" />
                                <label for="thirty">N30,000</label>
                              </div>
                              <div className={classes.radio_input_items}>
                                <input type="radio" id="fourty" name="fourty thousand" value="30,000" />
                                <label for="fourty">N40,000</label>
                              </div>
                              <div className={classes.radio_input_items}>
                                <input type="radio" id="fifty" name="fifty thousand" value="50,000" />
                                <label for="fifty">N50,000</label>
                              </div>
                              <div className={classes.radio_input_items}>
                                <input type="radio" id="hundred" name="hundred thousand" value="100,000" />
                                <label for="hundred">N100,000</label>
                              </div>
                              
                          </div>

                      </div>
                      
                      <div className={classes.choose_bank}>
                        <p>Choose Bank</p>
                        <div className={classes.choose_bank_radio}>
                          
                          <div className={classes.indivi_radio}>
                            <input type="radio" id="bank1" name="bank 1" value="bank1"/>
                            <label for="bank1">GTBank</label>
                          </div>
                          <div className={`${classes.indivi_radio} ${classes.indivi_last}`}>
                            <input type="radio" id="bank2" name="bank 2" value="bank2" />
                            <label for="bank2">First Bank</label>
                          </div>
                          

                        </div>
                      </div>

                      {/* <div className={classes.divider}>
                        <Divider />
                      </div> */}
                      <div className={classes.btn_left}>
                        <Button authBtn primary name='Withdraw funds' />
                      </div>
                      
                    </div>
                    
                  {/* Banks */}
                    <div className={classes.initiate_withdrawal_body_right}>
                      <p className={classes.withdrawal_banks}>Banks</p>
                      <div className={classes.first_bank}>
                        <img src={GTBank} alt="bank_icon" />
                        <div className={classes.user_bank_details}>
                          <p className={classes.user_name}>Chidimma Samson</p>
                          <p className={classes.bank_name}>Guarantee Trust Bank</p>
                        </div>
                        <p className={classes.remove}>Remove</p>
                      </div>

                      <div className={classes.second_bank}>
                        <img src={FirstBank} alt="bank_icon" />
                        <div className={classes.user_bank_details}>
                          <p className={classes.user_name}>Susan Godwin</p>
                          <p className={classes.bank_name}>First Bank</p>
                        </div>
                        <p className={classes.remove}>Remove</p>
                      </div>

                      <div className={classes.add_bank_mobile}>
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
        <ActivityCard />
        </div>

        <div>
          <TransactionHistory />
        </div>
    
    
    </>
  );
};

const ActivityCard = () =>{
  return(
    <div>
        <div className={classes.wallet_activities}>
          <p>Activities</p>
          <div className={classes.clear}>Clear All</div>
        </div>
        <div>
          <div  className={classes.all_activities}>
            <img src={ Activities } alt="" />
            <p>All your activities will show here.</p>
          </div>
        </div> 
    </div>
  );
  
};

const TransactionHistory = () =>{
  return(
    
        <div>
          
            <div className={classes.wallet_activities}>
              <p>Transaction History</p>
              <div className={classes.clear}>Clear All</div>
            </div>
            <div>
              <div  className={classes.all_activities}>
                <img src={ Refund } alt="" />
                <p>No transaction at this time.</p>
              </div>
            </div> 

        </div>
    
  )
}
 
export default Wallet;
