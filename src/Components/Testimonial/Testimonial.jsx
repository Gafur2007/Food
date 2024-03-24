import React from "react";
import "./Testimonial.scss";

import Test__img from "./Group114.png";
import Test__left from "./Group107.png";
import Test__right from "./Group37.png";
import Test__star from "./Group90.png"

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <p className="test__text">Testimonial</p>
        <h4 className="test__title">Making Food great again and again</h4>
        <p className="test__text2">
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage <br /> Customers, Effective Product catlogues etc
          to make your.
        </p>

        <img src={Test__img} alt="img" />

        <div className="test__flex">
          <img src={Test__left} alt="img" />
          <p className="test__flex__text">
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers, Effective Product catlogues
            etc very successful to make your. <br />
            <img className="test__flex__img" src={Test__star} alt="img" width={88} height={16}/>
          </p>
          <img src={Test__right} alt="img" />
        </div>

        <h4 className="test__heading">Augusta W. Reynoso</h4>
        <p className="test__finish__text">UI&UX DeSIGNER</p>
      </div>
    </section>
  );
}
