import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Account extends Component{

    render(){
        return <View style={{flex:1,justifyContent: 'center',
            alignItems: 'center',}}>
            <Text>我的账户</Text>
        </View>
    }
}