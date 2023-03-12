/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { services } from './src/services';

services.Notification();
AppRegistry.registerComponent(appName, () => App);
