import React from 'react'
import "./../Easytosale/Easytosale.css";
import test from "../../Assets/Vector.png";
function Easytosale() {
  return (
    <div>
      <div className="container mb-4">
      <div className="container">
      <p className="heading_para mt-5">
        We Make It Easy to Sell Your House Fast in Broward County for Cash
      </p>
      <div>
        <p className="para_graf ">
          Are you looking to sell your house fast in Broward County? As Broward
          County’s top local home buyer we can pay cash for your home in any
          condition, or situation.
        </p>
      </div>

      <div className="row mt-3">
     
        {/* <div className="col-lg-1 col-md-1 col-1"></div> */}
        <div className="col-lg-8 col-md-12 col-12">
          <div className="benfits_working mt-2">
            Here’s how you benefit when working with Property Nation:
          </div>
          <div className="row mt-3">
            <div className="col-lg-1 col-md-1 col-1">
              <div className="green_index "></div>
            </div>
            <div className="col-lg-11 col-md-11 col-11">
              <p className="sell_as_ward mt-1">
                <strong> Sell as-is –</strong> there’s no need to make any
                repairs or renovations.
              </p>
            </div>
          </div>

          <div className="row">
          <div className="col-lg-1 col-md-1 col-1">
              <div className="green_index "></div>
            </div>
            <div className="col-lg-11 col-md-11 col-11">
              <p className="sell_as_ward mt-1">
                <strong> Sell without a Realto –</strong> There are no
                commissions or fees to pay either.
              </p>
            </div>
          </div>

          <div className="row">
          <div className="col-lg-1 col-md-1 col-1">
              <div className="green_index "></div>
            </div>
            <div className="col-lg-11 col-md-11 col-11">
              <p className="sell_as_ward mt-1">
                <strong> Get a fair cash offer –</strong> We guarantee no
                low-ball offers.
              </p>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-1 col-md-1 col-1">
              <div className="green_index "></div>
            </div>
            <div className="col-lg-11 col-md-11 col-11">
              <p className="sell_as_ward mt-1">
                <strong> Flexible –</strong> Sell right away if you’re in a
                hurry or choose a closing date that works for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
         
            <img className="frant_image" src={test} alt="Vector.png" />
     
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Easytosale
