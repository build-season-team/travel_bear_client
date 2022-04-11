import React from 'react'
import { Link } from 'react-router-dom';

const Page = ({title, caption, link, path=null, ChildComponent=null, user=null, setState=null }) => {
  return (
    <div className='page'>
    
    <div className="box">
            <h2>{ title }</h2>
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