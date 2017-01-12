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
const windowWidth = Dimensions.get('window').width;
const regExp = new RegExp('<[a-zA-Z0-9_/]+>|\r\n|\n', 'g');
const reg = /<IMG src=\"([^\"]*?)\">/gi;
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
        letterSpacing: 5,
        lineHeight: 25,
        marginBottom: 10
    },
    image: {
        marginBottom: 10,
        height:200,
        resizeMode:'contain',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    }
});
class ReadingDetail extends Component {
    constructor(props) {
        super(props);
        this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
        //console.warn(readingDetailData.data.hp_content.replace(regExp, replaceHTMLTag));
        //let contents = readingDetailData.data.hp_content.replace(regExp, replaceHTMLTag);
        //let str = contents.split(/\n/);
        //console.warn(str[3]);
    }

    getNavigationBarProps() {
        return {
            title: '一个阅读',
        };
    }

    render() {
        let contents = readingDetailData.data.hp_content.replace(regExp, replaceHTMLTag).split(/\n/);
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
                    {contents.map(this.renderElement)}
                </ScrollView>
            </View>

        );
    }

    renderElement(p, key) {
        //console.warn("p=="+p);


        if (p.includes('<img')) {
            p.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                p = capture;
            });
            return  <Image key={key} style={styles.image} source={{uri: p}}></Image>;
        } else {
            return (
                <Text key={key} style={styles.content}>
                    {p}
                </Text>
            )
        }


    }


}
// <Text style={styles.content}>{readingDetailData.data.hp_content.replace(regExp, replaceHTMLTag)}</Text>
//<HTMLView style={styles.content} value={readingDetailData.data.hp_content.replace(regExp, replaceHTMLTag)} stylesheet={styles}/>
export default ReadingDetail;