import React from "react";
import {
  NavbarComponents,
  UsersComponents,
  HomeComponents,
  CreateUserComponents,
  NotFoundComponents,
} from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponents />
      <Routes>
        <Route path="/" exact="true" element={<HomeComponents />} />
        <Route path="/users" exact="true" element={<UsersComponents />} />
        <Route
          path="/adduser"
          exact="true"
          element={<CreateUserComponents />}
        />
        <Route path="*" element={<NotFoundComponents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
