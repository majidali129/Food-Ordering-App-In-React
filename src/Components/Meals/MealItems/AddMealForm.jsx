import React, { useRef } from 'react'
import Button from '../../../UI/Button'
import Input from '../../../UI/Input'
import classes from "./AddMealForm.module.css"

const AddMealForm = (props) => {
  const inputAmountRef = useRef()

  const formSubmitHandler = (event)=>{
    event.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    props.onAddToCart(enteredAmountNumber)

  }
  return (

    <form className={classes.addMealForm} onSubmit={formSubmitHandler}>
      <Input
      ref={inputAmountRef}
      label="Amount"
      Input={{
        type:'number',
        id:'amount',
        min:'0',
        max:'5',
        step:'1',
        defaultValue:'1',
      }}
      />

      <Button type="submit">+ Add</Button>

    </form>
  )
}

export default AddMealForm