import React from 'react'
import spinner from '../../../assets/Spinner/ajax-loading-gif-transparent-background-2.gif'
import spinnerStyel  from './Spinner.module.css'

function Spinners() {
  return (
    <div className={spinnerStyel.spinner}>
        <img src={spinner} className={spinnerStyel.gif}  alt='Loading...'/>
    </div>
  )
}

export default Spinners