import React from "react";
import classes from '../../screens/Wallet/Wallet.module.css'

const TabNavItem = ({ id, title, activeTab, setActiveTab, className, getFunc }) => {
 
 const handleClick = () => {
   setActiveTab(id);
   if(getFunc) {
     getFunc()
   }
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? className : ""}>
     { title }
   </li>
 );
};
export default TabNavItem;