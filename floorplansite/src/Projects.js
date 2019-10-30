import React, { Component } from 'react';
import screenshot from './trivia1.png';
import sounddump from './sounddumpreal.png';
import beer from "./yeetbeer.png"

class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
    <div className="hero">
<h1 className="projectstitle">PROJECTS</h1>
    </div>
      <div className='projects'>
        <div className='projectCard'>
          <div className='imagewrap'>
            <a
              href='https://taylorpenberthy.github.io/projectOneFinal/'
              target='_blank'
            >
              <img src={screenshot} className='projectImages' />
            </a>
          </div>
          <div className='overlay'>
            <p className='text'>
             Technologies used: HTML5, CSS3, JavaScript </p>
             <p> Purpose: Learn more about Taylor!</p>
          </div>
        </div>
        <div className='projectCard'>
          <div className='imagewrap'>
            <a
              href='https://sounddump.herokuapp.com'
              target='_blank'
            >
              <img src={sounddump} className='projectImages' />
              </a>
          </div>
              <div className='overlay'>
              <p className='text'>
             Technologies used: Node/Express.js, MongoDB/Mongoose, HTML5, CSS3, JavaScript </p>
             <p> Purpose: Search through Spotify's database and share songs with friends.</p>
             </div>
            
        </div>
        <div className="projectCard">
        <div className='imagewrap'>
        <a
          href='https://yeetbeer.herokuapp.com'
          target='_blank'
        >
          <img src={beer} className='projectImages' />
          </a>
      </div>
          <div className='overlay'>
          <p className='text'>
             Technologies used: ReactJS, Node/Express.js, MongoDB/Mongoose, HTML5, CSS3, JavaScript </p>
             <p> Purpose: Generate posts to show your friends your favorite beers and breweries.</p>
          </div>
      </div>
      </div>
      </div>
    );
  }
}


export default Projects;
