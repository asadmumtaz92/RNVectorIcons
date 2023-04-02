import React from 'react'
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native'

const App = () => {

    return (
        <SafeAreaView style={{}}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'red'} />

            <Text style={styles.highlight}>App.js</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // 
});

export default App
