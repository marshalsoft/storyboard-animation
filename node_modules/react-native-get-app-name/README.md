# react-native-get-app-name
Super lightweight library with few to none peer dependencies to get the app name thorugh native calls.
<br>
## Getting started

`$ npm install react-native-get-app-name --save`

### Mostly automatic installation
If you are under RN .60 run below command - otherwise skip this.<br>
`$ react-native link react-native-get-app-name`

## Usage
```javascript
import GetAppName from 'react-native-get-app-name';

GetAppName.getAppName((appName) => {
   console.log("Here is your app name:", appName)      
})
```
