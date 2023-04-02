import React from 'react'
import {
    StyleSheet,
    FlatList,
    View,
} from 'react-native'

import { Colors } from '../styles/color'
import { gStyles } from '../styles/globelStyle'

import { MaterialIconsList } from '../constantData/FontsList'

import Icons from 'react-native-vector-icons/MaterialIcons'

const MaterialIcons = (props) => {

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
                data={MaterialIconsList}
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

export default MaterialIcons
