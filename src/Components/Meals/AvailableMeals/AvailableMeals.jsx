import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../../../UI/Card'
import MealItem from '../MealItems/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  }
];

const AvailableMeals = () => {
  return (
    <Card className={classes.availableMeals}>
      {
        DUMMY_MEALS.map((meal)=>{
          return(<MealItem name={meal.name} key={meal.id} id={meal.id} price={meal.price} description={meal.description}/>)
        })
      }
    </Card>
  )
}

export default AvailableMeals