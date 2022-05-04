import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classes from './SideBar.module.css'

//lOGO IMPORT
import TravelBear from '../../../../assets/icons/logo.svg'

//onActive Icons
import ActiveDashboard from '../../../../assets/icons/active-dashboard.svg'
import ActiveWallet from '../../../../assets/icons/active-wallet.svg'
import ActiveShortlet from '../../../../assets/icons/active-shortlet.svg'
import ActiveVerification from '../../../../assets/icons/active-verification.svg'
import ActiveWithdrawal from '../../../../assets/icons/active-card.svg'

//normal Dashboard Icons
import DashboardIcon from '../../../../assets/icons/dashboard.svg'
import WalletIcon from '../../../../assets/icons/wallet.svg'
import ShortletIcon from '../../../../assets/icons/house.svg'
import VerificationIcon from '../../../../assets/icons/shield-tick.svg'
import WithdrawalCard from '../../../../assets/icons/card.svg'

import Logout from '../../../../assets/icons/logout.svg'

import { FaTimes } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
// import Withdrawal from '../../../AdminDashboard/screens/Withdrawal/Withdrawal'

const SideBar = ({className}) => {
    const [activeNav, setActiveNav] = useState(0)
    const tabItems =[
        { text: "/dashboard/", TabIcon: DashboardIcon, TabIconActive: ActiveDashboard,  },
        { text: "/dashboard/wallet", TabIcon: WalletIcon, TabIconActive: ActiveWallet, },
        { text: "/dashboard/shortlets", TabIcon: ShortletIcon, TabIconActive: ActiveShortlet, },
        { text: "/dashboard/verification", TabIcon: VerificationIcon, TabIconActive: ActiveVerification, },
        { text: "/dashboard/withdrawal", TabIcon: WithdrawalCard, TabIconActive: ActiveWithdrawal, },
    ]

    const [dropMenuIsVisible, setDropMenuIsVisible] = useState(false);

    // const showDropMenu = ()=> {
    //     setDropMenuIsVisible(true);
    // }

    const closeDropMenu = ()=> {
        console.log('true')
        setDropMenuIsVisible(!dropMenuIsVisible);
    }

    const navigate = useNavigate();
    const params = useParams();

    const changeActiveTab = (i, text) => {
        setActiveNav(i);
        navigate(text)
    }
    


  return (
    <div className={ dropMenuIsVisible ? classes.side_bar : classes.nav_test}>
        
        <div className={`${classes.sidebar_logo} ${classes.nav_test}`}>
            <img src={TravelBear} alt="TravelBear Logo" />
            <div className={classes.close_icon} onClick={closeDropMenu}>
                <MdClose size={'2.2rem'}  />        
            </div>
        </div>
        <div className={ dropMenuIsVisible ? classes.nav_items : classes.nav_test} dropMenuIsVisible={dropMenuIsVisible} setDropMenuIsVisible={setDropMenuIsVisible} >
              <ul>
                  {
                      tabItems.map(({ TabIcon, TabIconActive, text }, i) => (
                          <li key={i} onClick={() => changeActiveTab(i, text)} className={`${classes.li_items} ${activeNav === i ? classes.blue__text : ""}`} >
                              {<img className={classes.icon_class} src={activeNav === i ? TabIconActive : TabIcon} alt={text} />}
                              {text.split('/')[2] === '' ? 'Dashboard' : text.split('/')[2]}
                          </li>
                      ))
                  }

              </ul>

              <div className={classes.logout}>
                  <img src={Logout} alt="logout icon" />
                  <p>Logout</p>
              </div>
        </div>
        
        



    </div>
  )
}

export default SideBar