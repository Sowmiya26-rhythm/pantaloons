import React from 'react'
import pantaloonslogo01 from '../images/pantaloonslogo01.png';
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <section class="top">

          <div class="top01">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><Link to='/'><img src={pantaloonslogo01} alt="pantaloonslogo" width="250" height="60"/></Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page"><Link to='/women'>WOMEN</Link></a>
        

        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to='/men'>MEN</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to='/dector'>KIDS</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">BRANDS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to='/beauty'>BEAUTY</Link></a>
        </li>
       
      </ul>
      <form class="d-flex jj99">
      
      <div class="search888"><FaSearch /></div>
      <input class="form-control me-2 search"  placeholder="Search"/>
      <div class="three03"><FaRegHeart /></div><div class="three04"><MdOutlineManageAccounts /></div><div class="three05"><Link to='/cart'><MdOutlineShoppingCart /></Link></div>


      </form>
    </div>
  </div>
</nav>
</div>
</section>

</div>
  )
}

export default Navbar