/**
 * User: puti.
 * Time: 2018/2/7 下午8:22.
 * GitHub:https://github.com/puti94
 * Email:guoquanxie@foxmail.com
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import {RouteHelper} from "react-navigation-easy-helper";


export default class Tab2Page extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Tab2',
    });

    componentDidMount() {
        this.countTime = setInterval(() => {
            console.log('Tab2', this.props.navigation.isFocused())
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.countTime)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab2页面</Text>

                <Button onPress={() => {
                    this.props.navigation.navigate('tab1')
                }} title={'navigate(\'tab1\')'}/>


                <Button onPress={() => {
                    this.props.navigation.navigate('Test4Page')
                }} title={'navigate(\'Test4Page\')'}/>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
