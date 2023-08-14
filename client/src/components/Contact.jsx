import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  return (
    <section className="register-section flex-center" id="contact">
      <div className="contact-container flex-center contact">
        <h2 className="form-heading">Contact Us</h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="register-form "
        >
          <input
            type="hidden"
            name="access_key"
            value="e702f7a9-c07e-410f-841c-0af681034a3d"
          />
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <input
            type="phone"
            name="phone"
            className="form-input"
            placeholder="Enter your Mobile No"
            value={formDetails.phone}
            onChange={inputChange}
          />
          <textarea
            type="text"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            value={formDetails.message}
            onChange={inputChange}
            rows="4"
            cols="12"
          ></textarea>

          <button type="submit" className="btn form-btn">
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
