/**
 * Created by lipeiwei on 16/11/17.
 */


import React, {PropTypes} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';
import commonStyle from '../../style/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        marginLeft: 10
    },
});

class LoadingView extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <ActivityIndicator color={commonStyle.MAIN_COLOR}/>
                <Text style={styles.text}>加载中</Text>
            </View>
        );
    }
}

LoadingView.propTypes = {
    containerStyle: PropTypes.object
};

export default LoadingView;