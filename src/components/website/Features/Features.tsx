import React from 'react';
import { Div, Text, Image, Container } from 'atomize';
import { useTranslation } from 'react-i18next';
/* Local dependencies */
import Iphone from '../../../assets/images/features/iPhone.png';

export default function Features() {
  const { t } = useTranslation();

  return (
    <Div bg="black" p={{ y: { xs: '2rem', md: '5rem' } }} overflow="hidden">
      <Container>
        <Div d="flex" flexDir={{ xs: 'column-reverse', md: 'row' }} align="center" justify="space-between">
          <Div w={{ xs: '100%', md: '40%' }} p={{ t: { xs: '2rem', md: '0' } }}>
            <Div m={{ b: '4rem' }}>
              <Text textSize={{ xs: '32px', md: '64px' }} textColor="white" textWeight="700">
                {t('featuresExploreTitle')}
              </Text>
              <Text textSize="20px" textColor="white" textWeight="300" opacity="0.7" m={{ t: '15px' }}>
                {t('featuresExploreText')}
              </Text>
            </Div>

            <Div m={{ b: '4rem' }}>
              <Text textSize={{ xs: '32px', md: '64px' }} textColor="white" textWeight="700">
                {t('featuresMarkTitle')}
              </Text>
              <Text textSize="20px" textColor="white" textWeight="300" opacity="0.7" m={{ t: '15px' }}>
                {t('featuresMarkText')}
              </Text>
            </Div>

            <Div>
              <Text textSize={{ xs: '32px', md: '64px' }} textColor="white" textWeight="700">
                {t('featuresEarnTitle')}
              </Text>
              <Text textSize="20px" textColor="white" textWeight="300" opacity="0.7" m={{ t: '15px' }}>
                {t('featuresEarnText')}
              </Text>
            </Div>
          </Div>

          <Div>
            <Image src={Iphone} w="1000px" />
          </Div>
        </Div>
      </Container>
    </Div>
  );
}
