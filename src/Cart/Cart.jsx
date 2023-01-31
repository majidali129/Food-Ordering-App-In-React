import React, {useContext} from 'react'
import classes from "./Cart.module.css"
import Modal from './Modal'
import CartItem from './CartItem';
import CartContext from '../Store/CartContext';


const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const cartItemAddHandler = (item)=>{
    cartCtx.addItem(item)
  }
  const cartItemRemoveHandler = (id)=>{
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul>
      {cartCtx.items.map((item)=>(
        <CartItem key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        
        />
      ))}
    </ul>
  )
  return (
    <Modal onHide={props.onHide}>
        <div >

        <div className={classes.cartAmountDetails}>

            <h2  className={classes.itemName}>{cartItems}</h2>

            <div className={classes.cartTotals}>
                <span className={classes.totalAmountText}>Total Amount</span> 
                <span className={classes.totalAmount}>{totalAmount}</span>
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