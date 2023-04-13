export interface ITaskContextData {
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