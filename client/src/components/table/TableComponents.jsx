import {
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Container,
  TableContainer,
  Stack,
  TextField,
  Autocomplete,
} from "@mui/material";
import React from "react";

const TableComponents = (props) => {
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
  ];

  return (
    <>
      <Container maxWidth="xl">
        {/* <Stack sx={{ width: "25%" }}>
          <Autocomplete
            freeSolo
            id="name"
            options={data.map((option) => option.name)}
            renderInput={(params) => (
              <TextField {...params} label="Search input" />
            )}
          />
        </Stack> */}
        <TableContainer
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id}>{headCell.label}</TableCell>
              ))}
            </TableRow>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="center">{row.experience}</TableCell>
                  <TableCell align="center">{row.lvl}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableHead>
        </TableContainer>
      </Container>
    </>
  );
};

export default TableComponents;
