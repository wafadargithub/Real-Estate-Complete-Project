import React from 'react'
import "./../Accordian/Accordian.css";

function Accordian() {
  return (
    <div className="container my-4">
    <div className="row pt-4">
    <div className="col-lg-8 col-md-8 col-12">
      <div class="accordion" id="accordionExample">
       
          <h2 class="accordion-header " id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Will you be listing my house on the MLS or actually buying it?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Will you be listing my house on the MLS or actually buying it?
            </div>
       
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Will you be listing my house on the MLS or actually buying it?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Will you be listing my house on the MLS or actually buying it?
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Will you be listing my house on the MLS or actually buying it?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Will you be listing my house on the MLS or actually buying it?
            </div>
          </div>
        </div>




        <div class="accordion-item">
          <h2 class="accordion-header" id="headingfour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
            >
              Will you be listing my house on the MLS or actually buying it?
            </button>
          </h2>
          <div
            id="collapsefour"
            class="accordion-collapse collapse"
            aria-labelledby="headingfour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Will you be listing my house on the MLS or actually buying it?
            </div>
          </div>
        </div>





        <div class="accordion-item">
          <h2 class="accordion-header" id="headingfive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefive"
              aria-expanded="false"
              aria-controls="collapsefive"
            >
              Will you be listing my house on the MLS or actually buying it?
            </button>
          </h2>
          <div
            id="collapsefive"
            class="accordion-collapse collapse"
            aria-labelledby="headingfive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Will you be listing my house on the MLS or actually buying it?
            </div>
          </div>
        </div>



        
          <h2 class="accordion-header" id="headingsix">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsesix"
              aria-expanded="false"
              aria-controls="collapsesix"
            >
              Will you be listing my house on the MLS or actually buying it?
            </button>
          </h2>
          <div
            id="collapsesix"
            class="accordion-collapse collapse"
            aria-labelledby="headingsix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Will you be listing my house on the MLS or actually buying it?
            </div>
         
        </div>


        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-4">
      <div className="questin_img">
        <p className="asked_question">Frequently Asked Questions.</p>
      </div>
      </div>
    </div>
   
  </div>
  )
}

export default Accordian
