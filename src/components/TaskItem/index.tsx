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
            aria-label="In Progress"
            type="button"
            onClick={() => updateTaskStatus(id, "in progress")}
          >
            <MdTimelapse /> <span aria-hidden='true'>In Progress</span>
          </button>
          <button
            className="done"
            aria-label="Done"
            type="button"
            onClick={() => updateTaskStatus(id, "done")}
          >
            <FaCheckCircle /> <span aria-hidden='true'>Done</span>
          </button>
        </S.StatusButtons>
        <S.ConfigButtons>
          <button
            className="edit"
            type="button"
            aria-label="Edit"
            aria-haspopup="true"
            onClick={() => openModal(task)}
          >
            <FiEdit />
          </button>
          <button
            className="delete"
            aria-label="Delete"
            type="button"
            onClick={() => removeTask(id)}
          >
            <FiTrash />
          </button>
        </S.ConfigButtons>
      </S.TaskButtons>
      <S.CreatedDate>Created at: {new Date(createdAt).toLocaleString()}</S.CreatedDate>
    </S.ListItem>
  )
}