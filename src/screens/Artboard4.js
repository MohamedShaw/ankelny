import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    I18nManager,
    Picker, ScrollView,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-picker';
import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard4/bg.png';
import person from '../assets/Image/Artboard1/person.png';
import lock from '../assets/Image/Artboard1/lock.png';
import passwordConfirm from '../assets/Image/Artboard2/passwordConfirm.png';
import phone from '../assets/Image/Artboard2/phone.png';
import location from '../assets/Image/Artboard2/location.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import button from '../assets/Image/Artboard4/button.png';
import dropdown from '../assets/Image/Artboard4/dropdown.png';
import I18n, {strings} from "../locales/i18n";
import email from '../assets/Image/Artboard2/email.png';
import qs from "qs";
import axios from "axios";
import {colors} from "../config/styles";
import Toast from "react-native-custom-toast";
import {setAccessToken} from "../config/axios";
import storage from "../config/storage";

export default class Artboard4 extends Component {

    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            categoryId: '',
            email: '',
            mobile: '',
            address: '',
            avatarSource: '',
            formatSource: '',
            licenseSource: '',
            Id: '',
            format: '',
            license: '',
            categories: [],
            emailError: '',
            passError: '',
            phoneError: '',
            nameError: '',
            addressError: ''
        }
    }

    componentDidMount() {
        axios.get('http://anqly.tutbekat.com/public/api/categories').then(response => {
            this.setState({categories: response.data['data']})
            console.log(response.data);
        }).catch(error => {

            console.log(error.response.data);

        });

    }

    getImagebase64(image) {
        RNFetchBlob.fetch('POST', URL, {
            'Content-Type': 'multipart/form-data',
        }, [{name: 'file', filename: 'vid.mp4', data: RNFetchBlob.wrap(image)},])
            .then((res) => {

            })
            .catch((err) => {
                // error handling ..
            })
        // console.log(image)
        // RNFetchBlob.fetch('POST', 'image', {
        //     // dropbox upload headers
        //     Authorization : "Bearer access-token...",
        //     'Dropbox-API-Arg': JSON.stringify({
        //         path : image,
        //         mode : 'add',
        //         autorename : true,
        //         mute : false
        //     }),
        //     'Content-Type' : 'application/octet-stream',
        //     // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
        //     // Or simply wrap the file path with RNFetchBlob.wrap().
        // }, RNFetchBlob.wrap())
        //     .then((res) => {
        //         console.log(res.text())
        //     })
        //     .catch((err) => {
        //         // error handling ..
        //     })
        // RNFetchBlob.config({fileCache: false}).fetch("GET", image)
        //     // the image is now dowloaded to device's storage
        //     .then(resp => {
        //         // the image path you can use it directly with Image component
        //         imagePath = resp.path();
        //         console.log(resp.readFile("base64"))
        //         return resp.readFile("base64");
        //     })
        //     .then(async base64Data => {
        //          base64Data ="data:image/png;base64," + base64Data;
        //         console.warn(base64Data);
        //
        //         return base64Data;
        //     })
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    };

    upload = () => {

    };

    onEditPhoto(index) {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({license: 'uploaded'})
                //let image =  this.getImagebase64(response.uri)
                const source = "data:image/png;base64," + response.uri;
                console.log(response.uri)
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    licenseSource: response.uri,
                });
            }
        });
    }

    onEditPhotoFormat(index) {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({format: 'uploaded'})
                //let image =  this.getImagebase64(response.uri)

                const source = "data:image/png;base64," + response.uri;
                console.log(response.uri)
                this.setState({
                    formatSource: response.uri,
                });
            }
        });

    }

    onEditPhotoId(index) {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            //alert(this.state.done)
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({Id: 'uploaded'})
                //let image =  this.getImagebase64(response.uri)
//                 RNFetchBlob.fetch('POST', URL, {
//                     'Content-Type': 'multipart/form-data',
//                 }, [ { name: 'file', filename: 'vid.mp4', data: RNFetchBlob.wrap(response.uri) },])
//                     .then((res) => {
// console.log(res)
//                     })
//                     .catch((err) => {
// console.log(err)                    })
                const source = "data:image/png;base64," + response.uri;
                console.log(response.uri)
                this.setState({
                    avatarSource: response.uri,
                });
            }
        });


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
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: hp('5%'),
                    marginBottom: hp('2%')
                }}>
                    <Image source={logo} style={{width: wp('45%'), height: hp('10%'), resizeMode: 'contain'}}/>
                </View>

                <View style={{marginHorizontal: wp('10%')}}>

                    <View style={{

                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: wp('4%'),
                        marginBottom: hp('1.5%'),
                        borderWidth: wp('0.3%'),
                        borderColor: '#F9A343',
                    }}>
                        <View style={styles.inputBorder}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings('userName')}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="username"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({username: value})
                                }}
                            />
                            <Image source={person} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.nameError}</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: wp('4%'),
                        marginBottom: hp('1.5%'),
                        borderWidth: wp('0.3%'),
                        borderColor: '#F9A343',
                    }}>
                        <View style={styles.inputBorder}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("phoneNumber")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="username"
                                keyboardType='numeric'
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({mobile: value})
                                }}
                            />
                            <Image source={phone} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.phoneError}</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: wp('4%'),
                        marginBottom: hp('1.5%'),
                        borderWidth: wp('0.3%'),
                        borderColor: '#F9A343',
                    }}>
                        <View style={styles.inputBorder}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings('password')}
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
                            <Image source={lock} style={{width: wp('5%'), height: wp('5%'), resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.passError}</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: wp('4%'),
                        marginBottom: hp('1.5%'),
                        borderWidth: wp('0.3%'),
                        borderColor: '#F9A343',
                    }}>
                        <View style={styles.inputBorder}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("passwordConfirmation")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="passwordConfirmation"
                                secureTextEntry
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({passwordConfirm: value})
                                }}
                            />
                            <Image source={passwordConfirm}
                                   style={{width: wp('4.5%'), height: wp('4.5%'), resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.passError}</Text>
                    </View>


                    {/* drop down */}
                    <View style={{
                        backgroundColor: '#F89526',
                        marginVertical: hp('2%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: hp('5.5%'),
                        borderRadius: wp('3%')
                    }}>
                        <Image source={dropdown} style={{
                            position: 'absolute',
                            width: wp('3%'),
                            height: wp('3%'),
                            resizeMode: 'contain',
                            left: wp('3%')
                        }}/>
                        <Picker
                            selectedValue={this.state.categoryId}
                            onValueChange={(itemValue, itemIndex) => {

                                this.setState({categoryId: itemValue})
                            }}
                            style={{color: '#47196B', width: wp('60%'), marginRight: wp('10%')}}
                        >
                            <Picker.Item label={strings("selectCategory")} value={0}/>
                            {
                                this.state.categories.map(r => {
                                    return (
                                        <Picker.Item label={r['name']} value={r['id']}/>)
                                })
                            }

                        </Picker>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: hp('1.5%')
                    }}/>


                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: wp('4%'),
                        marginBottom: hp('1.5%'),
                        borderWidth: wp('0.3%'),
                        borderColor: '#F9A343',
                    }}>
                        <View style={styles.inputBorder}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("email")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="address"
                                placeholderTextColor="#A3A3A3"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({email: value})
                                }}
                            />
                            <Image source={email} style={{width: wp('5%'), height: wp('5%'), resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.emailError}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: wp('4%'),
                        marginBottom: hp('1.5%'),
                        borderWidth: wp('0.3%'),
                        borderColor: '#F9A343',
                    }}>
                        <View style={styles.inputBorder}>
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
                            <Image source={location}
                                   style={{width: wp('5%'), height: wp('5%'), resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.addressError}</Text>
                    </View>

                    <View
                        style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('1%'), marginBottom: 60}}>
                        <TouchableOpacity
                            style={{justifyContent: 'center', alignItems: 'center', width: wp('40%'), height: hp('6%')}}
                            onPress={() => {
                                console.log(this.state.username);
                                console.log(this.state.password);
                                console.log(this.state.passwordConfirm);
                                console.log(this.state.categoryId);
                                console.log(this.state.email);
                                console.log(this.state.mobile);
                                console.log(this.state.address);
                                const formapp = new FormData();
                                const formid = new FormData();
                                const formdrive = new FormData();
                                let app = {uri: this.state.formatSource, type: "image/png", name: 'photo'}
                                formapp.append('file', app)
                                let id = {uri: this.state.avatarSource, type: "image/png", name: 'photo'}
                                formid.append('file', id)
                                let drive = {uri: this.state.licenseSource, type: "image/png", name: 'photo'}
                                formdrive.append('file', drive)

                                let data = qs.stringify({
                                    phone: this.state.mobile,
                                    name: this.state.username,
                                    password: this.state.password,
                                    password_confirmation: this.state.passwordConfirm,
                                    email: this.state.email,
                                    category_id: this.state.categoryId,
                                    city: this.state.address,
                                    role: 'driver',
                                })
                                console.log(data)
                                // if(this.state.password !== '' && this.state.password === this.state.passwordConfirm) {
                                axios.post('http://anqly.tutbekat.com/public/api/users/store', data).then(response => {
                                    console.log(response.data)
                                    // this.props.navigation.navigate('Artboard1')
                                    this.showCustomToast(strings('SuccessRegister'))
                                    setAccessToken(response.data['data']['api_token']);
                                    storage.setItem('userInfo', {
                                        id: response.data['user']['id'],
                                        city: response.data['user']['city'],
                                        email: response.data['user']['email'],
                                        name: response.data['user']['name'],
                                        api_token:response.data['user']['api_token'],
                                        role:response.data['user']['role']
                                    });
                                    this.props.navigation.navigate('driverOrders',this.props.navigation)

                                    console.log(response.data)
                                }).catch(error => {
                                    console.log(error.response)
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
                                    if (error.response.data['error']['city']) {
                                        console.log(error.response.data['error']['city'])
                                        this.setState({addressError: error.response.data['error']['city']})
                                    }

                                });
                                // this.upload()
                                // this.props.navigation.navigate('Artboard6')
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
                        <TouchableOpacity style={{flexDirection: 'row'}}
                                          onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{
                                color: '#47196B',
                                fontSize: wp('4%'),
                                fontWeight: '600',
                                textDecorationLine: 'underline'
                            }}> {strings("headerSignin")}</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={I18n.locale === 'ar' ? 'اختر الصورة' : 'Choose photo'}
                    options={I18n.locale === 'ar' ? ['اختر من المكتبة...', 'الغاء'] : ['Choose from Library', 'الغاء']}
                    cancelButtonIndex={2}
                    onPress={(index) => {
                        this.onEditPhoto(index)
                    }}
                />
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    inputBorder: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


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