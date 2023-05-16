import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          Waiter.app
        </Navbar.Brand>
        <Nav className='me-end'>
          <Nav.Link as={NavLink} to='/tables/add'>
            Add Table
          </Nav.Link>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
