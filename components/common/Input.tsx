import React from 'react';
import styled from 'styled-components';

interface InputProps {
  name: string;
  value: string;
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, type, onChange }: InputProps) => {
  return (
    <InputWrapper name={name} value={value} onChange={onChange} type={type} />
  );
};

export default Input;

const InputWrapper = styled.input`
  width: 300px;
  height: 20px;
  color: black;
  background-color: #f1f3f5;
  padding: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  cursor: text;
`;
