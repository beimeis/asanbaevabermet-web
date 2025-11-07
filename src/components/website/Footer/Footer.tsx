/* External dependencies */
import React from 'react';
import { Div, Image, Text } from 'atomize';

/* Local dependencies */
import Logo from '../../../assets/images/footer/Logo.svg';
import Facebook from '../../../assets/images/footer/Facebook.png';
import Twitter from '../../../assets/images/footer/Twitter.png';
import Instagram from '../../../assets/images/footer/Instagram.png';
import Linkedln from '../../../assets/images/footer/Linkedln.png';
import YouTube from '../../../assets/images/footer/YouTube.png';
import Telegram from '../../../assets/images/footer/Telegram.png';

export default function Footer() {
  return (
    <Div w={{ xs: '100%' }} h={{ xs: 'auto', md: '200px' }} m={{ t: '270px' }}>
      <Div w={{ xs: '100%', md: '700px' }} maxW="700px" h={{ xs: 'auto', md: '240px' }}>
        <Div
          w={{ xs: '100%', md: '1854px' }}
          maxW="1854px"
          h={{ xs: 'auto', md: '10px' }}
          m={{t: '12px' ,l:'-70px'}}
          d="flex"
          align="flex-start"
        >
          <Image src={Logo} w={{ xs: '100%', md: '32px' }} maxW="32px" h={{ xs: 'auto', md: '33px' }} m="30px 80px " />
          <Text textColor="#FFFFFF" textSize="30px" m={{ t: '30px' }}>
            Finik
          </Text>
        </Div>
        <Text textColor="#a19d9de3" textSize="16px" m={{ t: '80px', l: '10px' }} d="flex">
          Удобное и надежное отечественное
        </Text>
        <Text textColor="#a19d9de3" textSize="16px" m={{ t: '10px', l: '10px' }} d="flex">
          приложение для оплаты в Кыргызстане
        </Text>
        <Text textColor="#a19d9de3" textSize="16px" m={{ t: '20px', l: '10px' }}>
          ©2022 Averspay
        </Text>
        <Text textColor="#a19d9de3" textSize="16px" m={{ t: '8px', l: '10px' }}>
          Лицензия НБКР № 3006010615, № 2006010615 от 06.02.2015
        </Text>
        <Div d="flex" align="flex-start" m={{ t: '-150px', l: '700px' }}>
          <Div d="flex" flexDir="column">
            <Text textColor="#a19d9de3" textSize="16px">
              Продукты
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              Кошелек
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              Терминалы
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              Эквайринг
            </Text>
          </Div>
          <Div d="flex" flexDir="column" m={{ l: '90px' }}>
            <Text textColor="#a19d9de3" textSize="16px">
              О нас
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              Компания
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              Документы
            </Text>
          </Div>
        </Div>
      </Div>
      <Div d="flex" m={{ l: '1150px', t: '-200px' }}>
        <Image src={Facebook} w="24px" h="24px" m={{ r: '20px' }} />
        <Image src={Twitter} w="24px" h="24px" m={{ r: '20px' }} />
        <Image src={Instagram} w="24px" h="24px" m={{ r: '20px' }} />
        <Image src={Linkedln} w="24px" h="24px" m={{ r: '20px' }} />
        <Image src={YouTube} w="24px" h="24px" m={{ r: '20px' }} />
        <Image src={Telegram} w="24px" h="24px" m={{ r: '20px' }} />
      </Div>
    </Div>
  );
}
