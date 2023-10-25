import App from "../../pages/App/App"
import './NavBar.css';


export default function NavBar() {

    return (
        <>
            <nav>
                <ul className="nav-ul">
                    <li className="nav-li"><a href="#Main-container">About Carneala</a></li>
                    <li className="nav-li"><a href="#Experience-container">Experience</a></li>
                    <li className="nav-li"><a href="#Portfolio-Container">Portfolio</a></li>
                    <li className="nav-li"><a href="#form-container">Contact Me</a></li>
                </ul>
            </nav>

        </>

    )

}