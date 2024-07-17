//U6899-7808
import './App.css'
import {Gallery} from './Gallery.js'

export default function Display(){
  let index = 0;

    function handleClick(){
        index = index + 1;
    }
    let Tour = Gallery[index]
 return(
  <div>
      <h1>Epic Tours Display</h1>
      <h2>{Tour.name}</h2>
      <h3>({index + 1} of {Tour.length})</h3>
      <img  src={Tour.image} alt={Tour.info}/>
      <p>{Tour.info}</p>
      <button onClick={handleClick}></button>
  </div>
 )
}
