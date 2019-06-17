import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
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
import axios from 'axios';
import qs from "qs";
import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard1/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import lock from '../assets/Image/Artboard1/lock.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import lockBlue from '../assets/Image/Artboard1/lockBlue.png';
import {strings} from '../locales/i18n';
import {setAccessToken} from '../../src/config/axios';
import Toast from 'react-native-custom-toast';
import storage from "../config/storage";
import {colors} from "../config/styles";


class Artboard17 extends Component {

    constructor(props) {
        super()
        this.state = {
           email:'',
            emailError:''
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

            <View style={{backgroundColor: 'whi'}}>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Toast ref="Failed" backgroundColor="#ff190c" position="top"/>
                    <Toast ref="Successfully" backgroundColor="#146632" position="top"/>
                </View>
                <Image source={BG} style={{width: wp('105'), height: hp('100%'), zIndex: -1, position: 'absolute'}}/>
                {/* HEADER */}

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('30%')}}>
                    <Image source={logo} style={{width: wp('45%'), height: hp('10%'), resizeMode: 'contain'}}/>
                </View>

                <View style={{marginHorizontal: wp('18%')}}>
                    <Text bold style={{fontSize:18,marginVertical: 5}}>{strings('enterEmail')}</Text>

                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("email")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({email: value})
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.emailError}</Text>
                        </View>
                        <Image source={person} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('10%')}}>
                        <TouchableOpacity
                            style={{justifyContent: 'center', alignItems: 'center', width: wp('40%'), height: hp('6%')}}
                            onPress={() => {
                                //alert(this.state.username+' '+this.state.password)
                                // this.props.navigation.navigate('Artboard6')
                                let data = qs.stringify({email: this.state.email})
                                axios.post('http://anqly.tutbekat.com/public/api/password/email',data).then(response => {
                                    this.showCustomToast(strings('SuccessSend'))
                                    // if(response.data['data']['role'] === 'admin'){
                                    //     this.props.navigation.navigate('Home',this.props.navigation)
                                    // }else
                                    //     this.props.navigation.navigate('driverOrders',this.props.navigation)

                                    console.log(response.data)
                                }).catch(error => {

                                    this.showCustomToastFailed(strings('FailedSend'))

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

            </View>
        )
    }
}

export default Artboard17

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