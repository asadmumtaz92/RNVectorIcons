import {
    StyleSheet,
} from 'react-native'

import { Colors } from './color'

export const gStyles = StyleSheet.create({
    flatlist: {
        marginHorizontal: 20
    },
    fontItem: {
        backgroundColor: Colors.white,
        marginHorizontal: 8,
        marginTop: 20,
        padding: 15,
        flex: 1,

        shadowColor: Colors.primery,
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 5,
    },
    icon: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 50,
    },
})
