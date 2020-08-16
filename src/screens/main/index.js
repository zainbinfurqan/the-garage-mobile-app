import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../login'
import PostsFeed from '../feed'
import Registration from '../registration'
import Uploadproduct from '../uplaodProduct'
import ProductDetailView from '../productDetail'
import Dashboard from '../dashboard'
import MessageList from '../message'
import Chat from '../chat'
import { View, Text } from 'react-native';
import CustomDrawer_ from '../../navigation/Drawer'
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {

    return (
        <Drawer.Navigator initialRouteName='PostsFeed'
            drawerContent={(props) => <CustomDrawer_ navigationProps={props} />}>
            <Drawer.Screen name="PostsFeed" component={PostsFeed} />
        </Drawer.Navigator>
    )
}
export default CustomDrawer