import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";
import Hero1 from "./Hero1";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Spiritual Healing <br />
          by Mr.Dhanesh Kumar Muchhal
        </h1>
        <p>
          Welcome to our website! , we are dedicated to providing you with the
          highest quality holistic healthcare options. One of the effective
          modalities we offer is Craniosacral Therapy (CST). we will delve into
          the intricacies of CST, exploring its principles, benefits, and how it
          can enhance your overall well-being.
        </p>
        <p>
          हमारी वेब साईट में स्वागत है! , हम आपको उच्चतम गुणवत्ता वाली प्रभावी
          तकनीक क्रानियोसेक्रल थेरेपी (सीएसटी) को उपलब्ध कराने के लिए समर्पित
          हैं । आप से अनुरोध है कि आप पहले क्रानियोसेक्रल थेरेपी (सीएसटी) तकनीक
          के बारे में जाने, यह कैसे कार्य करती है, इसके क्या क्या लाभ है, इस
          थैरेपी का किस किस के लिए लाभकारी है, यह किन रोग एवं बिमारियों के ईलाज
          में अच्छे परिणाम देती है।
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>

      <br></br>
    </section>
  );
};

export default Hero;
