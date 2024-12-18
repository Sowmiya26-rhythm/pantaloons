import React from 'react'
import store from '../images/store.png';
import near from '../images/near.jpg';
import mall01 from '../images/mall01.jpg';
import mall from '../images/mall.jpg';
import spot from '../images/spot.jpg';
import winter0001 from '../images/winter0001.png';
import two002 from '../images/two002.png';
import boy01 from '../images/boy01.png';
import grl001 from '../images/grl001.png';
import kids001 from '../images/kids001.png';
import ajile from '../images/ajile.jpg';
import kurta from '../images/kurta.jpg';
import wearboy from '../images/wearboy.webp';
import couple from '../images/couple.webp';
import { MdPlayArrow } from "react-icons/md";
import shoe from '../images/shoe.png';
import selling from '../images/selling.png';
import boy003 from '../images/boy003.png';
import cotton from '../images/cotton.webp';
import baby from '../images/baby.png';
import party from '../images/party.png';
import office from '../images/office.png';
import ethic from '../images/ethic.avif';
import kidsethic from '../images/kidsethic.png';
import dector from '../images/dector.png';
import mug001 from '../images/mug001.webp';
import highpink from '../images/highpink.avif';
import dark from '../images/dark.avif';
import liac from '../images/liac.avif';
import fit from '../images/fit.avif';
import rise from '../images/rise.avif';



import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
<section class="wallpaper">
            <div class="wallpaper01">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active bestoffer">
      <img src={store} class="d-block w-100" alt="bestoffer"/>
    </div>
    <div class="carousel-item mode">
      <img src={near} class="d-block w-100" alt="mode"/>
    </div>
    <div class="carousel-item wear">
      <img src={mall01} class="d-block w-100" alt="wear"/>
    </div>
    <div class="carousel-item chillo1">
      <img src={mall} class="d-block w-100" alt="chillo1"/>
    </div>
    <div class="carousel-item">
      <img src={spot} class="d-block w-100" alt="chill02"/>
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
        <section class="collection">
            <div class="collection01">
            <div class="container-fluid">
  <div class="row">
    <div class="col-lg-2">
    
      <div class="winter"><img src={winter0001}/>
      <h6>Winter Edit</h6>
      </div>
      
    </div>
    <div class="col-lg-2">
         <div class="two"><img src={two002}/>
         <h6>Fresh Styles</h6>
         </div>

    </div>
    <div class="col-lg-2">
       <div class="grl"><img src={grl001}/> 
       <h6>Women</h6>
       </div>

    </div>
    <div class="col-lg-2">
        <div class="boy"><img src={boy01}/>
        <h6>Men</h6>
        </div>

    </div>
    <div class="col-lg-2">
    <div class="kids"><img src={kids001}/>
    <h6>Kids</h6>
    </div>
    </div>
  </div>
</div>
            </div>
        </section>
        <section class="cards01">
          <div class="cards02">
          <div class="container">
  <div class="row">
    <div class="col-lg-6">
      <img src={ajile}/>
      <div class="position-relative">
      <div class="position-absolute top-100 end-0 translate-middle full01">
      <div class="shadow p-3 mb-5 bg-body rounded shadow01">
      <h4>Light Layers</h4>
      <p>Your go-to layering piece for light to medium winters</p>
      <h5>SHOP NOW</h5>
      </div>
      </div>
    </div>
    </div>
  
    <div class="col-lg-6">
    <img src={kurta}/>
    <div class="position-relative">
    <div class="position-absolute top-100 end-0 translate-middle full02">
      <div class="shadow p-3 mb-5 bg-body rounded shadow01">
      <h4>Wedding Perfect</h4>
      <p>Look sharp, feel dapper with our kurta collection</p>
      <h5>SHOP NOW</h5>
      </div>
      </div>
      
    </div>
  </div>
  </div>
</div>
          </div>
        </section>
        <section class="cards001">
          <div class="cards02">
          <div class="container">
  <div class="row">
    <div class="col-lg-6">
      <img src={wearboy}/>
      <div class="position-relative">
      <div class="position-absolute top-100 end-0 translate-middle full">
      <div class="shadow p-3 mb-5 bg-body rounded shadow01">
      <h4>Light Layers</h4>
      <p>Your go-to layering piece for light to medium winters</p>
      <h5>SHOP NOW</h5>
      </div>
      </div>
    </div>
    </div>
  
    <div class="col-lg-6">
    <img src={couple}/>
    <div class="position-relative">
    <div class="position-absolute top-100 end-0 translate-middle full04">
      <div class="shadow p-3 mb-5 bg-body rounded shadow01">
      <h4>Wedding Perfect</h4>
      <p>Look sharp, feel dapper with our kurta collection</p>
      <h5>SHOP NOW</h5>
      </div>
      </div>
      
    </div>
  </div>
  </div>
