import React from 'react'
import '../style/loader.css'

const Loader = ({isLoading}) => {
  if(!isLoading){
    return null;
  }
  return (
    <div>
      <span className='loader'></span>
    </div>
  )
}

export default Loader
