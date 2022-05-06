import React from 'react'
import classes from'./Shortlets.module.css'
import Shortlet from '../../components/Shortlet/Shortlet'
import Select from 'react-select'




const Shortlets = ({user}) => {

  const options = [
    { value: 'all', label: 'All' },
    { value: 'verified', label: 'Verified' },
    { value: 'unverified', label: 'Unverified' }
  ]

  // select styling

  const styles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderRadius: '0',
      color: "#000",
      padding: '2rem 5rem 2rem 1rem',
  
  }),
  control: (_, { selectProps: { width }}) => ({
    width: "max-content",
    display:"flex",
    // padding:'5rem',
    borderRadius: '5rem',
    border:"1px solid #4B5563",
  }),
  option: (provided, state) =>({
    ...provided,
    // width: 'fit-content',
    borderBottom: '1px solid #E0E2E7'
  }),
  menulist: (provided, state) =>({
    ...provided,
    width: 'max-content',
    border: '1px solid red'
  }),

  

}
  
  return (
    <>
    
      <div className={classes.main_container}>

        <div className={classes.container_title}>
          <p>My Shortlets</p>
          <div className={classes.option_select}><p>Filter: </p><Select styles={styles} options={options}/></div>
        </div>

        {user.apartments.map((apartment, i) => ( < div className = { classes.shortlet_container } >
          <Shortlet isenabled={apartment.isEnabled} key={i} verified={apartment.isVerified} houseOwner amount={apartment.amount} title={apartment.houseTitle} image={apartment.image[0]} description={apartment.description} statustitle={'Status:'} status={'Public'} />
                                                </div>))
        }

      </div>
    </>
  )
}

export default Shortlets