import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
  Container
  }
  from 'reactstrap';
import './header.css';

export default class Header extends React.Component {
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
      <div>
        <Navbar  className="main-nav bg-transparent" color="light" light expand="md" >
        <Container>
        <a className="navbar-brand" href="#">
            <img src="/img/logo.svg" width="60" height="60" alt=""/>
        </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navItem" href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="navItem" href="#">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navItem" href="#">Follow</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
