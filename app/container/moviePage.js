import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import commonStyle from '../style/commonStyle';
class MoviePage extends Component {
    render() {
        const titleConfig = {
            title: '电影',
        };
        return (
            <View style={{ flex: 1, }}>
                <NavigationBar
                    title={titleConfig}
                    style={commonStyle.titleBar}
                />

            </View>
        );
    }
}

export default MoviePage;