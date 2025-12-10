import React from 'react';
import { Div, Input } from 'atomize';

interface CustomInputProps {
  children?: string;
  bg: string;
  onInput?: string;
  placeholder: string;
}

const CustomInput = (props: CustomInputProps) => {
  const { children, bg, onInput, placeholder } = props;

  return (
    <Div>
      <Input w="300px" h="50px" bg={bg} textColor="#000000ff" placeholder={placeholder} onInput={onInput}>
        {children}
      </Input>
    </Div>
  );
};

export default CustomInput;
