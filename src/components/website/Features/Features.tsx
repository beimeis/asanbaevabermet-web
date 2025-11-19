/* External dependencies */
import React from 'react';
import { Div, Text, Image } from 'atomize';
import {useTranslation} from 'react-i18next'
/* Local dependencies */
import Iphone from '../../../assets/images/features/iPhone.png';
import './Features.scss'

export default function Features() {
const {t} = useTranslation()
    return (
        <Div d="flex" align="flex-start" >
        <Div >
            <Div     flexDir="column" m={{ t: '400px' }}>
                <Text textSize="64px" textColor="white" fontFamily="Inter" textWeight="700">
                   {t("featuresExploreTitle")}
                </Text>
                <Text textSize="20px" textColor="white" fontFamily="Inter" textWeight="350" m={{ t: '20px' }}>
                    {t("featuresExploreText")}
                </Text>
            </Div>
            <Div m={{ t: '100px' }}>
                <Text textSize="64px" textColor="white" fontFamily="Inter" textWeight="700">
                    {t("featuresMarkTitle")}
                </Text>
                <Text textSize="20px" textColor="white" fontFamily="Inter" textWeight="350" m={{ t: '20px' }}>
                    {t("featuresMarkText")}
                </Text>
            </Div>
            <Div m={{ t: '100px' }}>
                <Text textSize="64px" textColor="white" fontFamily="Inter" textWeight="700">
            {t("featuresEarnTitle")}
                </Text>
                <Text textSize="20px" textColor="white" fontFamily="Inter" textWeight="350" m={{ t: '20px' }}>
                  {t("featuresEarnText")}
                </Text>
            </Div>
        </Div>
        <Div  m={{t:"100px"}}>
            <Image src={Iphone} w={{xs:"100%",md:"1100px"}} maxW="1100px" h={{xs:"auto",md:"1000px"}} />
        </Div>
        </Div>
    );
}
