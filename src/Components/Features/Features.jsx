import React from "react";
import "./Features.scss";

import Feat__Home from "./Group94.png";
import Feat__Bike from "./food-delivery.png";
import Feat__Smile from "./Group93.png";
import Sister from "./sister.png";

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <p className="feat__text">Features</p>
        <h2 className="feat__heading">Food with a New Passion</h2>
        <div className="feat__flex">
          <div className="feat__info">
            <div className="feat__info__img">
              <img src={Feat__Home} alt="img" width={43} height={43} />
            </div>
            <h2 className="feat__info__title">Quality Food</h2>
            <p className="feat__info__text">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>

          <div className="feat__info">
            <div className="feat__info__img">
              <img src={Feat__Bike} alt="img" />
            </div>
            <h2 className="feat__info__title">Food Delivery</h2>
            <p className="feat__info__text">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>

          <div className="feat__info">
            <div className="feat__info__img">
              <img src={Feat__Smile} alt="img" />
            </div>
            <h2 className="feat__info__title">Super Taste</h2>
            <p className="feat__info__text">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
        </div>

        <div className="food__flex">
          <img className="food__img" src={Sister} alt="sister" />

          <div className="food__info">
            <p className="food__text">About us</p>
            <h2 className="food__title">
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.
            </h2>
            <p className="food__text2">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </p>
            <div className="food__button">
              <button className="header__btn food__btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
