/**
 * User: puti.
 * Time: 2018/2/10 下午3:49.
 * GitHub:https://github.com/puti94
 * Email:1059592160@qq.com
 */


import React, {Component} from 'react'
import {RouteHelper} from './RouteHelper'
import hoistNonReactStatics from 'hoist-non-react-statics'

export const addToRouteStack = (OldComponent) => {
    class NewComponent extends Component {
        static displayName = `addToRouteStack(${OldComponent.displayName ||
        OldComponent.name})`;

        isFocus = false;

        componentDidMount() {
            RouteHelper.addStack(this.props.navigation);
            this.subscriptions = [
                this.props.navigation.addListener('didFocus', () => {
                    this.isFocus = true;
                }), this.props.navigation.addListener('willBlur', () => {
                    this.isFocus = false;
                })]
        }

        componentWillUnmount() {
            RouteHelper.remove(this.props.navigation);
            this.subscriptions.forEach(sub => sub.remove());
        }

        render() {
            return <OldComponent
                {...this.props}
                {...this.props.navigation.state.params}
                isFocused={() => this.isFocus}
            />
        }
    }

    return hoistNonReactStatics(NewComponent, OldComponent)
};

export function configRoute(routeConfig) {
    for (let name in routeConfig) {
        let Component = routeConfig[name].screen;
        routeConfig[name].screen = addToRouteStack(Component)
    }
    return routeConfig
}