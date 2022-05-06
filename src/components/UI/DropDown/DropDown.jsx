
import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './dropdown.module.css'

const DropDown = ({ setISeen, logout}) => {
  
  const navigate = useNavigate()

  const handleNav = (nav) => {
    setISeen(false);
    navigate(nav)
  }


  return (
    <div >
      <div className={classes.dropdown}>
        <ul>
          <li onClick={() => handleNav('/dashboard')}>Dashboard</li>
          <li onClick={logout} className={classes.list_item}>Logout</li>
        </ul>

      </div>

    </div>
  )
}

export default DropDown