import React from 'react'
import "./../Workprocess/Workprocess.css";
import logo from "./../../Assets/notepade-img2.png";
import arrow from "./../../Assets/Arrow-1 (2).png";
import Group from "../../Assets/tag-img2.png";
import groups from "../../Assets/doller-img (3).png";
function Workprocess() {
  return (
    <div className='background_section1'>
       <div className="container mb-5">
      <p className="process_work">How Our Process Works in Broward County</p>
      <p className="paragraf_work">
        At Property Nation, you get an offer that works for you and works within
        the time you need to sell your house in Broward County. At any time, if
        you have any questions about how it works, give us a call at
        <h className="heading_word">
          000000000000 <h className="strong_word">or</h> fill out our 30-second
          form.
        </h>
      </p>

      <p className="steps_heading">
        We Buy Broward County Houses Fast In 3 Simple Steps:
      </p>
      <div className="row process">
        {/* <div className="col-lg-1 col-md-1 col-1" /> */}
        <div className="col-lg-3 col-md-3 col-12">
          <div className="steps_green_box mt-3">
            <div className="numbring_steps">1</div>
          </div>
          <div className="get_touch">GET TOUCH</div>
          <img className="notepade_image" src={logo} alt="notepade-img.png" />
          <div className="instrections_class">
            Get started by filling out the secure form below or giving us a call
            to (305) 928- 2711. Don’t worry, we do not share your info with
            anyone else!
          </div>
        </div>

        <span className="col-lg-1 col-md-1 col-2 mt-5">
          <img className="arrow_class mt-4" src={arrow} alt="Arrow 1.png" />
        </span>

        <div className="col-lg-3 col-md-3 col-12">
          <div className="steps_green_box mt-3">
            <div className="numbring_steps">2</div>
          </div>
          <div className="get_offer">GET OFFER</div>
          <img className="notepade_image" src={Group} alt="tag-img.png" />
          <div className="instrections_class">
            Once we go over any questions or concerns you may have, and present
            you with a no-obligation offer. You decide if to accept it or not.
          </div>
        </div>

        <div className="col-lg-1 col-md-1 col-2 mt-5">
          <img className="arrow_class mt-4" src={arrow} alt="Arrow 1.png" />
        </div>

        <div className="col-lg-3 col-md-3 col-12">
          <div className="steps_green_box mt-3">
            <div className="numbring_steps">3</div>
          </div>
          <div className="get_paid">GET PAID</div>
          <img className="notepade_image" src={groups} alt="doller-img (2).png" />
          <div className="instrections_class">
            Close on the date of your choice at a title company's office or in
            the comfort of your home – Cash in your hands!
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Workprocess
