import React,{useState,Component} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';
import SearchBar from '../component/SearchBar';
import ActionBarImage from '../screens/ActionBarImage';
const SearchScreen=({navigation})=>{
    //Button navigation starts
    return(
     <View>
         <SearchBar />
         <Text style={styles.titleText}>Browse categories</Text>
         
         <Button
            onPress={()=>navigation.navigate('Category')} 
            title="Category Screen"
         />
          <Button
            onPress={()=>navigation.navigate('SubCategory')} 
            title="SubCategory Screen"
         />
          <Button
            onPress={()=>navigation.navigate('Profile')} 
            title="Profile Screen"
         />
          <Button
            onPress={()=>navigation.navigate('AskQuestion')} 
            title="Ask Question"
         />
          <Button
            onPress={()=>navigation.navigate('Login')} 
            title="Login"
         />
     
     
     </View>
 );


};
const styles = StyleSheet.create({
 titleText:{
     fontSize:18,
     fontWeight: 'bold'
 }
});

export default SearchScreen;