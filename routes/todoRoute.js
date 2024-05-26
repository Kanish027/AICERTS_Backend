import express from "express";
import {
  deleteTodo,
  getSingleTodo,
  getTodos,
  isCompleted,
  newTodo,
  updateTodo,
} from "../controller/todoController.js";

const router = express.Router();

router.post("/new", newTodo);

router.get("/todos", getTodos);

router.get("/todo/:id", getSingleTodo);

router.put("/todo/:id", isCompleted);

router.delete("/todo/:id", deleteTodo);

router.put("/tododetails/:id", updateTodo);

export default router;
