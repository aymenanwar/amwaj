import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
 } from 'reactstrap';
import {Link} from 'react-router-dom';
import './menuStyle.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="menu">
        <Navbar color="light" light expand="md"  style={{ padding: '.5rem', fontFamily:'Cursive' }}>
          <NavbarBrand href="/">Amwaj Education</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
              <Link className='NavLink' to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link className='NavLink' to='/unis'>Universities</Link>
              </NavItem>
              <NavItem>
                <Link className='NavLink' to='/courses'>Courses</Link>
              </NavItem>
              <NavItem>
                <Link className='NavLink' to='/register'>Registreation</Link>
              </NavItem>
              <NavItem>
                <Link className='NavLink' to='/aboutus'>About us</Link>
              </NavItem>
              <NavItem>
                <Link className='NavLink' to='/contactus'>Contact us</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}