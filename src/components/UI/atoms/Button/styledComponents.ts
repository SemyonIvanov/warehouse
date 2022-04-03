import styled from 'styled-components';

export const Btn = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  align-self: center;
  background: none;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px black;
  background: white;

  :active {
    box-shadow: 0 0 black;
    transform: translateY(1px) translateX(1px);
  }

  :disabled {
    box-shadow: none;
    border: 1px solid gray;
    cursor: not-allowed;
  }
`;
