import React, { Fragment } from 'react'
import Button from '../../../UI/Button'
import AddMealButton from './AddMealButton'
// import classes from "./MealItem.module.css"
import classes from "./MealItem.module.css"
// import Button from './AddMealButton'


const MealItem = (props) => {
  return (
    <div className={classes.mealItem}>

        <div className={classes.mealDetails}>

          <h1 className={classes.mealName}>{props.name}</h1>
          <p className={classes.mealDescription}>{props.description}</p>
          <p className={classes.mealPrice}>{`$${props.price}`}</p>
          
        </div>

        <div className={classes.addMealBtn}>
          <AddMealButton/>
        </div>
    </div>
  )
}

export default MealItem