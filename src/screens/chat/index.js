import React, { useState, useReducer } from 'react'
import { View, SafeAreaView, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import BeforLoginHeader from '../../components/BeforLoginHeader'
import TextInput_ from '../../components/Input/TextInput'
import constants from '../../config/constants'
import Style from './style'
import moment from 'moment'

const initialState = {
    chatMessages: [
        { id: 1, message: 'start' },
        { id: 2, message: 'hye aasd asd asd asd asd asdas dll' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye allasda sda sdas dasd asd asd' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye as dasd asasd as' },
        { id: 1, message: 'hye aasd ll' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye alasd asd l' },
        { id: 2, message: 'hye alla sda sd' },
        { id: 1, message: 'hye aasd asdll' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye aasd asd ll' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye asd asall' },
        { id: 2, message: 'hye aasd asd ll' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye alasd asdl' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye aasd asll' },
        { id: 2, message: 'End' },
    ],
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
            {/* {console.log("chat=>", state.chatMessages)} */}
            {/* {console.log("message=>", state.message)} */}
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <BeforLoginHeader backButton={true} menuButton={false} headerText='Faraz' />
                <FlatList
                    inverted={true}
                    data={state.chatMessages}
                    renderItem={({ item }) => (
                        <>
                            {item.id == 1 &&
                                <View style={Style.messageMain1}>
                                    <Text style={Style.textMessage}>{item.message}</Text>
                                    <Text style={Style.dateText}>{moment(new Date()).format('DD MMM YYYY')}</Text>
                                </View>}
                            {item.id == 2 &&
                                <View style={Style.messageMain2}>
                                    <Text style={Style.textMessage}>{item.message}</Text>
                                    <Text style={Style.dateText}>{moment(new Date()).format('DD MMM YYYY')}</Text>
                                </View>}
                        </>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ height: 50, flexDirection: 'row' }}>
                    <View style={{ flex: .85, height: 45, marginLeft: 5 }}>
                        <TextInput_
                            placeholder=''
                            onChangeText={(text) => handleChangeText(text)}
                            value={state.message}
                            InputStyle={Style.textInput} />
                    </View>
                    <TouchableOpacity onPress={addMessage} style={{ flex: .15, height: 45, justifyContent: 'center' }}>
                        <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../../assets/icons/send.png')} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Chat