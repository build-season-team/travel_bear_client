import React from 'react'
import './HeroSection.css'
import HeroImage from '../../../assets/images/hero-background.svg'

const HeroSection = () => {
  return (
    <section className='hero_section'>
        
        <div className='hero_section_background' style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: "cover", backgroundPosition: "50%" }} >
            <div>
                <p className='hero_main_paragraph'>
                    Find The Best Hotels & Shortlets Around.
                </p>
                <p className='hero_img_explainer' >
                Visit the most amazing places across Nigeria. Book hotels, 
                shortlets and enjoy the best experiences as you explore and have your dream vacation.
                </p>
            </div>
        </div>
        
        
    </section>
  )
}

export default HeroSection;