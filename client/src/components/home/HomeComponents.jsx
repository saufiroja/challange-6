import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import React from "react";

const HomeComponents = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ textAlign: "center", marginTop: 50 }}>
        <h1>Selamat Datang</h1>
        <Box
          sx={{
            display: "inline",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <Button variant="outlined" sx={{ textDecoration: "none" }}>
            <Link to="/users" exact>
              All Users
            </Link>
          </Button>
        </Box>
        <Box
          sx={{
            display: "inline",
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" sx={{ textDecoration: "none" }}>
            <Link to="/adduser" exact>
              Add User
            </Link>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default HomeComponents;
