import React from 'react'
import Button from '../../../UI/Button'
import classes from "./AddMealButton.module.css"

const AddMealButton = () => {
  return (
    <div className={classes.addMealButton}>
        <div className={classes.itemSelectionSection}>
            <label htmlFor="amount">Amount</label>
            <input className={classes.amountField} type="number"  id="amount" min={1} max={5} />
        </div>
        <Button>+ Add</Button>

    </div>
  )
}

export default AddMealButton