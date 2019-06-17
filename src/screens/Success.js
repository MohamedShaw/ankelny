/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {I18nManager} from 'react-native';
import localization from '../localization/localization';
import AppVav from "../screens/AppNavigator";
import storage from "../config/storage";
import Artboard8 from "../screens/Artboard8";


export default class Success extends Component {
    constructor(props){
        super(props);
        this.state = {
            rootPage: <Artboard8/>,
            language:'ar',
            user:null,
        }
        setTimeout(
            ()=>{
               this.props.navigation.navigate('Home')
            },5000
        )}
    render() {
        return (
            this.state.rootPage
        );
    }
}
