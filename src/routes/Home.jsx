import React from 'react'
import HomeItem from '../components/HomeItem'
import img from '../assets/1.jpg'
import homeImg from '../assets/homeImg.png'

const Home = () => {
    const item = {
        id: '001',
            image: img,
            company: 'Carlton London',
            item_name: 'Rhodium-Plated CZ Floral Studs',
            original_price: 1045,
            current_price: 606,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.5,
                count: 1400,
            },
      }
  return (
    <div>
      {/* <main>
        <div className="items-container">
          <HomeItem item= {item} />
        </div>
    </main> */}
    <img src= {homeImg} alt="" className='homeImg'/>
    </div>
  )
}

export default Home
