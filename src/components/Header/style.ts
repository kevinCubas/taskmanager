import styled from "styled-components";

export const Header = styled.header`
  height: 200px;
  max-height: 200px;
  background-color: var(--gray-700);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  & svg {
    font-size: 2.5rem;
    color: var(--purple);
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--purple-dark);

  & span {
    color: var(--purple);
  }
`