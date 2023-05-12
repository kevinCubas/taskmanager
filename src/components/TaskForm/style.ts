import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-500);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  & label {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    color: var(--gray-200);
    padding-bottom: 0.5rem;
    text-align: start;
    width: 100%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--gray-700);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: var(--gray-200);
  outline: none;
  transition: all .2s ease;
  position: relative;

  :hover, 
  :focus-within {
    border-color: var(--gray-300);
  }

  & span {
    font-size: 0.75rem;
    color: var(--gray-300);
    position: absolute;
    right: 1rem;
    bottom: 0;
    transform: translateY(-50%);    
  }
  
  & .inputs {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: var(--gray-200);
    outline: none;
    width: 100%;
    ::placeholder {
      color: var(--gray-300);
    }
  }

  & textarea {
    resize: none;
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--gray-700);
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: var(--gray-600);
    }

    ::-webkit-scrollbar-track {
      background-color: var(--gray-600);
    }
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
  :disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }
  :enabled:hover {
    filter: brightness(0.8);
  }
`