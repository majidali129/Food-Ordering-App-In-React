import React from 'react'
import classes from "./MealSummary.module.css"

const MealSummary = () => {
  return (
    <div className={classes.mealSummary}>
      <h1> Delicious Food, Delivered To You</h1>
      <p className={classes.para1}>Choose Your Favourite meal from your based selection of available meals and enjoy a delicious lunch or dinner at home.</p>
      <p className={classes.para2}>All our meals are coocked with high-quality ingredients, just in time and of course by experience chefs!</p>
    </div>
  )
}

export default MealSummary