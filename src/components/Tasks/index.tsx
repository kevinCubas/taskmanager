import * as S from "./style";
import { TaskItem } from "../TaskItem";
import { useTasksContext } from "../../hooks/useTasksContext";
import { UpdateTaskModal } from "../UpdateTaskModal";
import { useState } from "react";
import { toast } from "react-toastify";
import { BiTaskX } from "react-icons/bi";
import { NoItems } from "../NoItems";

export function Tasks() {
  const [status, setStatus] = useState("all");
  const { tasks } = useTasksContext()

  const options = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "pending",
      label: "Pending",
    },
    {
      value: "in progress",
      label: "In progress",
    },
    {
      value: "done",
      label: "Done",
    },

  ]

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      setStatus(e.target.value);
    } catch (error) {
      toast.error("Could not set status");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    return status !== "all" ? task.status === status : task
  });

  const sortedList = [...filteredTasks].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  });

  return (
    <>
      <S.Header>
        <p>Tasks created <span>{tasks.length}</span></p>
        <S.SelectContainer>
          <label htmlFor="select-status">Filter by status:</label>
          <S.Select
            disabled={tasks.length === 0}
            id="select-status"
            aria-label="Select an option"
            onChange={handleChange}
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              )
            })}
          </S.Select>
        </S.SelectContainer>
      </S.Header>
      {tasks.length === 0 ? (
        <NoItems 
          title="You don't have tasks registered yet" 
          subtitle="Create tasks and organize your to-do items!"
        />
      ) : filteredTasks.length === 0 ? (
        <NoItems 
          title={`You don't have "${status}" tasks`}
          subtitle="Review your tasks!"
        />
      ) : (
        <>
          <S.List>
            {sortedList.map((task) => {
              return (
                <TaskItem key={task.id} task={task} />
              )
            })}
          </S.List>
          <UpdateTaskModal />
        </>
      )}
    </>
  )
}