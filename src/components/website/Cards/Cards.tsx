import React from 'react';
import { Div, Text, Image } from 'atomize';
import { useTranslation } from 'react-i18next';

import Phones from '../../../assets/images/cards/Phones.png';
import Box from '../../../assets/images/cards/Box.png';
import MacBook from '../../../assets/images/cards/MacBook.png';
import Terminal from '../../../assets/images/cards/Group.png';
import Pin from '../../../assets/images/cards/Map.png';
import MapGif from '../../../assets/images/cards/Map.gif';

export default function Cards() {
  const { t } = useTranslation();

  return (
    <Div p={{ x: { xs: '1rem', md: '0' } }} maxW="1200px" m="0 auto">
      <Div
        bg="#CBEA5E"
        rounded="32px"
        m={{ b: '20px' }}
        p={{ x: '2rem', y: '1.5rem' }}
        d="flex"
        flexDir={{ xs: 'column', md: 'row' }}
        align="center"
        minH={{ md: '350px' }}
      >
        <Image src={Phones} w={{ xs: '80%', md: '57%' }} h="auto" />
        <Div flexGrow="1" p={{ l: { md: '3rem' }, t: { xs: '1rem', md: '0' } }}>
          <Text textSize={{ xs: '24px', md: '70px' }} textWeight="700" textColor="rgba(61, 60, 60, 0.5)">
            {t('cardsPlayTitle')}
          </Text>
          <Text textSize={{ xs: '28px', md: '60px' }} textWeight="700" style={{ lineHeight: '1.1' }}>
            {t('cardsPlayText')}
          </Text>
        </Div>
      </Div>

      <Div d="flex" flexDir={{ xs: 'column', md: 'row' }} m={{ b: '20px' }} align="center" justify="space-between">
        <Div
          bg="white"
          rounded="32px"
          p="2.5rem"
          w={{ xs: '100%', md: '48%' }}
          h={{ md: '400px' }}
          d="flex"
          flexDir="column"
          justify="center"
        >
          <Text textSize={{ xs: '24px', md: '70px' }} textWeight="700" textColor="rgba(61, 60, 60, 0.5)">
            {t('cardsRedeemTitle')}
          </Text>
          <Text textSize={{ xs: '28px', md: '60px' }} textWeight="700" style={{ lineHeight: '1.1' }}>
            {t('cardsRedeemText')}
          </Text>
        </Div>
        <Div w={{ xs: '100%', md: '50%' }} d="flex" justify="center" p={{ t: { xs: '2rem', md: '0' } }}>
          <Image src={Box} w={{ xs: '180px', md: '240px' }} h="auto" />
        </Div>
      </Div>

      <Div
        bg="#0066FF"
        rounded="32px"
        m={{ b: '20px' }}
        p={{ x: '2rem', y: '1.5rem' }}
        d="flex"
        flexDir={{ xs: 'column', md: 'row' }}
        align="center"
        minH={{ md: '300px' }}
      >
        <Image src={MacBook} w={{ xs: '100%', md: '45%' }} h="auto" />
        <Div flexGrow="1" p={{ l: { md: '3rem' } }}>
          <Text textSize={{ xs: '24px', md: '70px' }} textWeight="700" textColor="rgba(255,255,255,0.6)">
            {t('cardsEverywhereTitle')}
          </Text>
          <Text textSize={{ xs: '28px', md: '60px' }} textWeight="700" textColor="white" style={{ lineHeight: '1.1' }}>
            {t('cardsEverywhereText')}
          </Text>
        </Div>
      </Div>

      <Div
        bg="white"
        rounded="32px"
        m={{ b: '20px' }}
        p={{ x: '2rem', y: '1.5rem' }}
        d="flex"
        flexDir={{ xs: 'column', md: 'row' }}
        align="center"
        minH={{ md: '350px' }}
      >
        <Div w={{ xs: '60%', md: '30%' }} d="flex" justify="center">
          <Image src={Terminal} w="70%" h="auto" />
        </Div>
        <Div flexGrow="1" p={{ l: { md: '3rem' }, t: { xs: '1rem', md: '0' } }}>
          <Text textSize={{ xs: '24px', md: '70px' }} textWeight="700" textColor="rgba(61, 60, 60, 0.5)">
            {t('cardsLookTitle')}
          </Text>
          <Text textSize={{ xs: '28px', md: '60px' }} textWeight="700" style={{ lineHeight: '1.1' }}>
            {t('cardsLookText')}
          </Text>
        </Div>
      </Div>

      <Div
        d="flex"
        flexDir={{ xs: 'column-reverse', md: 'row' }}
        m={{ b: '20px' }}
        align="center"
        justify="space-between"
      >
        <Div w={{ xs: '100%', md: '50%' }} d="flex" justify="center" p={{ b: { xs: '2rem', md: '0' } }}>
          <Image src={Pin} w={{ xs: '150px', md: '200px' }} h="auto" />
        </Div>
        <Div
          bg="white"
          rounded="32px"
          p="2.5rem"
          w={{ xs: '100%', md: '48%' }}
          h={{ md: '400px' }}
          d="flex"
          flexDir="column"
          justify="center"
        >
          <Text textSize={{ xs: '24px', md: '70px' }} textWeight="700" textColor="rgba(61, 60, 60, 0.5)">
            {t('cardsMarkTitle')}
          </Text>
          <Text textSize={{ xs: '28px', md: '60px' }} textWeight="700" style={{ lineHeight: '1.1' }}>
            {t('cardsMarkText')}
          </Text>
        </Div>
      </Div>

      <Div
        bgImg={MapGif}
        bgSize="cover"
        bgPos="center"
        rounded="32px"
        h="400px"
        d="flex"
        align="center"
        justify="center"
      >
        <Div style={{ textAlign: 'center' }}>
          <Text textSize={{ xs: '24px', md: '50px' }} textWeight="700" textColor="rgba(255,255,255,0.8)">
            {t('cardsStudyTitle')}
          </Text>
          <Text textSize={{ xs: '28px', md: '60px' }} textWeight="700" textColor="white">
            {t('cardsStudyText')}
          </Text>
        </Div>
      </Div>
    </Div>
  );
}
