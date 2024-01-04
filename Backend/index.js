const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/todo", async function (req, res) {
  const payload = req.body;
  const parsePayload = createTodo.safeParse(payload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: payload.title,
    description: payload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.put("/completed", async function (req, res) {
  const payload = req.body;
  const parsePayload = updateTodo.safeParse(payload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong id",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as done",
  });
});

app.listen(port, () => {
  console.log("to do application running on port 3000");
});
