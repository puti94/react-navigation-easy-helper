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
// import {RouteHelper} from "../utils";
import {RouteHelper} from "react-navigation-easy-helper";


export default class Tab1Page extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Tab1',
    });

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.countTime = setInterval(() => {
            console.log('Tab1', this.props.navigation.isFocused())
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.countTime)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab1页面</Text>

                <Button onPress={() => {
                    RouteHelper.navigate('Test2Page')
                }} title={'Test2Page'}/>
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
