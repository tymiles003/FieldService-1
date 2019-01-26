import React,{Component} from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import { View, Text, StyleSheet } from 'react-native'

export default class Home extends Component {
    static navigationOptions = { header: null };

    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Home
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,    
      backgroundColor: '#2c3e50'
        },
    
  });