</div>
          </div>
         
        </section>
        <div class="line"></div>
        <section class="next">
          <div class="next01">
            <h3>Just In</h3>

            <div class="button01">
             
            <button type="button" class="btn btn-outline-dark">All</button>
            <button type="button" class="btn btn-outline-dark">Men</button>
            <button type="button" class="btn btn-outline-dark">Women</button>
            <button type="button" class="btn btn-outline-dark">Boys</button>
            <button type="button" class="btn btn-outline-dark">Girls</button>
            <button type="button" class="btn btn-outline-dark">Baby</button>
            <button type="button" class="btn btn-outline-dark">Hemo Dector</button>
            </div>
            
            
          </div>

          
        </section>
        <section class="outline">
          <div class="outline01">
          <div class="container">
          <div class="shadow p-3 mb-5 bg-body rounded now">
  <div class="row">
    <div class="col-lg-2">
      <p>Just In</p>
      <h1 class="hello">2814</h1>
      <h5 class="hello01">NEW STYLE JUST<br/>LANDED</h5>
      <h6 class="shop">SHOP NOW<MdPlayArrow /></h6>
    </div>
    
    <div class="col-lg-2">
    
      
    <div class="card shoe01">
    <div class="shadow bg-body rounded shoe">
  <img src={shoe} class="card-img-top" alt="shoe"/>
  </div>
  <div class="card-body junior01">
    <p class="card-text">Pantaloons Junior</p>
    {/* <p class="shoe99">Pink PU Girls Printed Casual Shoes</p> */}
   
</div>
    </div>
    </div>
    <div class="col-lg-2">
    <div class="card shoe01">
    <div class="shadow bg-body rounded shoe">
  <img src={selling} class="card-img-top" alt="shoe"/>
  </div>
  <div class="card-body junior01">
    <p class="card-text">Coolsters</p>
    {/* <p class="shoe99">Pink PU Girls Printed Casual Shoes</p> */}
   
</div>
    </div>
    
    </div>
    <div class="col-lg-2">
    <div class="shadow bg-body rounded shoe">
  <img src={boy003} class="card-img-top" alt="shoe"/>
  </div>
  <div class="card-body junior01">
    <p class="card-text">Pantaloons Junior</p>
    {/* <p class="shoe99">Pink PU Girls Printed Casual Shoes</p> */}
   
</div>
    
    
    
    </div>
    <div class="col-lg-2">
    <div class="shadow bg-body rounded shoe">
  <img src={baby} class="card-img-top" alt="shoe"/>
  </div>
  <div class="card-body junior01">
    <p class="card-text">Pantaloons Baby</p>
    {/* <p class="shoe99">Pink PU Girls Printed Casual Shoes</p> */}
   
</div>
    
    
    
    </div>
    <div class="col-lg-2">
    <div class="shadow bg-body rounded shoe">
 <div class="cotton"><img src={cotton} class="card-img-top" alt="shoe"/></div>
  </div>
  <div class="card-body junior01">
    <p class="card-text">Coolsters</p>
    {/* <p class="shoe99">Pink PU Girls Printed Casual Shoes</p> */}
   
</div>
    
    
    
    </div>
    </div>
  </div>
</div>
          </div>
        </section>
        <section class="style">
          <div class="style01">
          <div class="shadow-sm p-3 mb-5 bg-body rounded">
            <h3>Style Finder</h3>
            <p>Looking for something specific? Let’s get you there</p>
            <h5 class="style99">Shop For</h5>
            <div class="in">
            <button type="button" class="btn btn-info">WOMEN</button>
            <button type="button" class="btn btn-info">MEN</button>
            <button type="button" class="btn btn-info">KIDS</button>
            <button type="button" class="btn btn-info">HOME</button>
            </div>
          </div>
          </div>
        </section>
        <section class="party">
            <div class="party01">
            <div class="container">
  <div class="row">
    <div class="col-lg-2">
     <div class="party"><img src={party}/></div> 
    </div>
    <div class="col-lg-2">
    <div class="office"><img src={office}/></div>
    </div>
    <div class="col-lg-2">
    <div class="ethic"><img src={ethic}/></div>
    </div>
    <div class="col-lg-2">
    <div class="kidsethic"><img src={kidsethic}/></div>
    </div>
    <div class="col-lg-2">
    <div class="dector"><img src={dector}/></div>
    </div>
    <div class="col-lg-2">
    <div class="mug"><img src={mug001}/></div>
    </div>
  </div>
</div>
            </div>
        </section>
        <section class="dress">
            <div class="dress01">
                <h3>Shop The Look</h3>
                <div class="container-fluid">
  <div class="row">
    <div class="col-lg-2">
    <div class="card rise01">
  <div class="card-body">
    <div class="rise"><img src={rise}/></div>
  </div>
</div>
    </div>
    <div class="col-lg-2">
    <div class="card fit01">
  <div class="card-body">
  <div class="fit"><img src={fit}/></div>
  </div>
</div>
    </div>
    <div class="col-lg-2">
    <div class="card dark01">
  <div class="card-body">
  <div class="dark"><img src={dark}/></div>
  </div>
</div>
    </div>
    <div class="col-lg-2">
    <div class="card liac01">
  <div class="card-body">
  <div class="liac"><img src={liac}/></div>
  </div>
</div>
    </div>
    <div class="col-lg-2"> 
    <div class="card highpink01">
  <div class="card-body">
  <div class="highpink"><img src={highpink}/></div>
  </div>
</div>
    </div>
  </div>
</div>
            </div>
        </section>
        
    </div>
  )
}

export default Home