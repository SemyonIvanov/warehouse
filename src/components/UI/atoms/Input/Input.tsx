import { FC, useState } from 'react';

import { TextField } from '@mui/material';

interface InputProps {
  label?: string;
  error?: string;
  initialValue: string;
  setInitialValue: (value: string) => void;
  isNotNegative?: boolean;
}

export const Input: FC<InputProps> = ({ label, error, initialValue, setInitialValue, isNotNegative }) => {
  const [value, setValue] = useState(initialValue);
  const [errorText, setErrorText] = useState(error);

  return (
    <TextField
      error={!!errorText}
      helperText={errorText}
      fullWidth
      label={label}
      value={value}
      onChange={({ target }) => {
        setValue(target.value);
      }}
      onBlur={() => {
        if (value) {
          if (isNotNegative && +value < 0) {
            setErrorText('Значение должно быть больше 0');
          } else {
            setInitialValue(value);
            setErrorText('');
          }
        } else {
          setErrorText(`Введите ${label}`);
        }
      }}
      onKeyPress={(e) => e.key === 'Enter' && setInitialValue(value)}
    />
  );
};
