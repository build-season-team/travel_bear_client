import React from 'react'
import './Footer.css'


import TravelLogo from '../../../assets/icons/logo-footer.svg'
import DribbleIcon from '../../../assets/icons/dribble.svg'
import InstagramIcon from '../../../assets/icons/instagram.svg'
import TwitterIcon from '../../../assets/icons/twitter.svg'
import YoutubeIcon from '../../../assets/icons/youtube.svg'

const FooterWrap = () => {
  return (
    <footer className='footer' >
        <div className='footer_container'>
            <div>
                <img src={TravelLogo} alt="TravelBear Logo" />
            </div>
            
            <div className='footer_links'>
                
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Help</a></li>
                    <li><a href="/">Partnership</a></li>
                </ul>
                   
            </div>
        </div>

       
         
         <div className='socials' >
            <div className='socials_paragraph'>
            © 2022 TravelBear. All rights reserved
            </div>

            <div  className='social_icons'>
                <ul>
                    <li><a href="/"> <img src={InstagramIcon} alt="" /> </a></li>
                    <li><a href="/"> <img src={DribbleIcon} alt="" /> </a></li>
                    <li><a href="/"> <img src={TwitterIcon} alt="" /> </a></li>
                    <li><a href="/"> <img src={YoutubeIcon} alt="" /> </a></li>
                </ul>
            </div>
            
            
         </div>
       
    </footer>
  )
}

export default FooterWrap