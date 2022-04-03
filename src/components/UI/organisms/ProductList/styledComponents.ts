import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 35px;
  padding: 10px;
  cursor: pointer;

  :hover {
    svg {
      fill: black;
    }
  }

  // TODO: временно
  height: 400px;
`;
