//Component
import TaskItem from "./TaskItem";

//styles
import styles from "./TaskList.module.css";

interface Props {
  tasks: any[];
}

export default function Tasklist({ tasks }: Props) {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task: any) => (
          <TaskItem key={task.id} task={task} />
        ))}
    </ul>
  );
}
