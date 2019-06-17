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
import Icon from 'react-native-vector-icons/FontAwesome';
import localization from '../localization/localization';

import Header from '../components/Header';
import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard1/bg.png';
import sidemenu from '../assets/Image/sidemenu.png';
import person from '../assets/Image/Artboard1/person.png';
import lock from '../assets/Image/Artboard1/lock.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import lockBlue from '../assets/Image/Artboard1/lockBlue.png';
import {strings} from "../locales/i18n";
import storage from "../config/storage";



class Artboard4 extends Component {

    constructor(props) {
        super()
        this.state = {
            isOpen: false
        }
    }


    render() {
        const menu = (

                <ImageBackground  source={sidemenu}
                       style={{width: wp('105'), height: hp('100%'),
                           zIndex: -1, position: 'absolute',}}>
                    <View style={{position:'relative',flex:1}}>
                    <Image source={BG}
                           style={{width: wp('30'), height: hp('20%'),marginLeft:'17%',
                               marginTop:'10%',marginBottom:'5%',borderRadius:30}}/>
                       <View style={{marginLeft:'27%'}}>
                           <Text style={{marginBottom:'3%',fontSize:16,
                               fontWeight:'600'}}>fatma</Text>
                       </View>
                        <View style={{
                            height: 1,
                            width:wp('60'),
                            backgroundColor:'#000',
                            marginLeft:'3%'
                        }}/>
                        <View style={{marginHorizontal:'5%'}}>

                            <View style={styles.col}>
                                <View style={{ paddingVertical: 12}}>
                                    <TouchableOpacity >
                                        <View style={{flexDirection: 'row',}}>
                                            <Image style={styles.iconStyle}
                                                   source={require('../assets/Image/home.png')}/>
                                            <Text h3 style={{
                                                color: '#000',
                                                marginHorizontal: '5%',
                                                fontSize:16,
                                                fontWeight:'600',
                                                fontFamily:'A.Jannat.LT.Bold.ttf'
                                            }}>{strings('title')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ paddingVertical: 12}}>
                                    <TouchableOpacity>
                                        <View style={{flexDirection: 'row',}}>
                                            <Image style={styles.iconStyle}
                                                   source={require('../assets/Image/language.png')}/>
                                            <Text h3 style={{
                                                color: '#000',
                                                marginHorizontal: '5%',
                                                fontSize:16,
                                                fontWeight:'600'
                                            }}>{strings('Change_Language')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingVertical: 12}}>
                                    <TouchableOpacity >
                                        <View style={{flexDirection: 'row',}}>
                                            <Image style={styles.iconStyle}
                                                   source={require('../assets/Image/profile.png')}/>
                                            <Text h3 style={{
                                                color: '#000',
                                                marginHorizontal: '5%',
                                                fontSize:16,
                                                fontWeight:'600'
                                            }}>{strings('profile')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingVertical: 12}}>
                                    <TouchableOpacity >
                                        <View style={{flexDirection: 'row',}}>
                                            <Image style={styles.iconStyle}
                                                   source={require('../assets/Image/request.png')}/>
                                            <Text h3 style={{
                                                color: '#000',
                                                marginHorizontal: '5%',
                                                fontSize:16,
                                                fontWeight:'600'
                                            }}>{strings('request')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingVertical: 12}}>
                                    <TouchableOpacity >
                                        <View style={{flexDirection: 'row',}}>
                                            <Image style={styles.iconStyle}
                                                   source={require('../assets/Image/term.png')}/>
                                            <Text h3 style={{
                                                color: '#000',
                                                marginHorizontal: '5%',
                                                fontSize:16,
                                                fontWeight:'600'
                                            }}>{strings('terms')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingVertical: 12}}>
                                    <TouchableOpacity >
                                        <View style={{flexDirection: 'row',}}>
                                            <Image style={styles.iconStyle}
                                                   source={require('../assets/Image/contact.png')}/>
                                            <Text h3 style={{
                                                color: '#000',
                                                marginHorizontal: '5%',
                                                fontSize:16,
                                                fontWeight:'600'
                                            }}>{strings('contact')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingVertical: 12}}>
                                    <TouchableOpacity >
                                        <View style={{flexDirection: 'row',}}>
                                            <Image style={styles.iconStyle}
                                                   source={require('../assets/Image/logout.png')}/>
                                            <Text h3 style={{
                                                color: '#000',
                                                marginHorizontal: '5%',
                                                fontSize:16,
                                                fontWeight:'600'
                                            }}>{strings('Log_out')}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </ImageBackground >
        );
        return (
            <SideMenu menu={menu}
                      isOpen={this.state.isOpen}
                      >
                <View style={{backgroundColor: 'whi'}}>
                    <Image source={BG}
                           style={{width: wp('105'), height: hp('100%'), zIndex: -1, position: 'absolute'}}/>
                    {/* HEADER */}
                    <Header headerTitle={strings("signin")} onPress={()=>this.setState({isOpen:true})}/>


                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('10%')}}>
                        <Image source={logo} style={{width: wp('45%'), height: hp('10%'), resizeMode: 'contain'}}/>
                    </View>

                    <View style={{marginHorizontal: wp('18%')}}>

                        <View style={styles.inputBorder}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("userName")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                            <Image source={person} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                        </View>

                        <View style={styles.inputBorder}>
                            <TextInput
                                style={styles.textInput}
                                placeholder=".........."
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="password"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                            />
                            <Image source={lock} style={{width: wp('5%'), height: wp('5%'), resizeMode: 'contain'}}/>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: wp('1%'),
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity style={{flexDirection: 'row'}}>
                                <Text style={{color: '#47196B', fontSize: wp('4%')}}> {strings("forgetPassword")}</Text>
                                <Image source={lockBlue}
                                       style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('10%')}}>
                            <TouchableOpacity style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: wp('40%'),
                                height: hp('6%')
                            }}
                                              onPress={() => {
                                                  this.props.navigation.navigate('Artboard9')
                                              }}>
                                <Image source={buttonBG} style={{
                                    width: wp('40%'),
                                    height: hp('6%'),
                                    zIndex: -1,
                                    position: 'absolute',
                                    resizeMode: 'contain'
                                }}/>
                                <Text style={styles.buttonText}> {strings("signin")} </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </SideMenu>
        )
    }
}

export default Artboard4

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
        textAlign: 'right'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: wp('5%'),
        fontWeight: 'bold'
    },
});