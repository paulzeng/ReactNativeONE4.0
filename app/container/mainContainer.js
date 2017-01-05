import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomePage from './homePage';
import ReadingPage from './readingPage';
import MusicPage from './musicPage';
import MoviePage from './moviePage';
import TabBar from '../component/tabBar';

//tabbar图片资源
const tabBarResources = [
    [require('../image/home.png'), require('../image/home_active.png')],
    [require('../image/reading.png'), require('../image/reading_active.png')],
    [require('../image/music.png'), require('../image/music_active.png')],
    [require('../image/movie.png'), require('../image/movie_active.png')]
];


class MainContainer extends React.Component {
    render() {
        return (
            <ScrollableTabView
                tabBarPosition="bottom"
                locked={true}
                scrollWithoutAnimation={true}
                renderTabBar={() => {
                    return <TabBar tabBarResources={tabBarResources}/>
                }}>
                <HomePage/>
                <ReadingPage/>
                <MusicPage/>
                <MoviePage/>
            </ScrollableTabView>
        );
    }
}

export default MainContainer;

