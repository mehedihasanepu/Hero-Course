
import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Carts from './component/Carts/Carts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts, setCarts] = useState([])
  const [totalCreditHour, setTotalCreditHour] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const [totalPrices, setTotalPrices] = useState(0)


  const handleAddToCarts = card => {
    const isExist = carts.find((course) => course.id == card.id);
    let totalCreditHour = card.credit;
    let coursePrice = card.price;

    if (isExist) {
      return toast.warning("This course already added");
    }

    else {
      carts.forEach(hour => { totalCreditHour = totalCreditHour + hour.credit; coursePrice = coursePrice + hour.price; })
      const remainingValue = 20 - totalCreditHour;


      if (totalCreditHour > 20) {
        return toast.error("you can't add more then 20 credit ");
      } else {
        setTotalCreditHour(totalCreditHour);
        setRemaining(remainingValue)
        setTotalPrices(coursePrice)

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
        <Carts carts={carts} totalCreditHour={totalCreditHour} remaining={remaining} totalPrices={totalPrices}></Carts>
      </main>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
