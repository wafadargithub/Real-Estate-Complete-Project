import React from 'react'
import "./../Navbar/Navbar.css";
import logo_synergy from "../../Assets/logo-synergytech.png";
function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg main_div_navbar ">
      <div class="container-fluid ">
        <img src={logo_synergy}  alt="logo_synergy" className="logo_style" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            
            </li>
          </ul>
          <form class="d-flex" role="search">
            <p className="navbar_para">Sell Your House</p>
            <p className="navbar_para">How it Works</p>
            <p className="navbar_para">Our Company</p>
            <p className="navbar_para">Reviews</p>
            <p className="navbar_para">FAQ</p>
            <p className="navbar_para">Contact Us</p>
          </form>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
