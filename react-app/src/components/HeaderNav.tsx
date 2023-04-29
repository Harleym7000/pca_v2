import React from "react";
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function headerNav() {
    return (
        <Navbar expand="lg" className="navbarStyles">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/img/pcaLogo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="navbar-links">
                        <Nav.Link href="/" className="navbar-links">Home</Nav.Link>
                        <Nav.Link href="/about" className="navbar-links">About</Nav.Link>
                        <Nav.Link href="/events" className="navbar-links">Events</Nav.Link>
                        <Nav.Link href="/redSails" className="navbar-links">Red Sails Festival</Nav.Link>
                        <Nav.Link href="/news" className="navbar-links">News</Nav.Link>
                        <Nav.Link href="/contactUs" className="navbar-links">Contact Us</Nav.Link>
                        <Nav.Link href="/login" className="navbar-links">Login</Nav.Link>
                        <Nav.Link href="/register" className="navbar-links">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <Navbar variant="light">
        //     <Container>
        //         <Navbar.Brand href="#home">
        //             <img
        //                 alt=""
        //                 src="/img/pcaLogo.png"
        //                 width="50"
        //                 height="50"
        //                 className="d-inline-block align-top"
        //             />{' '}
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}
