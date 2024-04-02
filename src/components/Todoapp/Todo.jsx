import React, { useState } from "react";
import "./Todo.css";
import AddTask from "./AddTask";
import ListTasks from "./ListTasks";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };
  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  const editTask = (index, newTitle) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = newTitle;
    setTasks(updatedTasks);
  };
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <ListTasks
              task={task}
              removeTask={removeTask}
              editTask={editTask}
              toggleTaskCompletion={toggleTaskCompletion}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
