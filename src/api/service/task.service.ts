import { db } from "../../database";
import { Task } from "../../models/todo.entity";
import { TaskDetail } from "../interface/task.interface";

const taskRepo = db.getRepository("Task");

export const addTask = async (taskDetails: TaskDetail) => {
  const task = new Task();
  task.title = taskDetails.title;
  task.description = taskDetails.description;

  return taskRepo.save(task);
};

export const getTasks = async () => taskRepo.find();

export const updateTask = async (id: number, taskDetails: TaskDetail) => {
  const task = await taskRepo.findOneBy({
    id,
  });
  if(task){
    task.title = taskDetails.title;
    task.description = taskDetails.description;
  
    return taskRepo.save(task);
  }
  return {}
};

export const removeTask = async (id: number) => {
  taskRepo.delete(id);
};
