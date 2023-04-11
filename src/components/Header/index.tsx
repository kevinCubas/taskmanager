import * as S from "./style";
import { FaTasks } from "react-icons/fa"

export function Header(): JSX.Element {
  return (
    <S.Header>
      <FaTasks />
      <S.Title><span>To</span>Do</S.Title>
    </S.Header>
  )
}