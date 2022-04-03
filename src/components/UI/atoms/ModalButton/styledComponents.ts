import styled from 'styled-components';

export const ActionBtnWrapper = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-self: flex-end;
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: -30px;
    height: 11px;
    width: calc(100% + 60px);
    border-top: 1px solid black;
    background: white;
  }
`;

export const ActionBtn = styled.div`
  position: relative;
  padding: 10px 25px;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 25%);
  :before,
  :after {
    content: '';
    position: absolute;
    bottom: 10px;
    height: 30px;
    width: 30px;
  }

  :before {
    right: -14px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 0 0 0 15px;
  }
  :after {
    left: -14px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 0 0 15px 0;
  }
  z-index: 1;
`;

export const ActionBtnBorderTop = styled.div`
  position: absolute;
  width: calc(100% - 30px);
  height: 100%;
  left: 15px;
  top: 0;
  border-top: 1px solid black;
  border-radius: 15px;
  background: rgb(255, 255, 255);
  z-index: -1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 40px);
  }
  :before {
    left: 0;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-radius: 15px 15px 0 0;
  }
`;
