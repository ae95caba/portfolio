import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <h3>Don't be shy! Hit me up!</h3>
      <form>
        <input placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone" />
        <select placeholder="asunto">
          <option selected disabled>
            Asunto
          </option>
        </select>
        <textarea value="hoasd"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}
