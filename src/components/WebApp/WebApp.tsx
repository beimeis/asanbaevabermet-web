/* External dependencies */
import React from 'react';
import { Div, Button, Image, Text } from 'atomize';
import { Link } from 'gatsby';

/* Local dependencies */
import Logo from '../../assets/images/mapApp/LogoFinik.png';
import AccIcon from '../../assets/images/mapApp/accountIcon.png';
import AppIcon from '../../assets/images/mapApp/Icon.png';
import AppleIcon from '../../assets/images/mapApp/AppleIcon .png';

export default function WebApp() {
  return (
    <Div  d="flex" align="flex-start">
      <Div >
        <Link to="/">
          <Button
            w={{ xs: '120px', xl: '120px' }}
            h={{ xs: '46px', xl: '46px' }}
            m={{ t: '20px', l: '50px' }}
            border="2px solid"
            borderColor=" #C0C0C0"
            rounded="16px"
          >
            <Image src={Logo} w={{ xs: '20px', xl: '20px' }} h={{ xs: '20px', xl: '20px' }} />
            <Text p={{ l: '13px' }} textSize="18px">
              Карта
            </Text>
          </Button>
        </Link>
      </Div>
      <Div>
        <Button
          w={{ xs: '330px', xl: '330px' }}
          h={{ xs: '46px', xl: '46px' }}
          m={{ t: '20px', l: '1122px' }}
          border="2px solid"
          borderColor=" #ffffffff"
           rounded="16px"
        >
          <Image src={AccIcon} w={{ xs: '20px', xl: '20px' }} h={{ xs: '20px', xl: '20px' }} />
          <Text p={{l:'10px'}}>войти</Text>
          <Button
            w={{ xs: '90px', xl: '90px' }}
            h={{ xs: '24px', xl: '24px' }}
            m={{ l: '20px' }}
             p={{r:'10px'}}
            border="2px solid"
            borderColor=" #C0C0C0"
            textColor="#ffffff"
          >
            <Image src={AppIcon} w={{ xs: '13px', xl: '13px' }} h={{ xs: '15px', xl: '15x' }} />
            <Div>
              <Text textSize="6px" m={{ r: '3px' }} >
                Get it on
              </Text>
              <Text textSize="8px" p={{t:'3px'}}>
                Google Play
              </Text>
            </Div>
          </Button>
          <Button
            w={{ xs: '90 px', xl: '90px' }}
            h={{ xs: '24px', xl: '24px' }}
            m={{ l: '20px' }}
            p={{r:'10px'}}
            border="2px solid"
            borderColor=" #C0C0C0"
            textColor="#ffffff"
          >
            <Div d='flex' m={{r:'8px'}}>
            <Image src={AppleIcon} w={{ xs: '13px', xl: '13px' }} h={{ xs: '15px', xl: '15px' }} />
            </Div>
            <Div>
              <Text textSize="6px" >Download on the</Text>
              <Text textSize="9px" p={{t:'2px'}} >
                App Sotre
              </Text>
            </Div>
          </Button>
        </Button>
      </Div>
    </Div>
  );
}
