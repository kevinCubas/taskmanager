import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  & p {
    font-weight: 700;
    color: var(--blue);

    & span {
      background-color: var(--gray-400);
      padding: 0.2rem 0.5rem;
      border-radius: 50%;
      color: var(--gray-200);
    }
  }
`

export const SelectContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: var(--purple);
  font-weight: 700;
`

export const Select = styled.select`
  cursor: pointer;
  border-radius: 0.25rem;
  border: 1px solid var(--purple);
  color: var(--gray-200);
  font-weight: 700;
  background-color: var(--gray-400);
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`