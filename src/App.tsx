//Custom Components
import CustomForm from "./components/CustomForm";

export default function App(): JSX.Element {
  const addTask = (task: React.FormEvent) => {
    console.log(task);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  );
}
