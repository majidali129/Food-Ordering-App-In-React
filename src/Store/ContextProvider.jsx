import React, {useReducer} from 'react';
import CartContext from './CartContext';


const defaultState = {
    items : [],
    totalAmount : 0,
}

const CartReducer = (state , action)=>{
    if(action.type ==='ADD'){
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingCartItemIndex = state.items.findIndex((item)=>{
            return item.id === action.item.id
        });
        const existingCartItem = state.items[existingCartItemIndex]

        // let updatedItem;
        let updatedItems;

        if(existingCartItem){

           const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount 
            };

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            // updatedItem = {...action.item}
            updatedItems = state.items.concat(action.item)
        }

        return {
            items : updatedItems,
            totalAmount : updateAmount, 
        };
    }

    if(action.type === 'REMOVE'){
        
        const existingCartItemIndex = state.items.findIndex((item)=>{
            return item.id === action.id
        });
        const existingCartItem = state.items[existingCartItemIndex];
        
        if(existingCartItem){
            const updateAmount = state.totalAmount - existingCartItem.price;

            let updatedItems ;

            if(existingCartItem.amount === 1 ){
                updatedItems = state.items.filter(item => item.id !== action.id)
            }else{
                const updatedItem = {...existingCartItem , amount : existingCartItem.amount - 1}
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return{
                items : updatedItems,
                totalAmount : updateAmount
            }

        }
    }
    return defaultState
}
const ContextProvider = (props) => {

    const [cartState , dispatchCartActions ] = useReducer(CartReducer , defaultState)


    const AddItemToCartHandler = (item)=>{
        dispatchCartActions({type : 'ADD' , item : item})
    }


    const RemoveItemFromCartHandler = (id)=>{
        dispatchCartActions({type : 'REMOVE' , id : id})
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