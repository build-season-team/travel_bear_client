import React from "react";
import classes from '../../screens/Wallet/Wallet.module.css'
 
const TabContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className={classes.TabContent}>
     { children }
   </div>
   : null
 );
};
 
export default TabContent;