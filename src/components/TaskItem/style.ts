import styled from "styled-components"

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 0.5rem;

    background-color: ${props => props.theme === "in progress" ? 
      "var(--purple-dark)" : "var(--gray-500)"};
    color: var(--gray-100);
    & p {
      font-size: 1rem;
      color: ${props => props.theme === "done" ? "var(--gray-300)" : "var(--gray-100)"};
      text-decoration: ${props => props.theme === "done" ? "line-through" : "none"};
    }

    & .title {
      color: ${props => props.theme === "done" ? "var(--gray-300)" : "var(--gray-100)"};
      text-decoration: ${props => props.theme === "done" ? "line-through" : "none"};
    }

`

export const TaskHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;

  & span {
    font-size: 0.7rem;
    color: var(--gray-200);
  }
  
  border-bottom: 1px solid var(--gray-700);
`

export const TaskButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  
  & div button {
    background: none;
    border: none;
    font-size: 1.25rem;

    transition: .2s all ease;
    :hover {
      transform: translateY(-3px);
      filter: brightness(1.5);
    }
  }

`

export const StatusButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  & button {
    color: var(--gray-300);
  }
  & .in-progress {
    color: ${props => props.theme === "in progress" && "var(--yellow)"};
  }

  & .done {
    color: ${props => props.theme === "done" && "var(--green)"};
  }
`

export const ConfigButtons = styled.div`
  display: flex;
  gap: 0.75rem;

  & .edit {
    color: var(--gray-200);
    transition: .2s all ease;
  }

  & .delete {
    color: #ee6352;
  }
`

export const CreatedDate = styled.span`
  font-size: 0.7rem;
  color: var(--gray-200);
`