import React from "react";
import "./../Trustedoffer/Trustedoffer.css";
import doller from "../../Assets/Doller-img.png";
import phone from "../../Assets/Phone.png";
function Trustedoffer() {
  return (
    <div className="background_color mb-5">
      <div className="container">
        <p className="trusted_heading">
          Get A Trusted Offer For Your Broward County Home!
        </p>
        <p className="cash_offer">
          We Offer Cash Advacne, Options & Flexibility Based On YOUR Needs!
        </p>
        <div className="call_box2">
            
        <img src={phone} alt="Phone.png" className="phone_class"/>
            <span className="call_us_name4 mt-1">
            
            CALL US
            </span>
          
        </div>
       </div>
      <div>
        <img src={doller} alt="logo_synergy" className="doller_img" />
      </div>
     
    </div>
  );
}

export default Trustedoffer;
