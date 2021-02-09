import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import {useReactiveVar} from "@apollo/client";
import {isLoggedInVar} from "../apollo";
import {LogInRouter} from "../routers/LogInRouter";
import {LogOutRouter} from "../routers/LogOutRouter";

export const AppContainer: React.FC<{}> = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    return isLoggedIn ? <LogInRouter/> : <LogOutRouter/>;
}

