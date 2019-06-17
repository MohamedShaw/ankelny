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
import Icon from 'react-native-vector-icons/FontAwesome';
import localization from '../localization/localization';
import Header from '../components/Header';

import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard7/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import searchText from '../assets/Image/Artboard6/searchText.png';
import login from '../assets/Image/Artboard6/login.png';
import signout from '../assets/Image/Artboard6/signout.png';
import location from '../assets/Image/Artboard6/location.png';
import calender from '../assets/Image/Artboard6/calender.png';
import buttonR from '../assets/Image/Artboard6/buttonR.png';
import buttonG from '../assets/Image/Artboard6/buttonG.png';
import weight from '../assets/Image/Artboard6/weight.png';
import {strings} from "../locales/i18n";
import call from 'react-native-phone-call';
import storage from "../config/storage";
import axios from "axios";

class Artboard5 extends Component {

    constructor(props) {
        super()
        this.state = {
            item: [],
            userInfo:[]
        }
    }

    async componentDidMount() {
        let orderView = await storage.getItem('orderView')
        this.setState({item: orderView})
        let userInfo = await storage.getItem('userInfo')
        this.setState({userInfo: userInfo})

    }

    call = () => {
        console.log(this.state.item['id']);
        console.log(this.state.userInfo['api_token']);
        axios.put('http://anqly.tutbekat.com/public/api/orders/'+this.state.item['id']+'?api_token='+this.state.userInfo['api_token']).then(response => {
            this.setState({categories: response.data['data']})
            console.log(response.data);
        }).catch(error => {
           console.log(error.response.data);

        });        console.log(this.state.item['client']['phone'])
        const args = {
            number: this.state.item['client']['phone'],
            prompt: false,
        };
        call(args).catch(console.error);
    };

    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <Image source={BG} style={{width: wp('105'), height: hp('100%'), zIndex: -1, position: 'absolute'}}/>
                {/* HEADER */}
                <Header headerTitle={strings("newOrdersDriver")} onPress={() => this.props.navigation.openDrawer()}/>


                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: hp('10%'),
                    marginBottom: hp('5%')
                }}>
                    <Image source={logo} style={{width: wp('50%'), height: hp('10%'), resizeMode: 'contain'}}/>
                </View>


                <View style={{
                    backgroundColor: 'rgba(255,255,255, 0.8)',
                    height: hp('30%'),
                    width: wp('80%'),
                    marginHorizontal: wp('10%'),
                    borderRadius: wp('2%'),
                    borderColor: '#F89526',
                    borderWidth: wp('0.2%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: hp('2%'),
                    paddingTop: wp('2%')
                }}>
                    <View style={{
                        height: hp('6%'),
                        flexDirection: 'row',
                        width: wp('75%'),
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: wp('2%')
                    }}>
                        <Text style={{
                            color: 'black',
                            width: wp('30%'),
                            fontSize: wp('4%'),
                            fontWeight: 'bold',
                            textAlign: 'right'
                        }}>{this.state.item['from']}</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                color: 'black',
                                fontSize: wp('4%'),
                                width: 'auto',
                                textAlign: 'right'
                            }}> {strings("source")} </Text>
                            <Image source={signout}
                                   style={{width: wp('6%'), marginHorizontal: wp('2%'), height: wp('6%')}}/>
                        </View>
                    </View>

                    <View style={{
                        height: hp('6%'),
                        flexDirection: 'row',
                        width: wp('75%'),
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: hp('2%'),
                        paddingTop: wp('2%')
                    }}>
                        <Text style={{
                            color: 'black',
                            width: wp('30%'),
                            fontSize: wp('4%'),
                            fontWeight: 'bold',
                            textAlign: 'right'
                        }}> {this.state.item['to']} </Text>

                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                color: 'black',
                                fontSize: wp('4%'),
                                width: 'auto',
                                textAlign: 'right'
                            }}> {strings("dis")} </Text>
                            <Image source={login}
                                   style={{width: wp('6%'), marginHorizontal: wp('2%'), height: wp('6%')}}/>
                        </View>
                    </View>


                    <View style={{
                        height: hp('6%'),
                        flexDirection: 'row',
                        width: wp('75%'),
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: hp('2%'),
                        paddingTop: wp('2%')
                    }}>
                        <Text style={{
                            color: 'black',
                            width: wp('30%'),
                            fontSize: wp('4%'),
                            fontWeight: 'bold',
                            textAlign: 'right'
                        }}>{this.state.item['created_at']}</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                color: 'black',
                                fontSize: wp('4%'),
                                width: 'auto',
                                textAlign: 'right'
                            }}> {strings("date")} </Text>
                            <Image source={calender}
                                   style={{width: wp('6%'), marginHorizontal: wp('2%'), height: wp('6%')}}/>
                        </View>
                    </View>

                    <View style={{
                        height: hp('6%'),
                        flexDirection: 'row',
                        width: wp('75%'),
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: hp('2%'),
                        paddingTop: wp('2%')
                    }}>
                        <Text style={{
                            color: 'black',
                            width: wp('30%'),
                            fontSize: wp('4%'),
                            fontWeight: 'bold',
                            textAlign: 'right'
                        }}>{this.state.item['value']}</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                color: 'black',
                                fontSize: wp('4%'),
                                width: 'auto',
                                textAlign: 'right'
                            }}> {strings("expectedPayment")} </Text>
                            <Image source={weight} style={{
                                width: wp('6%'),
                                marginHorizontal: wp('2%'),
                                height: wp('6%'),
                                resizeMode: 'contain'
                            }}/>
                        </View>
                    </View>
                </View>


                <View style={{flexDirection: 'row', marginHorizontal: wp('10%'), marginTop: hp('15%')}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('2%')}}
                                      onPress={this.call}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: wp('40%'),
                                height: hp('6%')
                            }}>
                            <Image source={buttonG} style={{
                                width: wp('40%'),
                                height: hp('6%'),
                                zIndex: -1,
                                position: 'absolute',
                                resizeMode: 'contain'
                            }}/>
                            <Text style={styles.buttonText}> {strings("call")} </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('2%')}}
                    onPress={()=>{this.props.navigation.navigate('driverOrders')}}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: wp('40%'),
                            height: hp('6%')
                        }}>
                            <Image source={buttonR} style={{
                                width: wp('40%'),
                                height: hp('6%'),
                                zIndex: -1,
                                position: 'absolute',
                                resizeMode: 'contain'
                            }}/>
                            <Text style={styles.buttonText}> {strings("cancel")} </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Artboard5

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: wp('5%'),
        fontWeight: 'bold'
    },
});