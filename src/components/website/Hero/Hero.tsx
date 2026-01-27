/* External dependencies */ import React from 'react';
import { useTranslation } from 'react-i18next';
import { Div, Image, Text, Button } from 'atomize';
import { Link } from 'gatsby';
/* Local dependencies */
import Logo from '../../../assets/images/header/Logo.svg';
import EarthIcon from '../../../assets/images/hero/EarthIcon.png';
import AppIcon from '../../../assets/images/hero/AppIcon.png';
import AppleIcon from '../../../assets/images/hero/AppleIcon.png';
import './Hero.scss';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Div d="flex" flexDir="column" justify="center" align="center">
      <Div className="content" d="flex" style={{ gap: '20px' }}>
        <Image src={Logo} w={{ xs: '100%', md: '65px' }} h={{ xs: 'auto', md: '58px' }} maxW="55px" />
        <Div>
          <Text fontFamily="Inter" tag="h1" textColor="white" textWeight="700" textSize="64px" lineHeight="100%">
            {t('heroTitle')}
          </Text>
        </Div>
      </Div>
      <Div className="content" p={{ t: '20px' }}>
        <Text fontFamily="Inter" textColor="white" textWeight="500" textSize="20px">
          {t('heroSubtitle1')}
        </Text>
        <Text fontFamily="Inter" textColor="white" textWeight="500" textSize="20px">
          {t('heroSubtitle2')}
        </Text>
      </Div>
      <Div d="flex">
        <Link to="/webApp">
          <Button
            w={{ xs: '100%', md: '176px' }}
            h={{ xs: 'auto', md: '52px' }}
            maxW="176px"
            m={{ t: '30px', l: '60px' }}
            border="2px solid"
            borderColor=" #C0C0C0"
          >
            <Image
              src={EarthIcon}
              w={{ xs: '100%', md: '37px' }}
              h={{ xs: 'auto', md: '37px' }}
              maxW="37px"
              m={{ r: '8px' }}
              bg="black"
            />
            <Div d="grid" gridAutoFlow="column">
              <Text textSize="10px" m={{ r: '35px' }}>
                Go to the
              </Text>
              <Text textSize="20px" m={{ t: '5px' }}>
                Web App
              </Text>
            </Div>
          </Button>
        </Link>
        <Button
          w={{ xs: '100%', md: '176px' }}
          h={{ xs: 'auto', md: '52px' }}
          maxW="176px"
          m={{ t: '30px', l: '70px' }}
          border="2px solid"
          borderColor=" #C0C0C0"
          bg="rgba(0, 0, 0, 0.4)"
          textColor="rgba(255, 255, 255, 0.7)"
        >
          <Image
            src={AppIcon}
            w={{ xs: '100%', md: '30.78px' }}
            h={{ xs: 'auto', md: '33.44px' }}
            maxW="30.78px"
            opacity="0.7"
          />
          <Div d="grid" gridAutoFlow="column">
            <Text textSize="10px" m={{ r: '35px' }}>
              Get it on
            </Text>
            <Text textSize="17px" m={{ t: '5px' }}>
              Google Play
            </Text>
          </Div>
        </Button>
        <Button
          w={{ xs: '100%', md: '176px' }}
          h={{ xs: 'auto', md: '52px' }}
          maxW="176px"
          m={{ t: '30px', l: '80px' }}
          border="2px solid"
          borderColor=" #C0C0C0"
          bg="rgba(0, 0, 0, 0.4)"
          textColor="rgba(255, 255, 255, 0.7)"
        >
          <Image
            src={AppleIcon}
            w={{ xs: '100%', md: '27.67px' }}
            h={{ xs: 'auto', md: '33.17px' }}
            maxW="27.67px"
            m={{ r: '18px' }}
            opacity="0.7"
          />
          <Div>
            <Text textSize="10px">Download on the</Text>
            <Text textSize="20px" m={{ t: '5px', l: '-5px' }}>
              App Sotre
            </Text>
          </Div>
        </Button>
      </Div>
    </Div>
  );
}
