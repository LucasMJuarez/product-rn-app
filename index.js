/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { ProductScreen } from './src/presentation/screens/product/ProductScreen';

AppRegistry.registerComponent(appName, () => ProductScreen );
