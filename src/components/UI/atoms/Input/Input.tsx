import { FC, useState } from 'react';

interface InputProps {
  type: string;
  initialValue: string;
  setInitialValue: (value: string) => void;
}

export const Input: FC<InputProps> = ({ type, initialValue, setInitialValue }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <input
      type={type}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      onBlur={() => setInitialValue(value)}
    />
  );
};
