/* External dependencies */
import React from 'react'
import {Div} from 'atomize'
import { I18nextProvider } from 'react-i18next'
/* Local dependencies */
import i18n from '../../../locales/i18next.js'
import './MainPage.scss'
import Header  from '../Header/Header'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Cards from '../Cards/Cards'
import Map from '../Map/Map'
import Footer from '../Footer/Footer'

export default function MainPage() {
  return (
    <Div className="main-container" >
      <I18nextProvider i18n={i18n}>
      <Header/>
      <Map/>
      <Hero/>
      <Features/>
      <Cards/>
      <Footer/>
      </I18nextProvider>
    </Div>
  );
}