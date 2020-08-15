import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/login'
import Registration from '../screens/registration'
import PostsFeed from '../screens/feed'
import { View, Text } from 'react-native';
import Item from './item'
import constants from '../config/constants';
import Style from './style'
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
    const navigation = useNavigation();
    function navigateTo(route) {
        navigation.navigate(route);
    }

    return (
        <View style={{}}>
            <Item itemText='Home' icon={`${require('../assets/icons/home.png')}`} navigateTo={() => navigateTo('Home')} />
            <View style={Style.line} />
            <Item itemText='Registration' icon={`${require('../assets/icons/registration.png')}`} navigateTo={() => navigateTo('Registration')} />
            <View style={Style.line} />
            <Item itemText='Login' icon={`${require('../assets/icons/login.png')}`} navigateTo={() => navigateTo('Login')} />
            <View style={Style.line} />
            <Item itemText='Setting' icon={`${require('../assets/icons/setting.png')}`} navigateTo={() => navigateTo('Setting')} />
            <View style={Style.line} />
            <Item itemText='FAQ' icon={`${require('../assets/icons/faq.png')}`} navigateTo={() => navigateTo('FAQ')} />
            <View style={Style.line} />
        </View>
    )
}
export default CustomDrawer