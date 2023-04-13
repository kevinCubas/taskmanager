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
  const { openModal, updateTaskStatus, removeTask } = useTasksContext();
  const { id, title, description, status, createdAt } = task;

  return (
    <S.ListItem theme={status}>
      <S.TaskHeader>
        <h2 className="title">{title}</h2>
        <span>Status: {status}</span>
      </S.TaskHeader>
      <p>{description}</p>
      <S.TaskButtons>
        <S.StatusButtons theme={status}>
          <button 
            className="in-progress" 
            type="button"
            onClick={() => updateTaskStatus(id, "in progress")}
          >
            <MdTimelapse />
          </button>
          <button 
            className="done"
            type="button"
            onClick={() => updateTaskStatus(id, "done")}
          >
            <FaCheckCircle />
          </button>
        </S.StatusButtons>
        <S.ConfigButtons>
          <button 
            className="edit" 
            type="button"
            onClick={() => openModal(task)}
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