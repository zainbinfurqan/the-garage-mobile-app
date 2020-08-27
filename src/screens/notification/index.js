import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import AfterLoginHeader from '../../components/AfterLoginHeader'
import CommonAction from '../../redux/common/action';
import constants from '../../config/constants';
import constant from '../../config/constants'
import apis from '../../utils/apis';
import Style from './style'
import helper from '../../utils/helpers';

function Notification(props) {

    const [notification, setNotification] = useState([])

    useEffect(() => {
        fetchNotification()
    }, [])

    async function fetchNotification() {
        try {
            let params = { user: props.userData._id }
            const response = await apis.fetchAllNotification(null, null, null, params);
            console.log("response=>", response)
            setNotification(response)
        } catch (error) {
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    return (
        <SafeAreaView style={Style.containerMain}>
            {props.isLogin && <AfterLoginHeader menuButton={false} backButton={true} headerText='Notification' />}
            <ScrollView style={{ borderColor: 'red', padding: 10 }}>
                {notification.map((item, index) => {
                    return (
                        <>
                            <View key={index} style={[{ flexDirection: 'row', padding: 5, borderRadius: 3, }, item.isRead && { backgroundColor: constants.LIGHT_BACKGROUND_COLOR }]}>
                                <TouchableOpacity style={{ flex: .9 }}>
                                    <Text style={{
                                        fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                        fontSize: constants.SMALL_FONT * 1.4
                                    }}>{helper.nameConcatenate(item.otherUser)}</Text>
                                    <Text style={{
                                        fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                        fontSize: constants.SMALL_FONT
                                    }}>{item.tittle}</Text>
                                    <Text style={{
                                        fontFamily: constants.FONT_SAMSUNG_LIGHT,
                                        fontSize: constants.SMALL_FONT
                                    }}>{item.text}</Text>
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
    apiresponse: CommonAction.apiresponse,
    // saveUserData: AuthActions.saveUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
