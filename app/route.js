import {Actions, Scene} from 'react-native-router-flux';
import MainContainer from './container/mainContainer';
import ReadingDetail from './component/reading/readingDetail';
import React, {Component} from "react";

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="main"
               component={MainContainer}
               hideNavBar={true}
               initial={true}
        />
        <Scene key="readingDetail"
               component={ReadingDetail}
               hideNavBar={true}
        />
    </Scene>
);

export default scenes;