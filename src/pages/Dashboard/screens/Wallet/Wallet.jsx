import React, { useEffect, useState} from 'react'
import classes from './Wallet.module.css'

import TabContent from '../../components/WalletTab/TabContent';
import TabNavItem from '../../components/WalletTab/TabNavItem';
import Button from '../../../../components/UI/Button'

import ShortletIcon from '../../../../assets/icons/house.svg'
import Piggy from '../../../../assets/images/piggy.svg'
import Activities from '../../../../assets/images/activities.svg'

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
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
        <TabContent className= {classes.nav_tab_content} id="tab1" activeTab={activeTab}>
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
        </TabContent>
        <TabContent  id="tab2" activeTab={activeTab}>
          <div className= {classes.nav_tab_content1} >
            <div className={classes.withdrawal_container}>
                <img src={Piggy} alt="piggy bank icon" />
                <p>Your money is temporarily being saved on our platform, you can add <br /> new bank to be able to withdraw your money.</p>
                <Button primary name='Add new bank' />
            </div>
          </div>
          
          <div>
            
          </div>
        </TabContent>
        
      </div>

      
    </div>
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
    </>
  );
};
 
export default Wallet;
