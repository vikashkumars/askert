import React, { Component } from 'react';
import { Container,Content,Textarea,Form, Header,Left, Icon, Button, Text,View,FooterTab,Footer } from 'native-base';


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
         

          <View style={{backgroundColor:'white'}}>
            <Text style={{marginLeft:20,marginTop:10,fontWeight:'bold',color:'black'}}>Title</Text>
          </View>
          <Content padder>
            <Form>
                <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </Form>
        </Content>

          <View style={{backgroundColor:'white'}}>
            <Text style={{marginLeft:20,marginTop:10,fontWeight:'bold',color:'black'}}>Description</Text>
          </View>
          <Content padder>
            <Form>
                <Textarea rowSpan={10} bordered placeholder="Textarea" />
            </Form>
        </Content>

          <View style={{backgroundColor:'white'}}>
            <Text style={{marginLeft:20,marginTop:10,fontWeight:'bold',color:'black'}}>Budget   $100</Text>
          </View>


        
     </Content>

       
        <Footer>
          <FooterTab style={{backgroundColor:'#ff9900'}}>
            
            <Button>
              <Text style={{color:'black',fontSize:17,fontWeight:'900' }}>Post</Text>
            </Button>
            
          </FooterTab>
        </Footer>


      </Container>
     
      
      );
    }
  }

 