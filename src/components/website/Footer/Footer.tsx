/* External dependencies */
import React from 'react';
import { Div, Image, Text } from 'atomize';
import {useTranslation} from 'react-i18next'
/* Local dependencies */
import Logo from '../../../assets/images/footer/Logo.svg';
import Facebook from '../../../assets/images/footer/Facebook.png';
import Twitter from '../../../assets/images/footer/Twitter.png';
import Instagram from '../../../assets/images/footer/Instagram.png';
import Linkedln from '../../../assets/images/footer/Linkedln.png';
import YouTube from '../../../assets/images/footer/YouTube.png';
import Telegram from '../../../assets/images/footer/Telegram.png';

export default function Footer() {
  const {t} = useTranslation()
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
          <Text textColor="#FFFFFF" textSize="30px" m={{ t: '30px',l:'-60px' }}>
            {t("footerBrand")}
          </Text>
        </Div>
        <Text textColor="#a19d9de3" textSize="16px" m={{ t: '80px', l: '10px' }} d="flex">
          {t("footerDescriptionLine1")}
        </Text>
        <Text textColor="#a19d9de3" textSize="16px" m={{ t: '10px', l: '10px' }} d="flex">
         {t("footerDescriptionLine2")}
        </Text>
        <Text textColor="#a19d9de3" textSize="16px" m={{ t: '20px', l: '10px' }}>
         {t("footerCopyright")}
        </Text>
        <Text textColor="#a19d9de3" textSize="16px" m={{ t: '8px', l: '10px' }}>
          {t("footerLicense")}
        </Text>
        <Div d="flex" align="flex-start" m={{ t: '-150px', l: '700px' }}>
          <Div d="flex" flexDir="column">
            <Text textColor="#a19d9de3" textSize="16px">
             {t("footerProductsTitle")}
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              {t("footerProductsWallet")}
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              {t("footerProductsTerminals")}
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              {t("footerProductsAcquiring")}
            </Text>
          </Div>
          <Div d="flex" flexDir="column" m={{ l: '90px' }}>
            <Text textColor="#a19d9de3" textSize="16px">
             {t("footerAboutTitle")}
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
             {t("footerAboutCompany")}
            </Text>
            <Text textColor="#FFFFFF" textSize="16px" p={{ t: '16px' }}>
              {t("footerAboutDocuments")}
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
