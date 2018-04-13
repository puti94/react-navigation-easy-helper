/**
 * User: puti.
 * Time: 2018/2/7 下午8:22.
 * GitHub:https://github.com/puti94
 * Email:guoquanxie@foxmail.com
 */


import React, {Component} from 'react';
import {Button, View, Text} from 'react-native'

import {RouteHelper} from '../utils'


export default class Test2Page extends Component {

    static  navigationOptions = ({navigation}) => ({
        title: 'Test2Page',
    });

    componentDidMount() {

        this.countTime = setInterval(() => {
            console.log('Test2Page', this.props.navigation.isFocused())
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.countTime)
    }


    render() {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Text>{this.props.params}</Text>
            <Button title={'跳转页面 navigate(Test3Page)'} onPress={() => {
                RouteHelper.navigate('Test3Page')
            }}/>
            <Button title={'返回上一页 goBack()'} onPress={() => {
                console.log(RouteHelper.navigation);
                RouteHelper.goBack()
            }}/>
            <Button title={'返回上一页 pop()'} onPress={() => {
                RouteHelper.pop();
            }}/>
            <Button title={'重置路由 reset(routeName)'} onPress={() => {
                RouteHelper.reset('Test3Page')
            }}/>

        </View>);
    }

}
