/* External dependencies */
import React from 'react';
import { Div } from 'atomize';
import { I18nextProvider } from 'react-i18next';
/* Local dependencies */
import i18n from '../../../locales/i18next.js';
import './MainPage.scss';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Cards from '../Cards/Cards';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';

export default function MainPage() {
  return (
    <Div className="main-container">
      <I18nextProvider i18n={i18n}>
        <Header />
        <Intro />
        <Features />
        <Cards />
        <Footer />
      </I18nextProvider>
    </Div>
  );
}
