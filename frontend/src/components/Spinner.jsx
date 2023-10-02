import React from 'react'

//importing gif from folder
import spinner from '../assets/Gifs/spinner.gif'

const Spinner = () => {
  return (
    
    <div className='spinner'>
        <img src={spinner} alt="wating for data spinner" />
    </div>
   
  )
}

export default Spinner