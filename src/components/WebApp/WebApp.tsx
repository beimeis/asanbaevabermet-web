/* External dependencies */
import React from 'react';
import { Div, Button, Image, Text } from 'atomize';
import { Link } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import Logo from '../../assets/images/mapApp/Logo.png';
import AccIcon from '../../assets/images/mapApp/accountIcon.png';
import CustomModal from '../WebApp/CustomModal';
import SignIn from './auth/sign-in/SignIn';
import SignUp from './auth/sign-up/SignUp';

import { openIntroModal } from './auth/redux/action';
import { RootState, AppDispatch } from '../../redux/store';

export default function WebApp() {
  const dispatch = useDispatch<AppDispatch>();

  const { isIntroModalOpen, isLoginModalOpen, isSignupModalOpen } = useSelector(
    (state: RootState) => state.authReducer,
  );

  const handleOpenIntro = () => {
    dispatch(openIntroModal());
  };

  return (
    <Div>
      <Div
        d="flex"
        justify="space-between"
        align="center"
        p={{ t: '20px', x: { xs: '20px', xl: '50px' } }}
        flexWrap="wrap"
      >
        <Link to="/">
          <Button
            bg="#333"
            border="2px solid #ccc3c3ff"
            hoverBg="#a5f003ff"
            hoverTextColor="black"
            rounded="16px"
            d="flex"
            align="center"
            justify="center"
            p={{ x: '20px', y: '12px' }}
            h="52px"
            minW="140px"
          >
            <Image src={Logo} w="24px" h="24px" />
            <Text textSize="18px" textWeight="500" p={{ l: '12px' }}>
              Карта
            </Text>
          </Button>
        </Link>

        <Button
          onClick={handleOpenIntro}
          bg="#333"
          border="2px solid white"
          hoverBg="#ACF709"
          hoverTextColor="black"
          hoverBorderColor="#ACF709"
          rounded="16px"
          d="flex"
          align="center"
          justify="center"
          p={{ x: '20px', y: '12px' }}
          h="52px"
          minW="140px"
          textWeight="600"
        >
          <Image src={AccIcon} w="24px" h="24px" />
          <Text textSize="18px" p={{ l: '12px' }}>
            Войти
          </Text>
        </Button>
      </Div>
      <CustomModal isOpen={isIntroModalOpen} />
      <SignIn />
      <SignUp />
    </Div>
  );
}
