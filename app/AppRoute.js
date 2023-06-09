import React from 'react'
import {
    StyleSheet,
    StatusBar,
    View,
} from 'react-native'

import { Colors } from './styles/color'

import FontList from './components/FontList'

const AppRoute = (props) => {

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='dark-content' backgroundColor={Colors.primery} />

            <FontList />

        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        backgroundColor: Colors.white,
        minWidth: '100%',
        width: '100%',
        flex: 1,
    },
})

export default AppRoute
