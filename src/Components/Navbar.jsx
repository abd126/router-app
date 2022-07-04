import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";

import Logo from '../Img/Logo.png'
const Navb = () => {
    return (
        <div className="container-fluid w-100" >

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className={styles.Logo}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={styles.navRight}>
                            <Nav.Link href="#home">
                                <Link to="/" className={styles.Link}>
                                    Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#link">
                                <Link to="/service" className={styles.Link}>
                                    Service
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/about" className={styles.Link}>
                                    About Us
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/contact" className={styles.Link}>
                                    Contact
                                </Link>
                            </Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navb
