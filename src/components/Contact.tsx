import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="background"></div>
      <div className="content">
        <h2>Contact</h2>
        <h3>Don't be shy! Hit me up!</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input placeholder="Name" type="text" name="user_name" />
          <input type="email" placeholder="Email" name="user_email" />
          <input type="number" placeholder="Phone" />
          <select placeholder="asunto">
            <option selected disabled>
              Asunto
            </option>
          </select>
          <textarea value="hoasd" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
