import React from 'react'
import {
    FlatList,
    View,
} from 'react-native'

import { gStyles } from '../styles/globelStyle'

import { FeatherIconsList } from '../constantData/FontsList'

import Icons from 'react-native-vector-icons/Feather'

const Feather = (props) => {

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
        <View style={gStyles.container}>
            <FlatList
                data={FeatherIconsList}
                contentContainerStyle={gStyles.flatlist}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}

export default Feather
