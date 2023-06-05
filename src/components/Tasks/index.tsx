import { ITask } from "../../App";
import { Task } from "../Task";
import styles from "./Tasks.module.css";

interface Props {
  tasks: ITask[];
}

export function Tasks({ tasks }: Props) {
  const quantityOfTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{quantityOfTasks}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{completedTasks} de {quantityOfTasks}</span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
