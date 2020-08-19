import React, { } from 'react';
import { View, Image, Text } from 'react-native'
import constants from '../../config/constants';

function NoDataFound(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{
                fontFamily: constants.FONT_SAMSUNG_LIGHT,
                fontSize: constants.MEDIUM_FONT,
                color: constants.LIGHT_BORDER,
                alignSelf: 'center',
            }}>No data found</Text>
            <Image style={{ height: 50, width: 50, alignSelf: 'center' }} source={require('../../assets/icons/empty.png')} />
        </View>
    )
}

export default NoDataFound