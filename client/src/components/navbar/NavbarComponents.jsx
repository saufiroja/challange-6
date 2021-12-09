import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";

const pages = ["Home", "About", "Blog"];

const NavbarComponents = (props) => {
  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 2 }}>
            {props.title}
          </Typography>
          <Box>
            <Menu>
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarComponents;
