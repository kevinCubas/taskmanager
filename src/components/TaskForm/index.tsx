import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTasksContext } from "../../hooks/useTasksContext";
import * as S from "./style";
import { ITask } from "../../types/task";

interface ITaskFormProps {
  task?: ITask;
}

export function TaskForm({ task }: ITaskFormProps) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const { addTask, editTask, closeModal } = useTasksContext();

  let isDisabled = title.length === 0 || description.length === 0;
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (title.length > 40) {
      setTitle(title.slice(0, 40));
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    if (description.length > 350) {
      setDescription(description.slice(0, 350));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      editTask(task.id, description, title);
      closeModal();
      return;
    }
    if (title && description) {
      const newTask = {
        id: new Date().getTime(),
        title,
        description,
        createdAt: new Date(),
        status: "pending",
      };
      addTask(newTask);
      setTitle("");
      setDescription("");
      return;
    }
    toast.warn("Please fill all fields!");
    return;
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <label>Title:
        <S.InputContainer>
          <input
            className="inputs"
            type="text"
            aria-placeholder="Task Title"
            placeholder="Title"
            aria-required="true"
            aria-label="Task Title"
            required
            value={title}
            onChange={handleTitleChange}
            maxLength={40}
          />
          <span>{title.length}/40</span>
        </S.InputContainer>
      </label>
      <label>Description:
        <S.InputContainer>
          <textarea
            className="inputs"
            aria-placeholder="Task description"
            aria-required="true"
            aria-label="Task description"
            required
            maxLength={350}
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <span>{description.length}/350</span>
        </S.InputContainer>
      </label>
      <S.SubmitButton
        type="submit"
        aria-placeholder="Create task button"
        disabled={isDisabled}
        aria-disabled={isDisabled}
      >
        {task ? "Update" : "Create"}
      </S.SubmitButton>
    </S.Form>
  );
};