/* External dependencies */
import React from 'react';
import { Div, Input } from 'atomize';

interface CustomInputProps {
  children?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bg: string;
  onInput?: string;
  placeholder: string;
  borderColor?: string;
  focusBorderColor?: string;
}

const CustomInput = (props: CustomInputProps) => {
  const { children, value, bg, onInput, placeholder, onChange, borderColor, focusBorderColor } = props;

  return (
    <Div p={{ b: '20px' }}>
      <Input
        w="350px"
        h="60px"
        textColor="#000000ff"
        bg={bg}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onInput={onInput}
        borderColor={borderColor}
        focusBorderColor={focusBorderColor}
      >
        {children}
      </Input>
    </Div>
  );
};

export default CustomInput;
