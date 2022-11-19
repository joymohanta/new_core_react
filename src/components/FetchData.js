import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Detail from "./Detail";

const FetchData = () => {
  /* const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        console.log(data);
      });
  }, []); */

  const { data: todos, isLoading } = useQuery("todos", () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Fetching todos data: {todos.length} </h1>
      {todos.slice(0, 3).map((todo) => (
        // <Detail key={todo.id} todo={todo}></Detail>
        <h3 key={todo.id}>Title: {todo.title}</h3>
      ))}
    </div>
  );
};

export default FetchData;
