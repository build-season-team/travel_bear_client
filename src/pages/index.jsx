import React from 'react'
import { Link } from 'react-router-dom';
import BigHouse from '../assets/icons/big-house.svg'
import Travel from '../assets/icons/travel.svg'

import './authentication/authentication.css'

const Page = ({title, caption, link, path=null, ChildComponent=null, user=null, setState=null }) => {
  return (
    <div className='page'>

        <div className="page-illustration">
            <img src={BigHouse} style={{"--shift": "-200"}} />
            <img src={Travel} style={{"--shift": "200"}} />
        </div>
    
        <div className="box">
            <p style={{fontWeight: '700', fontSize:'3.2rem'}}>{ title }</p>
            {/* <span>{ caption }</span> */}

            {
                ChildComponent ? <ChildComponent user={user} setUser={setState} /> : null
            }

        <Link to={path}>{link}</Link>

        </div>
    
    </div>

    
  )
}

export default Page