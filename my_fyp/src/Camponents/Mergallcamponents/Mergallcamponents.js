import React from "react";
import "./../Mergallcamponents/Mergallcamponents.css";
import logo_synergy from "../../Assets/logo-synergytech.png";

import Sellyourhouse from "./../Sellyourhouse/Sellyourhouse";
import Ourcompany from "./../Ourcompany/Ourcompany";
import Trustedoffer from "./../Trustedoffer/Trustedoffer";
import Easytosale from "./../Easytosale/Easytosale";
import Topdoller from "./../Topdoller/Topdoller";
import Ourclient from "./../Ourclient/Ourclient";
import Clientcard from "./../Clientcard/Clientcard";
import Faqsection from "./../Faqsection/Faqsection";
import Accordian from "./../Accordian/Accordian";
import Workprocess from "./../Workprocess/Workprocess";
import Aboutinformtion from "./../Aboutinformtion/Aboutinformtion";
function Mergallcamponents() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg main_div_navbar ">
        <div class="container-fluid ">
          <img src={logo_synergy} alt="logo_synergy" className="logo_style" />
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
              <li class="nav-item"></li>
            </ul>
            <form class="d-flex" role="search">
              <a className="navbar_para" href="#sellyourhouse">
                Sell Your House
              </a>
              <a className="navbar_para" href="#howitwork">
                How it Works
              </a>
              <a className="navbar_para" href="#ourcompany">
                Our Company
              </a>
              <a className="navbar_para" href="#reviews">
                Reviews
              </a>
              <a className="navbar_para" href="#faq">
                FAQ
              </a>
              <a className="navbar_para" href="#contactus">
                Contact Us
              </a>
            </form>
          </div>
        </div>
      </nav>

      <>
        <div id="sellyourhouse">
          <Sellyourhouse />
        </div>
        <div id="ourcompany"><Ourcompany /></div>
        <div><Trustedoffer /></div>
        <div id="howitwork"><Easytosale /></div>
        <div> <Topdoller /></div>
        <div id="reviews"><Ourclient /></div>
        <div><Clientcard /></div>
        <div id="faq"> <Faqsection /></div>
        <div> <Accordian /></div>
        <div><Workprocess /></div>
        <div id="contactus"> <Aboutinformtion /></div>
        
        
       
        
        
       
       
        
       
      </>
    </div>
  );
}

export default Mergallcamponents;
