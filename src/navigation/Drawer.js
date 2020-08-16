import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux'
import Registration from '../screens/registration'
import constants from '../config/constants';
import PostsFeed from '../screens/feed'
import Login from '../screens/login'
import Style from './style'
import Item from './item'
import MainScreen from '../screens/main'
import { ScrollView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
    const navigation = useNavigation();
    function navigateTo(route) {
        props.navigationProps.navigation.closeDrawer()
        navigation.navigate(route);

    }

    return (
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={{ height: 100, }}>
                <Image style={Style.logo} source={require('../assets/images/logo.png')} />
            </View>
            <Item itemText='Home' icon={`${require('../assets/icons/home.png')}`} navigateTo={() => navigateTo('MainScreen')} />
            <View style={Style.line} />
            <Item itemText='Registration' icon={`${require('../assets/icons/registration.png')}`} navigateTo={() => navigateTo('Registration')} />
            <View style={Style.line} />
            <Item itemText='Login' icon={`${require('../assets/icons/login.png')}`} navigateTo={() => navigateTo('Login')} />
            <View style={Style.line} />
            {<>
                <Item itemText='Setting' icon={`${require('../assets/icons/setting.png')}`} navigateTo={() => navigateTo('Profile')} />
                <View style={Style.line} />
            </>}
            <Item itemText='FAQ' icon={`${require('../assets/icons/faq.png')}`} navigateTo={() => navigateTo('FAQ')} />
            <View style={Style.line} />
            {<>
                <Item itemText='Upload Product' icon={`${require('../assets/icons/upload.png')}`} navigateTo={() => navigateTo('Uploadproduct')} />
                <View style={Style.line} />
            </>}
            {<>
                <Item itemText='Dashboard' icon={`${require('../assets/icons/dashboard.png')}`} navigateTo={() => navigateTo('Dashboard')} />
                <View style={Style.line} />
            </>}
            {<>
                <Item itemText='Message' icon={`${require('../assets/icons/chat.png')}`} navigateTo={() => navigateTo('MessageList')} />
                <View style={Style.line} />
            </>}
            {/* {<>
                <Item itemText='Profile' icon={`${require('../assets/icons/default-profile.png')}`} navigateTo={() => navigateTo('Profile')} />
                <View style={Style.line} />
            </>} */}
        </ScrollView>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
