import { Router } from "express";
import {
  getTasks,
  addTask,
  removeTask,
  updateTask,
} from "../controller/task.controller";
const route = Router();

route.get("/", getTasks);
route.post("/", addTask);
route.put("/:id", updateTask);
route.delete("/:id", removeTask);

export default route;