import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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


const SideBar = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [tabItems, setTabItems] = useState([
        { text: "Dashboard", TabIcon: DashboardIcon, TabIconActive: ActiveDashboard, active: params.route === "index" },
        { text: "Wallet", TabIcon: WalletIcon, TabIconActive: ActiveWallet, active: params.route === "wallet" },
        { text: "Shorlets", TabIcon: ShortletIcon, TabIconActive: ActiveShortlet, active: params.route === "shortlets" },
        
        
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
    <section className='side_bar'>
        
        <div className='sidebar_logo'>
            <img src={TravelBear} alt="TravelBear Logo" />
        </div>
        
        SideBar


    </section>
  )
}

export default SideBar