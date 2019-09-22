import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.logo} source={{uri: 'http://ec2-13-233-157-98.ap-south-1.compute.amazonaws.com/askert/images/askert.png'}}/>
      
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="User name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/ultraviolet/50/3498db'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder= "password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>
            <Text style={styles.buttonicons}>
              <Image style={styles.buttonicons} source={{uri: 'https://png.icons8.com/login/ultraviolet/50/3498db'}}/>
            </Text>
            Login
            </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot Password</Text>
        </TouchableHighlight>
        <Text>OR</Text>
        
        
        <TouchableHighlight style={[styles.buttonContainer, styles.SignupButton]} onPress={() => this.onClickListener('Sign up')}>
        <Text style={styles.loginText}>
        <Text style={styles.buttonicons}>
        
        </Text><Image style={styles.buttonicons} source={{uri: 'https://png.icons8.com/signin/ultraviolet/50/3498db'}}/>
        Sign up
        </Text>
        </TouchableHighlight>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
      borderColor: 'black',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:10,
    justifyContent: 'center'
  },
  buttonicons:{
    width:10,
    height:10,  
    justifyContent:'center',
    marginRight:5,
   
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:10,
  },
  loginButton: {
    backgroundColor: "#FFD500",
  },
  SignupButton: {
    backgroundColor: "#FFD500",
    marginTop:20,
  },
  loginText: {
    color: 'black',
    marginLeft:-20,
  },
  logo:{
    width:105,
    height:100,
    marginBottom:40,
    marginTop:-20,
  }
  
});
 