import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ScrollableTabView,{ScrollableTabBar } from "react-native-scrollable-tab-view";
import Buy from "./home/Buy";
import BookingOrder from "./home/BookingOrder";
import Sell from "./home/Sell";
import Colors from "../Colors";

export default class Home extends Component{

    render(){
        return <View style={{flex:1,justifyContent: 'center',
            alignItems: 'center',}}>
            <ScrollableTabView

                style={{marginTop: 20, }}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor= {Colors.primaryColor}
                    tabBarInactiveTextColor='#333'
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                />}>
                <Buy
                    tabLabel='买入'
                />
                <BookingOrder
                    tabLabel='预约订单'
                />
                <Sell
                    tabLabel='卖出'
                />
            </ScrollableTabView>
        </View>
    }
}

const styles = StyleSheet.create({
    tabBarUnderline: {
        backgroundColor: Colors.primaryColor,
        height: 2,
    }
})