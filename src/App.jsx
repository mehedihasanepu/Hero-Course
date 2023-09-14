
import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Carts from './component/Carts/Carts'

function App() {
  const [carts, setCarts] = useState([])
  const handleAddToCarts = card => {
    const newCarts = [...carts, card];
    setCarts(newCarts)
  }
  console.log(carts.length);
  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-center py-10'>Course Registration</h1>
      </header>
      <main className='md:flex gap-8'>
        <Cards handleAddToCarts={handleAddToCarts}></Cards>
        <Carts carts={carts}></Carts>
      </main>
    </>
  )
}

export default App
