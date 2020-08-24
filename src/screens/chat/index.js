import React, { useState, useReducer, useEffect } from 'react'
import { View, SafeAreaView, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import io from 'socket.io-client';

import AfterLoginHeader from '../../components/AfterLoginHeader'
import TextInput_ from '../../components/Input/IconsInput'
import constants from '../../config/constants'
import api from '../../utils/apis'
import Style from './style'

const initialState = {
    chatMessages: [],
    message: '',
};

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ON_CHANGE_INPUT':
            return { ...state, message: payload };
        case 'ON_INITIAL_MESSAGE':
            return { ...state, chatMessages: payload };
        case 'ON_MESSAGE_CHANGE':
            return { ...state, chatMessages: [payload, ...state.chatMessages] };
        case 'ON_LOAD_MORE':
            return { ...state, chatMessages: [...state.chatMessages, ...payload] };
        default:
            return state;
    }
}

function Chat(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    let [skip, setSkip] = useState(0);
    let [limit, setLimit] = useState(11);
    let [onEndReachedCalledDuringMomentum, setOnEndReachedCalledDuringMomentum] = useState(true)
    useEffect(() => {
        fetchMessages(skip, limit);
        setupListener();
    }, [])

    async function fetchMessages(skipValue, limitValue) {
        const user = props.userData;
        const room = props.route.params.room;

        const body = { roomId: room._id, user: user._id, skip: skipValue, limit: limitValue };
        const response = await api.fetchMessage(body, null);
        dispatch({ type: 'ON_INITIAL_MESSAGE', payload: response.messages });
        setSkip(skip + 10)
    }

    async function setupListener() {
        const socket = io(constants.SOCKET_IO_URL);
        GLOBAL.socket = socket;

        const user = props.userData;
        const room = props.route.params.room;

        const payload_ = {
            message: state.message,
            userId: user._id,
            room: room._id,
        };

        socket.on('connect', () => {
            socket.emit('room-join', payload_);
        });

        socket.on('new-message', (payload) => {
            dispatch({
                type: 'ON_MESSAGE_CHANGE',
                payload: {
                    message: payload,
                    userId: props.userData_id,
                    roomId: payload_.room,
                },
            });
        });
    }

    async function sendMessage() {
        const socket = io(constants.SOCKET_IO_URL);
        const user = props.userData;
        const room = props.route.params.room;

        const payload = {
            message: state.message,
            userId: user._id,
            roomId: room._id,
        };

        dispatch({
            type: 'ON_MESSAGE_CHANGE',
            payload: {
                message: payload.message,
                userId: payload.userId,
                roomId: payload.roomId,
            },
        });

        GLOBAL.socket.emit('new-message', payload);
        // console(payload, "payload re/sult on chat ")
        dispatch({ type: 'ON_CHANGE_INPUT', payload: '' });
    }

    function handleChangeText(value) {
        dispatch({ type: 'ON_CHANGE_INPUT', payload: value })
    }

    function addMessage() {
        dispatch({
            type: 'ON_MESSAGE_CHANGE',
            payload: {
                message: state.message,
                id: 1,
            },
        });
        dispatch({ type: 'ON_CHANGE_INPUT', payload: '' });
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <AfterLoginHeader backButton={true} menuButton={false} headerText='Faraz' />
                <FlatList
                    inverted={true}
                    data={state.chatMessages}
                    renderItem={({ item }) => (
                        <>
                            {item.userId == props.userData._id ?
                                <View style={Style.messageMain1}>
                                    <Text style={Style.textMessage}>{item.message}</Text>
                                    <Text style={Style.dateText}>{moment(new Date()).format('DD MMM YYYY')}</Text>
                                </View> :

                                <View style={Style.messageMain2}>
                                    <Text style={Style.textMessage}>{item.message}</Text>
                                    <Text style={Style.dateText}>{moment(new Date()).format('DD MMM YYYY')}</Text>
                                </View>}
                        </>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ height: 50, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 45, margin: 5 }}>
                        <TextInput_
                            placeholder=''
                            onChangeText={(text) => handleChangeText(text)}
                            value={state.message}
                            onPress={sendMessage}
                            Icon={require('../../assets/icons/send.png')}
                            InputStyle={Style.textInput} />
                    </View>
                    {/* <TouchableOpacity onPress={sendMessage} style={{ flex: .15, height: 45, justifyContent: 'center' }}>
                        <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../../assets/icons/send.png')} />
                    </TouchableOpacity> */}
                </View>
            </SafeAreaView>
        </>
    )
}


const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    // logout: AuthActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
