import React,{Component} from 'react';
import {View,StyleSheet,Image,Text,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import commonStyle from '../../style/commonStyle';
const tabHeight = commonStyle.TITLE_HEIHT;
const styles = StyleSheet.create({
    container: {
        flex:1,
        width: windowWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    category: {
        textAlign : 'center',
        fontSize: commonStyle.SECONDARY_FONT_SIZE,
        paddingTop:5,
        color: commonStyle.TEXT_GRAY_COLOR
    },
    title: {
        fontSize:30,
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
        fontSize:18,
        color: commonStyle.TEXT_COLOR
    },
    content: {
        fontSize:15,
        color: commonStyle.TEXT_GRAY_COLOR,
        marginVertical:20
    },
    pic: {
        height: 200,
        resizeMode: 'cover',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    shareImage: {
        height: 20,
        width: 20,

    },
    priceImage: {
        height: 20,
        width: 20,
        marginRight:20
    },
    bottomView: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'flex-end',
        justifyContent:'flex-end'
    }
});

class ReadingItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let { data } = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.category}>-阅读-</Text>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.driver}/>
                <Text style={styles.author}>文/{data.author ? data.author.user_name : "" }</Text>
                <Text style={styles.content}>{data.forward}</Text>
                <Image
                    source = {{uri: data.img_url}}
                    style={styles.pic}
                />
                <View style={styles.bottomView}>
                    <Image
                        style={styles.priceImage}
                        source={require('../../image/bubble_like.png')}
                    />
                    <Image
                        style={styles.shareImage}
                        source={require('../../image/bubble_share.png')}
                    />
                </View>
            </View>
        );
    }
}
export default ReadingItem;