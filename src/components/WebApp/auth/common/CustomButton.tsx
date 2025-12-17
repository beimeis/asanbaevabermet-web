/* External dependencies */
import React, { ReactNode } from 'react';
import { Button, Div } from 'atomize';

interface CustomButtonProps {
  onClick?: () => void;
  bg?: string;
  style?: string;
  textColor?: string;
  children?: ReactNode;
  disabled?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { children, onClick, bg, style, textColor, disabled } = props;
  return (
    <Div p={{ t: '17px' }} d="flex">
      <Button
        w="350px"
        h="60px"
        bg={bg}
        style={style}
        textColor={textColor}
        disabled={disabled}
        onClick={onClick}
        type={'button'}
      >
        {children}
      </Button>
    </Div>
  );
};

export default CustomButton;
