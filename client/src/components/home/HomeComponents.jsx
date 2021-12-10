import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

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
          <Link className={styles.link} to="/users" exact>
            <Button variant="contained">All Users</Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "inline",
            justifyContent: "center",
          }}
        >
          <Link className={styles.link} to="/adduser" exact>
            <Button variant="contained" sx={{ textDecoration: "none" }}>
              Add User
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default HomeComponents;
