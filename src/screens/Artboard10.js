import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
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
import BG from '../assets/Image/Artboard1/bg.png';
import car from '../assets/Image/Artboard10/car.png';
import search from '../assets/Image/Artboard10/search.png';
import searchText from '../assets/Image/Artboard10/searchText.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import lockBlue from '../assets/Image/Artboard1/lockBlue.png';
import {strings} from "../locales/i18n";
import storage from "../config/storage";
import axios from "axios";
import qs from "qs";
import moment from "moment";
import {colors} from "../config/styles";
import Toast from "react-native-custom-toast";

class Artboard10 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: {},
            source: '',
            destination: '',
            content: '',
            expectedCost: '',
            sourceError: '',
            destinationError: '',
            contentError: '',
            expectedCostError: '',
            client: ''
        }
    }

    async componentDidMount() {
        let client = await storage.getItem('userInfo');
        this.setState({client: client})

        let param = await storage.getItem('item');
        this.setState({item: param})
        console.log(param);

    }

    showCustomToast(text) {
        this.refs.Successfully.showToast(text, 8000);
    }

    showCustomToastFailed(text) {
        this.refs.Failed.showToast(text, 8000);
        //this.refs.Failed.hideToast(2000);
    }

    render() {

        return (

            <ScrollView style={{backgroundColor: 'white'}}>
                <Header headerTitle={strings("newOrdersClient")} onPress={() => this.props.navigation.openDrawer()}/>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Toast ref="Failed" backgroundColor="#ff190c" position="top"/>
                    <Toast ref="Successfully" backgroundColor="#146632" position="top"/>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: hp('5%'),
                    marginBottom: hp('2%')
                }}>
                    <Image source={car} style={{width: wp('100%'), height: hp('25%'), resizeMode: 'contain'}}/>
                </View>

                <View style={{marginHorizontal: wp('18%')}}>

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
                            <Image source={search} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("source")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#47196B"
                                underlineColorAndroid="transparent"
                                onChangeText={(value) => {
                                    this.setState({source: value})
                                }}
                            />
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.sourceError}</Text>
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
                            <Image source={search} style={{width: wp('4%'), height: wp('4%'), resizeMode: 'contain'}}/>
                            <TextInput
                                style={styles.textInput}
                                placeholder={strings("dis")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="password"
                                placeholderTextColor="#47196B"
                                underlineColorAndroid="transparent"
                                value={this.state.destination}
                                onChangeText={(value) => {
                                    this.setState({destination: value})
                                }}
                            />
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.destinationError}</Text>
                    </View>
                </View>

                <View style={{marginHorizontal: wp('10%')}}>
                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: hp('2.5%'),
                        borderRadius: wp('4%'),
                        paddingTop: hp('1%'),
                        borderWidth: wp('0.3%'),
                        borderColor: '#F9A343',
                    }}>
                        <View style={styles.inputBorderArea}>
                            <TextInput
                                style={styles.textArea}
                                placeholder={strings("message")}
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="phone"
                                placeholderTextColor="#47196B"
                                underlineColorAndroid="transparent"
                                multiline={true}
                                value={this.state.content}
                                onChangeText={(value) => {
                                    this.setState({content: value})
                                }}
                            />
                            <Image source={searchText}
                                   style={{width: wp('4.5%'), height: wp('4.5%'), resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.contentError}</Text>
                    </View>


                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: hp('1.5%'),
                        height: hp('6%'),
                        borderRadius: wp('4%'),
                        paddingHorizontal: wp('2%'),
                        marginTop: hp('1.5%'),
                    }}>
                        <View style={{
                            backgroundColor: 'white',
                            flexDirection: 'row-reverse',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: hp('1.5%'),
                            borderRadius: wp('4%'),
                            borderWidth: wp('0.3%'),
                            borderColor: '#F9A343',
                        }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder=""
                                autoCorrect={false}
                                returnKeyType="next"
                                ref="password"
                                placeholderTextColor="#47196B"
                                underlineColorAndroid="transparent"
                                value={this.state.expectedCost}
                                onChangeText={(value) => {
                                    this.setState({expectedCost: value})
                                }}
                            />
                            <Text style={{
                                borderRadius: wp('4%'),
                                height: hp('6%'),
                                paddingHorizontal: wp('1%'),
                                fontSize: wp('4%'),
                                color: '#47196B',
                                textAlignVertical: 'center',
                                backgroundColor: '#F89526'
                            }}> {localization.expectedPayment} </Text>
                        </View>
                        <Text style={{
                            alignSelf: 'center',
                            color: colors.error,
                            fontSize: 12
                        }}>{this.state.expectedCostError}</Text>
                    </View>
                </View>


                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: hp('1%')}}>
                    <TouchableOpacity
                        style={{justifyContent: 'center', alignItems: 'center', width: wp('40%'), height: hp('6%')}}
                        onPress={() => {
                            console.log(this.state.source)
                            console.log(this.state.destination)
                            console.log(this.state.content)
                            console.log(this.state.expectedCost)
                            console.log(this.state.item['id'])
                            let date = new Date().getDate(); //Current Date
                            let month = new Date().getMonth() + 1; //Current Month
                            let year = new Date().getFullYear(); //Current Year
                            let hours = new Date().getHours(); //Current Hours
                            let min = new Date().getMinutes(); //Current Minutes
                            let sec = new Date().getSeconds(); //Current Seconds
                            let time = (year + '_' + month + '_' + date + ' ' + hours + ':' + min + ':' + sec).toString();
                            console.log(time)
                            let date1 = moment()
                                .utcOffset('+05:30')
                                .format('YYYY-MM-DD hh:mm:ss');
                            ;
                            console.log(date1)

                            console.log(this.state.client['name']);
                            console.log(this.state.client['api_token']);
                            let data = qs.stringify({
                                name: this.state.client['name'],
                                from: this.state.source,
                                to: this.state.destination,
                                datetime: date1,
                                desc: this.state.content,
                                value: this.state.expectedCost,
                                category_id: this.state.item['id'],
                                client_id: this.state.client['id'],
                                api_token: this.state.client['api_token']
                            })
                            console.log(data);
                            axios.post('http://anqly.tutbekat.com/public/api/orders?api_token=' + this.state.client['api_token'], data).then(response => {
                                console.log(response.data['order'])
                                this.showCustomToast(strings('getOrder'))
                                storage.removeItem('item');
                                this.props.navigation.navigate('Successfull', this.props.navigation)
                            }).catch(error => {
                                console.log(error.response)
                                if (error.response.data['error']['desc']) {
                                    console.log(error.response.data['error']['desc'])
                                    this.setState({contentError: error.response.data['error']['desc']})
                                }
                                if (error.response.data['error']['from']) {
                                    console.log(error.response.data['error']['from'])
                                    this.setState({sourceError: error.response.data['error']['from']})
                                }
                                if (error.response.data['error']['to']) {
                                    console.log(error.response.data['error']['to'])
                                    this.setState({destinationError: error.response.data['error']['to']})
                                }
                                if (error.response.data['error']['value']) {
                                    console.log(error.response.data['error']['value'])
                                    this.setState({expectedCostError: error.response.data['error']['value']})
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
                        <Text style={styles.buttonText}> {strings("send")} </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 50}}/>

            </ScrollView>

        )
    }
}

export default Artboard10

const styles = StyleSheet.create({
    inputBorder: {
        backgroundColor: 'white',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('1.5%'),

    },
    inputBorderArea: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    textInput: {
        width: wp('55%'),
        padding: 0,
        height: hp('4%'),
        paddingHorizontal: wp('4.5%'),
        fontSize: wp('4%'),
        fontWeight: '600',
        color: '#47196B',
        textAlign: 'right'
    },
    textArea: {
        width: wp('70%'),
        padding: 0,
        height: hp('22%'),
        paddingHorizontal: wp('2%'),
        fontSize: wp('4%'),
        fontWeight: '600',
        color: '#47196B',
        textAlign: 'right',
        textAlignVertical: 'top'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: wp('5%'),
        fontWeight: 'bold'
    },
});