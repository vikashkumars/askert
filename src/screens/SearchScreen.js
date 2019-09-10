import React,{useState,Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from '../component/SearchBar';
import ActionBarImage from '../screens/ActionBarImage';
const SearchScreen=()=>{
    
    
    return(
     <View>
         <SearchBar />
         <Text>Search Screen</Text>
     </View>
 );


};
const styles = StyleSheet.create({

});

export default SearchScreen;