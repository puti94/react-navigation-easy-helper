/**
 * User: puti.
 * Time: 2018/2/7 下午8:22.
 * GitHub:https://github.com/puti94
 * Email:guoquanxie@foxmail.com
 */


import React, {Component} from 'react';
import {Button, View} from 'react-native'

import {RouteHelper} from '../utils'


export default class Test4Page extends Component {

    static  navigationOptions = ({navigation}) => ({
        title: 'Test4Page',
    });


    render() {
        return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Button title={'返回第2页 goBackTo("Test2Page")'} onPress={() => {
                RouteHelper.goBackTo('Test2Page')
            }}/>
            <Button title={'返回前两页 pop(2)'} onPress={() => {
                RouteHelper.pop(2)
            }}/>
            <Button title={'返回首页 popToTop()'} onPress={() => {
                RouteHelper.popToTop()
            }}/>

        </View>);
    }

}
