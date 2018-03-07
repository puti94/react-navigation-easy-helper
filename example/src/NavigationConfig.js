/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import {StackNavigator} from 'react-navigation'
import Test2Page from './pages/Test2Page'
import Test3Page from './pages/Test3Page'
import Test4Page from './pages/Test4Page'
import LoginPage from './pages/LoginPage'

import LaunchPage from './pages/LaunchPage'
import {configRoute} from 'react-navigation-easy-helper'

export const AppNavigator = StackNavigator(
    configRoute({
        LaunchPage: {screen: LaunchPage},
        Test2Page: {screen: Test2Page},
        Test3Page: {screen: Test3Page},
        Test4Page: {screen: Test4Page},
        LoginPage: {screen: LoginPage},
    }), {
        initialRouteName: 'LaunchPage'
    }
);

