import React from 'react';
import { Modal, Image, Text, Div, Icon } from 'atomize';

/* Local dependencies */
import Logo from '../../assets/images/mapApp/Logo.png';
import CustomButton from './auth/common/CustomButton';

const CustomModal = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      w={{ xl: '700px', xs: '690px' }}
      h={{ xl: '516px', xs: '516px' }}
      m={{ t: '160px' }}
      bg="black"
      rounded="16px"
    >
      <Image src={Logo} w={{ xs: '50px', xl: '50px' }} h={{ xs: '50px', xl: '50px' }} m={{ t: '20px', l: '190px' }} />
      <Icon name="Cross" size="25px" color="#fff" m={{ l: '180px' }} />

      <Text textSize="40px" textColor="#ffff" m={{ l: '110px', t: '20px' }}>
        Финик Карта
      </Text>
      <Div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Text textSize="13px" textColor="#ffff" m={{ t: '40px' }} style={{ textAlign: 'center', maxWidth: '80%' }}>
          Отмечай места на карте где нет нашего терминала, мы поставим его, а тебе пришлем бонусы которые ты сможешь
          обменять на реальные призы
        </Text>
      </Div>
      <Div m={{ t: '60px', l: '80px' }} d="felx">
        <CustomButton text="Войти в аккаунт" bg="#9be426ff" />
        <CustomButton text="Регистрация" bg="#f7f0f0ff" />
      </Div>
    </Modal>
  );
};
export default CustomModal;
