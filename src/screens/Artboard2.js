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
import I18n from 'react-native-i18n';
import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard1/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import lock from '../assets/Image/Artboard1/lock.png';
import passwordConfirm from '../assets/Image/Artboard2/passwordConfirm.png';
import email from '../assets/Image/Artboard2/email.png';
import phone from '../assets/Image/Artboard2/phone.png';
import location from '../assets/Image/Artboard2/location.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import {isRTL, strings} from "../locales/i18n";
import storage from "../config/storage";
import axios from "axios/index";
import {setAccessToken} from "../config/axios";
import qs from "qs";
import {colors} from "../config/styles";
import RadioForm from 'react-native-simple-radio-button';
import Toast from "react-native-custom-toast";

let radio_props = [
    {label: strings('client'), value: 'client'},
    {label: strings('driver'), value: 'driver'}
];

class Artboard2 extends Component {

    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            email: '',
            mobile: '',
            address: '',
            role: '',
            nameError: '',
            emailError: '',
            phoneError: '',
            passError: ''
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
            <ScrollView style={{backgroundColor: 'whi'}}>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Toast ref="Failed" backgroundColor="#ff190c" position="top"/>
                    <Toast ref="Successfully" backgroundColor="#146632" position="top"/>
                </View>
                <Image source={BG} style={{width: wp('105'), height: hp('100%'), zIndex: -1, position: 'absolute'}}/>
                {/* HEADER */}


                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('10%')}}>
                    <Image source={logo} style={{width: wp('45%'), height: hp('10%'), resizeMode: 'contain'}}/>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <RadioForm
                        radio_props={radio_props}
                        formHorizontal={true}
                        initial={(I18n.locale === 'ar') ? 1 : 0}
                        onPress={(value) => {
                            I18n.locale = value
                            storage.setItem('language', {language: value});
                            this.setState({langValue: value})
                            if (value === 'client') {

                                this.setState({role: 'client'})
                            } else {
                                this.setState({role: 'driver'})
                                this.props.navigation.navigate('DriverRegister')

                            }

                        }}
                    />
                </View>
                <View style={{marginHorizontal: wp('18%')}}>

                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("userName")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="username"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({username: value})
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.nameError}</Text>
                        </View>
                        <Image source={person} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                    </View>
                </View>

                <View style={{marginHorizontal: wp('18%')}}>
                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("password")}
                                autoCorrect={false}
                                returnKeyType="next"
                                secureTextEntry
                                ref="password"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({password: value})
                                }}

                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.passError}</Text>
                        </View>
                        <Image source={lock} style={{width: wp('5%'), height: wp('5%'), resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View style={{marginHorizontal: wp('18%')}}>
                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("passwordConfirmation")}
                                autoCorrect={false}
                                returnKeyType="next"
                                secureTextEntry
                                ref="passwordConfirmation"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({passwordConfirm: value})
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.passError}</Text>
                        </View>
                        <Image source={passwordConfirm}
                               style={{width: wp('4.5%'), height: wp('4.5%'), resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View style={{marginHorizontal: wp('18%')}}>
                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("email")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="email"
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
                        <Image source={email} style={{width: wp('5%'), height: wp('5%'), resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View style={{marginHorizontal: wp('18%')}}>
                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("phoneNumber")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({mobile: value})
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.phoneError}</Text>
                        </View>


                        <Image source={phone} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View style={{marginHorizontal: wp('18%')}}>
                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("address")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="address"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({address: value})
                                }}
                            />
                            <Text style={{
                                alignSelf: 'center',
                                color: colors.error,
                                fontSize: 12
                            }}>{this.state.passError}</Text>
                        </View>
                        <Image source={location} style={{width: wp('5%'), height: wp('5%'), resizeMode: 'contain'}}/>
                    </View>
                </View>


                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('2%')}}>
                    <TouchableOpacity
                        style={{justifyContent: 'center', alignItems: 'center', width: wp('40%'), height: hp('6%')}}
                        onPress={async() => {
                            this.setState({
                                nameError: '',
                                emailError: '',
                                phoneError: '',
                                passError: ''
                            })
                            //alert(this.state.username+' '+this.state.password)
                            // this.props.navigation.navigate('Artboard6')
                            let data = qs.stringify({
                                name: this.state.username,
                                password: this.state.password,
                                password_confirmation: this.state.passwordConfirm,
                                email: this.state.email,
                                phone: this.state.mobile,
                                city: this.state.address,
                                role: 'client',

                            })
                            console.log(data)
                            // if(this.state.password !== '' && this.state.password === this.state.passwordConfirm) {
                            axios.post('http://anqly.tutbekat.com/public/api/users/store', data).then(response => {

                                this.showCustomToast(strings('SuccessRegister'))
                                console.log(response.data['user'])
                                setAccessToken(response.data['user']['api_token']);
                                storage.setItem('userInfo', {
                                    id: response.data['user']['id'],
                                    city: response.data['user']['city'],
                                    email: response.data['user']['email'],
                                    name: response.data['user']['name'],
                                    api_token:response.data['user']['api_token'],
                                    role:response.data['user']['role']
                                });
                                if(response.data['user']['role'] === 'client'){
                                    // this.props.navigation.push({screen:Artboard5})
                                    this.props.navigation.navigate('Home',this.props.navigation)
                                }else
                                    this.props.navigation.navigate('driverOrders',this.props.navigation)

                            }).catch(error => {
                                console.log(error)
                                if (error.response.data['error']['email']) {
                                    console.log(error.response.data['error']['email'])
                                    this.setState({emailError: error.response.data['error']['email']})

                                }
                                if (error.response.data['error']['name']) {
                                    console.log(error.response.data['error']['name'])
                                    this.setState({nameError: error.response.data['error']['name']})

                                }
                                if (error.response.data['error']['password']) {
                                    console.log(error.response.data['error']['password'])
                                    this.setState({passError: error.response.data['error']['password']})

                                }
                                if (error.response.data['error']['phone']) {
                                    console.log(error.response.data['error']['phone'])
                                    this.setState({phoneError: error.response.data['error']['phone']})

                                }

                            });
                            //   }
                        }}>
                        <Image source={buttonBG} style={{
                            width: wp('40%'),
                            height: hp('6%'),
                            zIndex: -1,
                            position: 'absolute',
                            resizeMode: 'contain'
                        }}/>
                        <Text style={styles.buttonText}> {strings("signup")} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row',marginBottom:'30%'}}
                                      onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{
                            color: '#47196B',
                            fontSize: wp('4%'),
                            fontWeight: '600',
                            textDecorationLine: 'underline'
                        }}> {strings("headerSignin")}</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        )
    }
}

export default Artboard2

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
        width:wp('55%'),
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