
import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import constants from '../../config/constants';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'
import Style from './style'

function AfterLoginHeader(props) {
    const [options, setOptions] = useState(false)

    const navigation = useNavigation();
    const route = useRoute();
    function openDrawer() {
        navigation.openDrawer();
    }

    return (
        <>
            <ImageBackground source={require('../../assets/images/header.png')} style={{ height: 60, flexDirection: 'row', }}>
                {props.backButton &&
                    <TouchableOpacity onPress={() => navigation.pop()} style={{ flex: 0.1, justifyContent: 'center', }}>
                        <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/back-white.png')} />
                    </TouchableOpacity>
                }
                {props.menuButton && <TouchableOpacity onPress={openDrawer} style={{ flex: 0.1, justifyContent: 'center', }}>
                    <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/menu.png')} />
                </TouchableOpacity>}
                <View style={{ flex: 0.8, justifyContent: 'center', }}>
                    <Text style={{
                        alignSelf: 'center',
                        color: 'white',
                        fontFamily: constants.FONT_SAMSUNG_LIGHT
                    }}>{props.headerText}</Text>
                    {/* {options &&
                        <View style={Style.optionMain}>
                        </View>
                    } */}
                </View>
                {route.name !== 'Notification' && props.notificationIcon &&
                    <>
                        <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={{ flex: .1, justifyContent: 'center', }}>
                            {props.unReadLocalNotification.length > 0 && <View style={{
                                marginBottom: -5,
                                marginRight: 5,
                                position: 'relative',
                                height: 10,
                                borderRadius: 5,
                                width: 10,
                                backgroundColor: 'white', alignSelf: 'flex-end'
                            }}></View>}
                            <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/notification.png')} />
                        </TouchableOpacity>
                    </>
                }
                {/* {route.name == 'Notification' &&
                    <>
                        <View style={Style.optionFalg}>
                            <TouchableOpacity onPress={() => setOptions(!options)} style={{}} onPress={() => setOptions(!options)}>
                                <Image style={{ alignSelf: 'center', height: 25, width: 25 }} source={require('../../assets/icons/option.png')} />
                            </TouchableOpacity>

                          
                        </View>
                    </>
                } */}
            </ImageBackground>
            {/* <View style={{ width: '99.8%', alignSelf: 'center', }}>
                <ImageBackground style={{ height: 5, opacity: 0.8, borderBottomEndRadius: 5 }} source={require('../../assets/images/header-2.png')}></ImageBackground>
            </View>
            <View style={{ width: '98.8%', alignSelf: 'center', }}>
                <ImageBackground style={{ height: 3, opacity: 0.6, }} source={require('../../assets/images/header-2.png')}></ImageBackground>
            </View> */}
        </>
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin,
    unReadLocalNotification: store.common.unReadLocalNotification
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AfterLoginHeader);
