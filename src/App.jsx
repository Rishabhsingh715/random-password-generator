import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('Not generated yet')
  const [length, setLength] = useState(0)
  const [numberAccepted, setNumberAccepted] = useState(0)
  const [charAccepted, setCharAccepted] = useState(0)

  useEffect(()=>{
    console.log('found change');
    changePassword()
  },[charAccepted, numberAccepted, length])
 
   const changePassword = useCallback(()=>{
    console.log('password changed called');
    setPassword(Math.random())
  },[charAccepted, numberAccepted, length])

  return (
    <>
      <h1 className='text-white'>Random password generator</h1>

      <div className='text-white w-100 h-9 bg-white rounded mb-4'> 
        <p className='text-black' >{password}</p>
       </div>

      <div className='flex flex-row gap-5 text-white'>

        <input type="range" name="" id="" onClick={(e)=> setLength(e.target.value)}/>Length

        <input type="checkbox" name="" id="" onChange={(e)=> setNumberAccepted((prev) => !prev)}/>Number

        <input type="checkbox" name="" id="" onChange={(e)=> setCharAccepted((prev) => !prev)}/>Character

      </div>

    </>
  )
}

export default App
