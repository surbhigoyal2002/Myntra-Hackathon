import React from 'react'
import topimg from '../assets/topImage.png'

const Top = () => {
  return (
    <div className='top-container'>
      <img src={topimg} alt="" className='top-img'/>
      <h2 className='top-heading'>LET'S CREATE YOUR OWN WARDROBE !</h2>
    </div>
  )
}

export default Top
