import { createContext, ReactNode, useState, useEffect } from "react";
import { ITask } from "../types/task";
import { toast } from "react-toastify";

interface ITaskProviderProps {
  children: ReactNode;
}

interface ITaskContextData {
  isModalOpen: boolean;
  openModal: (task: ITask ) => void;
  closeModal: () => void;
  taskToUpdate: ITask;
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (taskId: number) => void;
  updateTaskStatus: (taskId: number, status: string) => void;
  editTask: (taskId: number, newDescription: string, newTitle: string) => void;
}

export const TaskContext = createContext<ITaskContextData>({} as ITaskContextData);

export function TaskProvider({ children }: ITaskProviderProps): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask>({} as ITask);

  const openModal = (task: ITask) => {
    setTaskToUpdate(task);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setTaskToUpdate({} as ITask);
    setIsModalOpen(false);
  }
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

  const updateTaskStatus = (taskId: number, status: string) => {
    if (!tasks.find((task) => task.id === taskId)) {
      toast.error("Task not found!");
      return;
    } else if (tasks.find(task => task.id === taskId)?.status === status) {
      const updatedTasks = tasks.map((task) => {
        return task.id === taskId ? { ...task, status: "pending" } : task;
      })
      setTasks(updatedTasks);
      toast.info("Task status updated!");
      return;
    }

    const updatedTasks = tasks.map((task) => {
      return task.id === taskId ? { ...task, status } : task;
    });
    setTasks(updatedTasks);
    toast.info("Task status updated!");
  }

  const editTask = (taskId: number, newDescription: string, newTitle: string) => {
    const taskExist = tasks.find((task) => task.id === taskId);

    if (!taskExist) {
      toast.error("Task not found!");
      closeModal()
      return;
    }

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask = {
          ...task,
          description: newDescription !== task.description ? newDescription : task.description,
          title: newTitle !== task.title ? newTitle : task.title,
        };
        return updatedTask;
      } else {
        return task;
      }
    })
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isModalOpen,
        taskToUpdate,
        addTask,
        removeTask,
        updateTaskStatus,
        editTask,
        openModal,
        closeModal
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};