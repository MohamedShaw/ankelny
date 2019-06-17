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
import BG from '../assets/Image/Artboard12/bg.png';
import lockLarge from '../assets/Image/Artboard11/lockLarge.png';
import car from '../assets/Image/Artboard12/car.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import {strings} from "../locales/i18n";

class Artboard12 extends Component{

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
                <Header headerTitle={strings("termsAndConditions")} onPress={() => this.props.navigation.openDrawer()} />
                <Image source={BG}  style={{width:wp('100'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={logo} style={{width:wp('40%'), height:hp('15%'), resizeMode:'contain'}}/>
                </View>
                <View style={{height:hp('47%'), backgroundColor:'rgba(255,255,255,0.8)', borderColor:'#47196B', borderWidth:wp('0.2%'), borderRadius:wp('4%'), width:wp('80%'), marginHorizontal:wp('10%')}}>
                
                </View>
                    
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('2%')}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}
                                      onPress={()=>{this.props.navigation.navigate('Home')}}>
                        <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                        <Text style={styles.buttonText}> {strings("accept")} </Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('3%')}}>
                    <Image source={car} style={{width:wp('80%'), height:hp('13%'), resizeMode:'contain'}}/>
                </View>
            </View>
        )
    }
}
    
export default Artboard12
    
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