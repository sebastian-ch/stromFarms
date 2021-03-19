import React from 'react';
import alinaImg from '../imgs/alina-big.png'
import sebImg from '../imgs/seb-big.png'
import './about.css'

export default function About() {
  return (
  
  <div>
    <div className='gridWrap'>
      <h2>Meet the Farmers</h2>
      <div className='gridC'>
        <div className='aboutItem alina'>
          <img src={alinaImg} />
        </div>
        <div className='aboutItem seb'>
          <img src={sebImg} />
        </div>
        <div className='aboutItem alina-des'>Alina</div>
        <div className='aboutItem seb-des'>Sebastian</div>
      </div>

      <h2>Meet Our Animals</h2>
      <div className='animalGrid'>
        <h3>⭐Coming Soon⭐</h3>


        
      </div>
    </div>

  </div>
  
  );
}