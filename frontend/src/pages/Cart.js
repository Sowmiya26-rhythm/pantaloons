import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../store/cartslice/Cartslice';

const Cart = () => {
    const cartProducts=useSelector((state)=>state.cart.cartItems);
    const dispatch=useDispatch();

    const deleteCart=(item)=>{
        dispatch(deleteFromCart(item));
    }

  return (
    <div>
       
                <div class="cart01">
                    {cartProducts.map((item)=>(
                        <div class="cart02"key={item.id}>
                            <img src={item.img}/>
                            <h2 class="heading">{item.title}</h2>
                            <p class="heading01">{item.des}</p>
                            <h2>{item.price}</h2>
                            <button class="btn" onClick={()=>{deleteCart(item)}}>Delete</button>
                            </div>
                    )
                    )}

                </div>
    </div>
  )
}

export default Cart