/* External dependencies */
import React from 'react';
import { Div, Image } from 'atomize';

/* Local dependencies */
import './Header.scss';
import Logo from '../../../assets/images/header/Logo.svg';

export default function Header() {
  return (
    <Div w="1854px" h="10px" m={{t:"12px"}}>
      <Image src={Logo} w="32px" h="33px" top="32px" left="120px" m="30px 90px " />
    </Div>
  );
}
