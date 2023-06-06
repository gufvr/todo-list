import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { useState } from "react";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "teste",
      isCompleted: true,
    },
    {
      id: "aushuahs",
      title: "teste 2",
      isCompleted: false,
    },
  ]);

  function addTask(TaskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: TaskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id === taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} />
    </>
  );
}

export default App;
