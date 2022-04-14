import {useState} from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css'
import Sidebarimage from '../../assets/images/logo.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Wallet from '../../assets/images/wallet.svg'
import Shortlet from '../../assets/images/shortlet.svg'
import Logout from '../../assets/images/logout.svg'



function Side_bar() {
  
    return (
  
      
      <div>
         <div className='Side_bar'>
              <img className='logo' src={Sidebarimage} alt="Logo" />
             
              <div className='Bars'>

              <div className=' Dash'>
              <img className='pic' src={Dashboard} alt="Dashboard"/>
              <h4 className='dash'>Dashboard</h4>
              </div>

              <div className='Wallet'>
              <img className='pic' src={Wallet} alt="Wallet"/>
              <h4 className='dash'>Wallet</h4>
              </div>

              <div className='Shortlet'>
              <img className='pic' src={Shortlet} alt="Shortlet"/>
              <h4 className='dash'>Shortlet</h4>
              </div>

              <div className='logout'>
                  <img className='pic' src={Logout} alt='Logout'/>
                  <h4 className='dash'>Logout</h4>
              </div>

              </div>
                </div>
         
      </div>
  
  
    );
  
  }

  export default Side_bar
  