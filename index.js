import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './app/containers/home';

AppRegistry.registerComponent(appName, () => Home);
