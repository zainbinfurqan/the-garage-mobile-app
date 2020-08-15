import React, { } from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'
import BeforLoginHeader from '../../components/BeforLoginHeader'
import constants from '../../config/constants'
import Style from './style'
import moment from 'moment'

function Chat(props) {
    return (
        <SafeAreaView style={{}}>
            <BeforLoginHeader backButton={true} menuButton={false} headerText='Faraz' />
            <FlatList
                data={constants.CHAT_MESSAGES}
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
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

export default Chat