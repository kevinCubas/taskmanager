import styled from "styled-components";

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & svg {
    font-size: 3.5rem;
    color: var(--gray-300);
  }

  & p {
    color: var(--gray-300);
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;

    & span {
      font-weight: 400;
    }
  }
`
