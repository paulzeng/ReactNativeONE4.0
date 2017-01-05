/**
 * Created by lipeiwei on 16/11/17.
 */


import React, {PropTypes} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import LoadingView from './loadingView';
import LoadingErrorView from './loadingErrorView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 18,
    },
    emptyText: {
        color: 'grey',
        fontSize: 18,
    }
});

class LoadingManagerView extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {containerStyle} = this.props;
        switch (this.props.status) {
            case LoadingManagerView.Loading:
                return (
                    <LoadingView containerStyle={containerStyle}/>
                );
            case LoadingManagerView.LoadingError:
                return (
                    <LoadingErrorView containerStyle={containerStyle} onPress={this.props.onFetchData}/>
                );
            case LoadingManagerView.LoadingSuccess:
                return null;
            case LoadingManagerView.Empty:
                //return <EmptyView containerStyle={containerStyle} />;
                return (
                    <View style={styles.container}>
                        <Text style={styles.emptyText}>{this.props.text}</Text>
                    </View>
                );
            default:
                return (
                    <View style={styles.container}>
                        <Text style={styles.errorText}>状态定义错误</Text>
                    </View>
                );
        }
    }
}

LoadingManagerView.Loading = 'LOADING';//加载中
LoadingManagerView.LoadingError = 'LOADING_ERROR';//加载失败
LoadingManagerView.LoadingSuccess = 'LOADING_SUCCESS';//加载成功
LoadingManagerView.Empty = 'LOADING_EMPTY';//没有任何数据

LoadingManagerView.propTypes = {
    onFetchData: PropTypes.func,
    status: PropTypes.oneOf([LoadingManagerView.Loading, LoadingManagerView.LoadingError, LoadingManagerView.LoadingSuccess,LoadingManagerView.Empty]).isRequired,
    containerStyle: PropTypes.object
};

export default LoadingManagerView;