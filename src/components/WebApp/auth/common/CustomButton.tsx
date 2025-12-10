import React, { ReactNode } from 'react';
import { Button, Div } from 'atomize';

interface CustomButtonProps {
  onClick?: string;
  bg?: string;
  style?: string;
  textColor?: string;
  children?: ReactNode;
}

const CustomButton = (props: CustomButtonProps) => {
  const { children, onClick, bg, style, textColor } = props;
  return (
    <Div p={{ t: '10px' }} d="flex">
      <Button w="300px" h="50px" bg={bg} style={style} textColor={textColor} onClick={onClick} type={'button'}>
        {children}
      </Button>
    </Div>
  );
};

export default CustomButton;
