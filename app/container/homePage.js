import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView
} from 'react-native';
import NavigationBar from '../component/navigationBar';
import commonStyle from '../style/commonStyle';
import PictrueItem from '../component/picture/pictureItem';
import ReadingItem from '../component/reading/readingItem';
import MusicItem from '../component/music/musicItem';
import MovieItem from '../component/movie/movieItem';
import homeData from '../data/home.js';

const styles = StyleSheet.create({
    separatorLine: {
        height: 5,
        backgroundColor: commonStyle.LINE_GRAY_COLOR,
    }
});
class HomePage extends Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
        this.renderListViewItem = this.renderListViewItem.bind(this);
        this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
        this.onRightPressed = this.onRightPressed.bind(this);
    }

    componentDidMount(){
        //console.warn('首页数据=='+JSON.stringify(homeData.data.content_list));
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(homeData.data.content_list)
        });
    }

    getNavigationBarProps() {
        return {
            title:'首页',
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderListViewItem}
                    renderSeparator={this.renderSeparator}
                />
            </View>
        );
    }

    renderListViewItem(rowData){
        switch (rowData.category) {
            case '0' :
                return(<PictrueItem data={rowData} />);
                break;
            case '1' :
                return(<ReadingItem data={rowData} />);
                break;
            case '2' :
                return(<ReadingItem data={rowData} />);
                break;
            case '4' :
                return(<MusicItem data={rowData} />);
                break;
            case '5' :
                return(<MovieItem data={rowData} />);
                break;
            default :
                return null;
                break;
        }
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={rowID} style={styles.separatorLine}/>
        );
    }
}

export default HomePage;