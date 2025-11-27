import React from 'react';
import { Button, Div } from 'atomize';

interface CustomButtonProps {
  text?: string;
  onClick?: object;
  bg: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const { text, onClick, bg } = props;
  return (
    <Div p={{ t: '20px' }} d="felx">
      <Button w="300px" h="50px" bg={bg} textColor="#000000ff" onClick={onClick} type={'button'}>
        {text}
      </Button>
    </Div>
  );
};

export default CustomButton;
