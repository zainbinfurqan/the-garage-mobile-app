import React, { } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import constants from '../../config/constants';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'

function BeforLoginHeader(props) {
    const navigation = useNavigation();

    function openDrawer() {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../../assets/images/header.png')} style={{ height: 55, flexDirection: 'row', backgroundColor: constants.LIGHT_BLUE }}>
            {props.backButton &&
                <TouchableOpacity onPress={() => navigation.pop()} style={{ flex: 0.1, justifyContent: 'center', }}>
                    <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/back-white.png')} />
                </TouchableOpacity>
            }
            {props.menuButton && <TouchableOpacity onPress={openDrawer} style={{ flex: 0.1, justifyContent: 'center', }}>
                <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/menu.png')} />
            </TouchableOpacity>}
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
                <Text style={{
                    alignSelf: 'center',
                    color: 'white',
                    fontFamily: constants.FONT_SAMSUNG_LIGHT
                }}>{props.headerText}</Text>
            </View>
        </ImageBackground>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BeforLoginHeader);
