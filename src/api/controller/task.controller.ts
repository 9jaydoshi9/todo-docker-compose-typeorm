import { Request, Response } from "express";
import * as taskService from "../service/task.service";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getTasks();
    return res.status(200).send({ success: true, data:tasks });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
};

export const addTask = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.addTask(req.body);
    return res.status(200).send({ success: true, data: tasks });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.updateTask(+req.params?.id,req.body);
    return res.status(200).send({ success: true, data: tasks });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
};


export const removeTask = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.removeTask(+req.params?.id);
    return res.status(200).send({ success: true, data: 'Success' });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
};
