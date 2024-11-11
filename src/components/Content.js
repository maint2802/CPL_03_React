import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Row from "./../../node_modules/react-bootstrap/esm/Row";
const Content = () => {
  console.log("content");
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h2>Content</h2>
      <div>
        <input
          value={inputValue}
          onChange={handleChangeInput}
          className="form-control w-75 d-inline"
        />
        <Button variant="success" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      <div>
        {todoList.map((todo, index) => {
          return (
            <p key={index}>
              {index + 1}: {todo}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Content;

// useState
// inline event
// render/ re-render

// re-render vs re-load

// const [state, setState] = useState(initialValue)
// event object target

// hooks: useState, useEffect
// bootstrap

// mounting , updating, unmounting,

// // side effect: call API, DOM event, timer (setTimerout)
// // case1
// useEffect(() => {
//   console.log("without deps");
//   // logic
// });
// // case2
// useEffect(() => {
//   console.log("dep is []");
// }, []);
// // case3
// useEffect(() => {
//   console.log("dep is todolist");
// }, [todoList, inputValue]);

// React.memo HOC
// HOF: higher order function

// react-router-dom
