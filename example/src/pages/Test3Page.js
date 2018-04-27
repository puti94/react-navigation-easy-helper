/**
 * User: puti.
 * Time: 2018/2/7 下午8:22.
 * GitHub:https://github.com/puti94
 * Email:guoquanxie@foxmail.com
 */


import React, {Component} from 'react';
import {Button, View} from 'react-native'

import {RouteHelper} from 'react-navigation-easy-helper'
// import {RouteHelper} from '../utils'


export default class Test3Page extends Component {

    static  navigationOptions = ({navigation}) => ({
        title: 'Test3Page',
    });


    render() {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Button title={'跳转页面 navigate(Test4Page)'} onPress={() => {
                RouteHelper.navigate('Test4Page')
            }}/>

        </View>);
    }

}
