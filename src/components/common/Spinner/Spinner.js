import React from 'react'
import spinner from '../../../assets/Spinner/loop-loading-loading.gif'
import spinnerStyel  from './Spinner.module.css'

function Spinner() {
  return (
    <div className={spinnerStyel.spinner}>
        <img src={spinner} className={spinnerStyel.gif}  alt='Loading...'/>
    </div>
  )
}

export default Spinner