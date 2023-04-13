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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      toast.warn("Please, insert the required input.");
      return;
    } else if (task) {
      editTask(task.id, description, title);
      closeModal();
      return;
    }
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
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <input
        className="inputs"
        type="text"
        aria-placeholder="Task Title"
        placeholder="Title"
        aria-required="true"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="inputs"
        aria-placeholder="Task description"
        aria-required="true"
        required
        maxLength={350}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.SubmitButton
        type="submit"
        aria-placeholder="Create task button"
      >
        {task ? "Update" : "Create"}
      </S.SubmitButton>
    </S.Form>
  );
};