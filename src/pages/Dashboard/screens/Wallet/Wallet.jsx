import React, { useEffect, useState} from 'react'
import classes from './Wallet.module.css'

import TabContent from '../../components/WalletTab/TabContent';
import TabNavItem from '../../components/WalletTab/TabNavItem';
import Button from '../../../../components/UI/Button'
import FormInput from '../../../../components/UI/FormInput/Index';
import Divider from '../../../../components/UI/Divider';

// icons
import ShortletIcon from '../../../../assets/icons/house.svg'
import Piggy from '../../../../assets/images/piggy.svg'
import Activities from '../../../../assets/images/activities.svg'
import GTBank from '../../../../assets/images/gt-bank.svg'
import FirstBank from '../../../../assets/images/first-bank.svg'


const Wallet = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [addWithdraw, setAddWithdraw] = useState(true)


  return (
    <>
    
    <div className={classes.tabs}>
      <ul className={classes.nav_ul} >
        <li>
            <TabNavItem title="Wallet" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </li>
        <li>
            <TabNavItem title="Withdrawal" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </li>
        
        
      </ul>
 
      <div>
        <TabContent id="tab1" activeTab={activeTab}>
          <div>

          
          <div className={classes.wallet_container} >

              <div className={classes.available_shortlet}>
                <img src={ ShortletIcon } alt="shortlet icon" />
                <p>Shortlets Available</p>
              </div>

              <div className={classes.available_balance}>
                <p>Available Balance</p>
                <p>N 0.00</p>
              </div>

          </div>
          </div>


        </TabContent>
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
                  
                  {/* Enter amount */}
                    <div className={classes.initiate_withdrawal_body_left}>
                      <div>
                        <FormInput label='Enter Custom Amount' placeholder='N 0.00' />
                      </div>
                      <div className={classes.radio_container}>
                        <p>Choose amount</p>
                          <div className={classes.radio_input}>
                              <input type="radio" id="ten" name="ten thousand" value="10,000"/>
                              <label for="ten">N10,000</label>
                              <input type="radio" id="twenty" name="twenty thousand" value="20,000" />
                              <label for="twenty">N20,000</label>
                              <input type="radio" id="thirty" name="thirty thousand" value="30,000" />
                              <label for="thirty">N30,000</label>
                              <input type="radio" id="fifty" name="fifty thousand" value="50,000" />
                              <label for="fifty">N50,000</label>
                              <input type="radio" id="hundred" name="hundred thousand" value="100,000" />
                              <label for="hundred">N100,000</label>

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
                        <Button primary name='Withdraw funds' />
                      </div>
                      
                    </div>
                    
                  {/* Banks */}
                    <div className={classes.initiate_withdrawal_body_right}>
                      <p className={classes.withdrawal_banks}>Banks</p>
                      <div className={classes.first_bank}>
                        <img src={GTBank} alt="bank_icon" />
                        <div className={classes.user_bank_details}>
                          <p className={classes.user_name}>Chidimma Chucho</p>
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
          <div><Button formBtn name='Clear' /></div>
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
    <>
        <div>
          rer
        </div>
    </>
  )
}
 
export default Wallet;
