import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import Landing from "./Landing";
import Skills from "./Skills";
import More from "./More";
import Contacts from "./Contacts";
import Projects from "./Projects";
 

 
 function landingPage() {
 
 return (
  <div class="outer-wrapper">
  <div class="wrapper">
    <div class="slide one" id="one"><Landing/></div>
    <div class="slide two" id="second"><Skills/></div>
    <div class="slide three" id="third"><Projects/> </div>
    <div class="slide four"  id="fourth"><Contacts/></div>
    <div class="slide five"  id="fifth"><More/></div>
  </div>
</div>
 );
}

export default landingPage;