
import './App.css'
import Cards from './assets/component/Cards/Cards'
import Cart from './assets/component/Cart/Cart'

function App() {

  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-center py-10'>Course Registration</h1>
        <div className='md:flex gap-8'>
          <Cards></Cards>
          <Cart></Cart>
          </div>
      </header>
    </>
  )
}

export default App
