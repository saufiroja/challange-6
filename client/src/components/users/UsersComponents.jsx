import React, { useState, useEffect } from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Table,
  Container,
  Button,
} from "@mui/material";
import { getUsers } from "../../service/api";
import styles from "./Users.module.css";
import { Link } from "react-router-dom";

const UsersComponents = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const respones = await getUsers();
    setUsers(respones.data);
  };

  const headCells = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "username",
      label: "Username",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "lvl",
      label: "Level",
    },
    {
      label: "Action",
    },
  ];

  return (
    <>
      <Container maxWidth="xl">
        <Table sx={{ marginTop: 5 }}>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id}>{headCell.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.experience}</TableCell>
                <TableCell>{user.lvl}</TableCell>
                <TableCell>
                  <Button
                    className={styles.edit}
                    variant="contained"
                    sx={{ marginRight: 3 }}
                    LinkComponent={Link}
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Button>
                  <Button className={styles.delete} variant="contained">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default UsersComponents;
