
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/components/account/Login';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Login/>
    );
  }
}


