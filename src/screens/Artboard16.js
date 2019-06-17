import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../components/Header';
import logo from '../assets/Image/Artboard1/logo.png';
import BG from '../assets/Image/Artboard5/bg.png';
import {strings} from "../locales/i18n";
import storage from "../config/storage";
import axios from "axios";
import Artboard6 from "./Artboard6";

export default class Artboard16 extends Component{

    constructor(props) {
        super()
        this.state ={
            oredrs:[
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',datetime:'23 - 2 - 2019',driverName:'ابراهيم خان'},
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',datetime:'23 - 2 - 2019',driverName:'ابراهيم خان'},
                {from:'الرياض شارع حفصه بنت عمر', to:'الرياض حي الخليج',datetime:'23 - 2 - 2019',driverName:'ابراهيم خان'},
            ]
        }
    }

    async componentDidMount(){
        let result = await storage.getItem('userInfo')
        console.log(result['api_token']);

        axios.get('http://anqly.tutbekat.com/public/api/orders?api_token=' + result['api_token']).then(response => {
            console.log(response.data);
            this.setState({oredrs:response.data['orders']})
        }).catch(error => {

            console.log(error.response.data);

        });

    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",

                }}
            />
        );
    }
    render () {
        return (
            <View style={{backgroundColor:'white'}}>
                <Image source={BG}  style={{width:wp('105'), height:hp('100%'), zIndex:-1, position:'absolute' }}/>
                {/* HEADER */}
                <Header headerTitle={strings("myRequests")} onPress={() => this.props.navigation.openDrawer()}/>

                <View style={{justifyContent:'center', alignItems:'center', marginTop:hp('5%'), marginBottom:hp('2%')}}>
                    <Image source={logo} style={{width:wp('50%'), height:hp('10%'), resizeMode:'contain'}}/>
                </View>


                <FlatList
                    data={this.state.oredrs}
                    renderItem={({item}) =>{
                        return(
                        <TouchableOpacity
                        onPress={()=>{
                            console.log(item)
                            console.log(item['category_id'])
                            storage.setItem('cat',item['category_id'])
                            storage.setItem('orderView',{
                                category_id:item['category_id'],
                                client_id: item['client_id'],
                                created_at:item['created_at'],
                                datetime: item['datetime'],
                                desc: item['desc'],
                                driver_id: item['driver_id'],
                                from: item['from'],
                                id: item['id'],
                                name: item['name'],
                                status: item['status'],
                                to: item['to'],
                                updated_at: item['updated_at'],
                                value: item['value'],
                                client:item['client']
                            })
                            this.props.navigation.navigate('driverAccept',this.props.navigation)
                        }}>
                            <View style={{backgroundColor:'rgba(255,255,255, 0.8)', height:hp('16%'), width:wp('80%'), marginHorizontal:wp('10%'), borderRadius:wp('4%'), borderColor:'#F89526', borderWidth:wp('0.2%'), justifyContent:'center', alignItems:'space-between', marginBottom:hp('2%')}}>
                                <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:wp('2%'), flexDirection:'row'}}>
                                    <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {item['from']}  </Text>
                                    <Text style={{color:'#F89526', fontSize:wp('4%'), width:'auto'}}> {strings('from')}  </Text>
                                </View>
                                <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:wp('2%'), flexDirection:'row'}}>
                                    <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {item['to']}  </Text>
                                    <Text style={{color:'#F89526', fontSize:wp('4%'), width:'auto'}}> {strings('to')} </Text>
                                </View>
                                <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:wp('2%'), flexDirection:'row'}}>
                                    <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}> {item['datetime']}  </Text>
                                    <Text style={{color:'#F89526', fontSize:wp('4%'), width:'auto'}}> {strings('date')}  </Text>
                                </View>
                                <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:wp('2%'), flexDirection:'row'}}>
                                    <Text style={{color:'black', fontSize:wp('4%'), width:'auto', textAlign:'right'}}>  </Text>
                                    <Text style={{color:'#F89526', fontSize:wp('4%'), width:'auto'}}>   </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        )
                    }
                    }
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    keyExtractor={item => toString(item.name)}
                    style={{height:hp('75%')}}
                    numColumns={1}
                />
            </View>
        )
    }
}

