import React, { useState } from 'react'
import { View, SafeAreaView, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import BeforLoginHeader from '../../components/BeforLoginHeader'
import TextInput_ from '../../components/Input/TextInput'
import constants from '../../config/constants'
import Style from './style'
import moment from 'moment'

function Chat(props) {

    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([])

    function handleChangeText(value) {
        setMessage(value)
    }

    function addMessage() {
        console.log(message)
        chat.push({ id: 1, message: message })
        console.log(chat)
        setChat(chat)
    }

    return (
        <>
            {console.log("chat=>", chat)}
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <BeforLoginHeader backButton={true} menuButton={false} headerText='Faraz' />
                <FlatList
                    inverted={false}
                    data={chat}
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
                    <View style={{ flex: .85, height: 45, }}>
                        <TextInput_
                            placeholder=''
                            onChangeText={(e) => handleChangeText(e)}
                            value={message}
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