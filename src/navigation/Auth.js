
import * as React from 'react';
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// routes
import Login from '../screens/login'
import Registration from '../screens/registration'
import PostsFeed from '../screens/feed'
import MainScreen from '../screens/main'

const Stack = createStackNavigator();

function Auth(props) {

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator
                    initialRouteName='MainScreen'
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

                </Stack.Navigator>
            </SafeAreaView>
        </>
    );
}

export default Auth