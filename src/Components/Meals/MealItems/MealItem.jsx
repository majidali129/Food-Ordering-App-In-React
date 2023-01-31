import React from 'react'
import { useContext } from 'react'
import AddMealForm from './AddMealForm'
import classes from "./MealItem.module.css"
import CartContext from '../../../Store/CartContext'


const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  const cartCtx = useContext(CartContext)

  const AddToCartHandler = (amount)=>{
    // console.log(amount)
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price,
    })
  }

  return (
    <div className={classes.mealItem}>

        <div className={classes.mealDetails}>
          <h1 className={classes.mealName}>{props.name}</h1>
          <p className={classes.mealDescription}>{props.description}</p>
          <p className={classes.mealPrice}>{price}</p>
        </div>

        <div className={classes.addMealBtn}>
          <AddMealForm onAddToCart={AddToCartHandler}/>
        </div>
    </div>
  )
}

export default MealItem