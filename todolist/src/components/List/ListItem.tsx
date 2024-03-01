import React from "react";
import { useAppDispatch } from "../../store/thunkhook";
import "../../index.css";
import { deleteTodos } from "../../store/slice/todoSlice";

interface TodoProps {
  idx: number;
  content: string;
}

const ListItem = ({ idx, content }: TodoProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border-2 m-4 rounded-md ">
      <div className="flex justify-between p-3">
        <div className="ellipsis">{content}</div>
        <button
          className="pl-5 pr-16 ml-5 py-3 rounded-lg bg-yellow-300 hover:bg-red-600"
          onClick={() => {
            dispatch(deleteTodos(idx));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
