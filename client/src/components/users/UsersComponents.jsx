import {
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Table,
} from "@mui/material";
import React from "react";
import styled from "./Users.module.css";

const UsersComponents = (props) => {
  const data = props.users;

  const headCells = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "name",
      label: "Name",
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
      formatter: (rowContent, row) => {},
    },
  ];

  return (
    <>
      <Table className={styled.table}>
        <TableHead>
          <TableRow className={styled.thead}>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </TableRow>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} className={styled.row}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.experience}</TableCell>
                <TableCell>{row.lvl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableHead>
      </Table>
    </>
  );
};

export default UsersComponents;
