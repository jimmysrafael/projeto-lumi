import express from "express";
const cors = require("cors");
import { prismaClient } from "./database";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT ?? 4000;

app.get("/lumi", async (request, response) => {
  const lumi = await prismaClient.lumi.findMany();
  return response.json(lumi);
});

app.listen(port, () => console.log("Server is running on port ", port));
