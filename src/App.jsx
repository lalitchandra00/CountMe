import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {

  let count = 5
  function IncValue(){
    count = count+1;
  }
  function DesValue(){
    count = count-1;
  }


  return (
    <>
      <h1>Hello jee</h1>
      <h2>Counter</h2>
      <br />

      <h3>Counter value : {count}</h3>
      <button
      onClick = {IncValue}>Increase</button>
      <br />
      <button
      onclick = {DesValue}>Decrease</button>~
    </>
  )
}

export default App
