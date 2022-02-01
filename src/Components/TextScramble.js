import React from 'react';
import Scramble from 'react-scramble';
import '../App.css'

class TextScramble extends React.Component {
  render() {
    return (
        <div className='container1'>
      <Scramble
      className='text'
        autoStart
        mouseLeaveTrigger= 'restart'
        speed= 'slow'
        text="Full-Stack Web develloper"
        steps={[
          {
            roll: 10,
            action: '+',
            type: 'all',
          },
          {
            action: '-',
            type: 'forward',
          },
        ]}
      />
      </div>
    )
  }
}
export default TextScramble;