import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f6dk2nb', 'template_6j5z9bx', form.current, {
        publicKey: 'sO6gWE9vD2eK6pmyh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
          e.target.reset(); // This will clear the input fields after submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span className="primary-text">Get IN Touch</span>
          <span className="secondary-text">Contact Me</span>
          <div
            className="blur s-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks For Contacting Me"}</span>
          <div
            className="blur c-blur"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
