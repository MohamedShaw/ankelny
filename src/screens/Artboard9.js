import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    I18nManager, ImageBackground, Platform
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import BG from '../assets/Image/Artboard1/bg.png';
import car from '../assets/Image/Artboard9/car.png';
import car0 from '../assets/Image/Artboard9/car0.png';
import car1 from '../assets/Image/Artboard9/car1.png';
import buttonBG from '../assets/Image/Artboard1/buttonBG.png';
import {strings} from "../locales/i18n";
import storage from "../config/storage";
import {fontFamily} from "../config/styles";
import axios from "axios";
import Menu from "./menu";


class Artboard5 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            categories: [],
            isOpen: false,
            selectedItem: ''
        }
    }

    async componentDidMount() {
        let result = await storage.getItem('userInfo')
        this.setState({name: result['name']})
        axios.get('http://anqly.tutbekat.com/public/api/categories?api_token=' + result['api_token']).then(response => {
            console.log(response);
            this.setState({categories: response.data['data']})
        }).catch(error => {
            console.log(error.response.data);
        });
    }

    render() {

        return (

            <View style={{backgroundColor: 'white', position: 'absolute'}}>
                {/* <Image source={BG}  style={{width:wp('105'), height:hp('100%'), zIndex:-1, position:'absolute' }}/> */}
                {/* HEADER */}
                <Header headerTitle={strings("home")} onPress={() =>{

                    this.props.navigation.openDrawer()} }/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={car} style={{width: wp('100%'), height: hp('45%'), resizeMode: 'contain'}}/>
                </View>

                <ScrollView style={{height: hp('42%')}}>
                    <FlatList
                        data={this.state.categories}
                        renderItem={ ({item}) => {
                            return (
                                <TouchableOpacity onPress={()=>{
                                    this.props.navigation.navigate('Order')
                                    storage.setItem('item',item);
                                }}>
                                    <View style={{
                                        backgroundColor: 'rgba(255,255,255, 0.8)',
                                        height: hp('16%'),
                                        width: wp('80%'),
                                        marginHorizontal: wp('10%'),
                                        borderRadius: wp('4%'),
                                        borderColor: '#F89526',
                                        borderWidth: wp('0.2%'),
                                        justifyContent: 'center',
                                        alignItems: 'space-between',
                                        marginBottom: hp('2%')
                                    }}>
                                        <Text style={{
                                            color: 'white',
                                            width: wp('18%'),
                                            paddingHorizontal: wp('1%'),
                                            position: 'absolute',
                                            top: hp('6'),
                                            left: 0,
                                            backgroundColor: '#47196B',
                                            fontSize: wp('5%')
                                        }}> {item['name']} </Text>
                                        <Image source={car0}
                                               style={{width: wp('40%'), height: hp('15%'), resizeMode: 'contain'}}/>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        }
                        keyExtractor={item => toString(item.name)}
                        // style={{height:hp('50%')}}
                        numColumns={1}
                    />
                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: hp('5%')}}>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: wp('40%'),
                            height: hp('6%')
                        }}
                                          onPress={() =>
                                              this.props.navigation.navigate('Order')
                                          }>
                            <Image source={buttonBG} style={{
                                width: wp('40%'),
                                height: hp('6%'),
                                zIndex: -1,
                                position: 'absolute',
                                resizeMode: 'contain'
                            }}/>
                            <Text style={styles.buttonText}> {strings("next")} </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{height: 50}}/>
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