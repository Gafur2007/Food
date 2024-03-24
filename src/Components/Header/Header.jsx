import React from "react";
import "./Header.scss";
import Logo from "./logo.svg";
import Menu from "./menu.svg";
import Exit from "./exit.svg";

export default function Header() {
  const xRef = React.useRef();
  return (
    <header className="header">
      <div className="container">
        <div className="header__none" ref={xRef}>
          <li className="header__item">
            <a className="header__link" href="#link">
              Home
            </a>
            <button
              className="exit"
              onClick={() => {
                xRef.current.classList.remove("absolute");
              }}
            >
              <img src={Exit} alt="" />
            </button>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              About us
            </a>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              Menu
            </a>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              Features
            </a>
          </li>

          <li className="header__item">
            <a className="header__link" href="#link">
              Contact us
            </a>
          </li>
        </div>
        <ul className="header__list">
          <div className="header__menu">
            <button
              className="header__menu "
              onClick={() => {
                xRef.current.classList.add("absolute");
                xRef.current.classList.remove("modal");
              }}
            >
              <img src={Menu} alt="menu" />
            </button>
          </div>
          <a className="header__logo" href="#link">
            <img src={Logo} alt="logo" />
          </a>
          <div className="modal">
            <li className="header__item">
              <a className="header__link" href="#link">
                Home
              </a>
            </li>

            <li className="header__item">
              <a className="header__link" href="#link">
                About us
              </a>
            </li>

            <li className="header__item">
              <a className="header__link" href="#link">
                Menu
              </a>
            </li>

            <li className="header__item">
              <a className="header__link" href="#link">
                Features
              </a>
            </li>

            <li className="header__item">
              <a className="header__link" href="#link">
                Contact us
              </a>
            </li>
          </div>
        </ul>

        <button className="header__btn">Booking Now</button>
      </div>
    </header>
  );
}
