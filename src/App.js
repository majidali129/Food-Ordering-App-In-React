import React, { useState } from 'react'
import Cart from './Cart/Cart'
import Header from './Components/Header/Header'
import AvailableMeals from './Components/Meals/AvailableMeals/AvailableMeals'
import ContextProvider from './Store/ContextProvider'

const App = () => {

  const [showModal , setShowModal] = useState(false)

    const ShowModalhandler = ()=>{
        setShowModal(true)
    }

    const HideModalHandler = ()=>{
        setShowModal(false)
    }

  return (
    <ContextProvider >
      {showModal && <Cart  onHide={HideModalHandler}/> }
      <Header onShow={ShowModalhandler} />
      <AvailableMeals/>
    </ContextProvider>
  )
}

export default App