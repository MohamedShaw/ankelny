import { Navigation } from 'react-native-navigation';
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


/**
 * register all screens of the app (including internal ones)
 * @param store
 * @param provider
 */
export function registerScreens(store, provider) {
    Navigation.registerComponent('tnb.Artboard1', () => Artboard1, store, provider);



}

