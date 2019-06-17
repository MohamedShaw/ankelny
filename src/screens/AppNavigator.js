import Artboard1 from '../screens/Artboard1';
import Artboard2 from '../screens/Artboard2';
import Artboard6 from '../screens/Artboard6';
import Artboard9 from '../screens/Artboard9';
import Artboard12 from '../screens/Artboard12';
import {
    createStackNavigator,
    createNavigationContainer,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';
import Menu from "./menu";
import ContentDrawerComponent from '../components/ContentDrawerCompnent';
import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {I18nManager} from "react-native";
import language from "./changeLanguage";
import Artboard4 from "./Artboard4";
import Artboard10 from "./Artboard10";
import Artboard8 from "./Artboard8";
import Artboard5 from "./Artboard5";
import Artboard16 from "./Artboard16";
import Artboard13 from "./Artboard13";
import Artboard14 from "./Artboard14";
import Artboard17 from "./Artboard17";
import Artboard7 from "./Artboard7";
import Artboard3 from "../components/ContentDrawerCompnent";
import Artboard18 from "./Artboard18";
import React from "react";
import Success from "./Success";
//
//
// const Login = createStackNavigator(
//     {
//         SignUp: {
//             screen: Artboard1,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//
//     }
// );
// const SignUpScreenNav = createStackNavigator(
//     {
//         SignUp: {
//             screen: Artboard2,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//
//     }
// );
//
// const Home = createStackNavigator(
//     {
//         Home: {
//             screen: Artboard9,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
// const Home2 = createStackNavigator(
//     {
//         Home: {
//             screen: Artboard9,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const talbaty = createStackNavigator(
//     {
//         talbaty: {
//             screen: Artboard6,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const terms = createStackNavigator(
//     {
//         termsandconition: {
//             screen: Artboard12,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
// const changeLanguage = createStackNavigator(
//     {
//         changeLanguage: {
//             screen: language,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const DriverRegister = createStackNavigator(
//     {
//         DriverRegister: {
//             screen: Artboard4,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
// const Order = createStackNavigator(
//     {
//         Order: {
//             screen: Artboard10,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
// const AcceptOrder = createStackNavigator(
//     {
//         AcceptOrder: {
//             screen: Artboard8,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const AllOrder = createStackNavigator(
//     {
//         AllOrder: {
//             screen: Artboard5,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
// const driverOrders = createStackNavigator(
//     {
//         driverOrders: {
//             screen: Artboard16,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
// const driverOrders2 = createStackNavigator(
//     {
//         driverOrders2: {
//             screen: Artboard16,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const driverAccept = createStackNavigator(
//     {
//         driverAccept: {
//             screen: Artboard6,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
// const contactus = createStackNavigator(
//     {
//         contactus: {
//             screen: Artboard13,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const charge = createStackNavigator(
//     {
//         charge: {
//             screen: Artboard14,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const restorePassword = createStackNavigator(
//     {
//         restorePassword: {
//             screen: Artboard17,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const changePassword = createStackNavigator(
//     {
//         changePassword: {
//             screen: Artboard18,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );
//
// const call = createStackNavigator(
//     {
//         call: {
//             screen: Artboard7,
//             navigationOptions: () => ({
//                 header: null
//             }),
//         }
//     }
// );



const RootNavigator = createDrawerNavigator({
        Login: {
            screen: Artboard1,
            navigationOptions: () => ({
                header: null
            }),
        },
        SignUp: {
            screen: Artboard2,
            navigationOptions: () => ({
                header: null
            }),
        },
    Home: {
        screen: Artboard9,
        navigationOptions: () => ({
            header: null
        }),
    },
    talbaty: {
        screen: Artboard6,
        navigationOptions: () => ({
            header: null
        }),
    },
    termsandconition: {
        screen: Artboard12,
        navigationOptions: () => ({
            header: null
        }),
    },
    changeLanguage: {
        screen: language,
        navigationOptions: () => ({
            header: null
        }),
    },
    DriverRegister: {
        screen: Artboard4,
        navigationOptions: () => ({
            header: null
        }),
    },
    Order: {
        screen: Artboard10,
        navigationOptions: () => ({
            header: null
        }),
    },
    AcceptOrder: {
        screen: Artboard8,
        navigationOptions: () => ({
            header: null
        }),
    },
    AllOrder: {
        screen: Artboard5,
        navigationOptions: () => ({
            header: null
        }),
    },
    driverOrders: {
        screen: Artboard16,
        navigationOptions: () => ({
            header: null
        }),
    },
    driverOrders2: {
        screen: Artboard16,
        navigationOptions: () => ({
            header: null
        }),
    },
    driverAccept: {
        screen: Artboard6,
        navigationOptions: () => ({
            header: null
        }),
    },
    contactus: {
        screen: Artboard13,
        navigationOptions: () => ({
            header: null
        }),
    },
    charge: {
        screen: Artboard14,
        navigationOptions: () => ({
            header: null
        }),
    },
    restorePassword: {
        screen: Artboard17,
        navigationOptions: () => ({
            header: null
        }),
    },
    changePassword: {
        screen: Artboard18,
        navigationOptions: () => ({
            header: null
        }),
    },
    call: {
        screen: Artboard7,
        navigationOptions: () => ({
            header: null
        }),
    },
    Successfull: {
        screen: Artboard8,
        navigationOptions: () => ({
            header: null
        }),
    }



    },
    {
        showsVerticalScrollIndicator: true,
        contentComponent:props => <ContentDrawerComponent {...props}/> ,
        drawerPosition: !I18nManager.isRTL? 'right':'left',
        drawerWidth:wp('65%'),
    }
);

const LoginScreenNav = createStackNavigator(
    {
        RootNavigator:{
            screen:RootNavigator,
            navigationOptions: () => ({
                header: null
            }),
        },
        Login: {
            screen: Artboard1,
            navigationOptions: () => ({
                header: null
            }),
        },
        SignUp: {
            screen: Artboard2,
            navigationOptions: () => ({
                header: null
            }),
        }}
);

export default createNavigationContainer(LoginScreenNav);