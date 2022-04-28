import React, {useState} from 'react'
import './SearchBar.css'
import FormInput from '../FormInput/Index'
import Button from '../Button'

import BuildingIcon from '../../../assets/images/building.svg'
import TravelIcon from '../../../assets/images/plane.svg'
import HeartIcon from '../../../assets/images/heart.svg'
import HouseIcon from '../../../assets/images/house.svg'
import DropDownIcon from '../../../assets/images/drop-down.svg'
import SearchIcon from '../../../assets/images/search.svg'
import { useNavigate } from 'react-router-dom'


const SearchBar = () => {

    const [select, setSelect]=useState();

    const [value, setValue] = useState('')
    const handleClick = ()=> setSelect({});
    const navigate = useNavigate()

    const onInputChange = (e, key) => {
        setValue(e.target.value)
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  return (
    <section className='search_bar'>
        <div className='search_box'>
            <div className='search_box_options'>
                <div className='search_box_options1 accomo' onClick={()=> handleClick}>
                    <img src={ BuildingIcon } alt="an icon representing a building" />
                    <p>Book Accomodation</p>
                    <img src={DropDownIcon} alt=" a dropdown icon" />
                </div>

                {/* <div className='select_options'>
                    <ul>
                        <li>Hotels</li>
                        <li>Shortlets</li>
                    </ul>
            
                </div> */}

                <div className='search_box_options1 travel'>
                    <img src={TravelIcon} alt="a airplane icon" />
                    <p>Travel</p>
                </div>

                <div className='search_box_options1 trips'>
                    <img src={HeartIcon} alt="a heart icon" />
                    <p>Trips</p>
                </div>

                <div className='search_box_options1 house' onClick={() => navigate('/terms')}>
                    <img src={HouseIcon} alt="a house icon" />
                    <p>Lease Shortlets</p>
                </div>
            </div>

            <div className='search_box_input'>
                <div className='input_box'>
                    <input className='search_box_input'    onChange={onInputChange}  placeholder={'Quick search by type, city'} />
                    <Button  className='btn' primary name='' iconPosition='right' icon={SearchIcon} />
                </div>
            </div>
        </div>  

        
    </section>
  )
}



export default SearchBar