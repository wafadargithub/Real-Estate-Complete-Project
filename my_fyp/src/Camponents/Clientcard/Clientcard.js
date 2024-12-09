import React from "react";
import "./../Clientcard/Clientcard.css";
import ellips from "../../Assets/Ellipse-img.png";
import ellip from "../../Assets/Ellipse 2.png";
import ellipes from "../../Assets/Ellipse 3.png";

import Slider from "react-slick";
function Clientcard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
   
  };
  return (
    <div className="container    mb-5">
      <div>
        <Slider {...settings}>
          <div className="container">
            <div className="card_client">
              <div>
                <img
                  className="ellipse_image"
                  src={ellip}
                  alt="Ellipse-2.png"
                />
                <p className="client_name">Tangotag</p>
              </div>
              
                <p className="paragraf_client">
                  “Imperdiet purus tristique pulvinar mDictum ullamcorper
                  pretium mi quis. Vel at pellentesque ligula neque. Amet
                  tincidunt”
                </p>
              </div>
            
          </div>

          <div className="container">
            <div className="card_client">
              <div>
                <img
                  className="ellipse_image"
                  src={ellips}
                  alt="Ellipse-1.png"
                />
                <p className="client_name">Tangotag</p>
              </div>
          
                <p className="paragraf_client">
                  “Imperdiet purus tristique pulvinar mDictum ullamcorper
                  pretium mi quis. Vel at pellentesque ligula neque. Amet
                  tincidunt”
                </p>
              </div>
      
          </div>

          <div className="container">
            <div className="card_client">
              <div>
                <img
                  className="ellipse_image"
                  src={ellipes}
                  alt="Ellipse-3.png"
                />
                <p className="client_name">Tangotag</p>
              </div>
           
                <p className="paragraf_client">
                  “Imperdiet purus tristique pulvinar mDictum ullamcorper
                  pretium mi quis. Vel at pellentesque ligula neque. Amet
                  tincidunt”
                </p>
        
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Clientcard;
