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
import Header from '../components/Header'
import localization from '../localization/localization';

import logo from '../assets/Image/Artboard8/logo.png';
import BG from '../assets/Image/Artboard8/bg.png';
import lockLarge from '../assets/Image/Artboard11/lockLarge.png';
import email from '../assets/Image/Artboard2/email.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import {strings} from "../locales/i18n";

class Artboard11 extends Component{

    constructor(props) {
        super()
        this.state ={
            oredrs:[
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
            ]
        }
    }
    render () {
        return (
            <View style={{backgroundColor:'white'}}>
                <Header headerTitle={strings("changePassword")}/>
                <Image source={BG}  style={{width:wp('100'), height:hp('105%'), zIndex:-1, position:'absolute' }}/>
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('8%'), marginBottom:hp('3%')}}>
                    <Image source={logo} style={{width:wp('50%'), height:hp('20%'), resizeMode:'contain'}}/>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('4%'), marginBottom:hp('3%')}}>
                    <Image source={lockLarge} style={{width:wp('50%'), height:hp('20%'), resizeMode:'contain'}}/>
                </View>
                <View style={{marginHorizontal:wp('10%')}}>
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={strings("email")}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="email"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                        />
                        <Image source={email} style={{width:wp('5%'), height:wp('5%'), resizeMode:'contain'}}/>
                    </View>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('2%')}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}
                                      onPress={()=>{this.props.navigation.navigate('Artboard12')}}>
                        <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                        <Text style={styles.buttonText}> {strings("send")} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
    
export default Artboard11
    
const styles = StyleSheet.create({
    inputBorder:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:wp('4%'), 
        marginBottom:hp('1.5%'), 
        borderWidth:wp('0.3%'),
        borderColor:'#F9A343',
    },
    textInput:{
        width:wp('70%'), 
        padding:0, 
        height:hp('5.5%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#A3A3A3',
        textAlign:'right'
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('5%'), 
        fontWeight:'bold'
    },
});