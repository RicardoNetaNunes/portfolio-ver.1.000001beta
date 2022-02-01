import React, { useState } from "react";
import '../CSS/ContactForm.css'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/31015670-82dc-11ec-9bf2-1331efd4d6b3";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="thanks">
        <h2>Thanks for your message!</h2>
        <div>I'll answer it soon.</div>
      </div>
    );
  }

  return (
      <div>
          {/*
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="form"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>

     */}
<div class="container">  
  <form id="contact" action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank">
    <h3>Ask me a question</h3>
    <h4>Or just say hello...</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    
    <fieldset>
      <textarea placeholder="And your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    
  </form>
</div>

    </div>
  );
};

export default ContactForm;