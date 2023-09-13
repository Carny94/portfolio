import './App.css';
import TxtTyping from '../../components/TxtTyping/TxtTyping';
import Section from '../../components/Section/Section';
import NavBar from '../../components/NavBar/NavBar';
import { Link, animateScroll as scroll } from "react-scroll";


export default function App() {
  return (

    <>
    
    
      <div className="Carneala">
        <h1>Hi</h1>
        <h1>Im Carneala</h1>
      </div>
      <TxtTyping />
      <div className="Main-container-1">
        <div className="my-image-container">
          <img src="./avatar.png" alt="avatar" />
        </div>

        <div className="About-me-container">
          <p className="About-me">
            I am a Bay Area Native full-stack developer who takes joy in learning new coding languages❤️
            Transitioning from a career in property management, I've embarked on an exciting journey into the dynamic
            world of web development, and I'm here to make a statement. <br></br> My love for learning is the driving force behind my career transition.
            I thrive on the challenges that coding languages present and embrace every opportunity to expand my skill set.  <br></br>
            In this ever-evolving field, I see each project as an opportunity to grow, adapt, and push the boundaries of what's possible.
          </p>
        </div>
      </div>
      
      <div className="Experience-container">

        <div className="frontend-table">
          <h2>Front End</h2>
          <ul>
            <li className="b1">HTML</li>
            <li className="b1">CSS</li>
            <li className="b1">Bootstrap</li>
            <li className="b1">JavaScript</li>
            <li className="b1">React</li>
            <li className="b1">JQuery</li>
          </ul>
        </div>

        <div className="backend-table">
          <h2>Back End</h2>
          <ul>
            <li className="b1">Node.js</li>
            <li className="b1">Express.js</li>
            <li className="b1">PostgreSQL</li>
            <li className="b1">MongoDB</li>
            <li className="b1">Python</li>
            <li className="b1">Django</li>
          </ul>
        </div>
      </div>
      <div className="Portfolio-Container">
        <div className="Portfolio-1">
          <a href="https://luxd-90407e25f855.herokuapp.com/stylist/new">
            <h2>LuxD Reviews</h2>
          </a>

          <img src="./luximg.png" alt="love" width="400" height="250" />





        </div>

        <div className="Portfolio-2">
          <a href="https://github.com/andrewsegovia00/CuisineQuest">
            <h2>Cuisine Quest</h2>
          </a>
          <img src="./CQ.png" alt="love" width="400" height="250" />





        </div>

        <div className="Portfolio">
          <h2>BlessDay</h2>





        </div>
      </div>


    </>
  );
}



