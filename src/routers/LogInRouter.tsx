import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {commonRoutes, logInRoutes} from "./allRoutes";

export const LogInRouter: React.FC<{}> = () =>{
    return (
        <Switch>
            {logInRoutes.map(({path, component}) => (
                <Route exact path={path}>component</Route>
            )}
            {commonRoutes.map(({path, component}) => (
                <Route exact path={path}>component</Route>
            )}
        </Switch>
    )
}

