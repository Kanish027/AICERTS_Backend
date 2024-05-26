import Todo from "../model/todoModel.js";

const newTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = await Todo({
      title: title,
      description: description,
    });
    await newTodo.save();
    res.status(201).json({
      success: true,
      message: "Todo Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const isCompleted = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.isCompleted = !todo.isCompleted;
    await todo.save();
    res.status(201).json({
      success: true,
      message: "Task Updated!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Todo deleted!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    todo.title = title || todo.title;
    todo.description = description || todo.description;

    await todo.save();

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  newTodo,
  getTodos,
  isCompleted,
  deleteTodo,
  getSingleTodo,
  updateTodo,
};
