import React from 'react'
import "./../Sellyourhouse/Sellyourhouse.css";
import house from "../../Assets/see-house-img.png";
import { useState } from 'react';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';


function Sellyourhouse() {
  const navigate= useNavigate();
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState({
    type: "Modal Form",
    name: '',
    email1: '',
    phone1: '',
    address: ''
  })

  const handleInput = (e) => {
    e.persist();
    setValue({...value, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://d51b-139-135-34-34.ngrok-free.app/my_fyp_php/mailing.php", {
        method: "POST",
        mode:'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        setValue({
          type: "",
          name: "",
          email1: "",
          phone1: "",
          address: "",
        });
        alert("Form Submitted Successfully");
        navigate('/Sellyourhouse');
        setLoading(false);
      } else {
        console.error("Form submission failed");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }

  if(loading){
    return (
      <Loading />
    )
  } 

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
                  <form onSubmit={handleSubmit}>
                    <div className="name_or_email">
                      Name:
                      <input type="text" name='name' value={value.name} onChange={handleInput} className="input_no_border mt-2" />
                      <p className="hr_line "></p>

                      Email:
                      <input type="text" name='email1' value={value.email1} onChange={handleInput} className="input_no_border mt-2" />
                      <p className="hr_line"></p>

                      Phone:
                      <input type="text" name='phone1' value={value.phone1} onChange={handleInput} className="input_no_border mt-2" />
                      <p className="hr_line"></p>
                      Address:
                      <input type="text" name='address' value={value.address} onChange={handleInput} className="input_no_border mt-2" />
                      <p className="hr_line" />

                    </div>
                    <button type="submit" name='submit' class="btn btn-primary">
                      Send Message
                    </button>
                  </form>
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
