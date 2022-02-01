import React from 'react';
import NodeJs from '../Media/pngaaa.com-3729883.png';
import ReactLogo from '../Media/pngaaa.com-2507930.png';
import MongoLogo from '../Media/pngaaa.com-5006425.png';
import ExpressLogo from '../Media/expressjs-icon.svg';
import ThreeDots from '../Media/3-dot-icon-7.jpg';

import '../CSS/Skills.css'

function Skills() {
  return <div className='centerSkills'>
     <div className='textBox'>
<p>I'm a web developer with a focus on the MERN stack, but with a constant curiosity, and so I'm always trying other technologies and frameworks!</p>
</div>
<div className='skillsLogo'>
<div className='skillLogo'><img className='logoImg' width="60" alt="CSS3 logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/64px-CSS3_logo.svg.png"/></div>
<div className='skillLogo'><img className='logoImg' width="63" alt="HTML5 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/64px-HTML5_logo_and_wordmark.svg.png"/></div>
<div className='skillLogo'><img className='logoImg' width="49" alt="Badge js-strict" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Badge_js-strict.svg/64px-Badge_js-strict.svg.png"/></div>
<div className='skillLogo'><img className='logoImg' width="60" src={NodeJs} alt="NodeJs" /></div>
<div className='skillLogo'><img className='logoImg' width="60" src={ReactLogo} alt="React" /></div>
<div className='skillLogo'><img className='logoImg' width="60" src={ExpressLogo} alt="ExpressJs" /></div>
<div className='skillLogo'><img className='logoImg' width="60" src={MongoLogo} alt="Mongo" /></div>
<div className='skillLogo'><img className='logoImg' width="60" src={ThreeDots} alt="others" /></div>
</div>



  </div>;
}

export default Skills;
