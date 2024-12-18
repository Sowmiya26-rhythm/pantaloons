import React from 'react'
import store from '../images/store.png';
import near from '../images/near.jpg';
import mall01 from '../images/mall01.jpg';
import spot from '../images/spot.jpg';
import line from '../images/line.jpg';
import line01 from '../images/line01.jpg';
import line03 from '../images/line03.avif';
import line04 from '../images/line04.avif';
import line05 from '../images/line05.webp';
import line06 from '../images/line06.jpg';
import sleep from '../images/sleep.jpeg';
import shop01 from '../images/shop01.jpeg';
import trendy01 from '../images/trendy01.jpeg';
import { CiShoppingTag } from "react-icons/ci";
import wave from '../images/wave.jpeg';
import './Women.css'
import Dress from '../product/Dress';
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice';
import { useDispatch, useSelector} from 'react-redux';

const Women = () => {
  const cartProducts=useSelector((state)=>state.cart.cartItems)
  const dispatch=useDispatch();

  const addCart=(item)=>{
    dispatch(addToCart(item))
  }
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
  }
  return (
    <div>
        <section class="women01">
            <div class="women02">
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
    <div class="line01"><img src={line01}/></div>
    <p className="New">New Style</p>
    </div>
    <div class="col-lg-2">
    <div class="line03"><img src={line03}/></div>
    <p className="Tops">Tops</p>
    </div>
    <div class="col-lg-2">
    <div class="line04"><img src={line04}/></div>
    <p className="Dresses">Dresses</p>
    </div>
    <div class="col-lg-2">
    <div class="line05"><img src={line05}/></div>
    <p className="Bottoms">Bottoms</p>
    </div>
    <div class="col-lg-2">
    <div class="line06"><img src={line06}/></div>
    <p className="Winter">Winter Wear</p>
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
          {Dress.map((item)=>(
                              <div class="col-lg-3">
                              <div class="card space" key={item.id} >
                <img src={item.img} class="card-img-top" alt="Spicy"/>
                <div class="card-body s01">
                  <h5 class="card-title title01">{item.title}</h5>
                  <p class="abc">{item.des}</p>
                  <h6 class="price01">₹{item.price}</h6>
                  {cartProducts.find(Items=>Items.id===item.id)?(
                  <button class="btn my01" onClick={()=>{deleteCart(item)}}>Remove From Cart <CiShoppingTag /></button>)
                  :
                  (<button class="btn my01" onClick={()=>{addCart(item)}}>Add To Cart<CiShoppingTag /></button>)
                  
}
                </div>
                </div>
                </div>
                
                ))}
                </div>
                </div>
          </div>
        </section>
        <section class="round">
        
          <div class="round01">
            <h4 class="shop01">Shop By Occasion</h4>
          <div class="container">
  <div class="row">
    <div class="col-lg-3">
    <img src={sleep} class="rounded-circle round04" alt="sleep"/>
    <p class="sleep">Sleep Bliss</p>
    </div>
    <div class="col-lg-3">
    <img src={shop01} class="rounded-circle round04" alt="shop01"/>
    <p class="shop013">Embroidered Fusion</p>
    </div>
    <div class="col-lg-3">
    <img src={trendy01} class="rounded-circle round04" alt="trendy01"/>
    <p class="trendy01">Mosaic Mirrage</p>
    </div>
    <div class="col-lg-3">
    <img src={wave} class="rounded-circle round04" alt="wave"/>
    <p class="wave">Patterned Weave </p>
    </div>
  </div>
</div>
          
          


          </div>
          
        </section>
    </div>
  )
}

export default Women
