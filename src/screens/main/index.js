import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../login'
import Registration from '../registration'
import PostsFeed from '../feed'
import { View, Text } from 'react-native';
import CustomDrawer_ from '../../navigation/Drawer'
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {

    // function Profile() {
    //     return (
    //         <View style={{ borderWidth: 1, flex: 1 }}>
    //             <View style={{ borderWidth: 1, flexDirection: 'row' }}>
    //                 <Text>Post Feed</Text>
    //             </View>

    //         </View>
    //     )
    // }

    return (
        <Drawer.Navigator initialRouteName='PostsFeed'
            drawerContent={(props) => <CustomDrawer_ />}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Registration" component={Registration} />
            <Drawer.Screen name="PostsFeed" component={PostsFeed} />
        </Drawer.Navigator>
    )
}
export default CustomDrawer