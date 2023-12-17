/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AddTodo from "../components/AddTodo";
import HeroSection from "../components/HeroSection";
import { Box } from "@chakra-ui/react";
import { ThemeContext } from "../components/ThemeContext";

const Home = () => {
  const [todo, setTodo] = useState([]);
 

  //function to add a new task
  const addNewTask = (text) => {
    if (text.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
      };

      setTodo([newTask, ...todo]);
    }
  };

  //function to delete a task from the list
  const handleDelete = (id) => {
    const newTaskList = todo.filter((todoItem) => todoItem.id !== id);
    setTodo(newTaskList);
  };
  //function to toggle betwwn task done or not

  const toggleTaskCompletion = (id) => {
    const updatedTodo = todo.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTodo(updatedTodo);
  };

  //function to delete completed task
  const clearCompletedTask = () => {
    const todoItems = todo.filter((todo) => !todo.completed);
    setTodo(todoItems);
  };

  return (
    <>
      <ThemeContext>
        <NavBar />
        <AddTodo handleAddTask={addNewTask} />
        <HeroSection
          todoList={todo}
          handleDelete={handleDelete}
          toggleTaskCompletion={toggleTaskCompletion}
          clearCompletedTask={clearCompletedTask}
        />
      </ThemeContext>
    </>
  );
};

export default Home;
