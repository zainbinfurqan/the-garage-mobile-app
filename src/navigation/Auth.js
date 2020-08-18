
import * as React from 'react';
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
// routes
import ProductDetailView from '../screens/productDetail'
import ForgetPassword from '../screens/forgetPassword'
import Uploadproduct from '../screens/uplaodProduct'
import ApiResponse from '../components/apiresponse'
import Registration from '../screens/registration'
import MessageList from '../screens/message'
import Dashboard from '../screens/dashboard'
import Loading from '../components/loading'
import MainScreen from '../screens/main'
import Profile from '../screens/profile'
import PostsFeed from '../screens/feed'
import Login from '../screens/login'
import Chat from '../screens/chat'
const Stack = createStackNavigator();

function Auth(props) {

    return (
        <>
            {console.log("props.loading=>", props.loading)}
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator
                    initialRouteName='MainScreen'
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <Stack.Screen name="ProductDetailView" component={ProductDetailView} />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                    <Stack.Screen name="Uploadproduct" component={Uploadproduct} />
                    <Stack.Screen name="Registration" component={Registration} />
                    <Stack.Screen name="MessageList" component={MessageList} />
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                    <Stack.Screen name="PostsFeed" component={PostsFeed} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Chat" component={Chat} />
                </Stack.Navigator>
            </SafeAreaView>
            {props.loading && <Loading />}
            {props.apiResponse.flag && <ApiResponse />}
        </>

    );
}


const mapStateToProps = (store) => ({
    loading: store.common.loading,
    apiResponse: store.common.apiResponse,
});

const mapDispatchToProps = {
    // loading: CommonAction.loading
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
