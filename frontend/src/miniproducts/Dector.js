import React from 'react'
import new10 from '../images/new10.webp';
import new11 from '../images/new11.webp';
import new66 from '../images/new66.webp';
import new77 from '../images/new77.webp';
import hello01 from '../images/hello01.png';
import hello02 from '../images/hello02.png';
import hello03 from '../images/hello03.png';
import hello06 from '../images/hello06.png';
import baby from '../images/baby.png';
import clothes01 from '../images/clothes01.jpeg';
import clothes02 from '../images/clothes02.jpeg';
import clothes03 from '../images/clothes03.jpeg';
import clothes04 from '../images/clothes04.jpeg';
import { CiShoppingTag } from "react-icons/ci";
import './Dector.css'
import Small from '../product/Small';
import Jeans from '../product/Jeans';
const Dector = () => {
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
      <img src={new10} class="d-block w-100" alt="new10"/>
    </div>
    <div class="carousel-item">
      <img src={new11} class="d-block w-100" alt="new11"/>
    </div>
    <div class="carousel-item">
      <img src={new66} class="d-block w-100" alt="new66"/>
    </div>
    <div class="carousel-item">
      <img src={new77} class="d-block w-100" alt="new77"/>
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
    <div class="hello01"><img src={hello01}/></div>
    <p class="New">New Style</p>
    </div>
    <div class="col-lg-2">
    <div class="hello02"><img src={hello02}/></div>
    <p class="Tops">T-Shirts</p>
    </div>
    <div class="col-lg-2">
    <div class="hello03"><img src={hello03}/></div>
    <p class="Dresses">Shirts</p>
    </div>
    <div class="col-lg-2">
    <div class="hello06"><img src={hello06}/></div>
    <p class="Bottoms">Jeans</p>
    </div>
    <div class="col-lg-2">
    <div class="baby"><img src={baby}/></div>
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
          {Small.map((item)=>(
                              <div class="col-lg-3">
                              <div class="card space" key={item.id} >
                <img src={item.img} class="card-img-top" alt="Spicy"/>
                <div class="card-body s01">
                  <h5 class="card-title title01">{item.title}</h5>
                  <p class="abc">{item.des}</p>
                  <h6 class="price01">₹{item.price}</h6>
                  <button class="btn my01">Add to cart<CiShoppingTag /></button>
                  
                  
                  
                </div>
                </div>
                </div>
                
                ))}
                </div>
                </div>
          </div>
        </section>
        <section class="map01">
          <div class="map02 ml-40">
          <div class="container">
          <div class="row">
          {Jeans.map((item)=>(
                              <div class="col-lg-3">
                              <div class="card space" key={item.id} >
                <img src={item.img} class="card-img-top" alt="Spicy"/>
                <div class="card-body s01">
                  <h5 class="card-title title01">{item.title}</h5>
                  <p class="abc">{item.des}</p>
                  <h6 class="price01">₹{item.price}</h6>
                  <button class="btn my01">Add to cart<CiShoppingTag /></button>
                  
                  
                  
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
    <img src={clothes01} class="rounded-circle round04" alt="clothes01"/>
    <p class="Pop">Outdoor Pop</p>
    </div>
    <div class="col-lg-3">
    <img src={clothes02} class="rounded-circle round04" alt="clothes02"/>
    <p class="Joy">Harvest Joy</p>
    </div>
    <div class="col-lg-3">
    <img src={clothes03} class="rounded-circle round04" alt="clothes01"/>
    <p class="Edit">Blossom Edit</p>
    </div>
    <div class="col-lg-3">
    <img src={clothes04} class="rounded-circle round04" alt="clothes04"/>
    <p class="Cozy">Cozy Layered</p>
    </div>
  </div>
</div>
          
          


          
            </div>
        </section>
  
    </div>
  )
}

export default Dector