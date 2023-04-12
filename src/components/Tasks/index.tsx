import * as S from "./style";
import { ITask } from "../../types/task";
import { TaskItem } from "../TaskItem";

const tasks: ITask[] = [
  { id: 1, title: "Tarefa", description: "lorem jkjkkkjkk kjk jkjkj kk kk jkjkjkjkjkjkkjk ioioioioioiooiioi oioioioiooio io impsum lodr djo lor", status: "done", createdAt: new Date() },
  { id: 2, title: "Tarefa", description: "lorem impsum lodr djo lor", status: "in progress", createdAt: new Date() },
  { id: 3, title: "Tarefa", description: "lorem impsum lodr djo lor", status: "pending", createdAt: new Date() },
  { id: 4, title: "Tarefa", description: "lorem impsum lodr djo lor", status: "pending", createdAt: new Date() },
  { id: 5, title: "Tarefa", description: "lorem impsum lodr djo lor", status: "pending", createdAt: new Date("12/04/2023, 00:43:34") },
];

export function Tasks() {

  const sortedList = [...tasks].sort((prevTask, nextTask) => {
    return prevTask.createdAt.getMilliseconds() - nextTask.createdAt.getMilliseconds()
  })
  return (
    <S.MainContainer>
      <S.List>
        {sortedList.map((task) => {
          return (
            <TaskItem key={task.id} task={task} />
          )
        })}
      </S.List>
    </S.MainContainer>
  )
}