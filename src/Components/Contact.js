import React from 'react';
import linkedin from '../Media/linkedin.png';
import github from '../Media/github.png';
import email from '../Media/email-icon-black-12.jpg'

function Contact() {
  return <div>
     <div class="container">  
  <form id="contact" 
      target="_blank">
    <h3>Contacts </h3>
    <h4>You can just say hi, or look around.</h4>
    <fieldset>
     
    </fieldset>
    <fieldset>
    <a href="https://www.linkedin.com/in/ricardo-n-nunes/"> 
          <img src={linkedin} alt="linkedin" width='50' />
          </ a > 
    </fieldset>
    <a href="https://github.com/RicardoNetaNunes"> 
          <img src={github} alt="github" width='50' />
          </ a > 
    <fieldset>
    <a href="mailto:ricardo.agn.nunes@gmail.com"><img src={email} alt="email" width='50' /></a> 
    </fieldset>
   
    
  </form>
</div>
 
  </div>;
}

export default Contact;
