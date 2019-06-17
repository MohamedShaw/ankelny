import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    I18nManager
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import localization from '../localization/localization';

import logo from '../assets/Image/Artboard8/logo.png';
import BG from '../assets/Image/Artboard8/bg.png';
import car from '../assets/Image/Artboard8/car.png';
import {strings} from "../locales/i18n";
import AppVav from "./AppNavigator";

class Artboard5 extends Component{

    constructor(props) {
        super()
        setTimeout(
            ()=>{
                this.props.navigation.navigate('Home')
            },5000
        )
    }
    render () {
        return (
            <View style={{backgroundColor:'white'}}>
                <Image source={BG}  style={{width:wp('100'), height:hp('90%'), zIndex:-1, position:'absolute' }}/>
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('40%'), marginBottom:hp('3%')}}>
                    <Image source={logo} style={{width:wp('50%'), height:hp('10%'), resizeMode:'contain'}}/>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'white', paddingHorizontal:wp('5%'), backgroundColor:'#47196B', fontSize:wp('6.5%')}}> {strings("sentSucces")} </Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'#7F7F7F', paddingHorizontal:wp('5%'), fontSize:wp('5%')}}> {strings("willBeNotified")} </Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'flex-end', marginBottom:hp('3%')}}>
                    <Image source={car} style={{width:wp('85%'), height:hp('33%')}}/>
                </View>
            </View>
        )
    }
}
    
export default Artboard5
    
const styles = StyleSheet.create({
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('5%'), 
        fontWeight:'bold'
    },
});