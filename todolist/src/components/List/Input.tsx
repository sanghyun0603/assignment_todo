import React from "react";
import { useState, FormEvent } from "react";
import { useAppDispatch } from "../../store/thunkhook";
import { addTodos } from "../../store/slice/todoSlice";

export interface TypeForm extends FormEvent<HTMLFormElement> {}

const Inputs = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDispatch();
  const submit = (e: TypeForm) => {
    e.preventDefault();
    if (todo.length === 0) {
      alert("내용을 입력하세요");
    } else {
      dispatch(addTodos(todo));
    }
    setTodo("");
  };
  return (
    <form className="m-4" onSubmit={(e) => submit(e)}>
      <input
        type="text"
        className="border-2 py-2 px-3 rounded-lg"
        placeholder="할 일을 입력해주세요"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value.trim());
        }}
      />
      <button className="pl-5 pr-16 ml-5 py-3 rounded-lg bg-red-400">
        Add
      </button>
    </form>
  );
};

export default Inputs;
