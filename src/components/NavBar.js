import { Navbar, Container,Nav, NavDropdown } from 'react-bootstrap';

const NavBar = function(){
    return (
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome to Math Practice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Addition/Subtraction</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Multiplication/Division
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Decimals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Word Problems
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Quizzes/Test" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Quiz#1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Quiz#2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Test#1
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default NavBar;