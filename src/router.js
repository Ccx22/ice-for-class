import React, { PureComponent } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Control from './modules/control'
import Login from './modules/login'
export class router extends PureComponent {
    constructor(props) {
        super(props)
        this.routes = [
            {
                path: '/control',
                component: Control,
                exact: false
            },
            {
                path: '/login',
                component: Login,
                exact: true
            }
        ]
    }
    render() {
        return (
            <Switch>
                {this.routes.map((route) => (
                    <Route {...route} key={route.path} />
                ))}
                <Redirect to='/login' />
            </Switch>
        )
    }
}

export default router