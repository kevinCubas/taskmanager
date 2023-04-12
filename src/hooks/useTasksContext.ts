import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

export function useTasksContext() {
  const context = useContext(TaskContext)
  return context;
}