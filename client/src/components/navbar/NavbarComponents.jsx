import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavbarComponents = (props) => {
  return (
    <AppBar className={styles.header} position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 2 }}>
            Game
          </Typography>
          <NavLink
            className={styles.tabs}
            to="/"
            exact
            variant="h6"
            sx={{ mr: 2 }}
          >
            Home
          </NavLink>
          <NavLink
            className={styles.tabs}
            to="/users"
            exact
            variant="h6"
            sx={{ mr: 2 }}
          >
            All User
          </NavLink>
          <NavLink
            className={styles.tabs}
            to="/adduser"
            exact
            variant="h6"
            sx={{ mr: 2 }}
          >
            Add User
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarComponents;
