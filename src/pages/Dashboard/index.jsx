import React, { useState, useContext } from 'react'
import classes from './Dashboard.module.css'

import SubHeader from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

import { MdOutlineNotes } from 'react-icons/md'

import { Outlet, useParams } from 'react-router-dom'
import TransactionProvider from '../../store/transactionContext/TransactionProvider'


const Dashboard = () => {

  const [dropMenuIsVisible, setDropMenuIsVisible] = useState(false);

  const showSidebar = () =>{
    setDropMenuIsVisible( <SideBar /> )
  }

  const params = useParams();

  return (
    <div className={classes.dashboard_screen}> 
    <div>
        <SideBar setShow={setDropMenuIsVisible} show={dropMenuIsVisible} className={classes.sidebar} />
    </div>
      
      <section className={classes.dashboard_sub_screen}>
          <div className={classes.dash_header}>
              <div className={classes.hamburger_menu} onClick={() => setDropMenuIsVisible(true)}>
                  <MdOutlineNotes size={'2.2rem'} />
              </div>
                { params.sub ? null : <SubHeader /> }
          </div> 

          <main className={`${classes.dashboard_main_content} ${classes.main_container})`}>
            <Outlet />
          </main>
      </section>
    
    
    
    </div>
  )
}

export default Dashboard