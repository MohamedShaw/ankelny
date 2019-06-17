/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {I18nManager} from 'react-native';
import localization from './src/localization/localization';
import AppVav from "./src/screens/AppNavigator";
import storage from "./src/config/storage";
import Artboard11 from "./src/screens/Artboard11";
import Artboard12 from "./src/screens/Artboard12";
import Artboard13 from "./src/screens/Artboard13";
import Artboard14 from "./src/screens/Artboard14";
import Artboard15 from "./src/screens/Artboard15";
import Artboard8 from "./src/screens/Artboard8";
import Artboard7 from "./src/screens/Artboard7";
import Artboard5 from "./src/screens/Artboard9";
import Artboard10 from "./src/screens/Artboard10";
import Artboard16 from "./src/screens/Artboard16";
import Artboard3 from "./src/components/ContentDrawerCompnent";
import Splash from "./src/screens/Splash";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            rootPage: <Splash/>,
            language:'ar',
            user:null,
        }
        setTimeout(
            ()=>{
                this.setState({
                    rootPage: <AppVav />
                });
            },5000
        )
        // this.checkUser = this.checkUser.bind(this);
        // new LocalStorage().getLang();

    }

    componentWillMount(){
        // this.checkLang();
        // this.checkUser();
        // this.props.fetchCategories();
        // this.props.fetchCountries();
    }


    async checkLang(){
        return await AsyncStorage.getItem('language').then((data)=>{
            if(data){
                // console.log('lang'+data)
                // update state and use JSON.parse to convert string to object
                localization.setLanguage(data);
                if(data=='ar'){
                    I18nManager.forceRTL(false);
                }else if(data=='en'){
                    I18nManager.forceRTL(true);
                }
            }
            else {
                localization.setLanguage('en');
                if(data=='en'){
                    I18nManager.forceRTL(true);
                }
                return null;
            }
        }).catch((error)=>{
            // console.log('ERROR GET Lang: ' + error)
        });
    }

    async checkUser(){
        return await storage.getItem('userInfo').then(data=>JSON.parse(data)).then(async(data)=>{
            if(data){
                // update state and use JSON.parse to convert string to object
                //console.log(data)
                accesToken = await storage.getItem('userToken').then((response)=>JSON.parse(response));
                //this.props.loginPass(data);
                //this.props.loginPassToken(accesToken);
                // console.log(accesToken)
                this.setState({
                    rootPage: <AppVav />
                });
            }
            else {
                // console.log('ERROR: not found')
                return null;
            }
        }).catch((error)=>{
            // console.log('ERROR GET: ' + error)
        });
    }

    render() {
        return (
            this.state.rootPage
            // <HomeScreen />
        );
    }
}
