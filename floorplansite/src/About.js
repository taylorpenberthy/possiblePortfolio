import React, { Component } from 'react';
import me from './moi.jpg';
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='hero'>
          <h1 className='projectstitle'>WHO AM I?</h1>
        </div>
        <div className='profilepic'>
          <img src={me} className='propic' />
          <p className='description'>
            I'm Taylor. I'm a software engineer with a passion for music,
            baking, coding, and exercise (among other things).
          </p>
        </div>
        <div className='songbox'>
          <h5>Peep my current favorite song!</h5>
          <iframe
            src='https://open.spotify.com/embed/track/5M4yti0QxgqJieUYaEXcpw'
            width='300'
            height='80'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe>
        </div>
      </div>
    );
  }
}

export default About;
