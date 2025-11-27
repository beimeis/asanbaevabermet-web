/* External dependencies */
import React, { useState } from 'react';
import { Div, Button, Image, Text } from 'atomize';
import { Link } from 'gatsby';

/* Local dependencies */
import Logo from '../../assets/images/mapApp/Logo.png';
import AccIcon from '../../assets/images/mapApp/accountIcon.png';
import CustomModal from './CustomModal';

export default function WebApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <Div d="flex" align="flex-start">
      <Div>
        <Link to="/">
          <Button
            w={{ xs: '120px', xl: '120px' }}
            h={{ xs: '46px', xl: '46px' }}
            m={{ t: '20px', l: '50px' }}
            border="2px solid"
            borderColor=" #C0C0C0"
            rounded="16px"
          >
            <Image src={Logo} w={{ xs: '20px', xl: '20px' }} h={{ xs: '20px', xl: '20px' }} />
            <Text p={{ l: '13px' }} textSize="18px">
              Карта
            </Text>
          </Button>
        </Link>
      </Div>
      <Div>
        <Button
          w={{ xs: '120px', xl: '120px' }}
          h={{ xs: '46px', xl: '46px' }}
          m={{ t: '20px', l: '1350px' }}
          border="2px solid"
          borderColor=" #ffffffff"
          hover={{
            bg: '#b4c967',
            color: 'white',
            shadow: '0 0 8px rgba(255, 255, 255, 0.7)',
          }}
          rounded="16px"
          onClick={handleOpen}
        >
          <Image src={AccIcon} w={{ xs: '20px', xl: '20px' }} h={{ xs: '20px', xl: '20px' }} />
          <Text p={{ l: '10px' }}>войти</Text>
        </Button>
      </Div>
      {isOpen && <CustomModal isOpen={isOpen} onClose={onClose} />}
    </Div>
  );
}
