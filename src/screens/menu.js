import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, ScrollView, View, Image, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {strings} from "../locales/i18n";
import {fontFamily} from "../config/styles";
import BG from '../assets/Image/Artboard1/bg.png';
import sidemenu from '../assets/Image/sidemenu.png';
import storage from "../config/storage";
import Artboard5 from "./Artboard9";
import axios from "axios";

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'gray',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    },
    item: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        color: 'white'
    },
});

export default class Menu extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state={
            role:'',
            name:'',
            balance:''
        }
    }

    async componentDidMount(){
        let result = await storage.getItem('userInfo')
        console.log(result)
        this.setState({name:result['name']})
        axios.get('http://anqly.tutbekat.com/public/api/users/balance?api_token=' + result['api_token']).then(response => {
            console.log(response.data);
            this.setState({balance:response.data['orders']})
        }).catch(error => {

            console.log(error.response.data);

        });

    }

    render() {
        return (
            <ImageBackground source={sidemenu}
                             style={styles.menu}>
                <View style={{position: 'relative', flex: 1}}>
                    <Image source={BG}
                           style={{
                               width: wp('30'), height: '20%', marginLeft: '17%',
                               marginTop: '10%', marginBottom: '5%', borderRadius: 30
                           }}/>
                    <View style={{marginLeft: '27%'}}>
                        <Text style={{
                            marginBottom: '3%', fontSize: 16,
                            fontWeight: '600',
                            color: '#47196B',
                            fontFamily: fontFamily
                        }}>{this.state.name}</Text>
                    </View>
                    <View style={{
                        height: 1,
                        width: wp('60'),
                        backgroundColor: '#47196B',
                        marginLeft: '3%'
                    }}/>
                    <View style={{marginHorizontal: '5%'}}>

                        <View style={styles.col}>
                            <View style={{paddingVertical: 12}}>
                                <TouchableOpacity onPress={async() =>{
                                    let result = await storage.getItem('userInfo')
                                    this.setState({role: result['role']})
                                    console.log('role '+this.state.role)
                                    if(this.state.role === 'driver'){
                                        this.props.navigation.navigate('driverOrders2')

                                    }else

                                    this.props.navigation.navigate('Home2')

                                } } style={styles.item}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image style={styles.iconStyle}
                                               source={require('../assets/Image/home.png')}/>
                                        <Text h3 style={{
                                            color: '#47196B',
                                            marginHorizontal: '5%',
                                            fontSize: 16,
                                            fontWeight: '600',
                                            fontFamily: fontFamily
                                        }}>{strings('title')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                            <View style={{paddingVertical: 12}}>
                                <TouchableOpacity>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image style={styles.iconStyle}
                                               source={require('../assets/Image/profile.png')}/>
                                        <Text h3 style={{
                                            color: '#47196B',
                                            marginHorizontal: '5%',
                                            fontSize: 16,
                                            fontWeight: '600',
                                            fontFamily: fontFamily
                                        }}>{strings('profile')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingVertical: 12}}>
                                <TouchableOpacity
                                onPress={()=>this.props.navigation.navigate('recharge')}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image style={styles.iconStyle}
                                               source={require('../assets/Image/balance.png')}/>
                                        <Text h3 style={{
                                            color: '#47196B',
                                            marginHorizontal: '5%',
                                            fontSize: 16,
                                            fontWeight: '600',
                                            fontFamily: fontFamily
                                        }}>{strings('charge')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingVertical: 12}}>
                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('terms')}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image style={styles.iconStyle}
                                               source={require('../assets/Image/term.png')}/>
                                        <Text h3 style={{
                                            color: '#47196B',
                                            marginHorizontal: '5%',
                                            fontSize: 16,
                                            fontWeight: '600',
                                            fontFamily: fontFamily
                                        }}>{strings('terms')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingVertical: 12}}>
                                <TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate('contactus')}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image style={styles.iconStyle}
                                               source={require('../assets/Image/contact.png')}/>
                                        <Text h3 style={{
                                            color: '#47196B',
                                            marginHorizontal: '5%',
                                            fontSize: 16,
                                            fontWeight: '600',
                                            fontFamily: fontFamily
                                        }}>{strings('contact')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingVertical: 12}}>
                                <TouchableOpacity
                                onPress={()=>{
                                    storage.removeItem('userInfo')
                                    this.props.navigation.navigate('Login')}}>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image style={styles.iconStyle}
                                               source={require('../assets/Image/logout.png')}/>
                                        <Text h3 style={{
                                            color: '#47196B',
                                            marginHorizontal: '5%',
                                            fontSize: 16,
                                            fontWeight: '600',
                                            fontFamily: fontFamily
                                        }}>{strings('Log_out')}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </ImageBackground>);


    }

}

