import React from 'react';
import { Div, Text, Image, Container } from 'atomize';
import Iphone from '../../../assets/images/features/iPhone.png';
import { useI18next } from 'gatsby-plugin-react-i18next';

export default function Features() {
  const { t } = useI18next();

  return (
    <Div bg="black" p={{ y: { xs: '2rem', md: '5rem' } }} overflow="hidden">
      <Container>
        <Div d="flex" flexDir={{ xs: 'column-reverse', md: 'row' }} align="center" justify="space-between">
          <Div w={{ xs: '100%', md: '35%' }} p={{ t: { xs: '3rem', md: '0' } }}>
            <Div m={{ b: '4rem' }}>
              <Text
                textSize={{ xs: '32px', md: '48px', lg: '64px' }}
                textColor="white"
                textWeight="700"
                lineHeight="1.1"
              >
                {t('featuresExploreTitle')}
              </Text>
              <Text textSize="20px" textColor="white" textWeight="300" opacity="0.7" m={{ t: '15px' }}>
                {t('featuresExploreText')}
              </Text>
            </Div>

            <Div m={{ b: '4rem' }}>
              <Text
                textSize={{ xs: '32px', md: '48px', lg: '64px' }}
                textColor="white"
                textWeight="700"
                lineHeight="1.1"
              >
                {t('featuresMarkTitle')}
              </Text>
              <Text textSize="20px" textColor="white" textWeight="300" opacity="0.7" m={{ t: '15px' }}>
                {t('featuresMarkText')}
              </Text>
            </Div>

            <Div>
              <Text
                textSize={{ xs: '32px', md: '48px', lg: '64px' }}
                textColor="white"
                textWeight="700"
                lineHeight="1.1"
              >
                {t('featuresEarnTitle')}
              </Text>
              <Text textSize="20px" textColor="white" textWeight="300" opacity="0.7" m={{ t: '15px' }}>
                {t('featuresEarnText')}
              </Text>
            </Div>
          </Div>

          <Div
            w={{ xs: '100%', md: '60%' }}
            d="flex"
            justify="center"
            pos="relative"
            m={{ t: { xs: '-2rem', md: '-10rem', lg: '-10rem' } }}
          >
            <Image
              src={Iphone}
              w={{ xs: '120%', md: '800px', lg: '1150px' }}
              maxW="none"
              m={{
                l: { xs: '0', md: '-20%' },
                r: { xs: '-10%', md: '0' },
              }}
            />
          </Div>
        </Div>
      </Container>
    </Div>
  );
}
