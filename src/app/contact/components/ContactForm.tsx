"use client";
import React, {useEffect, useState} from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "", email: "", message: ""
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const formElement = document.querySelector("form");
    setIsFormValid(formElement ? formElement.checkValidity() : false);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState, [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (<section className="contact-form">

      <h3 className="h3 form-title">Contact Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            required
            value={formData.fullname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className="form-btn" type="submit" disabled={!isFormValid}>
          <img src="/assets/images/send.svg" alt="send" width={20} height={20}/>
          <span>Send Message</span>
        </button>
      </form>
    </section>);
}
