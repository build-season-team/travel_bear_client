import React from 'react'
import classes from './select.module.css'
const select = () => {
  return (

<div className={classes.main}>
 <select name="pets" id="pet-select">
    <option value="">Please choose an option</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
 </select>
 </div>
  )
}

export default select