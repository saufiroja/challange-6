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
    <AppBar position="static">
      <Container maxWidth="xl" fixed>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {props.title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
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
