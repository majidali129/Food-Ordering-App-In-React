import React, {useContext} from 'react'
import CartContext from '../Store/CartContext'
import classes from './CartButton.module.css'

const CartButton = (props) => {

  const cartCtx = useContext(CartContext);
  // console.log(cartCtx)
  const numberOfAddedItems = cartCtx.items.reduce((curNumber , item )=>{ return(curNumber + item.amount)},0)
  // console.log(numberOfAddedItems)
  return (
    <>
    <button className={classes.cartButton} onClick={props.onShow}>
        <span className={classes.cartIcon} >{ <i className="bi bi-cart"></i> }</span>
        <span className={classes.cartStatusText}>Your Cart</span>
        <span className={classes.cartStatus}>{numberOfAddedItems}</span>
    </button>
    </>
  )
}

export default CartButton

