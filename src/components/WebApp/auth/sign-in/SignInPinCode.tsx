import React, { useState } from 'react';
import { Modal, Div, Image, Text, Input, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Logo from '../../../../assets/images/mapApp/Logo.png';
import { setActiveModal, setCode } from '../authRedux/authAction';
import { RootState, AppDispatch } from '../../../../redux/store';

const SignInPinCode = () => {
  const { t } = useI18next();
  const dispatch = useDispatch<AppDispatch>();
  const { activeModal, isLoading, error } = useSelector((state: RootState) => state.auth);
  const [pinCode, setPinCode] = useState('');

  if (activeModal !== 'reset-code') return null;

  const handleNext = () => {
    if (pinCode.length === 6) {
      dispatch(setCode(pinCode));
      setPinCode('');
      dispatch(setActiveModal('new-password'));
    }
  };

  const handleBack = () => dispatch(setActiveModal('forgot-password'));
  const handleClose = () => dispatch(setActiveModal(null));

  return (
    <Modal
      isOpen={activeModal === 'reset-code'}
      onClose={handleClose}
      align="center"
      rounded="20px"
      w={{ xs: '90%', md: 'auto' }}
      minW={{ xs: '0', md: '700px' }}
      minH={{ xs: 'auto', md: '600px' }}
      style={{ background: 'rgba(0, 0, 0, 0.55)', backdropFilter: 'blur(16px)' }}
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
        <Div d="flex" flexDir="column" w="100%" maxW="370px" align="center">
          <Text textSize="24px" textWeight="600" textColor="white" textAlign="center" m={{ b: '32px' }}>
            {t('auth_signInPinCode_title')}
          </Text>
          <Text textSize="14px" textColor="#ddd" m={{ b: '8px', l: '130px' }} w="100%">
            {t('auth_signInPinCode_enterCodeLabel')}
          </Text>
          <Input
            w="100%"
            h="50px"
            type="text"
            placeholder={t('auth_signInPinCode_enterCodePlaceholder')}
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            p={{ x: '16px' }}
            rounded="12px"
            bg="#2a2a2a"
            border="1px solid"
            borderColor={error ? '#ff4444' : '#444'}
            textColor="white"
            maxLength={6}
          />
          {error && (
            <Text textSize="12px" textColor="#ff4444" m={{ t: '8px' }} w="100%">
              {error}
            </Text>
          )}
          <Text textSize="14px" textColor="#ddd" m={{ t: '24px', b: '8px' }} textAlign="center">
            {t('auth_signInPinCode_infoText')}
          </Text>
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
            m={{ t: '20px' }}
            disabled={isLoading || !pinCode}
          >
            {isLoading ? t('auth_signInPinCode_loading') : t('auth_signInPinCode_next')}
          </Button>
        </Div>
      </Div>
    </Modal>
  );
};

export default SignInPinCode;
