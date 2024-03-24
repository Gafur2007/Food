import React from "react";
import "./Hero.scss";
import Hero__img from "./hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <h1 className="hero__title">
            Making time a good time by making food the good food.
          </h1>
          <p className="hero__text">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment,
          </p>
          <div className="hero__btns">
            <button className="hero__btn1">Order Now</button>
            <button className="hero__btn2">Food Details</button>
          </div>
        </div>

        <img className="hero__img" src={Hero__img} alt="" />
      </div>
    </section>
  );
}
