import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    I18nManager, Picker
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import axios from 'axios';
import qs from "qs";
import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard1/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import lockBlue from '../assets/Image/Artboard1/lockBlue.png';
import {isRTL, strings} from '../locales/i18n';
import lock from '../assets/Image/Artboard1/lock.png';
import passwordConfirm from '../assets/Image/Artboard2/passwordConfirm.png';
import Toast from 'react-native-custom-toast';
import storage from "../config/storage";
import {colors} from "../config/styles";
import Header from "../components/Header";
import dropdown from "../assets/Image/Artboard4/dropdown.png";
import RadioForm from "react-native-simple-radio-button";
import I18n from "react-native-i18n";
import ReactNative from "react-native";

let radio_props = [
    {label: 'English', value: 'en' },
    {label: 'العربية', value: 'ar' }
];
class Artboard18 extends Component {

    constructor(props) {
        super()
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    }

    showCustomToast(text) {
        this.refs.Successfully.showToast(text, 8000);
    }

    showCustomToastFailed(text) {
        const {auth} = this.props;
        this.refs.Failed.showToast(text, 8000);
        //this.refs.Failed.hideToast(2000);
    }

    render() {

        return (

            <ScrollView style={{backgroundColor: 'white'}}>
                <Header headerTitle={strings("profile")} onPress={() =>{this.props.navigation.openDrawer()} }/>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Toast ref="Failed" backgroundColor="#ff190c" position="top"/>
                    <Toast ref="Successfully" backgroundColor="#146632" position="top"/>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <RadioForm
                        radio_props={radio_props}
                        initial={(I18n.locale === 'ar')?1 :0}
                        onPress={async(value) => {
                            I18n.locale = value
                            storage.setItem('language', {language:value});
                            this.setState({ langValue: value })
                            if (value === 'ar') {

                                ReactNative.I18nManager.forceRTL(isRTL);
                            } else {
                                ReactNative.I18nManager.forceRTL(!isRTL);
                            }
                            let result = await storage.getItem('userInfo')
                            if(result['role']=== 'client'){this.props.navigation.navigate('Home')}
                            if(result['role']=== 'driver'){this.props.navigation.navigate('driverOrders')}
                        }}
                    />
                </View>
                <Image source={BG} style={{width: wp('105'), height: hp('100%'), zIndex: -1, position: 'absolute'}}/>
                {/* HEADER */}

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('10%')}}>
                    <Image source={logo} style={{width: wp('45%'), height: hp('10%'), resizeMode: 'contain'}}/>
                </View>

                <View style={{marginHorizontal: wp('18%')}}>

                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("oldPassword")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({currentPassword: value})
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.emailError}</Text>
                        </View>

                        <Image source={lock} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                    </View>
                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("newPassword")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({newPassword: value})
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.emailError}</Text>
                        </View>
                        <Image source={lock} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>

                    </View>
                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("passwordConfirmation")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({confirmPassword: value})
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.emailError}</Text>
                        </View>
                        <Image source={passwordConfirm}
                               style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>

                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('10%'),marginBottom:'70%'}}>
                        <TouchableOpacity
                            style={{justifyContent: 'center', alignItems: 'center', width: wp('40%'), height: hp('6%')}}
                            onPress={async () => {
                                //alert(this.state.username+' '+this.state.password)
                                let result = await storage.getItem('userInfo')
                                console.log(result)
                                let data = qs.stringify({
                                    api_token: result['api_token'],
                                    oldpassword: this.state.currentPassword,
                                    password: this.state.newPassword,
                                    password_confirmation: this.state.confirmPassword
                                })
                                console.log(data)
                                axios.put('http://anqly.tutbekat.com/public/api/password/reset?', data).then(response => {
                                    console.log("success");
                                    this.showCustomToast(strings('SuccessChange'));
                                    // if(response.data['data']['role'] === 'admin'){
                                    //     this.props.navigation.navigate('Home',this.props.navigation)
                                    // }else
                                    //     this.props.navigation.navigate('driverOrders',this.props.navigation)

                                    console.log(response.data)
                                }).catch(error => {

                                    console.log(error.response.data['error'])
                                    this.showCustomToastFailed(error.response.data['error'])
                                });


                            }}>
                            <Image source={buttonBG} style={{
                                width: wp('40%'),
                                height: hp('6%'),
                                zIndex: -1,
                                position: 'absolute',
                                resizeMode: 'contain'
                            }}/>
                            <Text style={styles.buttonText}> {strings("send")} </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        )
    }
}

export default Artboard18

const styles = StyleSheet.create({
    inputBorder: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('4%'),
        marginBottom: hp('1.5%'),
        borderWidth: wp('0.3%'),
        borderColor: '#F9A343',
    },
    textInput: {
        width: wp('55%'),
        padding: 0,
        height: hp('5.5%'),
        paddingHorizontal: wp('2%'),
        fontSize: wp('4%'),
        fontWeight: '600',
        color: '#A3A3A3',
        textAlign: 'auto'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: wp('5%'),
        fontWeight: 'bold'
    },
});