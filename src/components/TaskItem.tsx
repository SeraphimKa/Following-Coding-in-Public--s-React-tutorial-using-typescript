import { useState } from "react";

//Style imports
import styles from "./TaskItem.module.css";

//Library imports
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Props {
  task: any;
}

export default function TaskItem({ task }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(task.checked);

  const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setIsChecked(!isChecked);
  };
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name}`}
          //onClick={}
        >
          <PencilSquareIcon strokeWidth={2} width={24} height={24} />
        </button>{" "}
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          //onClick={}
        >
          <TrashIcon strokeWidth={2} width={24} height={24} />
        </button>
      </div>
    </li>
  );
}
