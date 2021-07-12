import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import './MyNavbar.css'

function MyNavbar(){

    return(
    <div className='headerNav'>
        <Navbar className='myName' expand="lg">
            Richard Crippen

        <Nav className="mr-auto"> 
                <Nav.Link exact="true" to="/" as={Link} className='navTab' id='aboutMe' >About Me</Nav.Link>

                <Nav.Link to="/portfolio" as={Link} className='navTab' id='portfolio' >Portfolio</Nav.Link>

                <Nav.Link to="/contact" as={Link} className='navTab' id='contact'>Contact</Nav.Link>

                <Nav.Link to="/resume" as={Link} className='navTab' id='resume'>Resume</Nav.Link>
        </Nav>
        </Navbar>
    </div>
    )
}

export default MyNavbar;