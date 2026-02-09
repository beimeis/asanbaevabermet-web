import React from 'react';
import { Div, Image, Text, Button } from 'atomize';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import Logo from '../../../assets/images/header/Logo.svg';
import EarthIcon from '../../../assets/images/hero/EarthIcon.png';
import AppIcon from '../../../assets/images/hero/AppIcon.png';
import AppleIcon from '../../../assets/images/hero/AppleIcon.png';
import './Hero.scss';

export default function Hero() {
  const { t } = useI18next();

  return (
    <Div d="flex" flexDir="column" justify="center" align="center" p={{ x: '20px', y: '40px' }} textAlign="center">
      <Div d="flex" flexDir={{ xs: 'column', md: 'row' }} align="center" m={{ b: '20px' }} style={{ gap: '20px' }}>
        <Image src={Logo} w={{ xs: '50px', md: '65px' }} h="auto" />
        <Text
          fontFamily="Inter"
          tag="h1"
          textColor="white"
          textWeight="700"
          textSize={{ xs: '36px', md: '64px' }}
          lineHeight="1.1"
        >
          {t('heroTitle')}
        </Text>
      </Div>

      <Div m={{ b: '40px' }}>
        <Text
          fontFamily="Inter"
          textColor="white"
          textWeight="500"
          textSize={{ xs: '16px', md: '20px' }}
          m={{ b: '4px' }}
        >
          {t('heroSubtitle1')}
        </Text>
        <Text fontFamily="Inter" textColor="white" textWeight="500" textSize={{ xs: '16px', md: '20px' }}>
          {t('heroSubtitle2')}
        </Text>
      </Div>

      <Div
        d="flex"
        flexDir={{ xs: 'column', md: 'row' }}
        align="center"
        justify="center"
        w={{ xs: '100%', md: 'auto' }}
        style={{ gap: '16px' }}
      >
        <Link
          to="/webApp"
          style={{ width: '100%', maxWidth: '176px' }}
          placeholder=""
          onPointerEnterCapture=""
          onPointerLeaveCapture=""
        >
          <Button
            w="100%"
            h="52px"
            bg="black"
            border="2px solid"
            borderColor="#C0C0C0"
            rounded="8px"
            d="flex"
            align="center"
            p={{ x: '12px' }}
          >
            <Image src={EarthIcon} w="30px" h="30px" m={{ r: '8px' }} />
            <Div d="flex" flexDir="column" align="flex-start">
              <Text textSize="10px" textColor="white" style={{ opacity: 0.8 }}>
                Go to the
              </Text>
              <Text textSize="18px" textColor="white" textWeight="600">
                Web App
              </Text>
            </Div>
          </Button>
        </Link>

        <Button
          w={{ xs: '100%', md: '176px' }}
          maxW="176px"
          h="52px"
          bg="rgba(0, 0, 0, 0.4)"
          border="2px solid"
          borderColor="#C0C0C0"
          rounded="8px"
          d="flex"
          align="center"
          p={{ x: '12px' }}
        >
          <Image src={AppIcon} w="26px" h="auto" m={{ r: '10px' }} style={{ opacity: 0.7 }} />
          <Div d="flex" flexDir="column" align="flex-start">
            <Text textSize="10px" textColor="rgba(255, 255, 255, 0.7)">
              Get it on
            </Text>
            <Text textSize="16px" textColor="rgba(255, 255, 255, 0.7)" textWeight="600">
              Google Play
            </Text>
          </Div>
        </Button>

        <Button
          w={{ xs: '100%', md: '176px' }}
          maxW="176px"
          h="52px"
          bg="rgba(0, 0, 0, 0.4)"
          border="2px solid"
          borderColor="#C0C0C0"
          rounded="8px"
          d="flex"
          align="center"
          p={{ x: '12px' }}
        >
          <Image src={AppleIcon} w="24px" h="auto" m={{ r: '12px' }} style={{ opacity: 0.7 }} />
          <Div d="flex" flexDir="column" align="flex-start">
            <Text textSize="10px" textColor="rgba(255, 255, 255, 0.7)">
              Download on
            </Text>
            <Text textSize="18px" textColor="rgba(255, 255, 255, 0.7)" textWeight="600">
              App Store
            </Text>
          </Div>
        </Button>
      </Div>
    </Div>
  );
}
