import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMailchimp,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/doctors"}>CST Expert</NavLink>
              </li>
              <li>
                <HashLink to={"/policy"}>Policy</HashLink>
              </li>

              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/feedback"}>Feedback form</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="facebook">
                <a
                  href="https://www.facebook.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.youtube.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <br />
          &nbsp;
          <div className="social">
            <div className="">
              <h3>For Appointments/Registrations</h3>
              <ul>
                <li className="whatsapp">
                  <a href="#" target={"_blank"} rel="noreferrer">
                    <FaWhatsapp />
                  </a>
                </li>
                <font className="social">+91 9812038573 [Call/Whatsapp]</font>
              </ul>
            </div>
            <br />
            <div>
              <ul>
                <li className="mail">
                  <AiOutlineMail />
                </li>
                <font className="social">dsmuchhal@yahoo.com</font>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          CST Healing © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
