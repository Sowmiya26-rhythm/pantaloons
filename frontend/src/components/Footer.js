import React from 'react'
import apple from '../images/apple.svg';
import googleplay from '../images/googleplay.svg';
import { FaInstagram } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";
import { RiFacebookFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";


import './Footer.css'

const Footer = () => {
  return (
    <div>
        <section class="last">
            <div class="last01">
        <div class="container">
  <div class="row">
    <div class="col-lg-4">
    <div class="shadow p-3 mb-5 bg-body rounded">
        <p>Experience Pantaloons App</p>
      <img src={apple} alt="apple"/>      <img src={googleplay} alt="apple"/>

    </div>
    </div>
    
    <div class="col-lg-4">
    <div class="shadow p-3 mb-5 bg-body rounded">
    <p>Stay In Touch</p>
    <div class="icons">
    <ol>
        <li><FaInstagram /></li>
        <li><TbLetterX /></li>
        <li><RiFacebookFill /></li>
        <li><FaYoutube /></li>
    </ol>
    </div>
    <div class="icons01">
    <ol>
        <li>Instagram</li>
        <li>X</li>
        <li>Facebook</li>
        <li>Youtube</li>
    </ol>
    
    </div>
    </div>
    </div>
    <div class="col-lg-4">
    <div class="shadow p-3 mb-5 bg-body rounded">
    <p>Talk to us</p>
    
    
    <div class="call">
    <p><MdOutlineWifiCalling3 />CALL 1800-103-7527 (10am to 10pm)</p>
    <p><MdMailOutline />EMAIL customercare@abfrl.adityabirla.com</p>




</div>
<div class="heading6"><h6>Subscribe to our newsletter</h6></div>
    
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label"></label>
  <input type="text" class="form-control label001" id="formGroupExampleInput" placeholder="YOUR EMAIL ADDRESS"/>
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

export default Footer