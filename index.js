/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import { Contador } from './app/contador/Contador';

AppRegistry.registerComponent(appName, () => Contador);
