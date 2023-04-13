import { TaskForm } from '../TaskForm';
import { useTasksContext } from '../../hooks/useTasksContext';
import ReactModal from 'react-modal';

export function UpdateTaskModal() {
  const { isModalOpen, closeModal, taskToUpdate } = useTasksContext()


  return (
    <ReactModal
      isOpen={isModalOpen} 
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: '#382c3da9'
        },
        content: {
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          borderRadius: "0.5rem",
          maxWidth: "736px",
          gap: "1rem",
          border: "none",
          background: "var(--gray-700)",
          color: "var(--gray-200)",
        }
      }}
    >
      <h2>Edit Task</h2>
      <TaskForm task={taskToUpdate}/>
    </ReactModal>
  );
}