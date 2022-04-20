import React, { useContext, useEffect } from 'react'
// import { Link } from 'react-router-dom';
import BigHouse from '../../assets/icons/big-house.svg'
import Travel from '../../assets/icons/travel.svg'
import Header from '../../components/UI/Header'
import Toast from '../../components/UI/Toast'
import { AuthContext } from '../../store/authContext/AuthProvider'

import './authentication.css'



const Page = ({title, caption, link, path=null, ChildComponent=null, user=null, setState=null }) => {

  const {authState: {message, error}} = useContext(AuthContext);
  return (
    <div className='auth__page'>
        <div className="page__header">
            {message && <Toast emoji='🤗' message={message} success />}
            {error && <Toast emoji='😱' message={error} danger />}
            <Header />
          </div>
        <div className='page'>
        
            <div className="box">
                <p style={{fontWeight: '700', fontSize:'3.2rem', marginTop: '-3rem'}}>{ title }</p>
                {/* <span>{ caption }</span> */}

                {
                    ChildComponent ? <ChildComponent user={user} setUser={setState} /> : null
                }

            {/* <Link style={{marginTop: '1.5rem'}} to={path}>{link}</Link> */}

            </div>
        
        </div>
    </div>

    
  )
}

export default Page