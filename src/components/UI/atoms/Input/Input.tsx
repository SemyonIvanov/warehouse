import { FC, useState } from 'react';

import { CommonInput, ErrorText, InputLabel } from 'src/components/UI/atoms/Input/styledComponents';

interface InputProps {
  label: string;
  error?: string;
  type: string;
  initialValue: string;
  setInitialValue: (value: string) => void;
}

export const Input: FC<InputProps> = ({ label, error, type, initialValue, setInitialValue }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <InputLabel>
      {label}
      <CommonInput
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onBlur={() => setInitialValue(value)}
      />
      <ErrorText>{error}</ErrorText>
    </InputLabel>
  );
};
