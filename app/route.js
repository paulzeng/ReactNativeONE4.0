import {Actions, Scene} from 'react-native-router-flux';
import MainContainer from './container/mainContainer';
import React, {Component} from "react";

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="main"
               component={MainContainer}
               hideNavBar={true}
               initial={true}
        />
    </Scene>
);

export default scenes;