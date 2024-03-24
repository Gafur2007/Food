import React from "react";
import "./Apps.scss";
import Phone from "./MaskGroup(1).png";
import Iphone from "./apple1.png"
import Market from "./play1.png";

export default function Apps() {
  return (
    <section className="apps">
      <div className="container">
        <div className="apps__info">
          <p className="apps__text">Take away</p>
          <h3 className="apps__title">
            Food Stalls with Persons but to <br /> Product marketing plane.
          </h3>
          <p className="apps__text2">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipmentwith Persons but also Just Food Stalls with Persons.
          </p>

          <div className="apps__btns">
            <button className="apps__store">
              <img src={Iphone} alt="img" width={26} height={26} />
              App Store
            </button>

            <button className="apps__store">
              <img src={Market} alt="img" width={26} height={26} />
              Google Play
            </button>
          </div>
        </div>
        <img className="apps__img" src={Phone} alt="img"/>
      </div>
    </section>
  );
}
