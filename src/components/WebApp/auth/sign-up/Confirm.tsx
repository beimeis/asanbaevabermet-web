/* External dependencies */
import React from 'react';
import { Div, Text } from 'atomize';

/* Local dependencies */
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';

export function Confirm() {
  return (
    <Div>
      <Div>
        <Text textSize="23px" textColor="#fff" p={{ t: '25px' }}>
          Подтвердите вашу электронную почту
        </Text>
        <Text textSize="16px" textColor="#ffff" p={{ t: '13px' }}>
          Чтобы продолжить, введите код отправленный на эл.почту. Если вы не видите код во входящих, проверьте папку
          “Спам”.
        </Text>
      </Div>
      <Div p={{ t: '60px' }}>
        <Text textSize="11px" textColor="#ffff" p={{ b: '5px' }}>
          Код
        </Text>
        <CustomInput placeholder="Введите код" bg="#5e5e5eff" />
        <CustomButton children="Далее" bg="#9be426ff" textColor="black" />
      </Div>
    </Div>
  );
}

export default Confirm;
