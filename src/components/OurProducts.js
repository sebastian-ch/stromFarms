import React from 'react';
import './products.css'

import artichoke from '../imgs/crops/Artichoke.png'
import cauli from '../imgs/crops/Cauliflower.png' 
import coffee from '../imgs/crops/Coffee_Bean.png' 
import corn from '../imgs/crops/Corn.png' 
import eggplant from '../imgs/crops/Eggplant.png' 
import garlic from '../imgs/crops/Garlic.png'

import cheese from '../imgs/crops/cheese-new.png' 
import milk from '../imgs/crops/milk.png' 
import brownEgg from '../imgs/crops/brown-egg.png' 
import whiteEgg from '../imgs/crops/white-egg.png' 
import mayo from '../imgs/crops/mayo.png'

export default function OurProducts() {

  const veggies = [artichoke, cauli, coffee, corn, eggplant, garlic];
  const dairy = [cheese, milk, brownEgg, whiteEgg, mayo]

  return (
  <div className='productsWrap'>

    <h2>Our Vegetables</h2>
  
    <div className='products'>
      {veggies.map((val, index) => {
        return <img key={index} className='productPic' src={val} />
      })}
    </div>

    <h2>Award Winning Dairy</h2>
    <div className='products'>
      {dairy.map((val, index) => {
        return <img key={index} className='productPic' src={val} />
      })}
    </div>

    </div>
    
  );
}