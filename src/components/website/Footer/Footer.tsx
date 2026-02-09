import React from 'react';
import { Div, Image, Text, Container, Row, Col } from 'atomize';
import { useI18next } from 'gatsby-plugin-react-i18next';

/* Local dependencies  */
import Logo from '../../../assets/images/footer/Logo.svg';
import Facebook from '../../../assets/images/footer/Facebook.png';
import Twitter from '../../../assets/images/footer/Twitter.png';
import Instagram from '../../../assets/images/footer/Instagram.png';
import Linkedln from '../../../assets/images/footer/Linkedln.png';
import YouTube from '../../../assets/images/footer/YouTube.png';
import Telegram from '../../../assets/images/footer/Telegram.png';

const socialIcons = [Facebook, Twitter, Instagram, Linkedln, YouTube, Telegram];

export default function Footer() {
  const { t } = useI18next();

  return (
    <Div bg="black" p={{ y: '4rem' }}>
      <Container>
        <Div
          d="flex"
          flexDir={{ xs: 'column', md: 'row' }}
          justify="space-between"
          align={{ xs: 'flex-start', md: 'flex-start' }}
        >
          <Div maxW="350px" m={{ b: { xs: '2rem', md: '0' } }}>
            <Div d="flex" align="center" m={{ b: '1.5rem' }}>
              <Image src={Logo} w="32px" h="32px" m={{ r: '10px' }} />
              <Text textColor="white" textSize="24px" textWeight="600">
                Finik
              </Text>
            </Div>
            <Text textColor="#a19d9de3" textSize="paragraph" m={{ b: '2rem' }}>
              {t('footerDescriptionLine1')} {t('footerDescriptionLine2')}
            </Text>
            <Text textColor="#a19d9de3" textSize="caption">
              {t('footerCopyright')}
            </Text>
            <Text textColor="#a19d9de3" textSize="caption">
              {t('footerLicense')}
            </Text>
          </Div>

          <Div d="flex" m={{ b: { xs: '2rem', md: '0' } }}>
            <Div m={{ r: '4rem' }}>
              <Text textColor="#a19d9de3" m={{ b: '1rem' }}>
                {t('footerProductsTitle')}
              </Text>
              <Text textColor="white" m={{ b: '0.5rem' }} cursor="pointer">
                {t('footerProductsWallet')}
              </Text>
              <Text textColor="white" m={{ b: '0.5rem' }} cursor="pointer">
                {t('footerProductsTerminals')}
              </Text>
              <Text textColor="white" m={{ b: '0.5rem' }} cursor="pointer">
                {t('footerProductsAcquiring')}
              </Text>
            </Div>
            <Div>
              <Text textColor="#a19d9de3" m={{ b: '1rem' }}>
                {t('footerAboutTitle')}
              </Text>
              <Text textColor="white" m={{ b: '0.5rem' }} cursor="pointer">
                {t('footerAboutCompany')}
              </Text>
              <Text textColor="white" m={{ b: '0.5rem' }} cursor="pointer">
                {t('footerAboutDocuments')}
              </Text>
            </Div>
          </Div>

          <Div d="flex">
            {socialIcons.map((icon, index) => (
              <Image key={index} src={icon} w="24px" h="24px" m={{ l: index === 0 ? '0' : '1rem' }} cursor="pointer" />
            ))}
          </Div>
        </Div>
      </Container>
    </Div>
  );
}
