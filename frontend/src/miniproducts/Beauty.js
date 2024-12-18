import React from 'react'
import MyGlamm from '../images/MyGlamm.png';
import bb from '../images/bb.avif';
import bb01 from '../images/bb01.jpg';
import bb02 from '../images/bb02.jpg';
import bb03 from '../images/bb03.avif';
import bb04 from '../images/bb04.jpg';
import './Beauty.css'

const Beauty = () => {
  return (
    <div>
        <section class="glam01">
            <div class="glam02">
                <img src={MyGlamm}/>
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
    <div class="soild01"><img src={bb}/></div>
    <p class="New">BB Cream</p>
    </div>
    <div class="col-lg-2">
    <div class="white"><img src={bb01}/></div>
    <p class="Tops">Foundation</p>
    </div>
    <div class="col-lg-2">
    <div class="full"><img src={bb02}/></div>
    <p class="Dresses">Compact</p>
    </div>
    <div class="col-lg-2">
    <div class="green01"><img src={bb03}/></div>
    <p class="Bottoms">Lipstick</p>
    </div>
    <div class="col-lg-2">
    <div class="black"><img src={bb04}/></div>
    <p class="Winter">Nail Polish</p>
    </div>
  </div>
</div>
            </div>
        </section>
        <section class="brand">
            <div class="brand01">
                <h4 class="brand02">Brands to explore</h4>
            </div>
        </section>
    </div>
  )
}

export default Beauty