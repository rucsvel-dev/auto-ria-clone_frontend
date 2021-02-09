import React from "react";

import {ProfileContainer} from "../modules/profile/ProfileContainer";
import {HomeContainer} from "../modules/home/HomeContainer";
import {Routes} from "../modules/common/commonTypes";


export const logInRoutes: Array<Routes> = [
    { path: "/profile", component: <ProfileContainer/> }
];

export const commonRoutes: Array<Routes> = [
    { path: "/", component: <HomeContainer/> }
];
