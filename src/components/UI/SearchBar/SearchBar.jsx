import React from 'react'
import './SearchBar.css'
import FormInput from '../FormInput/Index'
import Button from '../Button'

import BuildingIcon from '../../../assets/images/building.svg'
import TravelIcon from '../../../assets/images/plane.svg'
import HeartIcon from '../../../assets/images/heart.svg'
import HouseIcon from '../../../assets/images/house.svg'
import DropDownIcon from '../../../assets/images/drop-down.svg'
import SearchIcon from '../../../assets/images/search.svg'


const SearchBar = () => {
  return (
    <section className='search_bar'>
        <div className='search_box'>
            <div className='search_box_options'>
                <div className='search_box_options1 accomo'>
                    <img src={ BuildingIcon } alt="an icon representing a building" />
                    <p>Box Accomodation</p>
                    <img src={DropDownIcon} alt=" a dropdown icon" />
                </div>

                <div className='search_box_options1 travel'>
                    <img src={TravelIcon} alt="a airplane icon" />
                    <p>Travel</p>
                </div>

                <div className='search_box_options1 trips'>
                    <img src={HeartIcon} alt="a heart icon" />
                    <p>Trips</p>
                </div>

                <div className='search_box_options1 house'>
                    <img src={HouseIcon} alt="a house icon" />
                    <p>Lease Shortlets</p>
                </div>
            </div>

            <div className='search_box_input'>
                <FormInput icon={<Button primary icon={ <img src={SearchIcon} /> } />} placeholder={'Quick search by type, city'} />
            </div>
        </div>
    </section>
  )
}

export default SearchBar