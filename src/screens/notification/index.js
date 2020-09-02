import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import AfterLoginHeader from '../../components/AfterLoginHeader'
import NoDataFound from '../../components/NoDataFound';
import CommonAction from '../../redux/common/action';
import constants from '../../config/constants';
import constant from '../../config/constants'
import apis from '../../utils/apis';
import Style from './style'
import helper from '../../utils/helpers';

function Notification(props) {

    const [notification, setNotification] = useState([])
    const [loading, setLoadin] = useState(false)
    const [status, setStatus] = useState('all')

    useEffect(() => {
        // fetchNotification()
        // setNotification(props.unReadLocalNotification)
    }, [])

    function setUnreadlocalNotification(id) {
        let a = props.unReadLocalNotification.filter(item => item._id !== id)
        props.updateUnReadLcoalNotification(a)
    }

    async function markRead(data) {
        props.loading(true)
        try {
            let body = { notification: data._id }
            const response = await apis.markNotificationRead(body, props.userData.token);
            // setUnreadlocalNotification(props.unReadLocalNotification)
            fetchNotification()
            setUnreadlocalNotification(data._id)
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function markDelete(data) {
        props.loading(true)
        try {
            let body = { notification: data._id }
            const response = await apis.markNotificationDelete(body, props.userData.token);
            // setUnreadlocalNotification(props.unReadLocalNotification)
            fetchNotification()
            props.loading(false)
        } catch (error) {
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function fetchNotification() {
        props.loading(true)
        setLoadin(true)
        try {
            let params = { user: props.userData._id }
            const response = await apis.fetchAllNotification(null, props.userData.token, null, params);
            setNotification(response)
            props.loading(false)
            setLoadin(false)
        } catch (error) {
            setLoadin(false)
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function fetchUndReadNotifications() {
        props.loading(true)
        setLoadin(true)
        try {
            let params = { user: props.userData._id }
            const response = await apis.fetchUnReadLocalNotification_(null, props.userData.token, null, params);
            setNotification(response)
            props.loading(false)
            setLoadin(false)
        } catch (error) {
            setLoadin(false)
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    function optionHandle(value) {
        setStatus(value)
        if (value === 'all') {
            fetchNotification()
        }
        if (value === 'unread') {
            fetchUndReadNotifications()
        }
    }

    async function deleteAll() {
        props.loading(true)
        setLoadin(true)
        try {
            let params = { user: props.userData._id }
            const response = await apis.deleteAllNotificaitons(null, props.userData.token,);
            fetchNotification()
            props.updateUnReadLcoalNotification([])
            // setUnreadlocalNotification(props.unReadLocalNotification)
            props.loading(false)
            setLoadin(false)
        } catch (error) {
            setLoadin(false)
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    async function readAll() {
        props.loading(true)
        setLoadin(true)
        try {
            let params = { user: props.userData._id }
            const response = await apis.readAllNotifications(null, props.userData.token,);
            fetchNotification()
            props.updateUnReadLcoalNotification([])
            // setUnreadlocalNotification(props.unReadLocalNotification)
            props.loading(false)
            setLoadin(false)
        } catch (error) {
            setLoadin(false)
            props.loading(false)
            props.apiresponse({ flag: true, isError: true, isSuccess: false, message: error.message })
        }
    }

    return (
        <SafeAreaView style={Style.containerMain}>
            {props.isLogin && <AfterLoginHeader menuButton={false} backButton={true} headerText='Notification' />}
            <View style={Style.optionFalg}>
                {/* <TouchableOpacity onPress={() => setOptions(!options)}>
                    <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/option.png')} />
                </TouchableOpacity>
                {options &&
                    <View style={Style.optionMain}>
                        <Text style={Style.optionText}>Delete All</Text>
                        <Text style={Style.optionText}>Read All</Text>
                    </View>} */}
            </View>
            <View style={Style.selectmain}>
                <TouchableOpacity onPress={() => optionHandle('all')} style={[Style.optionLeftMain, status === 'all' && { backgroundColor: constant.LIGHT_BLUE }]}>
                    <Text style={[Style.optionLeftText, status === 'all' && { color: 'white' }]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => optionHandle('unread')} style={[Style.optionRightMain, status === 'unread' && { backgroundColor: constant.LIGHT_BLUE }]}>
                    <Text style={[Style.optionRightText, status === 'unread' && { color: 'white' }]}>Un Read</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {notification.length > 0 && <TouchableOpacity onPress={deleteAll} style={{ padding: 5 }}><Text style={Style.optionText}>Delete All</Text></TouchableOpacity>}
                {notification.length > 0 && <TouchableOpacity onPress={readAll} style={{ padding: 5 }}><Text style={Style.optionText}>Read All</Text></TouchableOpacity>}
            </View>

            {notification.length == 0 && loading && <ActivityIndicator color={constant.LIGHT_BLUE} />}
            {!loading && notification.length == 0 && <NoDataFound text='No notification' />}
            <ScrollView style={{ borderColor: 'red', padding: 10, }}>
                {notification.map((item, index) => {
                    return (
                        <>
                            <View key={index} style={[{ flexDirection: 'row', padding: 5, borderRadius: 3, }, item.isRead && { backgroundColor: constants.LIGHT_BACKGROUND_COLOR }]}>
                                <TouchableOpacity key={index} style={{ flex: .9 }} onPress={() => markRead(item)}>
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
                                    {item.isRead && <TouchableOpacity onPress={() => markDelete(item)}><Image style={{ height: 25, width: 25, alignSelf: 'center' }} source={require('../../assets/icons/delete.png')} /></TouchableOpacity>}
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
    isLogin: store.auth.isLogin,
    unReadLocalNotification: store.common.unReadLocalNotification
});

const mapDispatchToProps = {
    apiresponse: CommonAction.apiresponse,
    loading: CommonAction.loading,
    updateUnReadLcoalNotification: CommonAction.updateUnReadLcoalNotification
    // saveUserData: AuthActions.saveUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
