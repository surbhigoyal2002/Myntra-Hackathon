import React from 'react'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'

const Features = () => {
  return (
    <div className='feature-container'>
      <div className='feature'>
        <img src={img1} alt="" className='feature-img'/>
        <h4 className='feature-descp'>UPLOAD YOUR OWN STYLING</h4>
      </div>
      <div className='feature'>
        <img src={img2} alt="" className='feature-img'/>
        <h4 className='feature-descp'>EMBRACE YOUR BODY TYPE</h4>
      </div>
      <div className='first'>
        <img src={img3} alt="" className='feature-img'/>
        <h4 className='feature-descp'>CHOOSE YOUR BEAUTIFUL SKIN</h4>
      </div>
      <div className='feature'>
        <img src={img4} alt="" className='feature-img'/>
        <h4 className='feature-descp'>EVENTS AND REGIONS</h4>
      </div>
    </div>
  )
}

export default Features
