import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/EvilIcons'

const App = () => {

    return (
        <SafeAreaView style={{}}>

            <View style={styles.iconBox}>
                <Icon
                    name='user'
                    style={{ color: '#000', fontSize: 40 }}
                />
                <AntDesign
                    name='customerservice'
                    style={{ color: '#000', fontSize: 30 }}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    iconBox: {
        justifyContent: 'space-evenly',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        marginVertical: 10,
        paddingBottom: 10,
    }
});

export default App
