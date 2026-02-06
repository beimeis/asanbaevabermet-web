import React, { useState } from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setActiveModal, setEmail } from '../authRedux/authAction';
import { RootState, AppDispatch } from '../../../../redux/store';

const SignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [localError, setLocalError] = useState('');
  const { activeModal, email, isLoading } = useSelector((state: RootState) => state.auth);

  if (activeModal !== 'signup') return null;

  const handleNext = () => {
    setLocalError('');
    const cleanedEmail = email ? email.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanedEmail) {
      setLocalError(t('auth.signup.errors.emptyEmail'));
      return;
    }
    if (!emailRegex.test(cleanedEmail)) {
      setLocalError(t('auth.signup.errors.invalidEmail'));
      return;
    }
    dispatch(setEmail(cleanedEmail));
    dispatch(setActiveModal('password'));
  };

  const handleBack = () => dispatch(setActiveModal('intro'));
  const handleClose = () => dispatch(setActiveModal(null));

  return (
    <Modal
      isOpen={activeModal === 'signup'}
      onClose={handleClose}
      align="center"
      rounded="20px"
      w={{ xs: '90%', md: 'auto' }}
      minW={{ xs: '0', md: '700px' }}
      minH={{ xs: 'auto', md: '600px' }}
      style={{
        background: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      overflow="auto"
      onClick={(e) => e.stopPropagation()}
    >
      <Icon
        name="LeftArrow"
        size="24px"
        color="#fff"
        pos="absolute"
        left="20px"
        top="20px"
        cursor="pointer"
        onClick={handleBack}
        zIndex="10"
      />

      <Icon
        name="Cross"
        size="24px"
        color="#fff"
        pos="absolute"
        right="20px"
        top="20px"
        cursor="pointer"
        onClick={handleClose}
        zIndex="10"
      />

      <Div
        d="flex"
        flexDir="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
        minH={{ xs: 'auto', md: '600px' }}
        p={{ x: '24px', y: '60px' }}
      >
        <Image src={Logo} w="46px" h="46px" m={{ b: '24px' }} />

        <Div d="flex" flexDir="column" align="center" w="100%" maxW="370px">
          <Text
            textSize={{ xs: '28px', md: '35px' }}
            textWeight="600"
            textColor="white"
            textAlign="center"
            m={{ b: '16px' }}
          >
            {t('auth.signup.title')}
          </Text>

          <Div textAlign="center" m={{ b: '32px' }}>
            <Text textSize="15px" textColor="#ddd">
              {t('auth.signup.subtitleLine1')}
            </Text>
            <Text textSize="15px" textColor="#ddd">
              {t('auth.signup.subtitleLine2')}
            </Text>
          </Div>

          <Div w="100%">
            <Text textSize="14px" textColor="#ddd" m={{ b: '8px', l: '8px' }}>
              {t('auth.signup.emailHint')}
            </Text>

            <Input
              w="100%"
              h="52px"
              placeholder={t('auth.signup.emailPlaceholder')}
              value={email}
              onChange={(e) => {
                setLocalError('');
                dispatch(setEmail(e.target.value));
              }}
              p={{ x: '16px' }}
              rounded="12px"
              bg="#2a2a2a"
              border="1px solid"
              borderColor={localError ? '#ff4444' : '#444'}
              focusBorderColor="#fff"
              textColor="white"
              placeholderTextColor="#888"
            />

            {localError && (
              <Text textSize="12px" textColor="#ff4444" m={{ t: '8px', l: '8px' }}>
                {localError}
              </Text>
            )}

            <Button
              w="100%"
              h="52px"
              bg="#ACF709"
              hoverBg="#92d030"
              rounded="12px"
              textWeight="700"
              textSize="16px"
              textColor="#333"
              onClick={handleNext}
              m={{ t: '24px' }}
              disabled={isLoading}
            >
              {isLoading ? t('auth.signup.loading') : t('auth.signup.next')}
            </Button>
          </Div>
        </Div>
      </Div>
    </Modal>
  );
};

export default SignUp;
