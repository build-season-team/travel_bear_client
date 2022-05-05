import React, { useContext } from 'react'
import classes from './Dashboard.module.css'

import SubHeader from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

import { Outlet, useParams } from 'react-router-dom'
import TransactionProvider from '../../store/transactionContext/TransactionProvider'


const Dashboard = () => {


  const params = useParams();

  return (
    <TransactionProvider >
      <div className={classes.dashboard_screen}> 
        <SideBar className={classes.sidebar} />
        <section className={classes.dashboard_sub_screen}>
            <div className={classes.dash_header}>
              { params.sub ? null : <SubHeader /> }
            </div> 
            <main className={`${classes.dashboard_main_content} ${classes.main_container})`}>
              <Outlet />
            </main>
        </section>
      </div>
    </TransactionProvider>
  )
}

export default Dashboard