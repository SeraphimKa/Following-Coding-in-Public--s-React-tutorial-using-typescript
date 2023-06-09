import { PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface Props {
  addTask: (task: any) => void;
}

const CustomForm: React.FC<Props> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: any
  ) => {
    e.preventDefault();
    addTask({ name: task, checked: false, id: Date.now() });
    setTask("");
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.currentTarget.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon className="h-6 w-6 text-blue-500" />
      </button>
    </form>
  );
};

export default CustomForm;
