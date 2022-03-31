import styled from 'styled-components';

export const InputLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommonInput = styled.input`
  width: 100%;
  padding: 5px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }
`;

export const ErrorText = styled.span`
  color: red;
`;
