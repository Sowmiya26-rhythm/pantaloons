import { createSlice } from "@reduxjs/toolkit";


const storedItems=localStorage.getItem('cartItems')
const initialState={
    cartItems:storedItems?JSON.parse(storedItems):[]
};
const CartSlice= createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItem=action.payload
            const existingItem=state.cartItems.find(Items=>Items.id ===newItem.id)
            if(existingItem){
                existingItem.quantity=newItem.quantity
            }else
            {
                state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    img:newItem.img,
                    des:newItem.des,
                    price:newItem.price
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        deleteFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(Items=>Items.id !==action.payload.id);
            localStorage.setItem("cartItems=",JSON.stringify(state.cartItems));

        },
    }
})
export default CartSlice.reducer
export const{addToCart,deleteFromCart,}=CartSlice.actions