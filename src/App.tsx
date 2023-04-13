import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { TaskForm } from "./components/TaskForm";
import { TaskProvider } from "./context/taskContext";

function App() {
  return (
    <>
      <Header />
      <TaskProvider>
        <main>
          <TaskForm />
          <Tasks />
        </main>
      </TaskProvider>
      <ToastContainer autoClose={2000} limit={5} theme="dark"/>
    </>
  )
}

export default App
