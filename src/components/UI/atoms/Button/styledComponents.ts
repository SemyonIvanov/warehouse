import styled from 'styled-components';

export const BtnAdd = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  align-self: center;
  background: none;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px black;
  :active {
    box-shadow: 0 0 black;
    margin-bottom: -1px;
    margin-right: -1px;
  }
`;
