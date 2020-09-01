import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux'
import io from 'socket.io-client';
import Login from '../login'
import PostsFeed from '../feed'
import Registration from '../registration'
import CommonAction from '../../redux/common/action'
import Uploadproduct from '../uplaodProduct'
import ProductDetailView from '../productDetail'
import Dashboard from '../dashboard'
import MessageList from '../message'
import Chat from '../chat'
import { View, Text } from 'react-native';
import CustomDrawer_ from '../../navigation/Drawer'
import constants from '../../config/constants'
const socket = io(constants.SOCKET_IO_URL, { forceNew: true });
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {

    useEffect(() => {
        setupListener()
        props.isLogin && props.fetchUnReadLocalNotification({
            user: props.userData._id
        }, props.userData.token)
    }, [])

    function setupListener() {
        props.isLogin &&
            socket.on("app-local-notification", (socketData) => {
                console.log("app-local-notification=>")
                let params = {
                    user: props.userData._id
                }
                props.fetchUnReadLocalNotification(params, props.userData.token)
            })
    }


    return (
        <Drawer.Navigator initialRouteName='PostsFeed'
            drawerContent={(props) => <CustomDrawer_ navigationProps={props} />}>
            <Drawer.Screen name="PostsFeed" component={PostsFeed} />
        </Drawer.Navigator>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
});

const mapDispatchToProps = {
    fetchUnReadLocalNotification: CommonAction.fetchUnReadLocalNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
