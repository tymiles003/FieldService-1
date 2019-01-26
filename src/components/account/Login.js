import React,{Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import {StyleSheet, Image} from 'react-native'

export default class Home extends Component{
  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Image style={styles.logo} source={require('../../../assets/logo03.png')}/>
        </Content>
        <Content>
          <Form style={styles.form}>
            <Item regular style={styles.item}>
              <Label style={styles.label}>Login:</Label>
              <Input style={styles.input} />
            </Item>
            <Item regular style={styles.item}>
              <Label style={styles.label}>Senha:</Label>
              <Input style={styles.input} />
            </Item>
          </Form>
          <Button style={styles.button}>
              <Text style={{color: 'white', justifyContent: 'center'}}>Acessar</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 4,    
      backgroundColor: '#2c3e50'
        },
    form: {
      flex: 3,    
      alignItems: 'center',
    },
    item: {
      backgroundColor: 'rgba(225,225,225,0.2)',
      width: 320,
      marginBottom: 10

    },
    label: {
      color: 'rgba(225,225,225,0.7)',
      paddingLeft: 5,
    },
    input: {
      color: 'white'
    },

    button: {
      marginTop:5, 
      backgroundColor: '#2980b6', 
      alignSelf: 'center',
      width: 320,
      justifyContent: 'center'
    },
    logo: {
      alignSelf: 'center',      
      marginTop: 50
  },
  Content: {
    flex: 1,
  }
  });