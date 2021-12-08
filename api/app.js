const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSON = require("../docs/swagger.json");

const app = express();

var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON));

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./app/models");
db.client.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
});

require("./app/routes/player.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
