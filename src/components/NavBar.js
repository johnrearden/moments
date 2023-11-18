import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import styles from "../styles/NavBar.module.css";
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin">
                <i className="fas fa-sign-in-alt"></i>Sign In
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup">
                <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
        </>
    );



    const loggedInIcon = <>{currentUser?.username}</>

    return (
        <Navbar className={styles.NavBar} fixed="top" expand="md">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45"></img>
                    </Navbar.Brand>
                </NavLink>
                {currentUser ? loggedInIcon : loggedOutIcons}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/">
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar>

    )
}

export default NavBar