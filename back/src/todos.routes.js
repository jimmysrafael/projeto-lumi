const express = require("express");

const todosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


todosRoutes.post("/todos", async (request, response) => {
  const { numerocliente } = request.body;
  const todo = await prisma.lumi.create({
    data: {
      numerocliente,
    },
  });
  //allTodos.push({name, status: false});
  return response.status(201).json(todo);
});

todosRoutes.get("/todos", async (request, response) => {
  const todos = await prisma.lumi.findMany();
  return response.status(200).json(todos);
});

module.exports = todosRoutes;
