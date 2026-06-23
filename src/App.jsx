import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  let [counter, SetCounter] = useState(0);
  let [message, SetMessage] = useState('');
  //use state returns value in array format variable counter(here) which stores value and another method setcounter (here) which is use to display the value in UI

  // let count = 5
  // function IncValue(){
  //   count = count+1;
  // }
  // function DesValue(){
  //   count = count-1;
  // }

  function IncValue(){
    if(counter<15){
      SetCounter(counter + 1)
      
    }
    else {
      SetMessage('Counter cannot be more than 15')
    }
  }

  function DesValue(){
    if(counter>0){
      SetCounter(counter - 1)
      
    }
    else {
      SetMessage('Counter cannot be less than 0')
    }
  }

  return (
    <>
      <h1>Hello jee</h1>
      <h2>Counter</h2>
      <br />

      <h3>Counter value : {counter}</h3>
      <button
          onClick = {IncValue}>Increase
          
      </button>

      <br />
      
      <button
          onClick = {DesValue}>Decrease
          
      </button>

      <p>{message}</p>

      <h1>The count is : {counter}</h1>
    </>
  )
}

export default App
