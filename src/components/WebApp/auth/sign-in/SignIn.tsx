/* External dependencies */
import React from 'react';
import { Div, Text } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import { setEmail, setPassword, validateCredentials, closeModal } from '../redux/action';
import { RootState, AppDispatch } from '../../../../redux/store';

const SingIn = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { currentStep, email, password, hasEmailError, hasPasswordError } = useSelector(
    (state: RootState) => state.authReducer,
  );

  const handleNext = () => {
    dispatch(validateCredentials());
  };

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Div p={{ l: '160px' }}>
      <Text textSize="30px" textColor="#fff" p={{ t: '20px', l: '70px' }}>
        Войти в аккаунт
      </Text>
      <Div p={{ t: '60px' }}>
        <Text textSize="11px" textColor="#ffff" p={{ b: '5px' }}>
          эл.почта
        </Text>
        <CustomInput
          placeholder="Введите адрес эл. почты"
          bg="#5e5e5eff"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setEmail(e.target.value))}
          borderColor={hasEmailError ? '#ff0000ff' : undefined}
          focusBorderColor={hasEmailError ? '#ff0000ff' : undefined}
        />
        <Text textSize="11px" textColor="#ffff" p={{ b: '5px' }}>
          Введите пароль
        </Text>
        <CustomInput
          placeholder="Введите пароль"
          bg="#5e5e5eff"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setPassword(e.target.value))}
          borderColor={hasPasswordError ? '#ff0000ff' : undefined}
          focusBorderColor={hasPasswordError ? '#ff0000ff' : undefined}
        />
        <CustomButton children="Далее" bg="#9be426ff" textColor="black" onClick={handleNext} />
      </Div>
      <Text textSize="13px" textColor="#ffff" p={{ t: '70px', l: '30px' }}>
        Нажимая кнопку “Далее”, вы соглашаетесь с
      </Text>
      <Text textSize="13px" textColor="#9be426ff" p={{ l: '70px' }}>
        пользовательским соглашением
      </Text>
    </Div>
  );
};
export default SingIn;
