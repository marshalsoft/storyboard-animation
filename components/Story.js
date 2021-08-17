// @flow
import * as React from 'react';
import {
  StyleSheet, View, Image, SafeAreaView, TextInput, Platform, TouchableOpacity,
} from 'react-native';

import Icon from './icons';

import Avatar from './Avatar';



export default class extends React.PureComponent{
  render(){
    const { story: { source, user, avatar } } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.image} {...{ source }} />
        </View>
        <View style={{backgroundColor:"white",height:50}}>
        </View>
        <View style={{width:"100%",position:"absolute",bottom:30,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
        <TouchableOpacity
        style={{width:50,height:50,borderRadius:50,justifyContent:"center",alignItems:"center",backgroundColor:"white",elevation:3,marginHorizontal:10}}
        >
        <Icon.AntDesign name="close" color="red" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
        style={{width:50,height:50,borderRadius:50,justifyContent:"center",alignItems:"center",backgroundColor:"white",elevation:3,marginHorizontal:10}}
        >
          <Icon.AntDesign name="back" color="red" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
        style={{width:50,height:50,borderRadius:50,justifyContent:"center",alignItems:"center",backgroundColor:"white",elevation:3,marginHorizontal:10}}
        >
        <Icon.AntDesign name="heart" color="red" size={20} />
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    height: 28,
    width: 250,
    borderRadius: Platform.OS === 'android' ? 0 : 10,
  },
});
