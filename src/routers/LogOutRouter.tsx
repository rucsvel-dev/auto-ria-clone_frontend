import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {commonRoutes} from "./allRoutes";

export const LogOutRouter: React.FC<{}> = () =>{
    return (
        <Switch>
            {commonRoutes.map(({path, component}) => (
                <Route exact path={path}>component</Route>
            )}
        </Switch>
    )
}
