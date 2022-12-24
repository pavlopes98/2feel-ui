import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Logo from '../../assets/branding/2-feel-logo.png'

function TopNavBar() {
  return (
      <Navbar  bg="light" className="gap-3 px-3" expand="md">
        <Navbar.Brand href="/home">
          <img
            alt="2FeelPortugal logo"
            src={Logo}
            width="200"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="flex-grow-1 justify-content-evenly">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Google</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Other
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default TopNavBar;
