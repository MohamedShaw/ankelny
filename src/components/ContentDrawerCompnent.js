import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
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

import DrawerBG from '../assets/Image/Artboard15/drawer.png';
import logo from '../assets/Image/logo.png';
import feeds from '../assets/Image/Artboard15/feeds.png';
import profile from '../assets/Image/profile.png';
import notify from '../assets/Image/Artboard15/notify.png';
import cart from '../assets/Image/Artboard15/cart.png';
import saveMoney from '../assets/Image/Artboard15/saveMoney.png';
import logout from '../assets/Image/Artboard15/logout.png';
import settings from '../assets/Image/Artboard15/settings.png';
import login from '../assets/Image/Artboard15/login.png';
import {strings} from "../locales/i18n";
import storage from "../config/storage";
import axios from "axios";

let role;
class Artboard3 extends Component{

    constructor(props) {
        super(props);
        this.state= {
            name:'',
            email:'',
            userType:'customer',
        }
        console.log(props.role)
    }


    async componentDidMount(){
        let result = await storage.getItem('userInfo')
        console.log(result)
        this.setState({name:result['name']})
        this.setState({email:result['email']})
        role=result['role']
        console.log(role)
        axios.get('http://anqly.tutbekat.com/public/api/users/balance?api_token=' + result['api_token']).then(response => {
            console.log(response.data);
            this.setState({balance:response.data['orders']})
        }).catch(error => {

            console.log(error.response.data);

        });

    }
    render () {
        activeStyle=StyleSheet.create({
            LR:!I18nManager.isRTL?{right:wp('0%')}:{left:wp('0%')}
        });
         return (
            <View style={{width:wp('85%')}}> 
                <Image source={DrawerBG}  style={[activeStyle.LR,{width:wp('100%'), height:hp('100%'), position:'absolute', zIndex:-1}]}/>
                <View style={{height:hp('20%'), width:wp('85%'), marginTop:hp('5%'), marginHorizontal:hp('3%')}}>
                    <Image source={logo} style={{width:wp('60%'),  height:wp('18%'), backgroundColor:'transparent', marginBottom:wp('1%'),marginTop:wp('1%')}}/>
                    <Text style={{fontWeight:'bold', fontSize:wp('4.2%'),alignSelf:'center', color:'black'}}> {this.state.name} </Text>

                </View>
                <View style={{
                    height: 1,
                    width: wp('60'),
                    backgroundColor: '#47196B',
                    marginLeft: '3%'
                }}/>

                <TouchableOpacity disabled={false} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('85%')}, activeStyle.AC]}
                                  onPress={async()=>{
                                      let result = await storage.getItem('userInfo')
                                      console.log(result)
                                      role=result['role']
                                      console.log(role)
                                      if(result['role']=== 'client'){this.props.navigation.navigate('Home')}
                                      if(result['role']=== 'driver'){this.props.navigation.navigate('driverOrders')}
                                  }}>
                    <Image source={feeds} style={{marginHorizontal:wp('2%'), width:wp('5%'), height:wp('5%')}}/>
                    <Text style={[{fontWeight:'bold', fontSize:wp('4.5%'), color:'black', textAlign:'justify', width:wp('55%')}, activeStyle.ACT]}> {strings('title')} </Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={false} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('85%')}, activeStyle.AC]}
                                  onPress={()=>{
                                      this.props.navigation.navigate('changePassword')}}>
                    <Image source={profile} style={{marginHorizontal:wp('2%'), width:wp('5%'), height:wp('5%')}}/>
                    <Text style={[{fontWeight:'bold', fontSize:wp('4.5%'), color:'black', textAlign:'justify', width:wp('55%')}, activeStyle.ACT]}> {strings('profile')} </Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={false} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('85%')}, activeStyle.AC]}
                                  onPress={()=>{
                                      this.props.navigation.navigate('charge')}}>
                    <Image source={notify} style={{marginHorizontal:wp('2%'), width:wp('5%'), height:wp('5%')}}/>
                    <Text style={[{fontWeight:'bold', fontSize:wp('4.5%'), color:'black', textAlign:'justify', width:wp('55%')}, activeStyle.ACT]}> {strings('charge')} </Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={false} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('85%')}, activeStyle.AC]}
                                  onPress={()=>{
                                      this.props.navigation.navigate('contactus')}}>
                    <Image source={cart} style={{marginHorizontal:wp('2%'), width:wp('5%'), height:wp('5%')}}/>
                    <Text style={[{fontWeight:'bold', fontSize:wp('4.5%'), color:'black', textAlign:'justify', width:wp('55%')}, activeStyle.ACT]}> {strings('contact')} </Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={false} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('85%')}, activeStyle.AC]}
                                  onPress={()=>{
                                      this.props.navigation.navigate('termsandconition')}}>
                    <Image source={saveMoney} style={{marginHorizontal:wp('2%'), width:wp('5%'), height:wp('5%')}}/>
                    <Text style={[{fontWeight:'bold', fontSize:wp('4.5%'), color:'black', textAlign:'justify', width:wp('55%')}, activeStyle.ACT]}> {strings('terms')} </Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={false} style={[{justifyContent:'center', flexDirection:'row', alignItems:'center', height:hp('7.5%'), width:wp('85%')}, activeStyle.AC]}
                                  onPress={()=>{
                                      storage.removeItem('userInfo')
                                      storage.removeItem('orderView')
                                      storage.removeItem('userInfo')
                                      this.props.navigation.navigate('Login')}}>
                    <Image source={login} style={{marginHorizontal:wp('2%'), width:wp('5%'), height:wp('5%')}}/>
                    <Text style={[{fontWeight:'bold', fontSize:wp('4.5%'), color:'black', textAlign:'justify', width:wp('55%')}, activeStyle.ACT]}> {strings('Log_out')} </Text>
                </TouchableOpacity>
            </View>
         )
    }
}

export default Artboard3
