/* External dependencies */
import React from 'react';
import { Div, Text, Image } from 'atomize';

/* Local dependencies */
import Iphone from '../../../assets/images/features/iPhone.png';
import './Features.scss'

export default function Features() {
    return (
        <Div d="flex" align="flex-start" >
        <Div >
            <Div     flexDir="column" m={{ t: '400px' }}>
                <Text textSize="64px" textColor="white" fontFamily="Inter" textWeight="700">
                    Исследуйте
                </Text>
                <Text textSize="20px" textColor="white" fontFamily="Inter" textWeight="350" m={{ t: '20px' }}>
                    Карта терминалов от Finik, исследуйте, отмечайте и зарабатывайте баллы
                </Text>
            </Div>
            <Div m={{ t: '100px' }}>
                <Text textSize="64px" textColor="white" fontFamily="Inter" textWeight="700">
                    Отмечайте
                </Text>
                <Text textSize="20px" textColor="white" fontFamily="Inter" textWeight="350" m={{ t: '20px' }}>
                    Карта терминалов от Finik, исследуйте, отмечайте и зарабатывайте баллы
                </Text>
            </Div>
            <Div m={{ t: '100px' }}>
                <Text textSize="64px" textColor="white" fontFamily="Inter" textWeight="700">
                    Зарабатывай  баллы
                </Text>
                <Text textSize="20px" textColor="white" fontFamily="Inter" textWeight="350" m={{ t: '20px' }}>
                    Карта терминалов от Finik, исследуйте, отмечайте и зарабатывайте баллы
                </Text>
            </Div>
        </Div>
        <Div  m={{t:"100px"}}>
            <Image src={Iphone} w={{xs:"100%",md:"1100px"}} maxW="1100px" h={{xs:"auto",md:"1000px"}} />
        </Div>
        </Div>
    );
}
