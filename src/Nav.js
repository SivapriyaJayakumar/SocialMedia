import React, { useState } from "react";
import { useHistory } from "react-router";
import {Nav,NavbarBrand,Collapse,NavbarToggler,Navbar,NavItem,NavLink} from 'reactstrap';
import Profile from "./Profile";
import App from "./App";
import Login from "./LoginPage";
import {Switch,Route,Redirect} from 'react-router-dom';


function NavBar(props){
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen)
    console.log(props.name)


    return(
        <div className="customnav">
            <Navbar className="navbarbar"  expand="md">
                <NavbarBrand href="#/home" className="navtext" style={{cursor:"pointer"}}>WayConnect
                <div className="welcome navtext">
                       <span > Hello{" "+props.name}</span>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink   className="navtext" href="#/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink   className="navtext"href="#/posts">My Posts</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink   className="navtext"href="#/" >Logout</NavLink>
                    </NavItem>
                    </Nav>
                    </Collapse>
                    
            </Navbar>
     
                    
        </div>
    );
    
}
export default NavBar;