import React, { useContext, useState } from 'react'
import './Header.css'

import Button from '../../../../components/UI/Button'
import FormInput from '../../../../components/UI/FormInput/Index'

//icons and images
import NotificationBell from '../../../../assets/images/notification.svg'
import DropDownIcon from '../../../../assets/images/drop-down.svg'
import SearchIcon from '../../../../assets/images/search.svg'

import { MdOutlineNotes } from 'react-icons/md'
import { AuthContext } from '../../../../store/authContext/AuthProvider'

const SubHeader = () => {

    const [dropMenuIsVisible, setDropMenuIsVisible] = useState(false);

    const showDropMenu = ()=> {
        setDropMenuIsVisible(true);
    }
    const {authState: {user}} = useContext(AuthContext)

    const [value, setValue] = useState('')
    const onInputChange = (e, key) => {
        setValue(e.target.value)
    }



  return (
      <>
      
        <div className='header_nav'>
            

            <div className='header_profile_items'>
                <img className='noti_bell' src={NotificationBell} alt="Notificaation bell" />
                
                <div className='user_id'>
                    <div className='user_name'>Hi, {user.firstName}</div>
                    <img className='dropdown_svg' src={DropDownIcon} alt="dropdown image" />
                    <div className='avatar'></div>
                </div>
                
            </div>
            
        </div>

    </>
  )
}

export default SubHeader