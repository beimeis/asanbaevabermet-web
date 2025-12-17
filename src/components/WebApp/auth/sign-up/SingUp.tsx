/* External dependencies */
import React from 'react';
import { Div, Text } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import Confirm from './Confirm';
import { setEmail, setPassword, setConfirmPassword, validateCredentials } from '../../modal/redux/action';
import { RootState, AppDispatch } from '../../../../redux/store';

const SingUp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { currentStep, email, password, confirmPassword, hasEmailError, hasPasswordError, hasConfirmPasswordError } =
    useSelector((state: RootState) => state.authReducer);

  const handleNext = () => {
    dispatch(validateCredentials());
  };

  const renderStepContent = () => {
    if (currentStep === 'confirm') {
      return <Confirm />;
    }

    return (
      <Div>
        <Text textSize="11px" textColor="#ffff">
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
        <Text textSize="11px" textColor="#ffff">
          Введите пароль
        </Text>
        <CustomInput
          placeholder=" Введите пароль"
          bg="#5e5e5eff"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setPassword(e.target.value))}
          borderColor={hasPasswordError ? '#ff0000ff' : undefined}
          focusBorderColor={hasPasswordError ? '#ff0000ff' : undefined}
        />
        <Text textSize="11px" textColor="#ffff">
          Повторите пароль
        </Text>
        <CustomInput
          placeholder=" Повторите пароль"
          bg="#5e5e5eff"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setConfirmPassword(e.target.value))}
          borderColor={hasConfirmPasswordError ? '#ff0000ff' : undefined}
          focusBorderColor={hasConfirmPasswordError ? '#ff0000ff' : undefined}
        />

        <Div p={{ t: '8px', l: '4px' }}>
          <Text textSize="12px" textColor="#fff">
            Пароль должен содержать:
          </Text>
          <Text textSize="12px" textColor="#fff" p={{ t: '4px', l: '12px' }}>
            • минимум 8 символов
          </Text>
          <Text textSize="12px" textColor="#fff" p={{ l: '12px' }}>
            • хотя бы одну заглавную букву (A-Z)
          </Text>
          <Text textSize="12px" textColor="#fff" p={{ l: '12px' }}>
            • хотя бы одну строчную букву (a-z) или цифру
          </Text>
          <Text textSize="12px" textColor="#fff" p={{ l: '12px' }}>
            • один из символов: ~ # @ $ % & ! * _ ? ^ -
          </Text>
        </Div>
        <Div>
          <CustomButton children="Далее" bg="#9be426ff" textColor="black" onClick={handleNext} />
        </Div>
      </Div>
    );
  };
  return (
    <Div p={{ l: '160px' }}>
      <Text textSize="35px" textColor="#fff" p={{ b: '10px', l: '40px' }}>
        Создайте аккаунт
      </Text>
      {renderStepContent()}
    </Div>
  );
};

export default SingUp;
