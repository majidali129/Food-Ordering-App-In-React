import React from 'react'
import classes from './CartButton.module.css'

const CartButton = () => {
  return (
    <div className={classes.cartBtnSection}>
        <span className={classes.cartIcon}>Icon</span>
        <span className={classes.cartStatusText}>Your Cart</span>
        <span className={classes.cartStatus}>10</span>
    </div>
  )
}

export default CartButton