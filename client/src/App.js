import React from "react";
import {
  NavbarComponents,
  UsersComponents,
  HomeComponents,
  CreateUserComponents,
  NotFoundComponents,
  EditUserComponents,
} from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponents />
      <Routes>
        <Route path="/" exact element={<HomeComponents />} />
        <Route path="/users" exact element={<UsersComponents />} />
        <Route path="/adduser" exact element={<CreateUserComponents />} />
        <Route path="/edituser/:id" exact element={<EditUserComponents />} />
        <Route path="*" element={<NotFoundComponents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
