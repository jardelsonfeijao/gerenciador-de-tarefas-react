import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar matemática",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar inglês",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // CASO PRECISE ATUALIZAR A TAREFA
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // CASO NÃO PRECISE ATUALIZAR A TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
