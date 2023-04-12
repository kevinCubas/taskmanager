import { createContext, ReactNode, useState, useEffect } from "react";
import { ITask } from "../types/task"; 
import { toast } from "react-toastify";

interface ITaskProviderProps {
  children: ReactNode;
}

interface ITaskContextData {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (taskId: number) => void;
}

export const TaskContext = createContext<ITaskContextData>({} as ITaskContextData);

export function TaskProvider({ children }: ITaskProviderProps): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
    toast.success("Task created!")
  };

  const removeTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    toast.info("Task deleted!")
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};