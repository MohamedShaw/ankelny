import React from 'react'
import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { createDrawerNavigator } from 'react-navigation';
import {I18nManager,AppRegistry} from 'react-native'

import Artboard5 from './Artboard5';
import ContentDrawerComponent from '../components/ContentDrawerCompnent';

export default RootNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Artboard5,
            navigationOption:{
                title:"Home",
                header: null, 
            }
        },
    },
        
    {
        showsVerticalScrollIndicator: true,
        contentComponent:props => <ContentDrawerComponent {...props}/> ,
        drawerWidth:wp('75%'),
        drawerPosition:!I18nManager.isRTL?'right':'left'
    }
)
