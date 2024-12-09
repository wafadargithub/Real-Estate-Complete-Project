import React from 'react'
import "./../Topdoller/Topdoller.css";
import frant from "../../Assets/frant-img-building.png";
import empoly from "../../Assets/empoly-img2.png";
function Topdoller() {
  return (
    <div className="background_img2">
    <div className="container">
      <p className="top_dollar_heading pt-4">
        TOP Dollar for Your Broward County Home
      </p>
      <p className="selling_paragraf">
        Selling a house in Broward County with a Realtor is not always the
        best option for everyone. There are plenty of headaches when working
        with a licensed real estate agent to sell your home.
      </p>
      <p className="there_paragraf">
        There is lots of paperwork, months of uncertainty, fees, and the
        inconvenience of showing your home to multiple people at odd hours of
        the day and night.
      </p>

      <div className="getcash_butten mt-4">
        <p className="offer_button pt-3 ">GET MY CASH OFFER NOW</p>
      </div>

      <div className="main_div">
        <div className="chilled_div">
          <div className="your_wondering mt-5">
            If you’re wondering, yes, there is a better way to sell your home…
          </div>
          <div className="no_feeds_box mt-3">
            <div className="feeds_input">No fees or commissions</div>
          </div>

          <div className="fees_paragraf mt-2">
            With Property Nation, there are no realtor commissions or closing
            fees to pay.
          </div>

          <div className="no_feeds_box mt-3">
            <div className="feeds_input">No repairs or cleaning</div>
          </div>

          <div className="fees_paragraf mt-2">
            Forget cleaning up your home or spending money to repair it in
            order to show it to potential buyers,we’ll buy your house exactly
            the way it is.
          </div>

          <div className="less_box mt-3">
            <div className="feeds_input">Less paperwork</div>
          </div>
          <div className="fees_paragraf mt-2">
            When working with agents, you have to deal with mountains of
            paperwork. At Property Nation, we have one simple easy to
            understand sales agreement.
          </div>

          <div className="no_long_box mt-3">
            <div className="feeds_input">No long-term commitments</div>
          </div>
          <div className="fees_paragraf mt-2">
            When working with an agent, you can get locked into a lengthy long
            term contract hoping your agent finds you a buyer. We are the
            buyer.
          </div>
        </div>
        <div>
          <img
            src={frant}
            alt="frant-img-building.png"
            className="building_frant_img"
          />
        </div>
      </div>

      <div className="main_div2">
        <img src={empoly} alt="empoly-img.png" className="empoly_img mb-5" />

        <div className="chilled_div2 ">
          <div className="simple_paragraf mt-5">
            The traditional home selling experience can take months to
            complete from beginning to end, on top of having to pay Realtor
            commissions. With Property Nation, it’s much easier!
          </div>
          <div className="simple_paragraf2 mt-4">
            <spam>We’re not listing your house… </spam>we’re actually the ones
            buying your house. Since we pay cash, we’re able to close quickly…
            or on your schedule. Like we’ve mentioned, when you work with us
            there are no fees… like there are when you list your house with an
            agent.
          </div>
          <div className="simple_paragraf2 mt-4">
            Once you send us your info, we’re usually able to make you a fair
            all-cash offer within 24 hours. From there, we can close as
            quickly as 7 days… or on your schedule (sometimes we can have a
            check in your hand the very same day!).
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Topdoller
