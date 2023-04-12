import * as S from "./style";
import { TaskItem } from "../TaskItem";
import { useTasksContext } from "../../hooks/useTasksContext";

export function Tasks() {
  const { tasks } = useTasksContext()
  
  const sortedList = [...tasks].sort((prevTask, nextTask) => {
    return prevTask.createdAt.getMilliseconds() - nextTask.createdAt.getMilliseconds()
  })
  return (
      <S.List>
        {sortedList.map((task) => {
          return (
            <TaskItem key={task.id} task={task} />
          )
        })}
      </S.List>
  )
}