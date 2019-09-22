import React, { Component } from 'react';
import { Container,Content, Header,Left, Item, Input, Icon, Button, Text,View,FooterTab,Footer } from 'native-base';
import {StyleSheet,SectionList} from 'react-native';

export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Content style={{backgroundColor:'white'}}>
        <Header style={{backgroundColor:'#ff9900'}}>
                    <Left style={{marginRight:300}}>
                        <Icon style={{color:'black',width:50,height:50}} name='ios-arrow-back' />
                    </Left>
                   
                    
                </Header>
               <Header style={{width:300,marginLeft:40,marginBottom:20,backgroundColor:'white'}} searchBar rounded>
          <Item style={{width:300,backgroundColor:'silver'}} >
            <Icon  name="ios-search"/>
            <Input placeholder="Search" />
          </Item>
          </Header>

          <View style={{backgroundColor:'white'}}>
            <Text style={{marginLeft:20,marginTop:10,fontWeight:'bold',color:'black'}}>Browse Subcategories</Text>
          </View>

        <Container style={{height:500}}>
         <View style={style.ButtonView}>
          <Button style={style.ButtonFirst} iconLeft>
            <Icon  style={{color:'black'}} name='home' />
           </Button>

          <Button style={style.Button2} iconLeft transparent primary>
            <Icon style={{color:'black'}} name='beer' />
           
          </Button>
          <Button style={style.Button3} iconLeft dark>
            <Icon style={{color:'black'}} name='cog' />
          
          </Button>
          <Button style={style.Button4} iconLeft>
            <Icon style={{color:'black'}} name='home' />
          </Button> 
        </View>

          <View style={style.ButtonView}>
          <Button style={style.Button5} iconLeft>
            <Icon style={{color:'black'}} name='home' />
           
          </Button>
          <Button style={style.Button6} iconLeft transparent primary>
            <Icon style={{color:'black'}} name='beer' />
           
          </Button>
          <Button style={style.Button7} iconLeft dark>
            <Icon style={{color:'black'}} name='cog' />
          
          </Button>
          <Button style={style.Button8} iconLeft>
            <Icon style={{color:'black'}} name='home' />
            </Button>
          </View>

          <View style={style.ButtonView}>
          <Button style={style.Button9} iconLeft>
            <Icon style={{color:'black'}} name='home' />
           
          </Button>
          <Button style={style.Button10} iconLeft transparent primary>
            <Icon style={{color:'black'}} name='beer' />
           
          </Button>
          <Button style={style.Button11} iconLeft dark>
            <Icon style={{color:'black'}} name='cog' />
          
          </Button>
          <Button style={style.Button12} iconLeft>
            <Icon style={{color:'black'}} name='home' />
            </Button>
          </View>

          <View style={style.ButtonView}>
          <Button style={style.Button13} iconLeft>
            <Icon style={{color:'black'}} name='home' />
           
          </Button>
          <Button style={style.Button14} iconLeft transparent primary>
            <Icon style={{color:'black'}} name='beer' />
           
          </Button>
          <Button style={style.Button15} iconLeft dark>
            <Icon style={{color:'black'}} name='cog' />
          
          </Button>
          <Button style={style.Button16} iconLeft>
            <Icon style={{color:'black'}} name='home' />
            </Button>
          </View>
          </Container>

        <View style={{backgroundColor:'#ff9900',marginTop:10}}>
        <View style={{marginLeft:30,marginTop:10}}>   
        <Text>Al-Waleed Bin Talal    <Text style={{fontWeight:'100',fontSize:15,}}>Rating-5</Text></Text>
        <Text style={{marginTop:30}}>Al-Juffali             <Text style={{fontWeight:'100',fontSize:15}}>Rating-4</Text></Text>
        <Text style={{marginTop:30}}>Al-Rajhi               <Text style={{fontWeight:'100',fontSize:15}}>Rating-4</Text></Text>
        <Text style={{marginTop:30}}>Sulaiman Olayan        <Text style={{fontWeight:'100',fontSize:15}}>Rating-5</Text></Text>
        <Text style={{marginTop:30}}>Mohammed Hussein Al Amoudi<Text style={{fontWeight:'100',fontSize:15}}>Rating-5</Text></Text>
        <Text style={{marginTop:30}}>Maan Al Sanea            <Text style={{fontWeight:'100',fontSize:15}}>Rating-5</Text></Text>
        <Text style={{marginTop:30}}>siraj khan               <Text style={{fontWeight:'100',fontSize:15}}>Rating-5</Text></Text>
        <Text style={{marginTop:30}}>Saleh Kamel              <Text style={{fontWeight:'100',fontSize:15}}>Rating-5</Text></Text>
        <Text style={{marginTop:30}}>Sulaiman Algosaibi        <Text style={{fontWeight:'100',fontSize:15}}>Rating-5</Text></Text>
        <Text style={{marginTop:30}}>Khalid Bin Mahfouz        <Text style={{fontWeight:'100',fontSize:15}}>Rating-5</Text></Text>
        <Text style={{marginTop:30}}>Abdul-Latif Jameel         <Text style={{fontWeight:'100',fontSize:15}}>Rating-5</Text></Text>
        </View>
        </View>  
     </Content>

       
        <Footer>
          <FooterTab style={{backgroundColor:'#ff9900'}}>
            <Button>
              <Icon style={{ fontSize: 30,color:'black' }}name="ios-notifications" />
            </Button>
            <Button>
              <Icon style={{ fontSize: 25,color:'black' }} name="ios-home"/>
            </Button>
            <Button>
              <Icon style={{ fontSize: 30,color:'black' }} name="md-person"/>
            </Button>
          </FooterTab>
        </Footer>


      </Container>
     
      
      );
    }
  }

  const style=StyleSheet.create({
    
    ButtonView:{
    flex:1,
    flexDirection:"row",
    backgroundColor:'white'
    },

    Button:{
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:40
    },

    ButtonFirst:{
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:40,
      marginTop:40,
      backgroundColor:'#66ffe0',
    },

    Button2:{
      backgroundColor:'#ffcc80',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:40
    },

    Button3:{
      backgroundColor:'#ccffff',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:40
    },

    Button4:{
      backgroundColor:'#ccff99',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:40
    },

    Button5:{
      backgroundColor:'#80ffff',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:40,
      marginTop:30
    },

    Button6:{
      backgroundColor:'#f2f2f2',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },
    Button7:{
      backgroundColor:'#b3f0ff',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },

    Button8:{
      backgroundColor:'#ffcce6',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },

    Button9:{
      backgroundColor:'#99ffbb',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:40,
      marginTop:30
    },

    Button10:{
      backgroundColor:'#ffb3b3',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },
    Button11:{
      backgroundColor:'#ffe6cc',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },

    Button12:{
      backgroundColor:'#c2f0c2',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },

    Button13:{
      backgroundColor:'#ff80bf',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:40,
      marginTop:30
    },

    Button14:{
      backgroundColor:'#ff99dd',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },
    Button15:{
      backgroundColor:'#66ff66',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },

    Button16:{
      backgroundColor:'#ffff4b',
      width:60,
      borderRadius:100,
      height:60,
      marginLeft:20,
      marginTop:30
    },

   
  });