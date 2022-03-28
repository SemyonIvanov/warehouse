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
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  position: relative;
  padding: 30px;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  z-index: 3;

  // TODO: временно
  width: 400px;
  height: 400px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 0;
  right: -65px;
  background: none;
  border: none;
  cursor: pointer;
`;
