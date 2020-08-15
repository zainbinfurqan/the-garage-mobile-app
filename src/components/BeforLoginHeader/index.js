import React, { } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import constants from '../../config/constants';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


function BeforLoginHeader(props) {
    console.log(props)
    const navigation = useNavigation();

    function openDrawer() {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../../assets/images/header.png')} style={{ height: 55, flexDirection: 'row', backgroundColor: constants.LIGHT_BLUE }}>
            {props.backButton &&
                <TouchableOpacity onPress={openDrawer} style={{ flex: 0.1, justifyContent: 'center', }}>
                    <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/back-white.png')} />
                </TouchableOpacity>
            }

            {props.menuButton && <TouchableOpacity onPress={openDrawer} style={{ flex: 0.1, justifyContent: 'center', }}>
                <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/menu.png')} />
            </TouchableOpacity>}
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center' }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/login-white.png')} />
            </View>
        </ImageBackground>
    )
}

export default BeforLoginHeader;