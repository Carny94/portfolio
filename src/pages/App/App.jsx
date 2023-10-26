import './App.css';
import TxtTyping from '../../components/TxtTyping/TxtTyping';
import NavBar from '../../components/NavBar/NavBar';
import WeatherAPI from '../../components/WeatherAPI/WeatherAPI';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function App() {

  const apiKey = process.env.API_KEY;

  return (

    <>
      <NavBar />
    
      <div className="Carneala" id="Carneala">
        <h3>Hi</h3>
        <h2>Im Carneala</h2>
      </div>
      <TxtTyping />
      <h3 className="section-header"> ABOUT CARNEALA...</h3>
      <div className="Main-container-1" id="Main-container">
        <div className="my-image-container">
          <img src="./avatar.png" alt="avatar" />
        </div>

        <div className="About-me-container">
          <div className="square-container">
            <div className="square">
              <h5>Development Experience<br /></h5>
              <div className="lower-text">1+</div>
            </div>
            <div className="square-2">
              <h5>Property Mgmt Experience</h5>
              <div className="lower-text">8+</div>

            </div>
            <div className="square-3">
              <h5>Coded Projects<br /></h5>
              <div className="lower-text">4+</div>
            </div>
          </div>
          <p className="About-me">
            I am a Bay Area Native full-stack developer who takes joy in learning new coding languages❤️
            Transitioning from a career in property management, I've embarked on an exciting journey into the dynamic
            world of web development, and I'm here to make a statement. My love for learning is the driving force behind my career transition.
            I thrive on the challenges that coding languages present and embrace every opportunity to expand my skill set.
            In this ever-evolving field, I see each project as an opportunity to grow, adapt, and push the boundaries of what's possible.
          </p>
        </div>
      </div>


      <h3 className="section-header-skills"> SKILLS &<br />

        EXPERIENCE!
      </h3>

      <div className="Experience-container" id="Experience-container">

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

      <h3 className="portfolio-header">RECENT WORK</h3>
      <div className="Portfolio-Container" id="Portfolio-Container">
        <div className="portfolio-1">
          <a href="https://luxd-90407e25f855.herokuapp.com/stylist/new">
            <h2>LuxD Reviews</h2>
          </a>
          <img src="./luximg.png" alt="love" width="400" height="250" />
        </div>
        <div className="portfolio-2">
          <a href="https://github.com/andrewsegovia00/CuisineQuest">
            <h2>Cuisine Quest</h2>
          </a>
          <img src="./CQ.png" alt="love" width="400" height="250" />
        </div>
        <div className="portfolio-3">
          <h2>BlessDay</h2>
        </div>
        <div className="portfolio-4">
          <h2>Game</h2>
        </div>
      </div>
       <ContactForm />
       <WeatherAPI />
    </>
  );


}



