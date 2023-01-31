import React, {useReducer} from 'react';
import CartContext from './CartContext';


const defaultState = {
    items : [],
    totalAmount : 0,
}

const CartReducer = (state , action)=>{
    if(action.type ==='ADD'){
        const updateItems = state.items.concat(action.item)
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items : updateItems,
            totalAmount : updateAmount, 
        }
    }
    return defaultState
}
const ContextProvider = (props) => {

    const [cartState , dispathCartActions ] = useReducer(CartReducer , defaultState)


    const AddItemToCartHandler = (item)=>{
        dispathCartActions({type : 'ADD' , item : item})
    }


    const RemoveItemFromCartHandler = (id)=>{

    }


    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : AddItemToCartHandler,
        removeItem : RemoveItemFromCartHandler ,
    }
  return (
    <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default ContextProvider