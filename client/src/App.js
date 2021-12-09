import { useState } from "react";
import { NavbarComponents, TableComponents } from "./components/index";

function App() {
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
      {
        id: 2,
        name: "halo",
        email: "halo@gmail.com",
        experience: 1,
        lvl: 1,
      },
    ],
  });
  return (
    <div>
      <NavbarComponents title={data.title} />
      <TableComponents users={data.users} />
    </div>
  );
}

export default App;
