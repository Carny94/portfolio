import './App.css';
import TxtTyping from '../../components/TxtTyping/TxtTyping';



export default function App() {
  return (

    <>

     <TxtTyping />
    
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

      <div className="Experience-container">

        <div className="frontend-table">
          <h2>Front End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>JQuery</li>
          </ul>
        </div>

        <div className="backend-table">
          <h2>Back End</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
      </div>

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

    </>
  );
}



