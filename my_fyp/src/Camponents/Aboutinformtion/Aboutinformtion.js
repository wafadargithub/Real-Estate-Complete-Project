import React from 'react'
import "./../Aboutinformtion/Aboutinformtion.css";
import logo_synergy from "./../../Assets/logo-synergytech.png";
import contect from "./../../Assets/contect-logo.png";
import email from "./../../Assets/email-logo.png";
import { useState } from 'react';

function Aboutinformtion() {
  const [value, setValue] = useState({
    name: '',
    email1: '',
    message: ''
  })

  const handleInput = (e) => {
    e.persist();
    setValue({...value, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
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
          name: "",
          email1: "",
          message: "",
        });
        alert("Form Submitted Successfully")
        setValue('');
      } else {
        console.error("Form submission failed");
        setValue('');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12 ">
            <img src={logo_synergy} alt="logo-synergytech.png" className="logo_stebal" />
            <p className="paragraf_logo">
              We are strongly focused on providing Business operatios, Consulting
              services and Software solutions.
            </p>
          </div>
          <div className="col-lg-1 col-md-1 col-1 " />

          <div className="col-lg-3 col-md-3 col-12 ">
            <p className="quick_links mt-5">Quick Links</p>

            <ul className="quick_inputs">
              <li>About Us</li>
              <li>Engineering Services</li>
              <li>Business Services</li>
              <li>Career</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="col-lg-1 col-md-1 col-1 " />

          <div className="col-lg-4 col-md-4 col-12 ">
            <p className="contect_us mt-5">Contact Us</p>
            <p className="conterct_paragraf">
              Want Job or Want to Submit some Feedback. Feel Free to Contact
            </p>

        

            <form onSubmit={handleSubmit}>
              <div className="name_box mt-4 row">
                <img src={contect} className="logo_contect col-1" />
                <input type='text' name='name' value={value.name} onChange={handleInput}
                  className="col-lg-8 col-md-8 col-8 input_style_email"
                  placeholder="Name"
                />
              </div>

              <div className="email_box mt-2 row">
                <img src={email} className="logo_email col-1" />
                <input type='email' name='email1' value={value.email1} onChange={handleInput}
                  className="col-lg-8 col-md-8 col-8 input_style_email"
                  placeholder="Email"
                />
              </div>
              <textarea name='message' value={value.message} onChange={handleInput} placeholder='Message...' className="simple_box mt-2"></textarea>
              {/* <div className="simple_box mt-2" /> */}
              <div className="small_green_box mt-2 ">
                <button type="submit" name='submit' className="btn btn-green ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutinformtion
