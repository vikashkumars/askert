import React, { Component } from 'react';
import askert from '../img/askert.png';
import { StyleSheet, View, Text, Image } from 'react-native';
 
export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
       <Image
          source={{
            uri:
              'https://github.com/vikashkumars/askert/blob/master/src/img/askert.png?raw=true',
          }}
          style={{
            width: 180,
            height: 50,
            borderRadius: 60,
            marginLeft: 15,
          }}
        />
      </View>
    );
  }
}