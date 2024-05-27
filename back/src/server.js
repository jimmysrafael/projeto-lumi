const express = require("express");
const cors = require("cors");
const lumiRoutes = require("./lumi.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(lumiRoutes);

app.listen(3333, () => console.log("Server up in 3333"));