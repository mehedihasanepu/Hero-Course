
import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Carts from './component/Carts/Carts'


function App() {
  const [carts, setCarts] = useState([])
  const [totalCreditHour, setTotalCreditHour] = useState(0)
  const [remaining, setRemaining] = useState(20)


  const handleAddToCarts = card => {
    const isExist = carts.find((course) => course.id == card.id);
    let totalCreditHour = card.credit;

    if (isExist) {
      return
    }

    else {
      carts.forEach(hour => { totalCreditHour = totalCreditHour + hour.credit })
      const remainingValue = 20 - totalCreditHour;


      if (totalCreditHour > 20) {
        return
      } else {
        setTotalCreditHour(totalCreditHour);

        setRemaining(remainingValue)

        const newCarts = [...carts, card];
        setCarts(newCarts)
      }
    }
  }

  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-center py-10'>Course Registration</h1>
      </header>
      <main className='md:flex gap-8'>
        <Cards handleAddToCarts={handleAddToCarts}  ></Cards>
        <Carts carts={carts} totalCreditHour={totalCreditHour} remaining={remaining}></Carts>
      </main>

    </>
  )
}

export default App
