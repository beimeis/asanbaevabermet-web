/* External dependencies */
import React from 'react';
import { Div, Text, Image } from 'atomize';

/* Local dependencies */
import Phones from '../../../assets/images/cards/Phones.png';
import Box from '../../../assets/images/cards/Box.png';
import MacBook from '../../../assets/images/cards/MacBook.png';
import Terminal from '../../../assets/images/cards/Group.png';
import Pin from '../../../assets/images/cards/Map.png';
import MapGif from '../../../assets/images/cards/Map.gif';
import MapOne from '../../../assets/images/cards/Kyrgyzstan(2).png';
import MapTwo from '../../../assets/images/cards/Kyrgyzstan(3).png';

export default function Cards() {
  return (
    <Div>
      <Div
        d="flex"
        w={{ xs: '100%', md: '1400px' }}
        maxW="1400px"
        h={{ xs: 'auto', md: '450px' }}
        rounded="50px"
        m={{ t: '50px' }}
        bg="#CBEA5E"
      >
        <Image src={Phones} w="690px" h="425px" />
        <Div>
          <Text textSize="64px" textWeight="700" textColor="rgba(61, 60, 60, 0.7)" p={{ t: '70px' }} m={{ l: '90px' }}>
            Играй.
          </Text>
          <Text textSize="64px" textWeight="700" p={{ t: '30px' }} m={{ l: '90px' }}>
            Увлекательная игра
          </Text>
        </Div>
      </Div>
      <Div
        w={{ xs: '100%', md: '600px' }}
        maxW="600px"
        h={{ xs: 'auto', md: '410px' }}
        rounded="50px"
        m={{ t: '20px' }}
        bg="#FFFFFF"
        d="flex"
      >
        <Div>
          <Text textSize="64px" textWeight="700" textColor="rgba(61, 60, 60, 0.7)" m={{ t: '90px', l: '90px' }}>
            Обменивай.
          </Text>
          <Text textSize="64px" textWeight="700" m={{ l: '90px' }} p={{ t: '20px' }}>
            Получай подарки
          </Text>
        </Div>
        <Image
          src={Box}
          w={{ xs: '100%', md: '279px' }}
          maxW="279px"
          h={{ xs: 'auto', md: '307px' }}
          m={{ t: '30px', l: '470px' }}
        />
      </Div>
      <Div
        w={{ xs: '100%', md: '1400px' }}
        maxW="1400px"
        h={{ xs: 'auto', md: '450px' }}
        rounded="50px"
        m={{ t: '20px' }}
        bg="#0066FF"
        d="flex"
      >
        <Image src={MacBook} w={{ xs: '100%', md: '668px' }} maxW="668px" h={{ xs: 'auto', md: '502px' }} />
        <Div>
          <Text textSize="64px" textWeight="700" textColor="rgba(255, 255, 255, 0.6)" m={{ t: '105px', l: '250px' }}>
            Везде.
          </Text>
          <Text textSize="64px" textWeight="700" textColor="#FFF" m={{ t: '23px', l: '250px' }}>
            На всех платформах
          </Text>
        </Div>
      </Div>
      <Div
        w={{ xs: '100%', md: '1400px' }}
        maxW="1400px"
        h={{ xs: 'auto', md: '450px' }}
        rounded="50px"
        m={{ t: '20px' }}
        bg="#FFF"
        d="flex"
        align="flex-start"
      >
        <Image
          src={Terminal}
          w={{ xs: '100%', md: '250px' }}
          maxW="250px"
          h={{ xs: 'auto', md: '400px' }}
          m={{ t: '52px', l: '270px' }}
        />
        <Div>
          <Text textSize="64px" textWeight="700" textColor="rgba(61, 60, 60, 0.7)" m={{ t: '150px', l: '230px' }}>
            Оглянись.
          </Text>
          <Text textSize="64px" textWeight="700" m={{ t: '30px', l: '230px' }}>
            Терминалы везде
          </Text>
        </Div>
      </Div>
      <Div d="flex" align="flex-start">
        <Image
          src={Pin}
          w={{ xs: '100%', md: '220px' }}
          maxW="220px"
          h={{ xs: 'auto', md: '300px' }}
          m={{ t: '60px', l: '270px' }}
        />
        <Div
          w={{ xs: '100%', md: '600px' }}
          maxW="600px"
          h={{ xs: '100%', md: '410px' }}
          rounded="50px"
          m={{ t: '20px', l: '300px' }}
          bg="#FFFFFF"
        >
          <Text textSize="64px" textWeight="700" textColor="rgba(61, 60, 60, 0.7)" m={{ t: '80px', l: '60px' }}>
            Отмечай.
          </Text>
          <Text textSize="64px" textWeight="700" m={{ l: '60px' }} p={{ t: '10px' }}>
            Мы поставим терминал
          </Text>
        </Div>
      </Div>
      <Div>
        <Image
          src={MapGif}
          w={{ xs: '100%', md: '1400px' }}
          maxW="1400px"
          h={{ xs: 'auto', md: '450px' }}
          rounded="50px"
          m={{ t: '20px'}}
          d="flex"
        />
        <Image
          src={MapOne}
          w={{ xs: '100%', md: '450px' }}
          maxW="450px"
          h={{ xs: 'auto', md: '400px' }}
          m={{ t: '-400px', l: '950px' }}
          d="flex"
        />
        <Image
          src={MapTwo}
          w={{ xs: '100%', md: '300px' }}
          maxW="300px"
          h={{ xs: 'auto', md: '450px' }}
          m={{ t: '-400px' }}
          d="flex"
        />
        <Div>
          <Text textSize="64px" textWeight="700" textColor="rgba(255, 255, 255, 0.67)" m={{ t: '-400px', l: '630px' }}>
            Изучай.
          </Text>
          <Text textSize="64px" textWeight="700" textColor="#FFFFFF" m={{ t: '10px', l: '480px' }}>
            Уникальная карта
          </Text>
        </Div>
      </Div>
    </Div>
  );
}
