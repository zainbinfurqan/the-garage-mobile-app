import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import BeforLoginHeader from '../../components/BeforLoginHeader'
import AfterLoginHeader from '../../components/AfterLoginHeader'
import CommonAction from '../../redux/common/action'
import constants from '../../config/constants';
import Style from './style'
import moment from 'moment'
import apis from '../../utils/apis';
import helpers from '../../utils/helpers';
import helper from '../../utils/helpers';

function MessageList(props) {

    useEffect(() => {
        fetchAllUsers()
    }, [])

    const [userList, setUserList] = useState([])

    async function goToChatHandle(otherUser) {
        props.loading(true)
        try {
            const body = {
                sender: props.userData._id,
                receiver: otherUser._id,
            };
            const response = await apis.createRoom(body);
            props.loading(false)
            props.navigation.navigate('Chat', { otherUser: otherUser, room: response });
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function fetchAllUsers() {
        try {
            const response = await apis.fetchAllUsers();
            setUserList(response)
        } catch (error) {
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            {/* {!props.isLogin && <BeforLoginHeader menuButton={true} backButton={false} headerText='Post Feed' />} */}
            {props.isLogin && <AfterLoginHeader menuButton={false} backButton={true} headerText='Messages' />}
            {userList.length == 0 && <ActivityIndicator color={constants.LIGHT_BLUE} />}
            <FlatList
                data={userList}
                renderItem={({ item }) => (
                    item._id != props.userData._id && <TouchableOpacity onPress={() => goToChatHandle(item)} style={Style.messageCardMain}>
                        <View style={{ flex: .1, }}>
                            <View style={Style.nameMain}>
                                <Text style={Style.nameChar}>{item.firstName[0].toUpperCase()}</Text>
                            </View>
                        </View>
                        <View style={{ flex: .7, justifyContent: 'center' }}>
                            <Text style={Style.name}>{helper.nameConcatenate(item)}</Text>
                        </View>
                        <View style={{ flex: .2, justifyContent: 'center' }}>
                            <Text style={Style.name}>{moment(new Date()).format('DD MMM YYYY')}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    // logout: AuthActions.logout
    loading: CommonAction.loading,
    apiresponse: CommonAction.apirespons
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
