import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Header() {

  return (
    <div className="container">
    <Navbar collapseOnSelect expand="lg" className="bg-transparent pt-3">
      <Container fluid>
        <Navbar.Brand href="#" className='text-light'><h1 className='text-light'><span style={{color:"rgb(253 114 5)"}}>Prime</span>Flicks</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto ms-4 my-2 my-lg-0 d-flex justify-content-center gap-5 "
            style={{ maxHeight: '500px', }}
            navbarScroll
          >
         
            <Link className='text-light text-decoration-none fs-5' to='/'>Home</Link>
           
          
            <Link className='text-light text-decoration-none fs-5' to='/horror'>Horror</Link>
            <Link className='text-light text-decoration-none fs-5' to='/animation' >Animated </Link>
            <Link className='text-light text-decoration-none fs-5' to='/history' >Historical </Link>
            <Link className='text-light text-decoration-none fs-5' to='/crime' >Crime</Link>
            <Link className='text-light text-decoration-none fs-5' to='/romantic' >Romantic</Link>
          </Nav>
          {/* <Form className="d-flex text-light">
            <Form.Control
              type="search"
              placeholder="Search"
              className="input-class me-2 text-light"
              aria-label="Search"
              style={{backgroundColor:"#211b1b",border:"none"}}
            />

            <Button variant='none' style={{width:"10vw",backgroundColor:"rgb(253 114 5)",color:"white"}}>Sign In</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
