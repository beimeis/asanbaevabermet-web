/* External dependencies */
import React from 'react';
import { Div, Image, Button } from 'atomize';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { navigate } from 'gatsby';
/* Local dependencies */
import './Header.scss';
import Logo from '../../../assets/images/header/Logo.svg';

export default function Header() {
  const { i18n } = useI18next();

  const changeLanguage = (lng: 'ru' | 'en' | 'ky') => {
    i18n.changeLanguage(lng);

    navigate(`/${lng === 'ru' ? '' : lng}`, {
      replace: true,
    });
  };

  return (
    <Div className="container">
      <Image src={Logo} w="32px" h="33px" left="120px" m="30px 90px " />
      <Div className="lang-container">
        <Button onClick={() => changeLanguage('ky')} className="lang-button">
          Кыргызча
        </Button>
        <Button onClick={() => changeLanguage('ru')} className="lang-button">
          Русский
        </Button>
        <Button onClick={() => changeLanguage('en')} className="lang-button">
          English
        </Button>
      </Div>
    </Div>
  );
}
