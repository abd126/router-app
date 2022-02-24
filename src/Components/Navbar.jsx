import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navb = () => {
    return (
        <div className='Navbar'>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">N.M Logistics</Navbar.Brand>
                    <Nav className="mr-0">
                        <Nav.Link>
                            <Link to="/">
                                Home
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/service">
                                Service
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/about">
                                About Us
                            </Link>
                        </Nav.Link>
                        
                        <Nav.Link>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navb
