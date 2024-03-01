import React from "react";
import Inputs from "./Input";
import ListItem from "./ListItem";
import { useAppSelector } from "../../store/thunkhook";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  return (
    <div className="h-full w-full">
      <div className="h-96 w-96 m-auto">
        <div className="text-5xl m-10 ">Todo List</div>
        <Inputs />
        {todos.contents.map((content, idx) => {
          return <ListItem key={idx} idx={idx} content={content} />;
        })}
        {/* <div>
          {todos.contents.map((content, idx) => {
            return (
              <div>
                {content}
                {idx}
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default TodoList;
