import React from 'react';
import Home from '../Media/home_white_24dp.svg';
import Contacts from '../Media/contact_mail_white_24dp.svg';
import Skills from '../Media/code_white_24dp.svg';
import Projects from '../Media/developer_mode_white_24dp.svg';
import More from '../Media/more_white_24dp.svg';
import '../CSS/Header.css';


function SideBar() {

 

  return <div>

<nav>
   <a href="#one"><img src={Home} alt='homepage'/><br/>Home</a>
   <a href="#second"><img src={Skills} alt='skills'/><br/>Skills</a>
   <a href="#third"><img src={Projects} alt='projects'/><br/>Projects</a>
   <a href="#fourth"><img src={Contacts} alt='contacts'/><br/>Contact</a>
   <a href="#fifth"><img src={More} alt='more'/><br/>More</a>
   
 </nav>

  </div>;
}

export default SideBar;
