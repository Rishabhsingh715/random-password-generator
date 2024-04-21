import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-white'>Random password generator</h1>

      <div className='text-white w-100 h-9 bg-white rounded mb-4'>  </div>
      <div className='flex flex-row gap-5 text-white'>
      <input type="range" name="" id="" />Length
      <input type="checkbox" name="" id="" />Number
      <input type="checkbox" name="" id="" />Character
      </div>

    </>
  )
}

export default App
