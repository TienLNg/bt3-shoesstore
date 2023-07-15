import { useState } from 'react'

import './App.css'
import Shoesstore from './shoes-store/shoes-store'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Shoesstore></Shoesstore>
    </>
  )
}

export default App
