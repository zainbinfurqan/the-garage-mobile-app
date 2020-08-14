import React, { } from 'react';
import { View, Image } from 'react-native';


function BeforLoginHeader(props) {
    return (
        <View style={{ height: 55, flexDirection: 'row' }}>
            {/* <View style={{ flex: 0.1, justifyContent: 'center' }}>
                <Image style={{ height: 30, width: 30 }} source={require('../../assets/icons/back.png')} />
            </View> */}
            <View style={{ flex: 0.9, justifyContent: 'center' }}>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center' }}>
                <Image style={{ height: 30, width: 30 }} source={require('../../assets/icons/login.png')} />
            </View>
        </View>
    )
}

export default BeforLoginHeader;