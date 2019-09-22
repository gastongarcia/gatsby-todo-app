import React, { useState } from "react";
import uuid from "uuid";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

function IndexPage() {
  const [todos, setTodos] = useState([
    {
      id: uuid.v4(),
      title: "Learn React within Gatsby",
      completed: false
    },
    {
      id: uuid.v4(),
      title: "Work 20 minutes in pure React",
      completed: false
    },
    {
      id: uuid.v4(),
      title: "Enjoy 20 minutes of learning React",
      completed: false
    }
  ]);

  const addNewTodo = title => {
    const newTodoList = [
      ...todos,
      { id: uuid.v4(), title: title, completed: false }
    ];
    setTodos(newTodoList);
  };

  const markTodoCompleted = id => {
    console.log(id);

    const completedTodo = todos.find(todo => todo.id === id);
    completedTodo.completed = !completedTodo.completed;

    const newTodoList = [...todos];

    setTodos(newTodoList);
  };

  const deleteTodo = id => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <Layout>
      <SEO title="To-do App with React Hooks" />

      <div className="md:w-1/2 w-10/12 mx-auto bg-gray-400 mt-5 p-3 rounded-lg">
        <AddTodo addNewTodo={addNewTodo} />
        {todos.map(todo => (
          <TodoItem
            title={todo.title}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            markTodoCompleted={markTodoCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </Layout>
  );
}

export default IndexPage;
