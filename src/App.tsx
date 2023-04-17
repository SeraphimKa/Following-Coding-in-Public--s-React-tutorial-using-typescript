//Custom Components
import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = (task: string) => {
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
};

export default App;
