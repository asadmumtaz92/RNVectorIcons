import {
    StyleSheet,
} from 'react-native'

import { Colors } from './color'

export const gStyles = StyleSheet.create({
    // STYLE FOR NAVIGATIONS
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
    link: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    img: {
        marginRight: 8,
    },
    linkText: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 14,
    },
    headerStyle: {
        backgroundColor: Colors.primery,
    },
    headerTitleStyle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 16,
    },


    flatlist: {
        marginHorizontal: 20,
        paddingBottom: 20,
        marginBottom: 10,
    },
    fontItem: {
        backgroundColor: Colors.white,
        marginHorizontal: 8,
        marginTop: 25,
        padding: 20,
        flex: 1,

        shadowColor: Colors.primery,
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
    },
    icon: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 50,
    },
})
