import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView
} from 'react-native';
import NavigationBar from '../component/navigationBar';
import commonStyle from '../style/commonStyle';
import movieData from '../data/movie.js';
import MovieItem from '../component/movie/movieItem';
const styles = StyleSheet.create({
    separatorLine: {
        height: 5,
        backgroundColor: commonStyle.LINE_GRAY_COLOR,
    }
});

class MoviePage extends Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
        this.renderSeparator = this.renderSeparator.bind(this);
        this.renderListViewItem = this.renderListViewItem.bind(this);
        this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
    }
    componentDidMount(){
        //console.warn("数据=="+JSON.stringify(readingData.data));
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(movieData.data)
        });
    }
    getNavigationBarProps() {
        return {
            title:'一个影视',
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
        return(<MovieItem data={rowData} />);
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={rowID} style={styles.separatorLine}/>
        );
    }
}

export default MoviePage;