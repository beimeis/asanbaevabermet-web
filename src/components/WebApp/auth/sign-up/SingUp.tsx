import React from 'react';
import { Div, Text, Icon } from 'atomize';

import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';

export default function SingUp() {
  return (
    <Div p={{ t: '30px', l: '180px' }}>
      <Text textSize="25px" textColor="#ffff" p={{ b: '10px' }}>
        Создайте аккаунт
      </Text>
      <Text textSize="13px" textColor="#ffff" p={{ b: '10px' }}>
        Нам нужна только ваша электронная почта.
      </Text>
      <Div p={{ t: '40px' }}>
        <Text textSize="11px" textColor="#ffff" p={{ b: '5px' }}>
          эл.почта
        </Text>
        <CustomInput placeholder="Введите адрес эл. почты" bg="#5e5e5eff" />
        <CustomButton children="Далее" bg="#9be426ff" textColor="black" />
      </Div>
      <Text textSize="13px" textColor="#ffff" p={{ t: '40px', l: '10px' }}>
        Нажимая кнопку “Далее”, вы соглашаетесь с
      </Text>
      <Text textSize="13px" textColor="#9be426ff" p={{ l: '50px' }}>
        пользовательским соглашением
      </Text>
    </Div>
  );
}
