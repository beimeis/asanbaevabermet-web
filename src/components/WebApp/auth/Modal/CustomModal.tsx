import React from 'react';
import { Modal, Div, Image, Text, Button, Icon } from 'atomize';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../../redux/store';
import { setActiveModal } from './uiRedux/uiAction';

import Logo from '../../../../assets/images/mapApp/Logo.png';

const CustomModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeModal, isLoading } = useSelector((state: RootState) => state.ui);

  if (activeModal !== 'intro') return null;

  return (
    <Modal
      isOpen={activeModal === 'intro'}
      align="center"
      w={{ xs: '90%', md: '43.125rem' }}
      h={{ xs: 'auto', md: '32.25rem' }}
      minH="600px"
      minW="700px"
      pos="relative"
      rounded="20px"
      style={{
        background: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '20px',
      }}
      overflow="hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <Div
        d="flex"
        flexDir="column"
        align="center"
        pos="absolute"
        top={{ xs: '15%', md: '25%' }}
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ xs: '85%', md: 'auto' }}
      >
        <Image src={Logo} w="46px" h="46px" />

        <Div d="flex" flexDir="column" textAlign="center" p={{ t: '20px' }} style={{ gap: '8px' }} maxW="360px">
          <Text textSize={{ xs: '32px', md: '40px' }} textWeight="500" textColor="white">
            Финик Карта
          </Text>
          <Text textSize="14px" textWeight="400" textColor="white">
            Отмечай места на карте где нет нашего
          </Text>
          <Text textSize="14px" textWeight="400" textColor="white">
            терминала, мы поставим его, а тебе пришлем
          </Text>
          <Text textSize="14px" textWeight="400" textColor="white">
            бонусы которые ты сможешь обменять на
          </Text>
          <Text textSize="14px" textWeight="400" textColor="white">
            реальные призы
          </Text>
        </Div>

        <Div
          d="flex"
          flexDir="column"
          pos="absolute"
          top={{ xs: '180px', md: '280px' }}
          left="50%"
          transform="translateX(-50%)"
          w={{ xs: '80%', md: 'auto' }}
          style={{ gap: '18px' }}
        >
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
            Войти в аккаунт
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
            Регистрация
          </Button>
        </Div>
      </Div>

      <Icon
        name="Cross"
        size="25px"
        color="#fff"
        pos="absolute"
        top={{ xs: '16px', md: '24px' }}
        right={{ xs: '16px', md: '24px' }}
        cursor="pointer"
        onClick={() => dispatch(setActiveModal(null))}
      />
    </Modal>
  );
};

export default CustomModal;
