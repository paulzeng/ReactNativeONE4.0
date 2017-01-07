import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import NavigationBar from '../component/navigationBar';
import commonStyle from '../style/commonStyle';
class MusicPage extends Component {
    getNavigationBarProps() {
        return {
            title:'一个音乐',
            rightButtonImage: require('../image/search.png')
        };
    }

    onRightPressed(){

    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <NavigationBar
                    navigationBarProps={this.getNavigationBarProps()}
                    onRightPressed={this.onRightPressed}
                />

            </View>
        );
    }
}

export default MusicPage;