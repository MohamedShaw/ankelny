import React, {Component} from 'react'
import {
    ImageBackground,
    View,
    Image,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import localization from '../localization/localization';

import Splash from '../assets/Image/Splash/bg.png';
import logo from '../assets/Image/Splash/logo.png';
import car from '../assets/Image/Splash/car.png';

class SplashScreen1 extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={Splash}  style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'contain',
              }}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={logo} style={{width:wp('70%'), height:hp('20%'), zIndex:2, resizeMode:'contain', marginTop:hp('30%')}}/>
                    <Image source={car} style={{width:wp('100%'), height:hp('100%'), zIndex:1, position:'absolute', top:hp('-5%')}}/>
                </View>
            </ImageBackground>
         )
    }
}

export default SplashScreen1