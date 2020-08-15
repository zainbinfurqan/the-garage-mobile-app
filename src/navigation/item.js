import React, { } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import constants from '../config/constants';
function Item(props) {
    return (
        <TouchableOpacity onPress={props.navigateTo} style={{ flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
            <View style={{ padding: 5, flex: .2 }}>
                <Image style={{ height: 25, width: 25 }} source={`${props.icon}`} />
            </View>
            <View style={{ justifyContent: 'center', flex: .8 }}>
                <Text style={{
                    fontFamily: constants.FONT_SAMSUNG_LIGHT,
                    fontSize: constants.SMALL_FONT
                }}>{props.itemText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item