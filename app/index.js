import React , {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
} from 'react-native';
import scenes from './route';
import { Router } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                />
                <Router scenes={scenes}/>
            </View>
        );
    }
}

export default App;