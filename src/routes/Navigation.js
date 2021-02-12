import React, { useContext, useState } from "react";
import "./Navigation.css";
import UserContext from "../auth/UserContext";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';


const Navigation = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen); 

  const loggedInNav = () => {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </NavItem>        
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </NavItem>        
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/profile">
            My Profile
          </NavLink>
        </NavItem>        
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/" onClick={logout}>
            Log Out
          </NavLink>
        </NavItem>
      </Nav>
    );
  }   
    
  const loggedOutNav = () => {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/login">
            Log In
          </NavLink>
        </NavItem>        
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </NavItem>        
      </Nav>
    );
  }

  return (
    <div className="Navigation">
      <Navbar light expand="md">
        <NavbarBrand href="#">
          <NavLink to="/">Jobly</NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {currentUser ? loggedInNav() : loggedOutNav()}           
        </Collapse>
      </Navbar>
    </div>
  );  
}

export default Navigation;