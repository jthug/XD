import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Mall extends Component{

    render(){
        return <View style={{flex:1,justifyContent: 'center',
            alignItems: 'center',}}>
            <Text>商城</Text>
        </View>
    }
}