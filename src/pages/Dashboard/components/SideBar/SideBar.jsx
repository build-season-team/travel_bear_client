import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classes from './SideBar.module.css'

//lOGO IMPORT
import TravelBear from '../../../../assets/icons/logo.svg'

//onActive Icons
import ActiveDashboard from '../../../../assets/icons/active-dashboard.svg'
import ActiveWallet from '../../../../assets/icons/active-wallet.svg'
import ActiveShortlet from '../../../../assets/icons/active-shortlet.svg'

//normal Dashboard Icons
import DashboardIcon from '../../../../assets/icons/dashboard.svg'
import WalletIcon from '../../../../assets/icons/wallet.svg'
import ShortletIcon from '../../../../assets/icons/house.svg'
import Logout from '../../../../assets/icons/logout.svg'

const SideBar = ({className}) => {
    const [activeNav, setActiveNav] = useState(0)
    const tabItems =[
        { text: "/dashboard/", TabIcon: DashboardIcon, TabIconActive: ActiveDashboard,  },
        { text: "/dashboard/wallet", TabIcon: WalletIcon, TabIconActive: ActiveWallet, },
        { text: "/dashboard/shortlets", TabIcon: ShortletIcon, TabIconActive: ActiveShortlet, },
    ]

    const navigate = useNavigate();
    const params = useParams();

    const changeActiveTab = (i, text) => {
        setActiveNav(i);
        navigate(text)

    }



  return (
    <div className={classes.side_bar}>
        
        <div className='sidebar_logo'>
            <img src={TravelBear} alt="TravelBear Logo" />
        </div>
        <div className={classes.nav_items}>
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