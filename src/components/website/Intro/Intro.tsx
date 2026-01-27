import React from 'react';
import { Div } from 'atomize';
import Map from '../Map/Map';
import Hero from '../Hero/Hero';

export default function Home() {
  return (
    <Div pos="relative" w="100%" h="100vh" overflow="hidden" bg="black">
      <Map />

      <Div
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        d="flex"
        flexDir="column"
        justify="center"
        align="center"
        style={{ zIndex: 10, pointerEvents: 'none' }}
      >
        <Div style={{ pointerEvents: 'all' }}>
          <Hero />
        </Div>
      </Div>
    </Div>
  );
}
