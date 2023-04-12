import * as S from "./style";

import { ITask } from "../../types/task";

import { FiTrash, FiEdit } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { MdTimelapse } from "react-icons/md";
import { useTasksContext } from "../../hooks/useTasksContext";

interface ITaskItemProps {
  task: ITask
}

export function TaskItem({ task }: ITaskItemProps) {
  const { removeTask } = useTasksContext()
  const { id, title, description, status, createdAt } = task
  return (
    <S.ListItem theme={status}>
      <S.TaskHeader>
        <h2>{title}</h2>
        <span>Status: {status}</span>
      </S.TaskHeader>
      <p>{description}</p>
      <S.TaskButtons>
        <S.StatusButtons theme={status}>
          <button 
            className="in-progress" 
            type="button"
            onClick={() => console.log("in Progress")}
          >
            <MdTimelapse />
          </button>
          <button 
            className="done"
            type="button"
            onClick={() => console.log("done")}
          >
            <FaCheckCircle />
          </button>
        </S.StatusButtons>
        <S.ConfigButtons>
          <button 
            className="edit" 
            type="button"
            onClick={() => console.log("edited")}
          >
            <FiEdit />
          </button>
          <button 
            className="delete" 
            type="button"
            onClick={() => removeTask(id)}
          >
            <FiTrash />
          </button>
        </S.ConfigButtons>
      </S.TaskButtons>
      <S.CreatedDate>Created at: {createdAt.toLocaleString()}</S.CreatedDate>
    </S.ListItem>
  )
}