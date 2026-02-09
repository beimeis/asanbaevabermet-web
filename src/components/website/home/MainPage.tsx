/* External dependencies */
import React from 'react';
import { Div } from 'atomize';

/* Local dependencies */
import './MainPage.scss';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Cards from '../Cards/Cards';
import Intro from '../Intro/Intro';
import Footer from '../Footer/Footer';

export default function MainPage() {
  return (
    <Div className="main-container">
      <Header />
      <Intro />
      <Features />
      <Cards />
      <Footer />
    </Div>
  );
}
