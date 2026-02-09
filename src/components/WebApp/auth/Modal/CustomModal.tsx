import React from 'react';
import { Modal, Div, Image, Text, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState, AppDispatch } from '../../../../redux/store';
import { setActiveModal } from '../authRedux/authAction';
import Logo from '../../../../assets/images/mapApp/Logo.png';

const CustomModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { activeModal, isLoading } = useSelector((state: RootState) => state.auth);

  if (activeModal !== 'intro') return null;

  return (
    <Modal
      isOpen={activeModal === 'intro'}
      onClose={() => dispatch(setActiveModal(null))}
      align="center"
      rounded="20px"
      w={{ xs: '90%', md: 'auto' }}
      maxW={{ xs: '100%', md: '90vw' }}
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
        name="Cross"
        size="24px"
        color="#fff"
        pos="absolute"
        top="20px"
        right="20px"
        cursor="pointer"
        onClick={() => dispatch(setActiveModal(null))}
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
        p={{ x: '24px', y: '40px' }}
      >
        <Image src={Logo} w="46px" h="46px" m={{ b: '24px' }} />

        <Div d="flex" flexDir="column" textAlign="center" maxW="400px" m={{ b: '40px' }} style={{ gap: '8px' }}>
          <Text
            textSize={{ xs: '28px', md: '40px' }}
            lineHeight="1.2"
            textWeight="500"
            textColor="white"
            m={{ b: '12px' }}
          >
            {t('auth_introModal_title')}
          </Text>

          <Div>
            <Text textSize="14px" textWeight="400" textColor="white">
              {t('auth_introModal_desc1')}
            </Text>
            <Text textSize="14px" textWeight="400" textColor="white">
              {t('auth_introModal_desc2')}
            </Text>
            <Text textSize="14px" textWeight="400" textColor="white">
              {t('auth_introModal_desc3')}
            </Text>
            <Text textSize="14px" textWeight="400" textColor="white">
              {t('auth_introModal_desc4')}
            </Text>
          </Div>
        </Div>

        <Div d="flex" flexDir="column" w={{ xs: '100%', md: 'auto' }} align="center" style={{ gap: '16px' }}>
          <Button
            w={{ xs: '100%', md: '343px' }}
            h="52px"
            bg="#ACF709"
            hoverBg="#92d030"
            rounded="12px"
            textWeight="700"
            textSize="16px"
            textColor="black"
            shadow="3"
            onClick={() => dispatch(setActiveModal('login'))}
            disabled={isLoading}
          >
            {t('auth_introModal_login')}
          </Button>

          <Button
            w={{ xs: '100%', md: '343px' }}
            h="52px"
            bg="#101010"
            border="1px solid #ACF709"
            hoverBg="#181b17"
            rounded="12px"
            textWeight="700"
            textSize="16px"
            textColor="#ACF709"
            hoverTextColor="#ACF709"
            onClick={() => dispatch(setActiveModal('signup'))}
            disabled={isLoading}
          >
            {t('auth_introModal_signup')}
          </Button>
        </Div>
      </Div>
    </Modal>
  );
};

export default CustomModal;
