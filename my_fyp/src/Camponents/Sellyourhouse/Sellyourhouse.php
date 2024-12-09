import React from 'react'
import "./../Sellyourhouse/Sellyourhouse.css";
import house from "../../Assets/see-house-img.png";
function Sellyourhouse() {
  return (
    <>
      <div className="back-ground-img">
        <div className="container">
          <p className="heading_paragraf">
            We <strong className="bulit_ward">Buy</strong> Houses. Any
            <strong className="bulit_ward"> Condition, </strong> Any
            <strong className="bulit_ward"> Situation, </strong> & Any
            <strong className="bulit_ward"> Problem </strong>
          </p>

          <p className="small_heading">
            We take the hassle out of selling, with an "as is" purchase. Click
            below for a no obligation offer!
          </p>

          <div
            className="yellow_box"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <button type="button" class="button_class">
              SELL YOUR HOUSE
            </button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <img
                    src={house}
                    alt="see-house-img.png"
                    className="see_house_img"
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <h1 className="heading_paragraf2">SELL YOUR HOME FAST</h1>
                  <p className="buy_home">
                    We Buy Homes Fast in the Greater Sacramento Area. Fill out
                    the form and we'll get back to you within 24 hours.
                  </p>
                  <div className="name_or_email">
                    Name:
                    <input type="text" className="input_no_border mt-2" />
                    <p className="hr_line "></p>
                    
                    Email:
                    <input type="text" className="input_no_border mt-2" />
                    <p className="hr_line"></p>
                  
                    Phone:
                    <input type="text" className="input_no_border mt-2" />
                    <p className="hr_line"></p>
                    Address:
                    <input type="text" className="input_no_border mt-2" />
                    <p className="hr_line"/>
                    
                  </div>
                  <button type="button" class="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
              {/* <div class="modal_footer_"> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sellyourhouse
