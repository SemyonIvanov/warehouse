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
  padding: 30px 30px 0 30px;
  min-width: 800px;
  min-height: calc(100% - 40px);
  max-height: calc(100% - 40px);
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  z-index: 3;
  ::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 27px;
  }
  ::-webkit-scrollbar-track {
    margin-top: 3px;
    margin-bottom: 3px;
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
