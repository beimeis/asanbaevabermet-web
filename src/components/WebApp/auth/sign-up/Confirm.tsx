import React, { useState, useEffect } from 'react';
import { Div, Text, Input, Button, Image } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';

import { confirmSignupRequest, resendSignupCode } from '../redux/action';

import type { RootState, AppDispatch } from '../../../../redux/store';

const Confirm = ({}) => {
  const dispatch = useDispatch<AppDispatch>();

  const { email, isLoading, error } = useSelector((state: RootState) => state.authReducer);

  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (seconds > 0 && !canResend) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0) {
      setCanResend(true);
    }
  }, [seconds, canResend]);

  const handleResend = () => {
    if (!canResend || isLoading) return;
    dispatch(resendSignupCode(email));
    setSeconds(30);
    setCanResend(false);
  };

  const handleConfirm = () => {
    if (otp.length !== 6 || isLoading) return;
    dispatch(confirmSignupRequest(email, otp));
  };

  return (
    <Div maxW="420px" m="0 auto" pos="relative">
      <Text
        textSize={{ xs: '24px', md: '28px' }}
        textWeight="600"
        textColor="white"
        textAlign="center"
        p={{ t: '80px', b: '20px' }}
      >
        Подтвердите почту
      </Text>

      <Text textSize="17px" textColor="#ccc" textAlign="center" p={{ b: '50px' }} lineHeight="1.6">
        Мы отправили 6-значный код на{' '}
        <Text tag="span" textColor="white" textWeight="600">
          {email || 'вашу почту'}
        </Text>
        .<br />
        Если письмо не пришло — проверьте папку «Спам».
      </Text>

      <Text textSize="14px" textColor="#ddd" p={{ b: '8px', l: '30px' }}>
        Код подтверждения
      </Text>

      <Div p={{ x: '30px' }}>
        <Input
          type="text"
          inputMode="numeric"
          placeholder="Введите 6 цифр"
          value={otp}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
            setOtp(value);
          }}
          w="370px"
          h="50px"
          rounded="12px"
          bg="#2a2a2a"
          border="1px solid #444"
          focusBorderColor="#ACF709"
          textColor="white"
          placeholderTextColor="#888"
          textSize="20px"
          textAlign="center"
          letterSpacing="10px"
          p={{ x: '16px' }}
        />

        {error && (
          <Text textSize="14px" textColor="#ff4444" textAlign="center" m={{ t: '10px' }}>
            {error}
          </Text>
        )}

        <Button
          w="370px"
          h="50px"
          bg={otp.length === 6 ? '#ACF709' : '#444'}
          hoverBg={otp.length === 6 ? '#92d030' : '#444'}
          rounded="12px"
          textWeight="700"
          textSize="16px"
          textColor="#333"
          m={{ t: '40px' }}
          onClick={handleConfirm}
          disabled={otp.length !== 6 || isLoading}
        >
          {isLoading ? 'Проверка...' : 'Подтвердить'}
        </Button>

        <Div textAlign="center" m={{ t: '30px' }}>
          <Text textSize="14px" textColor="#B2B2B2">
            Не получили код?
            <br />
            {canResend ? (
              <Button
                bg="transparent"
                textColor="#ACF709"
                textWeight="600"
                textSize="15px"
                p="0"
                m={{ t: '10px' }}
                onClick={handleResend}
                disabled={isLoading}
              >
                Отправить новый код
              </Button>
            ) : (
              <Text tag="span" textColor="#666">
                Новый код через {seconds} сек.
              </Text>
            )}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default Confirm;
