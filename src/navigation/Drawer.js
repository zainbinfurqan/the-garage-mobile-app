import React, { } from 'react';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux'

import Registration from '../screens/registration'
import CommonActions from '../redux/common/action'
import AuthActions from '../redux/auth/action'
import constants from '../config/constants';
import MainScreen from '../screens/main'
import PostsFeed from '../screens/feed'
import Login from '../screens/login'
import Style from './style'
import Item from './item'

const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
    const navigation = useNavigation();
    function navigateTo(route) {
        props.navigationProps.navigation.closeDrawer()
        navigation.navigate(route);
    }

    async function logOut() {
        props.loading(true)
        try {
            setInterval(() => {
                props.logout()
                props.loading(false)
            }, 2000);
        } catch (error) {
            props.loading(false)
        }
    }

    return (
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={{ height: 100, }}>
                <Image style={Style.logo} source={require('../assets/images/logo.png')} />
            </View>
            <Item itemText='Home' icon={`${require('../assets/icons/home.png')}`} navigateTo={() => navigateTo('MainScreen')} />
            <View style={Style.line} />
            {!props.isLogin && <>
                <Item itemText='Registration' icon={`${require('../assets/icons/registration.png')}`} navigateTo={() => navigateTo('Registration')} />
                <View style={Style.line} />
            </>}
            {!props.isLogin && <>
                <Item itemText='Login' icon={`${require('../assets/icons/login.png')}`} navigateTo={() => navigateTo('Login')} />
                <View style={Style.line} />

            </>}
            {props.isLogin && <>
                <Item itemText='Setting' icon={`${require('../assets/icons/setting.png')}`} navigateTo={() => navigateTo('Profile')} />
                <View style={Style.line} />
            </>}
            <Item itemText='FAQ' icon={`${require('../assets/icons/faq.png')}`} navigateTo={() => navigateTo('FAQ')} />
            <View style={Style.line} />
            {props.isLogin && <>
                <Item itemText='Upload Product' icon={`${require('../assets/icons/upload.png')}`} navigateTo={() => navigateTo('Uploadproduct')} />
                <View style={Style.line} />
            </>}
            {props.isLogin && <>
                <Item itemText='Dashboard' icon={`${require('../assets/icons/dashboard.png')}`} navigateTo={() => navigateTo('Dashboard')} />
                <View style={Style.line} />
            </>}
            {props.isLogin && <>
                <Item itemText='Message' icon={`${require('../assets/icons/chat.png')}`} navigateTo={() => navigateTo('MessageList')} />
                <View style={Style.line} />
            </>}
            {props.isLogin && <>
                <Item itemText='Logout' icon={`${require('../assets/icons/login.png')}`} navigateTo={logOut} />
                <View style={Style.line} />
            </>}
        </ScrollView>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
});

const mapDispatchToProps = {
    logout: AuthActions.logout,
    loading: CommonActions.loading
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
