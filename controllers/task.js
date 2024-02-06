import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const createNewTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return next(
        new ErrorHandler(400, "Title and Description are mandatory fields")
      );
    }

    //Either use new instance of Task model or .create method !!
    // const task = new Task({ title, description, user: req.user });
    // task.save();
    await Task.create({
      title,
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      msg: "Task created successfully!!",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTask = async (req, res) => {
  try {
    const userID = req.user._id;
    console.log(userID);
    // We have to use find instead of findByID because findById will match ._id (which is not users id) of Task with userID
    const tasks = await Task.find({ user: userID }); // Because in DB we have user key where userID is stored

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return next(new ErrorHandler(404, "No task found wih this task id"));
    }
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
      success: true,
      msg: "Task updated successfully !!",
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return next(new ErrorHandler(404, "No task found wih this task id"));
    }
    await task.deleteOne();
    res.status(200).json({
      success: true,
      msg: "Task deleted successfully !!",
    });
  } catch (error) {
    next(error);
  }
};
