import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { editUser, getUsers } from "../../service/api";
import { useNavigate, useParams } from "react-router-dom";

const valueUser = {
  username: "",
  email: "",
  experience: "",
  lvl: "",
};

const EditUserComponents = () => {
  const [user, setUser] = useState(valueUser);
  const { username, email, experience, lvl } = user;
  let history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editUserDetails = async () => {
    await editUser(id, user);
    history("/users");
  };

  const loadData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onClickSubmit = () => {
    editUserDetails();
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <FormGroup sx={{ marginTop: 5, width: "50%" }}>
          <Typography variant="h6">Edit User</Typography>
          <FormControl sx={{ marginTop: 2 }}>
            <InputLabel>Username</InputLabel>
            <Input
              onChange={(e) => onChangeValue(e)}
              name="username"
              value={username}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl sx={{ marginTop: 2 }}>
            <InputLabel>Email</InputLabel>
            <Input
              onChange={(e) => onChangeValue(e)}
              name="email"
              value={email}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl sx={{ marginTop: 2 }}>
            <InputLabel>Experience</InputLabel>
            <Input
              onChange={(e) => onChangeValue(e)}
              name="experience"
              value={experience}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl sx={{ marginTop: 2 }}>
            <InputLabel>Level</InputLabel>
            <Input
              onChange={(e) => onChangeValue(e)}
              name="lvl"
              value={lvl}
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <Button
            variant="contained"
            onClick={onClickSubmit}
            sx={{ marginTop: 5 }}
          >
            Submit
          </Button>
        </FormGroup>
      </Container>
    </>
  );
};
export default EditUserComponents;
