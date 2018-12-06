import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Colors from "../../Colors";


export default class Buy extends Component{

    render(){
        return <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Colors.primaryColor}}>
            <Text>买入</Text>
        </View>
    }

}