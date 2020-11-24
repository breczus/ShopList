import "./Header.css";
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

const brandIcon=<FontAwesomeIcon icon={faShoppingBasket} spin />;
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar color="warning" light expand="md" className="row">
      
      <div className="col-sm-12 col-md-6">
        <NavbarBrand href="/">{brandIcon} Shop List App</NavbarBrand>
        </div>
        <span className="col-sm-12 col-md-6">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem >
              <NavLink href="/">Instrukcja</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Dodaj Sklep</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Konto</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
        </span>
      </Navbar>
    
  );
}

export default Header;