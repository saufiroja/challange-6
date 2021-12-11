import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { addUser } from "../../service/api";
import { useNavigate } from "react-router-dom";

const valueUser = {
  username: "",
  email: "",
  experience: "",
  lvl: "",
};

const CreateUserComponents = () => {
  const [user, setUser] = useState(valueUser);
  const { username, email, experience, lvl } = user;
  const history = useNavigate();

  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const createUser = async () => {
    await addUser(user);
    history("/users");
  };

  const onClickUser = () => {
    createUser();
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <FormGroup sx={{ marginTop: 5, width: "50%" }}>
          <Typography variant="h6">Create User</Typography>
          <FormControl sx={{ marginTop: 2 }}>
            <InputLabel>Username</InputLabel>
            <Input
              onChange={(e) => onChangeValue(e)}
              name="username"
              value={username}
            />
          </FormControl>
          <FormControl sx={{ marginTop: 2 }}>
            <InputLabel>Email</InputLabel>
            <Input
              onChange={(e) => onChangeValue(e)}
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl sx={{ marginTop: 2 }}>
            <InputLabel>Experience</InputLabel>
            <Input
              onChange={(e) => onChangeValue(e)}
              name="experience"
              value={experience}
            />
          </FormControl>
          <FormControl sx={{ marginTop: 2 }}>
            <InputLabel>Level</InputLabel>
            <Input onChange={(e) => onChangeValue(e)} name="lvl" value={lvl} />
          </FormControl>
          <Button
            variant="contained"
            onClick={onClickUser}
            sx={{ marginTop: 5 }}
          >
            Submit
          </Button>
        </FormGroup>
      </Container>
    </>
  );
};
export default CreateUserComponents;
