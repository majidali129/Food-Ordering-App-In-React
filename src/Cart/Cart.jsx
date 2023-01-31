import React from 'react'
import classes from "./Cart.module.css"
import Modal from './Modal'

const Cart = (props) => {
  return (
    <Modal onHide={props.onHide}>
        <div >

        <div className={classes.cartAmountDetails}>

            <h2  className={classes.itemName}>Cart Item </h2>
            <div className={classes.cartTotals}>
                <span className={classes.totalAmountText}>Total Amount</span> 
                <span className={classes.totalAmount}>$34.34</span>
            </div>
        </div>

        <div className={classes.cartButtons}>
            <button className={classes.close_btn} onClick={props.onHide}>Close</button>
            <button className={classes.order_btn}>Order</button>
        </div>

        </div>
        
    </Modal>
  )
}

export default Cart