import React from 'react'
import store from '../images/store.png';
import near from '../images/near.jpg';
import mall01 from '../images/mall01.jpg';
import spot from '../images/spot.jpg';
import green from '../images/green.webp';
import black from '../images/black.webp';
import full from '../images/full.webp';
import soild01 from '../images/soild01.jpg';
import white from '../images/white.webp';
import buy01 from '../images/buy01.jpeg';
import buy02 from '../images/buy02.jpeg';
import buy04 from '../images/buy04.jpeg';
import buy05 from '../images/buy05.jpeg';
import { CiShoppingTag } from "react-icons/ci";
import './Men.css'
import Shirt from '../product/Shirt';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
const Men = () => {
  // const cartProducts=useSelector((state)=>state.cart.cartItem)
  // const dispatch=useDispatch();

  // const addCart=(item)=>{
  //   dispatch(addToCart(item))
  // }
  // const deleteCart=(item)=>{
  //   dispatch(deleteFromCart(item))
  // }
  return (
    <div>
        <section class="men01">
            <div class="men02">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={store} class="d-block w-100" alt="store"/>
    </div>
    <div class="carousel-item">
      <img src={near} class="d-block w-100" alt="near"/>
    </div>
    <div class="carousel-item">
      <img src={mall01} class="d-block w-100" alt="mall01"/>
    </div>
    <div class="carousel-item">
      <img src={spot} class="d-block w-100" alt="spot"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           
            </div>
        </section>
        <section class="next01">
            <div class="next02">
            <div class="container">
  <div class="row">
    <div class="col-lg-2">
      {/* <div class="line"><img src={line}/></div> */}
    </div>
    <div class="col-lg-2">
    <div class="soild01"><img src={soild01}/></div>
    <p class="New">New Style</p>
    </div>
    <div class="col-lg-2">
    <div class="white"><img src={white}/></div>
    <p class="Tops">T-Shirts</p>
    </div>
    <div class="col-lg-2">
    <div class="full"><img src={full}/></div>
    <p class="Dresses">Shirts</p>
    </div>
    <div class="col-lg-2">
    <div class="green"><img src={green}/></div>
    <p class="Bottoms">Jeans</p>
    </div>
    <div class="col-lg-2">
    <div class="black"><img src={black}/></div>
    <p class="Winter">Winter Wear</p>
    </div>
  </div>
</div>
            </div>
        </section>
        <section class="dress01">
            <div class="dress02">
                <h4 class="style01">Styles Recommended for You</h4>
            </div>
        </section>
        <section class="map01">
          <div class="map02 ml-40">
          <div class="container">
          <div class="row">
          {Shirt.map((item)=>(
                              <div class="col-lg-3">
                              <div class="card space" key={item.id} >
                <img src={item.img} class="card-img-top" alt="Spicy"/>
                <div class="card-body s01">
                  <h5 class="card-title title01">{item.title}</h5>
                  <p class="abc">{item.des}</p>
                  <h6 class="price01">₹{item.price}</h6>
                  {/* {cartProducts.find(Items=>Items.id===Items.id)?(
                    <button class="btn my01" onClick={()=>{deleteCart(item)}}>Remove from Cart<CiShoppingTag /></button>)
                    :
                    (<button class="btn my01" onClick={()=>{addCart(item)}}>Add To Cart<CiShoppingTag /></button>)
} */}
                  
                  
                  
                  
                </div>
                </div>
                </div>
                
                ))}
                </div>
                </div>
          </div>
        </section>
        <section class="buy">
            <div class="buy00">
            <h4 class="shop019">Shop By Occasion</h4>
          <div class="container">
  <div class="row">
    <div class="col-lg-3">
    <img src={buy01} class="rounded-circle round04" alt="buy01"/>
    <p class="sleep">Sleep Bliss</p>
    </div>
    <div class="col-lg-3">
    <img src={buy02} class="rounded-circle round04" alt="buy02"/>
    <p class="shop013">Embroidered Fusion</p>
    </div>
    <div class="col-lg-3">
    <img src={buy04} class="rounded-circle round04" alt="buy04"/>
    <p class="trendy01">Mosaic Mirrage</p>
    </div>
    <div class="col-lg-3">
    <img src={buy05} class="rounded-circle round04" alt="buy05"/>
    <p class="wave">Patterned Weave </p>
    </div>
  </div>
</div>
          
          


          
            </div>
        </section>
    </div>
  )
}

export default Men