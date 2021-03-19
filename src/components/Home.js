import React from 'react';
import './home.css'
import asgreen from '../imgs/as-green.jpg'

export default function Home() {
  return (
    <div>
      <div className='home'>
        <div className='item pic'></div>
        <div className='item words'>
          <ul>
            <li>Quality Products</li>
            <li>Organically Grown</li>
            <li>Harvested with &#10084;</li>
          </ul>
            
          </div>
        </div>
        <div className='home 2'>
          <div className='item words'>
            Four Seasons of Produce
              
            </div>
          <div className='item pic2'></div>
        
        </div>

        <div className='home 3'>
        <div className='item pic3'></div>
          <div className='item words'>
            Family Owned and Operated
              
            </div>
          
        
        </div>
      

    </div>
  )
}