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

const SideBar = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [tabItems, setTabItems] = useState([
        { text: "Dashboard", TabIcon: DashboardIcon, TabIconActive: ActiveDashboard, active: params.route === "index" },
        { text: "Wallet", TabIcon: WalletIcon, TabIconActive: ActiveWallet, active: params.route === "wallet" },
        { text: "Shortlets", TabIcon: ShortletIcon, TabIconActive: ActiveShortlet, active: params.route === "shortlets" },
        
        
    ]);



    const changeActiveTab = (idx, text) => {
        console.log(idx, text);
        //Make all tabs inactive
        tabItems.forEach(tab => tab.active = false);

        //Make copy of tabItems
        const tabsCopy = tabItems.filter(tab => tab.active === false);

        //Make current tab active
        tabsCopy[idx].active = true;
        setTabItems(tabsCopy);

        //Route
        navigate(text === "Dashboard" ? "/dashboard/index" : `/dashboard/${text.toLowerCase().replace(" ", "-")}`);
    }

    const [close, setClose] = useState('large');


  return (
    <div className={classes.side_bar}>
        
        <div className='sidebar_logo'>
            <img src={TravelBear} alt="TravelBear Logo" />
        </div>
        
        <ul>

                {
                    tabItems.map(({ TabIcon, TabIconActive, text, active }, idx) => (
                        <li key={idx} onClick={() => changeActiveTab(idx, text)} className={classes.li_items} bg={active ? "#73DA9E" : null} color={active ? "#fff" : "#57575b"}>
                            {<img className={classes.icon_class} src={active ? TabIconActive : TabIcon} alt={text} />}
                            {text}
                        </li>
                    ))
                }

                {/* Logout Button */}
                {/* <ListItem color="error.100" padding="4" pl="8" cursor="pointer" display="flex" borderRadius="8px" borderTopLeftRadius="0" borderBottomLeftRadius="0" alignItems="center" mt="204px">
                    <Image color="danger.100" src={ LogoutIcon } alt="Logout" mr="18px"/>
                    Logout
                </ListItem> */}

            </ul>

        <div className={classes.logout}>
            <img src={Logout} alt="logout icon" />
            <p>Logout</p>
        </div>


    </div>
  )
}

export default SideBar