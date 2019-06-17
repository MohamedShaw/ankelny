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
import Artboard5 from "./Artboard5";
import {NavigationActions}  from "react-navigation";



class Artboard1 extends Component {

    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            nameError: '',
            passError: ''
        }
    }
    componentDidMount(){

        // let d = {
        //     uri: 'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg',
        //     type: 'image/jpg', // or photo.type
        //     name: 'testPhotoName1'
        // }
        // let form = new FormData();
        // form.append("dd",d)
        //
        // axios.post('http://anqly.tutbekat.com/public/api/file',form).then(response=>{
        //     console.log(response)
        // }).catch(error=>{
        //     console.log(error.response)
        // })
        const formData = new FormData();
        // data.append('name', 'testName'); // you can append anyone.
        const x = {
            uri: 'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg',
            type: 'image/jpeg', // or photo.type
            name: 'testPhotoName1.jpg'

        };
    //data.append("app",x)
    //     form//Data.append('image', {uri:'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg', name:'profile.png', type:'image/png'})
    //     form//Data.append('image', {uri:'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg', name:'profile.png', type:'image/png'})
    //     formData.append('image',
    //         [{uri:'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg',
    //             name:'profile.png', type:'image/png'},
    //             {uri:'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg', name:'profile.png', type:'image/png'}),
    //         {uri:'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg', name:'profile.png', type:'image/png'})])

        console.log(formData);
        axios.post('http://anqly.tutbekat.com/public/api/file',
            {file:'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg', name:'profile.png', type:'image/png'}

        ).then(r=>{
            console.log(r)
        }).catch(e=>{
            console.log(e.response)
        })       // fetch('http://anqly.tutbekat.com/public/api/file',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'multipart/form-data'
        //         },
        //         body:
        //             {
        //                 uri: 'file:///storage/emulated/0/Android/data/com.ankelny/files/Pictures/image-57f0d46d-3d9f-4f35-be83-792ee67c9a46.jpg'
        //             }
        //     }).then(res => {
        //     console.log(res)
        // }).catch(e =>{
        //     console.log(e.message)
        // })

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
                <Image source={BG} style={{width: wp('100%'), height: hp('100%'), zIndex: -1, position: 'absolute'}}/>
                {/* HEADER */}

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('30%')}}>
                    <Image source={logo} style={{width: wp('45%'), height: hp('10%'), resizeMode: 'contain'}}/>
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

                    <View style={styles.inputBorder}>
                        <View>
                            <TextInput
                                style={[styles.textInput]}
                                placeholder={strings('password')}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="password"
                                secureTextEntry
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

                    <View style={{
                        flexDirection: 'column',
                        marginHorizontal: wp('1%'),
                        alignItems: 'flex-start',

                    }}>
                        <TouchableOpacity style={{flexDirection: 'row'}}
                                          onPress={() => this.props.navigation.navigate('restorePassword')}>

                            <Text style={{
                                color: '#47196B',
                                fontSize: wp('4%'),
                                fontWeight: '600',
                                textDecorationLine: 'underline'
                            }}> {strings("forgetPassword")}</Text>
                            <Image source={lockBlue}
                                   style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row'}}
                                          onPress={() => {

                                              this.props.navigation.navigate('SignUp')}
                                          }>
                            <Text style={{
                                color: '#47196B',
                                fontSize: wp('4%'),
                                fontWeight: '600',
                                textDecorationLine: 'underline'
                            }}> {strings("signup")}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('10%'), marginBottom: '50%',}}>
                        <TouchableOpacity
                            style={{justifyContent: 'center', alignItems: 'center', width: wp('40%'), height: hp('6%')}}
                            onPress={() => {
                                //alert(this.state.username+' '+this.state.password)
                                // this.props.navigation.navigate('Artboard6')
                                let data = qs.stringify({phone: this.state.username, password: this.state.password})
                                axios.post('http://anqly.tutbekat.com/public/api/login', data).then(response => {
                                    console.log(response)
                                    this.showCustomToast(strings('SuccessLogin'))
                                    setAccessToken(response.data['data']['api_token']);
                                    storage.setItem('userInfo', {
                                        id: response.data['data']['id'],
                                        city: response.data['data']['city'],
                                        email: response.data['data']['email'],
                                        name: response.data['data']['name'],
                                        api_token:response.data['data']['api_token'],
                                        role:response.data['data']['role']
                                    });
                                    if(response.data['data']['role'] === 'client'){
                                       // this.props.navigation.push({screen:Artboard5})
                                        this.props.navigation.navigate('Home',this.props.navigation)
                                    }else
                                        this.props.navigation.navigate('driverOrders',this.props.navigation)

                                    console.log(response.data)
                                }).catch(error => {

                                    console.log(error.response.data['error'])
                                    if (error.response.data['error']['phone']) {
                                        console.log(error.response.data['error']['phone'])
                                        this.setState({nameError: error.response.data['error']['phone']})
                                        this.showCustomToastFailed(error.response.data['error']['phone'])

                                    }
                                    if (error.response.data['error']['password']) {
                                        console.log(error.response.data['error']['password'])
                                        this.setState({passError: error.response.data['error']['password']})
                                        this.showCustomToastFailed(error.response.data['error']['password'])

                                    }


                                });


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

            </ScrollView>
        )
    }
}

export default Artboard1

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