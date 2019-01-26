import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
export default class Drawer extends React.Component {


    render(){
        return(
            <View style={styles.drawer}>
            <Icon ios='ios-menu' android="md-menu" style={{color: '#fff'}} onPress={() => this.goDrawer()}/>
        </View>
        );
    }

    goDrawer(){
        this.props.navigation.toggleDrawer();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 22

    },

    drawer: {
        padding: 15,
    },

    logo: {
        width: 155,
        height: 35,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 1
    },

})
