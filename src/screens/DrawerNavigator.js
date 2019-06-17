import Splash from '../screens/Splash';
import Artboard1 from '../screens/Artboard1';
import Artboard2 from '../screens/Artboard2';
import Artboard3 from '../screens/Artboard3';
import Artboard4 from '../screens/Artboard4';
import Artboard5 from '../screens/Artboard5';
import Artboard6 from '../screens/Artboard6';
import Artboard7 from '../screens/Artboard7';
import Artboard8 from '../screens/Artboard8';
import Artboard9 from '../screens/Artboard9';
import Artboard10 from '../screens/Artboard10';
import Artboard11 from '../screens/Artboard11';
import Artboard12 from '../screens/Artboard12';
import Artboard13 from '../screens/Artboard13';
import Artboard14 from '../screens/Artboard14';
import menu from '../screens/menu'
import {createSwitchNavigator, createNavigationContainer, createDrawerNavigator} from 'react-navigation';
import Artboard15 from "./Artboard15";

const DrawerNavigator = createSwitchNavigator({

    Artboard1: {
        screen: Artboard1,
        navigationOptions: {
            header: null
        }
    },
    Artboard2: {
        screen: Artboard2,
        navigationOptions: {
            header: null
        }
    },
    Artboard3: {
        screen: Artboard3,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    Artboard4: {
        screen: Artboard4,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    Artboard5: {
        screen: Artboard5,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard6: {
        screen: Artboard6,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard7: {
        screen: Artboard7,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard8: {
        screen: Artboard8,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard9: {
        screen: Artboard9,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard10: {
        screen: Artboard10,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard11: {
        screen: Artboard11,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard12: {
        screen: Artboard12,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard13: {
        screen: Artboard13,
        navigationOptions:  ({navigation}) => ({
            header: null
        })
    },
    Artboard14: {
        screen: Artboard14,
        navigationOptions:  ({navigation}) => ({
            header: null
        }),


    },
    Menu:{
        screen: menu,
        navigationOptions:  ({navigation}) => ({
            header: null
        }),
    },
    Artboard15: {screen: Artboard15,
        navigationOptions:  ({navigation}) => ({
            header: null
        }) }
});


export default createNavigationContainer(DrawerNavigator);