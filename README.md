# react-navigation-easy-helper
由于Navigator被官方移除，官方推荐的路由是react-navigation。但使用起来还是有些复杂。本组件旨在不更改源码情况下，简单配置即可实现一些复杂的功能。如在任意位置进行跳转、根据路由名字返回指定页面、简化参数的获取、快速点击的拦截、统一页面跳转的拦截、页面是否Focus的回调等。

- 安装:`npm install react-navigation-easy-helper --save` or `yarn add react-navigation-easy-helper`
- 使用: 

    ```
    import {configRoute,addToRouteStack,configRoute} from 'react-navigation-easy-helper'
    
    //首先需要在之前的导航配置文件中用configRoute包裹参数
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
    
    //在任意地方就可以这样使用
    RouteHelper.navigate('Test2Page', {params: '我是参数'})
    //返回指定页面
    RouteHelper.goBackTo('Test2Page')
    //判断是否在栈顶的方法
    this.props.isFocused()
    
       //跳转拦截器用法
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
                
                //其它具体用法见example
               
   ```
- 注意点:本组件只是简化一些react-navigation的用法，方法可能不是很完善，如遇到问题，欢迎提issues,如果觉得不错，欢迎star。
  