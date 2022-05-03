import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classes from './SideBar.module.css'

//lOGO IMPORT
import TravelBear from '../../../../assets/icons/logo.svg'

//onActive Icons
import ActiveVerification from '../../../../assets/icons/active-verification.svg'
import ActiveWithdrawal from '../../../../assets/icons/active-card.svg'

//normal Dashboard Icons
import Logout from '../../../../assets/icons/logout.svg'
import VerificationIcon from '../../../../assets/icons/shield-tick.svg'
import WithdrawalCard from '../../../../assets/icons/card.svg'


import { FaTimes } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

const SideBar = ({className}) => {
    const [activeNav, setActiveNav] = useState(0)
    const tabItems =[
        { text: "/dashboard/admin", TabIcon: VerificationIcon, TabIconActive: ActiveVerification,  },
        { text: "/dashboard/admin/withdrawal", TabIcon: WithdrawalCard, TabIconActive: ActiveWithdrawal, },
    ]

    const navigate = useNavigate();
    const params = useParams();

    const changeActiveTab = (i, text) => {
        setActiveNav(i);
        navigate(text)
    }
    


  return (
    <div className={classes.side_bar}>
        
        <div className={classes.sidebar_logo}>
            <img src={TravelBear} alt="TravelBear Logo" />
            <MdClose className={classes.close_icon} size={'2.2rem'}  />
        </div>
        <div className={classes.nav_items}>
              <ul>
                  {
                      tabItems.map(({ TabIcon, TabIconActive, text }, i) => (
                          <li key={i} onClick={() => changeActiveTab(i, text)} className={`${classes.li_items} ${activeNav === i ? classes.blue__text : ""}`} >
                              {<img className={classes.icon_class} src={activeNav === i ? TabIconActive : TabIcon} alt={text} />}
                              {text.split('/')[1] === '' ? 'Admin' : text.split('/')[3]}
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