import React from "react";
import classes from '../../screens/Wallet/Wallet.module.css'

const TabNavItem = ({ id, title, activeTab, setActiveTab, className }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? className : ""}>
     { title }
   </li>
 );
};
export default TabNavItem;