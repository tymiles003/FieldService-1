
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/components/account/Login';
import AppContainerNavigator from './src/components/navigator/AppContainerNavigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <AppContainerNavigator/>
    );
  }
}


