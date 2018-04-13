/**
 * User: puti.
 * Time: 2018/2/7 下午8:22.
 * GitHub:https://github.com/puti94
 * Email:guoquanxie@foxmail.com
 */


import React, {Component} from 'react';
import {Button, View} from 'react-native'

import {RouteHelper} from '../utils'


export default class LaunchPage extends Component {

    static  navigationOptions = ({navigation}) => ({
        title: '路由示例',
    });


    componentDidMount() {

        this.countTime = setInterval(() => {
            console.log('LaunchPage', this.props.navigation.isFocused())
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.countTime)
    }

    render() {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Button title={'跳转页面 navigate("Test2Page",params)'} onPress={() => {
                RouteHelper.navigate('Test2Page', {params: '我是参数'})
            }}/>
            <Button title={'跳转页面 push("Test2Page",params)'} onPress={() => {
                RouteHelper.push('Test2Page', {params: '我是参数'})
            }}/>

            <Button title={'重置到Tab页面'} onPress={() => {
                RouteHelper.reset('Tab')
            }}/>

            <Button title={'模拟快速点击'} onPress={() => {
                RouteHelper.push('Test2Page', {params: '我是参数'})
                setTimeout(() => {
                    RouteHelper.push('Test2Page', {params: '我是参数'})
                }, 100)
            }}/>

            <Button title={'拦截器的用法'} onPress={() => {
                let needLoginPage = ['Test3Page'];
                let noLogin = true;
                RouteHelper.routeInterceptor = (routeName, params) => {
                    if (noLogin && needLoginPage.indexOf(routeName) !== -1) {
                        // RouteHelper.navigate('LoginPage', {
                        //     routeName,
                        //     params
                        // });
                        RouteHelper.push('LoginPage', {
                            successCallBack: () => {
                                noLogin = false;
                                RouteHelper.push(routeName, params)
                            }
                        });
                        return false;
                    }
                    return true
                };
                RouteHelper.navigate('Test3Page', {params: '我是参数'})
            }}/>


        </View>);
    }

}
