import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/contact-me.json";

export default function Contact() {
  const contactMeAnimationRef = useRef<LottieRefCurrentProps>(null);

  return (
    <section id="contact">
      <div className="background"></div>
      <div className="content">
        <Lottie
          className="animation"
          lottieRef={contactMeAnimationRef}
          animationData={animationData}
          autoplay={true}
          loop={true}
        />
        <h2>Contact</h2>
        <h3>Don't be shy! Hit me up!</h3>
        <form>
          <input placeholder="Name" type="text" name="user_name" disabled />
          <input type="email" placeholder="Email" name="user_email" disabled />

          <textarea placeholder="Message" name="message" disabled></textarea>
          <button
            type="button"
            onClick={() => {
              alert("function still not added, try sending an email manually");
            }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
