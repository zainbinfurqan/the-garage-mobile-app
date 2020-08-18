import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import BeforLoginHeader from '../../components/BeforLoginHeader'
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
        try {
            const body = {
                sender: props.userData._id,
                receiver: otherUser._id,
            };
            const response = await apis.createRoom(body);
            props.navigation.navigate('Chat', { otherUser: otherUser, room: response });
            // const options = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(body),
            // };
            // const response = await fetch(
            //     `${constants.BASE_URL}/chat/room`,
            //     options,
            // );
            // console.log(response)
            // const json = await response.json();
            // constants.log("json=>", json)
            // if (response.status !== 200) {
            //     throw new Error(json.message);
            // }
            // // props.setChatRoom(json.room);
        } catch (error) {
            // props.apiResponse(error.message, true);
        }
    }

    async function fetchAllUsers() {
        try {
            const response = await apis.fetchAllUsers();
            setUserList(response)
        } catch (error) {

        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <BeforLoginHeader backButton={true} menuButton={false} headerText='Post Feed' />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
