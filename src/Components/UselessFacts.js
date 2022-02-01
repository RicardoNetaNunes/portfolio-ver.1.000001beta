import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import '../CSS/UselessFacts.css'


function UselessFacts() {

  const [randomFact, setRandomFact] = useState(null)

  useEffect(() => {
      const getData = async () => {
         let response = await axios.get(`https://uselessfacts.jsph.pl/random.json?language=en`)
         setRandomFact(response.data)
      }
      getData()
  }, [])
  console.log(randomFact)
  
      if(!randomFact) {
          return <p>You lost me dude</p>
      }  


  return (
  <div className='box'>
  <h2>I know this one ... </h2>
<section class="component">
<blockquote class="sidekick">
{randomFact.text} <cite> <a href={randomFact.source_url}>{randomFact.source_url}</a></cite>
  </blockquote>
  </section>
  <p>version 1.0000000003 in beta yet</p>
  </div>
    
    );
}

export default UselessFacts;