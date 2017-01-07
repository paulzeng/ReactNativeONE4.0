import React,{Component} from 'react';
import {View,StyleSheet,Image,Text,Dimensions} from 'react-native';
import commonStyle from '../../style/commonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const tabHeight = commonStyle.TITLE_HEIHT;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        paddingBottom: 10
    },
    pic: {
        width: windowWidth,
        height: 200,
        resizeMode: 'cover'
    },
    picInfo: {
        textAlign: 'center',
        fontSize: commonStyle.SECONDARY_FONT_SIZE,
        paddingTop: 5,
        color: commonStyle.TEXT_GRAY_COLOR
    },
    picContent: {
        lineHeight: 30,
        letterSpacing: 8,
        fontSize: commonStyle.PRIMARY_FONT_SIZE,
        color: commonStyle.TEXT_GRAY_COLOR,
        paddingHorizontal:20
    },
    editImage: {
        height: 20,
        width: 20,
        resizeMode: 'cover',

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
        paddingTop:10
    }
});


class PictrueItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { data } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: data.img_url}}
                    style={styles.pic}
                />
                <Text style={styles.picInfo}>
                    {data.title} | {data.pic_info}
                </Text>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={styles.picContent}>
                        {data.forward}
                    </Text>
                    <Text style={styles.picInfo}>
                        {data.words_info}
                    </Text>
                </View>
                <View style={styles.bottomView}>
                    <Image
                        style={styles.editImage}
                        source={require('../../image/bubble_diary.png')}
                    />
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

export default PictrueItem;