import React, { } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import constant from '../../config/constants'
import AfterLoginHeader from '../../components/AfterLoginHeader'
import Style from './style'
import constants from '../../config/constants';

function Notification(props) {
    return (
        <SafeAreaView style={Style.containerMain}>
            {props.isLogin && <AfterLoginHeader menuButton={false} backButton={true} headerText='Notification' />}
            <ScrollView style={{ borderColor: 'red', padding: 10 }}>
                {constant.NOTIFICATION.map((item, index) => {
                    return (
                        <>
                            <View style={[{ flexDirection: 'row', padding: 5, borderRadius: 3, }, item.isRead && { backgroundColor: constants.LIGHT_BACKGROUND_COLOR }]}>
                                <TouchableOpacity style={{ flex: .9 }}>
                                    <Text style={{
                                        fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                        fontSize: constants.SMALL_FONT
                                    }}>{item.title}</Text>
                                    <Text style={{
                                        fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                        fontSize: constants.SMALL_FONT
                                    }}>{item.discription.substring(1, 100)}...</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: 'center', flex: .1 }}>
                                    {!item.isRead && <View style={{ borderRadius: 50, alignSelf: 'center', backgroundColor: 'red', height: 10, width: 10 }}></View>}
                                    {item.isRead && <Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/delete.png')} />}
                                </TouchableOpacity>
                            </View>
                            <View style={Style.line}></View>
                        </>
                    )
                })}
            </ScrollView>
        </SafeAreaView >
    )
}

const mapStateToProps = (store) => ({
    userData: store.auth.userData,
    isLogin: store.auth.isLogin
});

const mapDispatchToProps = {
    // saveUserData: AuthActions.saveUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
