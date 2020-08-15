import React, { } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import constants from '../../config/constants';


function BeforLoginHeader(props) {
    return (
        <ImageBackground source={require('../../assets/images/header.png')} style={{ height: 55, flexDirection: 'row', backgroundColor: constants.LIGHT_BLUE }}>
            <View style={{ flex: 0.1, justifyContent: 'center', }}>
                <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/drawer.png')} />
            </View>
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center' }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/login-white.png')} />
            </View>
        </ImageBackground>
    )
}

export default BeforLoginHeader;