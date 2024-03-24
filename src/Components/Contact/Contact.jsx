import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <p className="contact__text">Contact</p>
        <h5 className="contact__title">
          Food Stalls with Persons but also specialized <br /> equipment, Skills to
          manage.
        </h5>

        <form className="contact__flex">
            <input className="contact__input" type="text" placeholder="Enter your message"/>
            <button className="contact__btn">Send</button>
        </form>
      </div>
    </section>
  );
}
