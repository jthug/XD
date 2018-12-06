/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Home from "./app/screen/Home";
import Mall from "./app/screen/Mall";
import Accumulate from "./app/screen/Accumulate";
import Team from "./app/screen/Team";
import Account from "./app/screen/Account";
import Colors from "./app/Colors";

const MyApp = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "首页",
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/home.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        Mall: {
            screen: Mall,
            navigationOptions: {
                tabBarLabel: "商城",
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/mall.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        Accumulate: {
            screen: Accumulate,
            navigationOptions: {
                tabBarLabel: "积分",
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/Accumulate.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        Team: {
            screen: Team,
            navigationOptions: {
                tabBarLabel: "团队",
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/team.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarLabel: "账户",
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/account.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
    },
    {
        //设置TabNavigator的位置
        tabBarPosition: 'bottom',
        //是否在更改标签时显示动画
        animationEnabled: true,
        //是否允许在标签之间进行滑动
        swipeEnabled: true,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //设置Tab标签的属性

        tabBarOptions: {
            //Android属性
            upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: Colors.primaryColor,//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
            style: { //TabNavigator 的背景颜色
                backgroundColor: 'white',
                height: 55,
            },
            indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
                height: 0,
            },
            labelStyle: {//文字的样式
                fontSize: 13,
                marginTop: -5,
                marginBottom: 5,
            },
            iconStyle: {//图标的样式
                marginBottom: 5,
            }
        },


    }
)


const Stack = createStackNavigator(
    {
        Main:{
            screen:MyApp,
            navigationOptions:{
                header:null
            }
        },
    },
)

export const appcontainer = createAppContainer(Stack)

