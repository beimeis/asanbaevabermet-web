/* External dependencies */
import React from 'react';
import { Div, Text, Button } from 'atomize';

/* Local dependencies */
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';

export default function SingIn() {
  return (
    <Div p={{ l: '160px' }}>
      <Text textSize="30px" textColor="#fff" p={{ t: '20px', l: '70px' }}>
        Войти в аккаунт
      </Text>
      <Div p={{ t: '60px' }}>
        <Text textSize="11px" textColor="#ffff" p={{ b: '5px' }}>
          эл.почта
        </Text>
        <CustomInput placeholder="Введите адрес эл. почты" bg="#5e5e5eff" />
        <Text textSize="11px" textColor="#ffff" p={{ b: '5px' }}>
          Введите пароль
        </Text>
        <CustomInput placeholder="Введите пароль" bg="#5e5e5eff" />
        <CustomButton children="Далее" bg="#9be426ff" textColor="black" />
      </Div>
      <Text textSize="13px" textColor="#ffff" p={{ t: '70px', l: '30px' }}>
        Нажимая кнопку “Далее”, вы соглашаетесь с
      </Text>
      <Text textSize="13px" textColor="#9be426ff" p={{ l: '70px' }}>
        пользовательским соглашением
      </Text>
    </Div>
  );
}
