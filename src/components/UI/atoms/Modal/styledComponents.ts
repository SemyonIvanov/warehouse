import styled from 'styled-components';

export const ModalAway = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  position: relative;
  padding: 30px;
  margin: 20px 0;
  min-width: 800px;
  min-height: calc(100% - 40px);
  overflow: scroll;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  z-index: 3;
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 60px;
  background: none;
  border: none;
  cursor: pointer;
`;
