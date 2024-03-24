import React from "react";
import "./Footer.scss";

import Footer__logo from "../Header/logo.svg";
import insta from "./insta.png";
import face from "./facebook.png";
import twit from "./twit.png";
import youtube from "./youtube.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <img
            className="footer__logo"
            src={Footer__logo}
            alt="img"
            width={61}
            height={60}
          />
          <a className="footer__link" href="#link">
            www.company name.com
          </a>

          <a className="footer__link" href="#link">
            companyname@gmail.com
          </a>

          <a className="footer__link" href="#link">
            Phone: +7 485-118-03-25
          </a>
        </div>

        <div className="footer__info">
          <h6 className="footer__heading">Home</h6>

          <a className="footer__link" href="#link">
            Landingpage
          </a>

          <a className="footer__link" href="#link">
            Documentation
          </a>

          <a className="footer__link" href="#link">
            Referral Program
          </a>

          <a className="footer__link" href="#link">
            UI & UX Design
          </a>

          <a className="footer__link" href="#link">
            Web Design
          </a>
        </div>

        <div className="footer__info">
          <h6 className="footer__heading">Menu</h6>

          <a className="footer__link" href="#link">
            Landingpage
          </a>

          <a className="footer__link" href="#link">
            Documentation
          </a>

          <a className="footer__link" href="#link">
            Referral Program
          </a>

          <a className="footer__link" href="#link">
            UI & UX Design
          </a>

          <a className="footer__link" href="#link">
            Web Design
          </a>
        </div>

        <div className="footer__info">
          <h6 className="footer__heading">Company</h6>

          <a className="footer__link" href="#link">
            Landingpage
          </a>

          <a className="footer__link" href="#link">
            Documentation
          </a>

          <a className="footer__link" href="#link">
            Referral Program
          </a>

          <div className="footer__flex">
            <a href="#link">
              <img src={insta} alt="img" width={21} height={21} />
            </a>
            <a href="#link">
              <img src={face} alt="img" width={21} height={21} />
            </a>
            <a href="#link">
              <img src={twit} alt="img" width={21} height={21} />
            </a>
            <a href="#link">
              <img src={youtube} alt="img" width={21} height={21} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
