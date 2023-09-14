
import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Carts from './component/Carts/Carts'

function App() {
  const [carts, setCarts] = useState([])
  const [totalCreditHour, setTotalCreditHour]=useState(0)


  const handleAddToCarts = card => {
    let totalCreditHour = card.credit;
    carts.forEach(hour => { totalCreditHour = totalCreditHour+ hour.credit })
    setTotalCreditHour(totalCreditHour);
    console.log(totalCreditHour);

    const newCarts = [...carts, card];
    setCarts(newCarts)
  }
  // const handleTotalCreditHour= hour=>{
  //   console.log('houre');
  // }

  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-center py-10'>Course Registration</h1>
      </header>
      <main className='md:flex gap-8'>
        <Cards handleAddToCarts={handleAddToCarts}  ></Cards>
        <Carts carts={carts} totalCreditHour={totalCreditHour}></Carts>
      </main>
    </>
  )
}

export default App
