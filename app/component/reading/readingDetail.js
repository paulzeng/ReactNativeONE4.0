/**
 * Created by Administrator on 2017/1/11.
 */
import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    WebView
} from 'react-native';
import NavigationBar from '../../component/navigationBar';
import commonStyle from '../../style/commonStyle';
import readingDetailData from '../../data/readingDetail';
import ReactHtml from 'react-native-html';
const windowWidth = Dimensions.get('window').width;
const regExp = new RegExp('<[a-zA-Z0-9_/]+>|\r\n|\n', 'g');
const replaceHTMLTag = text => {
    if (text == '<br>') {
        return '\n';
    }
    return '';

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        color: commonStyle.TEXT_COLOR,
        marginTop: 10
    },
    driver: {
        backgroundColor: commonStyle.TEXT_COLOR,
        height: 2,
        width: 100,
        marginVertical: 20
    },
    author: {
        fontSize: 16,
        color: commonStyle.TEXT_COLOR
    },
    content: {
        fontSize: 15,
        color: commonStyle.TEXT_GRAY_COLOR,
        letterSpacing:5,
        lineHeight:25,
        marginBottom:20
    },
});
class ReadingDetail extends Component {
    constructor(props) {
        super(props);
        this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
        //console.warn(readingDetailData.data.hp_content.replace(regExp, replaceHTMLTag));
    }

    getNavigationBarProps() {
        return {
            title: '一个阅读',
        };
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <NavigationBar
                    navigationBarProps={this.getNavigationBarProps()}
                />
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>{readingDetailData.data.hp_title}</Text>
                    <View style={styles.driver}/>
                    <Text
                        style={styles.author}>文/{readingDetailData.data.author_list ? readingDetailData.data.author_list[0].user_name : "" }</Text>

                    <ReactHtml style={styles.content}>
                        {readingDetailData.data.hp_content}
                    </ReactHtml>
                </ScrollView>
            </View>

        );
    }
}
// <Text style={styles.content}>{readingDetailData.data.hp_content.replace(regExp, replaceHTMLTag)}</Text>
//<HTMLView style={styles.content} value={readingDetailData.data.hp_content.replace(regExp, replaceHTMLTag)} stylesheet={styles}/>
export default ReadingDetail;