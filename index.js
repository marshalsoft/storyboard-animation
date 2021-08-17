import React from 'react';
import {AppRegistry,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);