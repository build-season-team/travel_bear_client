import React from 'react'
import './HeroSection.css'
import HeroImage from '../../../assets/icons/hero-background.svg'

const HeroSection = () => {
  return (
    <section className='hero_section'>
        
        <div className='hero_section_background' >
            <div>
                <h3 className='hero_main_paragraph'>
                    Find The Best Hotels & Shortlets Around.
                </h3>
                <p className='hero_img_explainer' >
                Visit the most amazing places across Nigeria. Book shortlets
                apartments and enjoy the best experiences as you explore and have your dream vacation.
                </p>
            </div>
        </div>
        
        
    </section>
  )
}

export default HeroSection;