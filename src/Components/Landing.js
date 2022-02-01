import React from 'react';
import backgroundVideo from '../Media/waves.mp4';
import '../App.css'
import TextScramble from './TextScramble';


function Landing() {

  


  return  <div >
   
      <div className='filterVideo'>
      <video autoPlay loop muted id='video'>
          <source src="https://res.cloudinary.com/dqaj5cfil/video/upload/v1643752824/waves_mro9z9.mp4" type='video/mp4'/>
          
      </video>
      
      </div>
      <div className='textIntro'>
      

          <h1><strong>Hi, my name is Ricardo</strong></h1>
          <p><strong>and I migth be the <TextScramble />  that you are looking for.</strong> </p>
         
          
         
         
          </div>
         
  </div> ;
}

export default Landing;
