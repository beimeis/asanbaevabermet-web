/* External dependencies */
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Div, Image, Button } from 'atomize';

/* Local dependencies */
import './Header.scss';
import Logo from '../../../assets/images/header/Logo.svg';
import Locales from '../../locales/locales.js';
import i18n from '../../locales/i18next.js';

export default function Header() {
  const { t } = useTranslation();
  return (
    <Div className="container">
      <Image src={Logo} w="32px" h="33px" left="120px" m="30px 90px " />
      <Div className="lang-container">
        <Button onClick={() => i18n.changeLanguage(Locales.Locale.KY)} className="lang-button">
          кыргызский
        </Button>
        <Button onClick={() => i18n.changeLanguage(Locales.Locale.RU)} className="lang-button">
          русский
        </Button>
        <Button onClick={() => i18n.changeLanguage(Locales.Locale.EN)} className="lang-button">
          англиский
        </Button>
      </Div>
    </Div>
  );
}
