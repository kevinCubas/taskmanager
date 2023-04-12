import { toast } from "react-toastify";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-500);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  & .inputs {
    background-color: transparent;
    border: 1px solid var(--gray-700);
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    color: var(--gray-200);
    outline: none;
    transition: all .2s ease;


    :hover, :focus {
      border-color: var(--gray-300);
    }

    ::placeholder {
      color: var(--gray-300);
    }
  }

  & textarea {
    resize: none;
  }
`

export const SubmitButton = styled.button`
  background-color: var(--blue);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--gray-100);
  font-size: 1rem;
  transition: all .2s ease;
  :hover {
    filter: brightness(0.8);
  }
`