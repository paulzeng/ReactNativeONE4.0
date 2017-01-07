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
        height: windowHeight - tabHeight * 2 - 38,//假设状态栏的高度是28
        paddingHorizontal: 40,
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
        marginVertical:20
    },
    pic: {
        height: 200,
        resizeMode: 'cover',
        marginVertical:100
    },
    author: {
        fontSize:15,
        color: commonStyle.TEXT_GRAY_COLOR
    },
    content: {
        fontSize:15,
        color: commonStyle.TEXT_GRAY_COLOR,
        marginVertical:20
    },
    shareImage: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 20,
        bottom: 0,
    },
    priceImage: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 60,
        bottom: 0,
    },
    bottomView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        alignItems: 'flex-end',
    }
});

class MovieItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let { data } = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.category}>-影视-</Text>
                <Text style={styles.title}>{data.title}</Text>
                <Image
                    source = {{uri: data.img_url}}
                    style={styles.pic}
                />
                <Text style={styles.content}>{data.forward}</Text>
                <Text style={styles.author}>文/{data.author.user_name}</Text>
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
export default MovieItem;