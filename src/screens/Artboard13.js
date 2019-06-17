import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
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
import person from '../assets/Image/Artboard1/person.png';
import phone from '../assets/Image/Artboard2/phone.png';
import subject from '../assets/Image/term.png';
import car from '../assets/Image/Artboard13/car.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import email from '../assets/Image/Artboard13/email.png';
import {strings} from "../locales/i18n";
import axios from "axios";
import qs from "qs";
import Toast from "react-native-custom-toast";

class Artboard13 extends Component{

    constructor(props) {
        super()
        this.state ={
            name:'',
            subject:'',
            message:'',
            response:'',
            phone:'',
            oredrs:[
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',date:'23 - 2 - 2019',driverName:'ابراهيم خان'},
            ]
        }
    }
    send(){
        let data = qs.stringify({name: this.state.name, subject: this.state.subject,message:this.state.message,phone:this.state.phone});
        axios.post('http://anqly.tutbekat.com/public/api/message',data).then(response => {
            this.showCustomToast(strings('SuccessSendMessage'))
           console.log(response)

        }).catch(error => {
            console.log(error.response.data);
        });
    }
    showCustomToast(text) {
        this.refs.Successfully.showToast(text, 8000);
    }

    render () {
        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <Header headerTitle={strings("callUs")} onPress={() => this.props.navigation.openDrawer()}/>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Toast ref="Failed" backgroundColor="#ff190c" position="top"/>
                    <Toast ref="Successfully" backgroundColor="#146632" position="top"/>
                </View>
                <Image source={BG}  style={{width:wp('100'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={logo} style={{width:wp('40%'), height:hp('20%'), resizeMode:'contain'}}/>
                </View>
                <View style={{marginHorizontal:wp('10%')}}>
                    <View style={{alignItems:'center'}}>
                    <Text bold h1 style={{color:'#0f9f1a'}}>{this.state.response}</Text>
                    </View>
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={strings("userName")}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="username"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(value) => {
                                this.setState({name: value})
                            }}
                        />
                        <Image source={person} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                    </View>
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={strings("subject")}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(value) => {
                                this.setState({subject: value})
                            }}
                        />
                        <Image source={subject} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                    </View>
                    <View style={styles.inputBorder} >
                        <TextInput
                            style={styles.textInput}
                            placeholder={strings("phoneNumber")}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            onChangeText={(value) => {
                                this.setState({phone: value})
                            }}
                        />
                        <Image source={phone} style={{width:wp('4%'), height:wp('4%'), resizeMode:'contain'}}/>
                    </View>

                     <View style={styles.inputBorderArea} >
                        <TextInput
                            style={styles.textArea}
                            placeholder={strings("message")}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref="phone"
                            placeholderTextColor="#A3A3A3"
                            underlineColorAndroid="transparent"
                            multiline={true}
                            onChangeText={(value) => {
                                this.setState({message: value})
                            }}
                        />
                        <Image source={email} style={{width:wp('4.5%'), height:wp('4.5%'), resizeMode:'contain'}}/>
                    </View>
                </View>
                    
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('2%')}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems:'center', width:wp('40%'), height:hp('6%')}}
                                      onPress={()=>{this.send()}}>
                        <Image source={buttonBG}  style={{width:wp('40%'), height:hp('6%'), zIndex:-1, position:'absolute', resizeMode:'contain' }}/>
                        <Text style={styles.buttonText}> {strings("send")} </Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('1%')}}>
                    <Image source={car} style={{width:wp('100%'), height:hp('15%'), resizeMode:'contain'}}/>
                </View>
            </ScrollView>
        )
    }
}
    
export default Artboard13
    
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
        textAlign:'justify'
    },
    buttonText:{
        color:'white', 
        textAlign:'center', 
        fontSize:wp('5%'), 
        fontWeight:'bold'
    },
    inputBorderArea:{
        backgroundColor:'white', 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'flex-start', 
        borderRadius:wp('4%'), 
        marginBottom:hp('2.5%'),
        paddingTop:hp('1%'), 
        borderWidth:wp('0.3%'),
        borderColor:'#F9A343',
    },
    textArea:{
        width:wp('70%'), 
        padding:0, 
        height:hp('25%'), 
        paddingHorizontal:wp('2%'), 
        fontSize:wp('4%'), 
        fontWeight:'600', 
        color:'#A3A3A3',
        textAlign:'right',
        textAlignVertical:'top'
    },
});