import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown" 
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fb2856`,
    }}
  >
    <div className="container">

  <Navbar expand="lg">
    <Navbar.Brand href="/">
                <StaticImage
                  src="../images/logon1.png"
                  height={60}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ml-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/escort-service-in-delhi">Escort Service in Delhi</NavDropdown.Item>
          <NavDropdown.Item href="/mumbai-escort-service">Mumbai Escort Service</NavDropdown.Item>
          <NavDropdown.Item href="/call-girl-in-chandigarh">Call Girls in Chandigarh</NavDropdown.Item>
          <NavDropdown.Item href="/call-girls-in-chennai">Call Girls in Chennai</NavDropdown.Item>
          <NavDropdown.Item href="/call-girls-in-bangalore">Call Girls in Bangalore</NavDropdown.Item> 
          <NavDropdown.Item href="/call-girls-in-hyderabad">Call Girls in Hyderabad</NavDropdown.Item> 
        </NavDropdown>
        <Nav.Link href="/gallery" >Gallery</Nav.Link>
        <Nav.Link href="/contact" >Contact</Nav.Link>        
        <Nav.Link className="number" href="tel:+919654764781" >+91 9654764781</Nav.Link>               
      </Nav>
    </Navbar.Collapse>
  </Navbar>


    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header