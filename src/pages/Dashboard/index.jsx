import React from 'react'
import classes from './Dashboard.module.css'

import SubHeader from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

import Home from './screens/Home/Home'
import Wallet from './screens/Wallet/Wallet'
import Shortlets from './screens/Shortlets/Shortlets'

import { useParams } from 'react-router-dom'

const Dashboard = () => {

  const params = useParams();

  return (
    <div className={classes.dashboard_screen}> 
      <SideBar />
      <section className={classes.dashboard_sub_screen}>
          <div className={classes.dash_header}>
            { params.sub ? null : <SubHeader /> }
          </div> 

          <main className={`${classes.dashboard_main_content} ${classes.main_container})`}>

            {
                params.route === "index" 
                ? <Home /> 
                : params.route === "wallet" 
                ? <Wallet /> 
                : params.route === "shortlets"
                ? <Shortlets />
                : null
            }

          </main>
      </section>
    
    
    
    </div>
  )
}

export default Dashboard