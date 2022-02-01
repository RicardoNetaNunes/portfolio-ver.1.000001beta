import React from 'react';
import { Card} from 'antd';
import Plogs from '../Media/Plogs.png';
import BidMasters from '../Media/bidmasters.png';
import Cowspiracy from '../Media/cowspiracy.png';
import WorkinProgress from '../Media/keep-calm-and-work-in-progress-1500-1500-white-lightblue.png';
import { Anchor } from 'antd';
import '../CSS/Projects.css'

const { Meta } = Card;
const { Link } = Anchor;

function Projects() {
  return <div>

      <h2>Here are some of my current projects (code is in my GitHub)</h2>
      <div className="site-card-wrapper">
     
      
      <Card
    style={{ width: 300 }}
    className='card'
    cover={
        <a href="https://ricardonetanunes.github.io/Cowspiracy---A-alien-perspective-.../" > <img
      className='project-image'
        alt="cowspiracy"
        src={Cowspiracy}
        style={{ width: 300 }}
      />  </a>
    }
   
  >
    <Meta
     
      title="Cowspiracy"
      description="This is my first try at solo programming, after 2 weeks at Ironhack.
      So for this, I create a small game based on classic games of the '80s and urban myths. We have UFOs and disappearing cows, we control the UFO spaceship and try to burn the brown cows with the thruster, at the same time that we need to avoid the white ones, and you would say why, because with the white cows you lose points and you need at least 5 points if you want to end this game.
      This is just a little exercise of DOM manipulation, randomizing elements, and the power of sound in the right time and situation."
    />
  </Card>
 


   
  <Card
    style={{ width: 300 }}
    className='card'
    cover={
        <a href='https://plogs-for-dogs.herokuapp.com/'> <img
        alt="plogs screen"
        src={Plogs}
        style={{ width: 300 }}
      />  </a>
    }
    
  >
    <Meta
     
     
      title="Plogs -Places for dogs"
      description="This was the second project in my Ironhack Bootcamp, done in less than 5 days with a valuable partner.
      Because both of us had dogs in the family, and that nagging question of where we can go with them, we had the idea of creating an app, so that the registered users could add places they knew or discovered, with relevant information, photo, and geographic location, that at the same time could be updated by the opinions of other users.
      At the same time, non-registered users could still search and see all the information."
    />
  </Card>

  
  <Card
    style={{ width: 300 }}
    className='card'
    cover={
        <a href='https://bidmasters.herokuapp.com/'>  <img
        alt="bidmasters screen"
        src={BidMasters}
        style={{ width: 300 }}
      />  </a>
    }
   
  >
    <Meta
      
      title="Bid Masters"
      
      description="The last project of the Ironhack Bootcamp, made with a team of three, in less than a week and a half.
      Bid Masters is a client-friendly auction app, where the users can add art pieces to sell, can bid on them, and at the end of the time decided by the seller, can see if they won or not and proceed to payment (in development).
      This was my second app made with mobile view as the standard, and a nice exercise for the use of the full-stack tech."
    />
  </Card>

  <Card
    style={{ width: 300 }}
    className='card'
    cover={
        <a href='https://github.com/RicardoNetaNunes/'>  <img
        alt="example"
        src={WorkinProgress}
        style={{ width: 300 , maxHeight: 230}}
      /> </a>
    }
    
  >
    <Meta
     
      title="BakerFriend"
      description="This is in the final phase, will be put online in the next days."
    />
  </Card>

  </div>
  </div>;
}

export default Projects;
