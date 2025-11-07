/* External dependencies */
import React from 'react';
import {Div} from 'atomize'
/* Local dependencies */
import './MainPage.scss'
import Header  from '../Header/Header';
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Cards from '../Cards/Cards';
import Map from '../Map/Map'
import Footer from '../Footer/Footer'

export default function MainPage() {
  return (
    <Div className="main-container" >
      <Header/>
      <Map/>
      <Hero/>
      <Features/>
      <Cards/>
      <Footer/>
    </Div>
  );
}
