import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <section id="contact">
      <div className="background"></div>
      <div className="content">
        <h2>Contact</h2>
        <h3>Don't be shy! Hit me up!</h3>
        <form>
          <input placeholder="Name" type="text" name="user_name" />
          <input type="email" placeholder="Email" name="user_email" />

          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
