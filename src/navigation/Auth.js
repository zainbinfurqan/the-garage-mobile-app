
import * as React from 'react';
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// routes
import Login from '../screens/login'
import Registration from '../screens/registration'
import PostsFeed from '../screens/feed'
import MainScreen from '../screens/main'
import Uploadproduct from '../screens/uplaodProduct'
import ProductDetailView from '../screens/productDetail'
import MessageList from '../screens/message'
import Chat from '../screens/chat'
const Stack = createStackNavigator();

function Auth(props) {

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator
                    initialRouteName='Chat'
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Registration" component={Registration} />
                    <Stack.Screen name="PostsFeed" component={PostsFeed} />
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                    <Stack.Screen name="Uploadproduct" component={Uploadproduct} />
                    <Stack.Screen name="ProductDetailView" component={ProductDetailView} />
                    <Stack.Screen name="MessageList" component={MessageList} />
                    <Stack.Screen name="Chat" component={Chat} />

                </Stack.Navigator>
            </SafeAreaView>
        </>
    );
}

export default Auth