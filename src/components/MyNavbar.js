import {useEffect, useState} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
function MyNavbar(){

    return(<div>
        <Navbar bg="light" expand="lg">
            MY NAVBAR!!!!!!!!!!!

<Nav className="mr-auto">
                <Nav.Link exact="true" to="/" as={Link} >About Me</Nav.Link>

                <Nav.Link to="/portfolio" as={Link} >Portfolio</Nav.Link>

                <Nav.Link to="/contact" as={Link} >Contact</Nav.Link>
</Nav>
        </Navbar>
    </div>)
}

export default MyNavbar;