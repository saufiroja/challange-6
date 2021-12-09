import React, { useState } from "react";
import {
  NavbarComponents,
  UsersComponents,
  HomeComponents,
  CreateUserComponents,
  NotFoundComponents,
} from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [data, setData] = useState({
    title: "Game",
    users: [
      {
        id: 1,
        name: "halo",
        email: "halo@gmail.com",
        experience: 1,
        lvl: 1,
      },
      {
        id: 3,
        name: "halo12",
        email: "halo@gmail.com",
        experience: 1,
        lvl: 1,
      },
    ],
  });
  return (
    <BrowserRouter>
      <NavbarComponents title={data.title} />
      <Routes>
        <Route path="/" exact element={<HomeComponents />} />
        <Route
          path="/users"
          exact
          element={<UsersComponents users={data.users} />}
        />
        <Route path="/adduser" exact element={<CreateUserComponents />} />
        <Route path="*" element={<NotFoundComponents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
