import React, { useState } from 'react'
import './Header.css'

import Button from '../../../../components/UI/Button'
import FormInput from '../../../../components/UI/FormInput/Index'

//icons and images
import NotificationBell from '../../../../assets/images/notification.svg'
import DropDownIcon from '../../../../assets/images/drop-down.svg'
import SearchIcon from '../../../../assets/images/search.svg'

const SubHeader = () => {

    const [value, setValue] = useState('')
    const onInputChange = (e, key) => {
        setValue(e.target.value)
    }



  return (
      <>
      
    <div className='header_nav'>
        <div className='header_search'>
            <div className='input_box'>
                <input className='search_box_input'  onChange={onInputChange}  placeholder={'Search by type, name'} />
                <Button  className='btn' primary name='' iconPosition='right' icon={SearchIcon} />
            </div>
        </div>

        <div className='header_profile_items'>
            <img className='noti_bell' src={NotificationBell} alt="Notificaation bell" />
            
            <div className='user_id'>
                <div className='user_name'>Hi, Victor</div>
                <img className='dropdown_svg' src={DropDownIcon} alt="dropdown image" />
                <div className='avatar'></div>
            </div>
            
        </div>
        
    </div>

    </>
  )
}

export default SubHeader