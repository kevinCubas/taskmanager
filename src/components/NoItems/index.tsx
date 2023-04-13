import { BiTaskX } from "react-icons/bi";
import * as S from "./style";

interface INoItemsProps {
  title: string,
  subtitle: string,
}

export function NoItems({ title, subtitle }: INoItemsProps) {
  return (
    <S.EmptyList>
    <BiTaskX />
    <p>{title}<br/>
      <span>
      {subtitle}
      </span>
    </p>
  </S.EmptyList>
  )
}