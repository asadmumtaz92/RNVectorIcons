import React from 'react'
import {
    StyleSheet,
    FlatList,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import { gStyles } from '../styles/globelStyle'

import { FontistoIconsList } from '../constantData/FontsList'

import Icons from 'react-native-vector-icons/AntDesign'

const Fontisto = (props) => {

    const renderItem = (items) => {
        let item = items.item

        return (
            <View key={item?.id} style={gStyles.fontItem} >
                <Icons
                    name={item?.name}
                    style={gStyles.icon}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={FontistoIconsList}
                contentContainerStyle={gStyles.flatlist}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
})

export default Fontisto
