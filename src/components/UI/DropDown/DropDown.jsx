
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../store/authContext/AuthProvider'
import classes from './dropdown.module.css'

const DropDown = ({ setISeen, logout}) => {

  const {authState: {user}} = useContext(AuthContext)
  
  const navigate = useNavigate()

  const handleNav = (nav) => {
    setISeen(false);
    navigate(nav)
  }


  return (
    <div >
      <div className={classes.dropdown}>
        <ul>
          <li onClick={() => handleNav(`${user.role == 'admin' ? '/dashboard/verification' : '/dashboard'}`)}>Dashboard</li>
          <li onClick={logout} className={classes.list_item}>Logout</li>
        </ul>

      </div>

    </div>
  )
}

export default DropDown