//U6899-7808
import React from 'react'
import './App.css' //Step 3: Added design in CSS
import {Gallery} from './Gallery.js';
import {useState} from 'react';

//Step 2: Crafting the Tours Display
export default function Display(){
  const [index, setIndex] = useState(0);
  const [detail, setDetails] = useState(false);
  const [cost, setCost] = useState(0);

    function handleClick(){
        setIndex(index + 1)
    }
    function handleDetailClick(){
      setDetails(!detail)
    }
    function handleCostClick(){
      setCost(!cost)
    }
    let Tour = Gallery[index]
 return(
  <div>
      <h1>Epic Tours Display</h1>
      <h2>{Tour.name}:</h2>
      <h3>({index + 1} of {Gallery.length})</h3>
      <center>
      <button onClick={handleClick}>Next</button>
      <button onClick={handleDetailClick}>{detail ? 'Show Less' : 'Read More'}</button>
      <button onClick={handleCostClick}>{cost ? 'Hide' : 'Show'} Cost</button>
      </center>
      {cost && <i>${Tour.price}</i>}
      {detail && <p>{Tour.info}</p>}
      <center>
      <img  src={Tour.image} alt={Tour.info}/>
      </center>
  </div>
 )
}
