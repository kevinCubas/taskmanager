import * as S from "./style";
import { TaskItem } from "../TaskItem";
import { useTasksContext } from "../../hooks/useTasksContext";
import { UpdateTaskModal } from "../UpdateTaskModal";

export function Tasks() {
  const { tasks} = useTasksContext()
  
  const sortedList = [...tasks].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
  return (
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
  )
}