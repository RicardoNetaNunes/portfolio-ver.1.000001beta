import React from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';
import '../CSS/ContactForm.css'

function Contacts() {
  return <div className='flex'>
      <ContactForm/>
      <Contact />
  </div>;
}

export default Contacts;
