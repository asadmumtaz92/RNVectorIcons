import React from 'react'
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native'

import MyNav from './app/navigations/myNavigations'

// import AntDesign from 'react-native-vector-icons/AntDesign'
// import Icon from 'react-native-vector-icons/EvilIcons'

const App = () => {

    return (
        <View style={styles.contanier}>
            <StatusBar barStyle='light-content' />
            <MyNav />

            {/* <View style={styles.iconBox}>
                <Icon
                    name='user'
                    style={{ color: '#000', fontSize: 40 }}
                />
                <AntDesign
                    name='customerservice'
                    style={{ color: '#000', fontSize: 30 }}
                />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
    },
    iconBox: {
        justifyContent: 'space-evenly',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        marginVertical: 10,
        paddingBottom: 10,
    }
});

export default App
