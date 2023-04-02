import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Colors } from '../styles/color'

import AppRoute from '../AppRoute'

import AntDesign from '../screens/AntDesign'
import Entypo from '../screens/Entypo'
import EvilIcons from '../screens/Evilicons'
import Feather from '../screens/Feather'
import FontAwesome5 from '../screens/Fontawesome5'
import FontAwesome5Brands from '../screens/fontAwesome5Brands'
import FontAwesome5Regular from '../screens/FontAwesome5Regular'
import FontAwesome5Solid from '../screens/FontAwesome5Solid'
import Fontisto from '../screens/Fontisto'
import Foundation from '../screens/Foundation'
import IonicIcons from '../screens/IonicIcons'
import MaterialCommunityIcons from '../screens/MaterialCommunityIcons'
import MaterialIcons from '../screens/MaterialIcons'
import OctIcons from '../screens/OctIcons'
import SimpleLineIcons from '../screens/SimpleLineIcons'
import Zocial from '../screens/Zocial'

const Stack = createNativeStackNavigator()

const myNav = () => {

    const myLink = (title, onPress, img) => {
        return (
            title != null && < TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.link} >
                {img != null && <Image source={img} style={styles.img} />}
                {title && <Text style={styles.linkText}>{title}</Text>}
            </TouchableOpacity >
        )
    }
    const myTitle = (title) => {
        return (
            title && <Text style={styles.title}>{title}</Text>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='AppRoute'
                screenOptions={{
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: styles.headerStyle,
                    headerBackTitleVisible: false, // hide backScreen name
                    headerTintColor: Colors.white,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerShown: true,
                    // headerBackVisible: false, // hide back arrrow icon
                }}
            >
                <Stack.Screen
                    name='AppRoute'
                    component={AppRoute}
                    options={{
                        headerTitle: () => myTitle(`Vector Icon List`),
                        // headerLeft: () => myLink('Left', () => { console.log('left') }),
                        // headerRight: () => myLink('Right', () => { console.log('right') }),
                    }}
                />
                <Stack.Screen
                    name='AntDesign'
                    component={AntDesign}
                    options={{
                        headerTitle: () => myTitle(`AntDesign Icons`),
                    }}
                />
                <Stack.Screen
                    name='Entypo'
                    component={Entypo}
                    options={{
                        headerTitle: () => myTitle(`Entypo Icons`),
                    }}
                />
                <Stack.Screen
                    name='EvilIcons'
                    component={EvilIcons}
                    options={{
                        headerTitle: () => myTitle(`Evil Icons`),
                    }}
                />
                <Stack.Screen
                    name='Feather'
                    component={Feather}
                    options={{
                        headerTitle: () => myTitle(`Feather Icons`),
                    }}
                />
                <Stack.Screen
                    name='FontAwesome5'
                    component={FontAwesome5}
                    options={{
                        headerTitle: () => myTitle(`FontAwesome5 Icons`),
                    }}
                />
                <Stack.Screen
                    name='FontAwesome5Brands'
                    component={FontAwesome5Brands}
                    options={{
                        headerTitle: () => myTitle(`FontAwesome Brand Icons`),
                    }}
                />
                <Stack.Screen
                    name='FontAwesome5Regular'
                    component={FontAwesome5Regular}
                    options={{
                        headerTitle: () => myTitle(`FontAwesome Regular Icons`),
                    }}
                />
                <Stack.Screen
                    name='FontAwesome5Solid'
                    component={FontAwesome5Solid}
                    options={{
                        headerTitle: () => myTitle(`FontAwesome Solid Icons`),
                    }}
                />
                <Stack.Screen
                    name='Fontisto'
                    component={Fontisto}
                    options={{
                        headerTitle: () => myTitle(`Fontisto Icons`),
                    }}
                />
                <Stack.Screen
                    name='Foundation'
                    component={Foundation}
                    options={{
                        headerTitle: () => myTitle(`Foundation Icons`),
                    }}
                />
                <Stack.Screen
                    name='IonicIcons'
                    component={IonicIcons}
                    options={{
                        headerTitle: () => myTitle(`Ionic Icons`),
                    }}
                />
                <Stack.Screen
                    name='MaterialCommunityIcons'
                    component={MaterialCommunityIcons}
                    options={{
                        headerTitle: () => myTitle(`Material Community Icons`),
                    }}
                />
                <Stack.Screen
                    name='MaterialIcons'
                    component={MaterialIcons}
                    options={{
                        headerTitle: () => myTitle(`Material Icons`),
                    }}
                />
                <Stack.Screen
                    name='OctIcons'
                    component={OctIcons}
                    options={{
                        headerTitle: () => myTitle(`Oct Icons`),
                    }}
                />
                <Stack.Screen
                    name='SimpleLineIcons'
                    component={SimpleLineIcons}
                    options={{
                        headerTitle: () => myTitle(`Simple Line Icons`),
                    }}
                />
                <Stack.Screen
                    name='Zocial'
                    component={Zocial}
                    options={{
                        headerTitle: () => myTitle(`Zocial Icons`),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    contanier: {
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
})

export default myNav
