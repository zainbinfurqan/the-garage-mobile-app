import React, { } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import BeforLoginHeader from '../../components/BeforLoginHeader'
import constants from '../../config/constants';
import Style from './style'
import moment from 'moment'

function MessageList(props) {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <BeforLoginHeader backButton={true} menuButton={false} headerText='Post Feed' />
            <FlatList
                data={constants.USER_LIST}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('Chat')} style={Style.messageCardMain}>
                        <View style={{ flex: .1, }}>
                            <View style={Style.nameMain}>
                                <Text style={Style.nameChar}>{item.title[0].toUpperCase()}</Text>
                            </View>
                        </View>
                        <View style={{ flex: .7, justifyContent: 'center' }}>
                            <Text style={Style.name}>{item.title}</Text>
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

export default MessageList